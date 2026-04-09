import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { validateSitemapURLs, checkDuplicateURLs } from '../utils/sitemapGenerator';

const SitemapValidator = () => {
  const [sitemapContent, setSitemapContent] = useState('');
  const [validationResults, setValidationResults] = useState(null);

  const validateSitemap = () => {
    if (!sitemapContent.trim()) {
      toast.warning('Please paste sitemap content first');
      return;
    }

    try {
      const urls = validateSitemapURLs(sitemapContent);
      const duplicates = checkDuplicateURLs(urls);
      
      setValidationResults({
        totalUrls: urls.length,
        uniqueUrls: [...new Set(urls)].length,
        duplicates: duplicates,
        hasErrors: duplicates.length > 0,
        urls: urls
      });
    } catch (error) {
      setValidationResults({
        error: 'Invalid XML format',
        hasErrors: true
      });
    }
  };

  const clearResults = () => {
    setValidationResults(null);
    setSitemapContent('');
  };

  return (
    <div className="sitemap-validator" style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Sitemap Validator</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="sitemap-content" style={{ display: 'block', marginBottom: '10px' }}>
          Paste your sitemap XML content:
        </label>
        <textarea
          id="sitemap-content"
          value={sitemapContent}
          onChange={(e) => setSitemapContent(e.target.value)}
          style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}
          placeholder="Paste your sitemap XML content here..."
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={validateSitemap}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Validate Sitemap
        </button>
        <button
          onClick={clearResults}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      </div>

      {validationResults && (
        <div style={{
          padding: '15px',
          border: `1px solid ${validationResults.hasErrors ? '#dc3545' : '#28a745'}`,
          borderRadius: '4px',
          backgroundColor: validationResults.hasErrors ? '#f8d7da' : '#d4edda'
        }}>
          <h3 style={{ color: validationResults.hasErrors ? '#721c24' : '#155724' }}>
            Validation Results
          </h3>
          
          {validationResults.error ? (
            <p style={{ color: '#721c24' }}>{validationResults.error}</p>
          ) : (
            <>
              <p><strong>Total URLs:</strong> {validationResults.totalUrls}</p>
              <p><strong>Unique URLs:</strong> {validationResults.uniqueUrls}</p>
              <p><strong>Duplicate URLs:</strong> {validationResults.duplicates.length}</p>
              
              {validationResults.duplicates.length > 0 && (
                <div>
                  <h4>Duplicate URLs Found:</h4>
                  <ul style={{ color: '#721c24' }}>
                    {validationResults.duplicates.map((url, index) => (
                      <li key={index}>{url}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {validationResults.duplicates.length === 0 && (
                <p style={{ color: '#155724' }}>
                  ✅ No duplicate URLs found. Sitemap is valid!
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SitemapValidator; 