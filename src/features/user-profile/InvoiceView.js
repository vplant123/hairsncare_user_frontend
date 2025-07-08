import React, { useEffect, useRef, useState } from "react";
import BASE_URL from "../../Config";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "./InvoiceView.css";
import html2pdf from 'html2pdf.js';
import { useParams } from "react-router-dom";

export default function InvoiceView() {
  const { id } = useParams();
  let storedUserData = JSON.parse(localStorage?.getItem("User343"));
  const [data, setData] = useState();
  const [patientData, setPatientData] = useState([]);
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/admin/getInvoiceById`, {
          method: "POST",
          headers: {
            Authorization: storedUserData.logedInUser.accessToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData?.data);
        console.log("order invoice",jsonData?.data);
        setPatientData(jsonData.data?.items);
      } catch (error) {
        toast.error("Error fetching data: " + error.message);
      }
    };

    fetchData();
  }, [id]);

  const generatePDF = () => {
    setLoading(true);
    const element = contentRef.current;
    const opt = {
      margin: 0.5,
      filename: `Invoice.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1.5, useCORS: true },
      jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
    };

    html2pdf().from(element).set(opt).save();
    setLoading(false);
    toast.success('PDF generated successfully');
  };

  return (
    <>
      <button className="pdf" onClick={generatePDF}>
        {loading ? "Please wait, download will start" : "Download PDF"}
      </button>
      <div id="invoice-pdf-content" ref={contentRef} className="bg-white p-8 rounded shadow text-xs md:text-sm border">
        {/* Header */}
        <div className="mt-2">
          <img src="/assets/img/logo.png" alt="Logo" className="h-12 inline-block mr-2" />
        </div>
        <div className="font-bold text-lg py-2">Hairncares Wellness Center</div>
        
        <div className="flex flex-col md:flex-row justify-between mb-2 gap-2">
          <div className="text-left">
            <div className="font-bold text-sm py-2">SOLD BY:</div>
            <div className="font-bold text-sm py-2">VPLANT CHEMIST</div>
            <div className="max-w-xs text-xs leading-relaxed">
              <b>Email :</b> infor@hairsncares.com<br />
              <b>Website:</b> www.hairsncares.com<br />
              <b>LICENSE No. :</b> MH-MZ6-537527<br />
              <b>Doctor Name:</b> {data?.doctor?.name || "-"}
            </div>
            <div>
              <div className="font-bold text-sm py-2">Registered Address:</div>
              <div className="text-xs">
                OFFICE NO. 101/A (PART 1), FIRST FLOOR, KANE PLAZA,<br />
                MIND SPACE OFF. MALAD LINK ROAD,<br />
                MALAD WEST, Tal : MALAD WEST ( MUMBAI -ZONE6 )<br />
                Pin : 400064
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-sm py-2 pb-11">SOLD TO: </div>
            <div className="text-xs">
              <b>Patient Name:</b> {data?.name}
            </div>
            <div className="text-xs">
              <b>Shipping Address:</b> {data?.address}
            </div>
          </div>

          <div>
            <div className="font-bold text-sm py-2">TAX INVOICE</div>
            <div className="mt-1 space-y-0.5 leading-relaxed pt-7">
              <div className="text-xs">
                <b>INVOICE No.</b> {data?.invoiceNo}
              </div>
              <div className="text-xs">
                <b>Order ID:</b> {data?.orderId}
              </div>
              <div className="text-xs">
                <b>Invoice Date:</b> {moment(data?.date).format("DD-MM-YYYY")}
              </div>
              <div className="text-xs">
                <b>GST NO:</b> 27AOVPA1 631 G2Z1
              </div>
              <div className="text-xs">
                <b>Payment Type:</b> <span className="font-semibold">{data?.paymentMode}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border rounded overflow-x-auto mt-6">
          <table className="min-w-full text-xs md:text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="2 py-1 border font-semibold">SR.NO</th>
                <th className="2 py-1 border font-semibold">PARTICULARS</th>
                <th className="2 py-1 border font-semibold">BATCH NO</th>
                <th className="2 py-1 border font-semibold">EXPIRY DATE</th>
                <th className="2 py-1 border font-semibold">HSN/SAC CODE</th>
                <th className="2 py-1 border font-semibold">MRP(₹)</th>
                <th className="2 py-1 border font-semibold">DISCOUNT AMOUNT(%)</th>
                <th className="2 py-1 border font-semibold">TAXABLE AMT.(₹)</th>
                <th className="2 py-1 border font-semibold">QTY</th>
                <th className="2 py-1 border font-semibold">GST RATE(%)</th>
                <th className="2 py-1 border font-semibold">GST AMT.(₹)</th>
                <th className="2 py-1 border font-semibold">FINAL AMT.(₹)</th>
              </tr>
            </thead>
            <tbody>
              {patientData?.map((item, idx) => {
                const discountedPrice = item.rate - (item.rate * parseFloat(item.discount || 0)) / 100;
                const taxableAmount = discountedPrice;
                const gstAmount = (taxableAmount * parseFloat(item.gst || 0)) / 100;
                
                return (
                  <tr key={idx} className={`text-center ${idx % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                    <td className="border px-2 py-2">{idx + 1}</td>
                    <td className="border px-2 py-2">{item?.item?.name || ""}</td>
                    <td className="border px-2 py-2">{item?.item?.batchNo || ""}</td>
                    <td className="border px-2 py-2">
                      {item?.item?.expiryDate ? moment(item?.item?.expiryDate).format("DD-MM-YYYY") : ""}
                    </td>
                    <td className="border px-2 py-2">{item?.item?.hsn || ""}</td>
                    <td className="border px-2 py-2">{Number(item.rate).toFixed(2)}</td>
                    <td className="border px-2 py-2">{Number(item.discount || 0).toFixed(2)}%</td>
                    <td className="border px-2 py-2">{taxableAmount.toFixed(2)}</td>
                    <td className="border px-2 py-2">{Number(item.quantity)}</td>
                    <td className="border px-2 py-2">{Number(item.gst || 0).toFixed(2)}%</td>
                    <td className="border px-2 py-2">{(gstAmount * item.quantity).toFixed(2)}</td>
                    <td className="border px-2 py-2">{Number(item.total).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Payment Type and Note */}
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-2">
          <div>
            <div className="mt-1 text-sm">
              <b>Note:</b> Inclusive of all Taxes
            </div>
            <div className="mt-10 text-sm">
              <p className="text-sm">
                * All Disputes related to this order are subject to the jurisdiction<br />
                of courts at Mumbai, Maharashtra
              </p>
              <p className="text-sm">
                For Support Contact : info@hairncares.com
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-2 rounded-md w-full md:w-64 mt-2 md:mt-0 text-xs">
            <div className="flex justify-between py-1">
              <span className="font-medium">Product Total (Final Amount)</span>
              <span className="font-bold">₹ {Number(data?.total || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium">Coupon Discount (₹)</span>
              <span className="font-bold">₹ {Number(data?.totalDiscount || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium">After Discount Amount</span>
              <span className="font-bold">
                ₹ {(Number(data?.totalAmount || 0) - Number(data?.totalDiscount || 0)).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium">Shipping Charges</span>
              <span className="font-bold">
                ₹ {Number(data?.totalAmount || 0) - Number(data?.totalDiscount || 0) < 2000 ? "200.00" : "0.00"}
              </span>
            </div>
            <div className="flex justify-between py-1 border-t border-gray-200 mt-1 pt-1">
              <span className="font-medium">Total Invoice Amount</span>
              <span className="font-bold">
                ₹ {(
                  Number(data?.totalAmount || 0) - 
                  Number(data?.totalDiscount || 0) + 
                  (Number(data?.totalAmount || 0) - Number(data?.totalDiscount || 0) < 2000 ? 200 : 0)
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Thank you note */}
        <div className="mt-20 text-center font-semibold text-xs md:text-sm">
          Thank you very much for choosing us.
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
