// ...new file...
const fs = require("fs");
const path = require("path");
const { brotliCompress, gzip, constants } = require("zlib");
const { promisify } = require("util");
const brotliCompressAsync = promisify(brotliCompress);
const gzipAsync = promisify(gzip);

const BUILD_DIR = path.join(__dirname, "..", "build");
const ALLOWED_EXT = [".js", ".css", ".map"];
const EXCLUDE_FILES = ["index.html"];

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile()) await processFile(full);
  }
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath);
  if (EXCLUDE_FILES.includes(base)) return;
  if (!ALLOWED_EXT.includes(ext)) return;

  try {
    const content = await fs.promises.readFile(filePath);
    const gz = await gzipAsync(content, { level: 9 });
    await fs.promises.writeFile(filePath + ".gz", gz);

    // changed: use zlib.constants.BROTLI_PARAM_QUALITY as key (valid) instead of numeric 0x0b
    const br = await brotliCompressAsync(content, {
      params: { [constants.BROTLI_PARAM_QUALITY]: 4 }
    });
    await fs.promises.writeFile(filePath + ".br", br);

    const stat = await fs.promises.stat(filePath);
    await fs.promises.utimes(filePath + ".gz", stat.atime, stat.mtime);
    await fs.promises.utimes(filePath + ".br", stat.atime, stat.mtime);

    console.log("Compressed:", path.relative(BUILD_DIR, filePath));
  } catch (err) {
    console.error("Compress error:", filePath, err);
  }
}

(async () => {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("Build directory not found. Run `npm run build` first.");
    process.exit(1);
  }
  console.log("Starting compression (js/css only). Skipping index.html ...");
  await walk(BUILD_DIR);
  console.log("Compression finished.");
})();