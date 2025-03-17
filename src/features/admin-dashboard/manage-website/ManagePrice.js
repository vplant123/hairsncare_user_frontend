import React, { useState } from 'react';
import BASE_URL from '../../../Config';
// import './OurExpertise.css';
// import BeforeAfter from '../before-after/BeforeAfter';
// import Footer from '../footer/Footer';
// import Faq from '../our-specialist/faq/Faq';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getUtilityContentData } from '../../../app/conteneDataSlice';

export default function ManagePrice() {
    const content = useSelector((state) => state.content?.plan);

  const [price1, setPrice1] = useState(content?.[0]?.price)
  const [price2, setPrice2] = useState(content?.[1]?.price)
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch();

console.log("jdfojer",price1,content,
    price2)
  const handleSubmit = async (e) => {
    
    // const formData = new FormData();
    // console.log("nnirhei",images)
    // images.forEach(image => formData.append('image', image));
    try {


      const data = {
        appPrice1 : price1,
        appPrice2 : price2,
        plan : "1"
      };
      let url = `${BASE_URL}/utility/editVideoCustomer`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
        setLoader(false)
        if (response.ok) {
          const result = await response.json();
          dispatch(getUtilityContentData()); 

          toast.success("content update successfully");
          console.log('Product created successfully:', result);
        } else {
          toast.error(`Failed to update update: ${response.statusText}`);
          console.error('Failed to create product:', response.statusText);
        }
      } catch (error) {
        setLoader(false)
        toast.error("Please logout and login again with valid credentials.");
        console.error('Error:', error);
      }
    } catch (error) {
      setLoader(false)
      toast.error("Please logout and login again with valid credentials.");
      console.error('Error:', error);
    }
  };
  return (
    <>
    <div>
        Appointment 1 price
    <input
                type="text"
                defaultValue={                price1
                }
                onChange={(e) => setPrice1(e?.target?.value)}
                // className="contect-us-heading"
              />
    </div>

    <div>
    Appointment 2 price

    <input
                type="text"
                defaultValue={                price2
                }
                onChange={(e) => setPrice2(e?.target?.value)}
                // className="contect-us-heading"
              />
    </div>

    <div>
              <button
                style={{ background: "bisque", cursor: "pointer" }}
                onClick={() => handleSubmit()}
                className="btn"
              >
                {loader ? "loadin" : "Update Data"}
              </button>
            </div> 
    </>
  );
}
