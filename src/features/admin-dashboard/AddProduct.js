
// import React, { useState, useEffect } from 'react';
// import AdminNavbar from './AdminNavbar';
// import BASE_URL from '../../Config';
// import { toast } from 'react-toastify';

// function AddProduct() {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const [category, setCategory] = useState('single-product');
//   const [products, setProducts] = useState([]);
//   const [kitItems, setKitItems] = useState([{ isManual: false, productName: '' }]);
//   let storedUserData = JSON.parse(localStorage.getItem("User343"));

//   useEffect(() => {
//     fetch(`${BASE_URL}/admin/product`)
//       .then(response => response.json())
//       .then(data => setProducts(data.message))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
// console.log(products)
//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleKitItemChange = (index, field, value) => {
//     const newKitItems = [...kitItems];
//     newKitItems[index][field] = value;
//     if (field === 'isManual') {
//       newKitItems[index].productName = ''; 
//     }
//     setKitItems(newKitItems);
//   };

//   const addMoreKitItem = () => {
//     setKitItems([...kitItems, { isManual: false, productName: '' }]);
//   };

//   const validateForm = () => {
//     if (!name || !price || !description || !image || !category) {
//       toast.error("All fields are required.");
//       return false;
//     }
//     if (category === 'kit' && kitItems.some(item => !item.productName)) {
//       toast.error("All kit items must have a product name.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       const imageResponse = await fetch(`${BASE_URL}/hair-tests/upload-image`, {
//         method: 'POST',
//         body: formData
//       });

//       if (!imageResponse.ok) {
//         toast.error("Error uploading image.");
//         throw new Error('Network response was not ok');
//       }

//       const imageData = await imageResponse.json();

//       const data = {
//         productName: name,
//         productPrice: price,
//         description,
//         src: imageData.imageUrl,
//         categoryName: category,
//         kit: category === 'kit' ? kitItems.map((item) => item.productName) : []
//       };

//       try {
//         const response = await fetch(`${BASE_URL}/admin/addproduct`, {
//           method: 'POST',
//           headers: {
//             'Authorization': storedUserData.logedInUser.accessToken,
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data),
//         });

//         if (response.ok) {
//           const result = await response.json();
//           toast.success("Product created successfully");
//           console.log('Product created successfully:', result);
//         } else {
//           toast.error(`Failed to create product: ${response.statusText}`);
//           console.error('Failed to create product:', response.statusText);
//         }
//       } catch (error) {
//         toast.error("Error creating product.");
//         console.error('Error:', error);
//       }
//     } catch (error) {
//       toast.error("Error uploading image.");
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <AdminNavbar>
//       <div className="add-product-container">
//         <h2>Add Product</h2>
//         <form onSubmit={handleSubmit}>
//          <div className="form-group">
//             <label>Category:</label>
//             <select value={category} onChange={handleCategoryChange} required>
//               <option value="single-product">Single Product</option>
//               <option value="kit">Kit</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={handleNameChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Price:</label>
//             <input
//               type="number"
//               value={price}
//               onChange={handlePriceChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Description:</label>
//             <textarea
//               value={description}
//               onChange={handleDescriptionChange}
//               required
//             ></textarea>
//           </div>
//           <div className="form-group">
//             <label>Upload Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               required
//             />
//           </div>


//           {category === 'kit' && kitItems.map((item, index) => (
//             <div key={index} className="kit-item">
//               {!item.isManual ? (
//                 <>
//                   <div className="form-group gk-p">

//                     <div style={{flex:"0 0 auto",width:"50%"}}>
//                       <label>Choose from existing single Product:</label>
//                     <select
//                       value={item.productName}
//                       onChange={(e) => handleKitItemChange(index, 'productName', e.target.value)}
//                       required
//                     >
//                       <option value="">Select Product</option>
//                       {products?.filter((it)=>it.kit.length===0).map(product => (
//                         <option key={product.id} value={product.name}>{product.name}</option>
//                       ))}
//                     </select>
//                     </div>
//                           <button
//                           style={{flex:"0 0 auto",width:"25%"}}
//                     type="button"
//                     onClick={() => handleKitItemChange(index, 'isManual', true)}
//                   >
//                     Or Add Product Manually
//                   </button>
//                   </div>

//                 </>
//               ) : (
//                 <div className="form-group gk-p">

//                <div style={{flex:"0 0 auto",width:"50%"}}>   <label>Product Name:</label>
//                   <input
//                     type="text"
//                     value={item.productName}
//                     onChange={(e) => handleKitItemChange(index, 'productName', e.target.value)}
//                     required
//                   /></div>
//                   <button
//                     type="button"
//                     style={{flex:"0 0 auto",width:"25%"}}
//                     onClick={() => handleKitItemChange(index, 'isManual', false)}
//                   >
//                     Select from Dropdown
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}

//           {category === 'kit' && (
//             <button type="button" onClick={addMoreKitItem}>Add More Product</button>
//           )}

//           <button style={{marginBottom:'1rem'}} type="submit">Add Product</button>
//         </form>
//       </div>
//     </AdminNavbar>
//   );
// }

// export default AddProduct;
import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import BASE_URL from '../../Config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import "./AddProduct.css"

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [ingredient, setIngredient] = useState([{
    title: "", desc: ""
  }]);
  const [faq, setFaq] = useState([{
    title: "", desc: ""
  }])
  const [benefits, setBenefits] = useState([{
    title: "", desc: ""
  }]);
  const [highlights, setHighlights] = useState('');
  const [benefitsMain, setBenefitsMain] = useState('');
  const [ingredientMain, setIngredientMain] = useState('');


  const [stock, setStock] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('single-product');
  const [products, setProducts] = useState([]);
  const [kitItems, setKitItems] = useState([{ isManual: false, productName: '' }]);
  const [discount, setDiscount] = useState(0);  // New state for discount
  const [isDisplay, setIsDisplay] = useState(false);  // New state for discount
  const [loader, setLoader] = useState(false);  // New state for discount
  let storedUserData = JSON.parse(localStorage.getItem("User343"));

  useEffect(() => {
    fetch(`${BASE_URL}/admin/product`)
      .then(response => response.json())
      .then(data => setProducts(data.message))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleShortDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handleLongDescriptionChange = (value) => {
    console.log("mmrijtier", value)
    setLongDescription(value);
  };



  const handleSetIngredientChange = (value, i, type) => {
    let input = ingredient;
    input[i][type] = value;
    console.log("sjdijer", input)
    setIngredient(input);
  };
  const addSetIngredientChange = () => {
    console.log("jijoeijror", [...ingredient, { title: "", desc: "" }])
    setIngredient([...ingredient, { title: "", desc: "" }]);
  };
  const removeSetIngredientChange = (ind) => {
    let input = ingredient;
    let new1 = input?.filter((e, i) => i != ind);
    setIngredient(new1);
  };


  const handleSetBenefitsChange = (value, i, type) => {
    let input = benefits;
    input[i][type] = value;
    console.log("sjdijer", input)
    setBenefits(input);
  };
  const addSetBenefitsChange = () => {
    setBenefits([...benefits, { title: "", desc: "" }]);
  };
  const removeSetBenefitsChange = (ind) => {
    let input = benefits;
    let new1 = input?.filter((e, i) => i != ind);
    setBenefits(new1);
  };


  const handlesetFaqChange = (value, i, type) => {
    console.log("sjdijer", value, i, type)
    let input = faq;
    input[i][type] = value;
    setFaq(input);
  };
  const addsetFaqChange = () => {
    setFaq([...faq, { title: "", desc: "" }]);
  };
  const removesetFaqtChange = (ind) => {
    let input = faq;
    let new1 = input?.filter((e, i) => i != ind);
    setFaq(new1);
  };



  const handleSetHighlightsChange = (value) => {
    setHighlights(value);
  };
  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleImageChange = (e) => {
    // // const files = Array.from(e.target.files);
    // setImages([...images,e.target.files]);

    const files = Array.from(e.target.files);
    console.log("kojoewjojfe", [...images, files[0]])
    // console.log("kojoewjojfe",files)
    setImages([...images, files[0]]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDiscountChange = (e) => {  // New handler for discount
    setDiscount(e.target.value);
  };

  const handleKitItemChange = (index, field, value) => {
    const newKitItems = [...kitItems];
    newKitItems[index][field] = value;
    if (field === 'isManual') {
      newKitItems[index].productName = '';
    }
    setKitItems(newKitItems);
  };

  const addMoreKitItem = () => {
    setKitItems([...kitItems, { isManual: false, productName: '' }]);
  };

  const validateForm = () => {
    if (!name || !price || !shortDescription || !longDescription || !stock || !images.length || !category) {
      toast.error("All fields are required.");
      return false;
    }
    if (category === 'kit' && kitItems.some(item => !item.productName)) {
      toast.error("All kit items must have a product name.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoader(true)
    // const formData = new FormData();
    // console.log("nnirhei",images)
    // images.forEach(image => formData.append('image', image));
    let imageArr = []
    try {
      for (let index = 0; index < images.length; index++) {
        const element = images[index];
        const formData = new FormData();
        formData.append('image', element)

        const imageResponse = await fetch(`${BASE_URL}/hair-tests/upload-image`, {
          method: 'POST',
          body: formData
        });

        if (!imageResponse.ok) {
          toast.error("Somethin want wrong try again");
          throw new Error('Network response was not ok');
        }
        const imageData = await imageResponse.json();
        imageArr.push(imageData.imageUrl)
      }

      const data = {
        productName: name,
        productPrice: price,
        description: shortDescription,
        longDes: longDescription,
        stock,
        discount,  // Include discount in the data object
        src: imageArr,
        kit: category === 'kit' ? kitItems.map((item) => item.productName) : [],
        shortDes: shortDescription,
        benefits: benefits,
        ingredient: ingredient,
        faq: faq,
        highlights: highlights,
        benefitsMain: benefitsMain,
        ingredientMain: ingredientMain,
        productDisplay: isDisplay
      };

      try {
        const response = await fetch(`${BASE_URL}/admin/addproduct`, {
          method: 'POST',
          headers: {
            'Authorization': storedUserData.logedInUser.accessToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
        setLoader(false)
        if (response.ok) {
          const result = await response.json();
          toast.success("Product created successfully");
          console.log('Product created successfully:', result);
        } else {
          toast.error(`Failed to create product: ${response.statusText}`);
          console.error('Failed to create product:', response.statusText);
        }
      } catch (error) {
        setLoader(false)
        toast.error("Somethin want wrong try again");
        console.error('Error:', error);
      }
    } catch (error) {
      setLoader(false)
      toast.error("Error uploading images.");
      console.error('Error:', error);
    }
  };

  return (
    <AdminNavbar>
      <div className="add-product-container">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category:</label>
            <select value={category} onChange={handleCategoryChange} required>
              <option value="single-product">Single Product</option>
              <option value="kit">Kit</option>
            </select>
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Short Description:</label>
            <textarea
              value={shortDescription}
              onChange={handleShortDescriptionChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Long Description:</label>
            <ReactQuill
              value={longDescription}
              onChange={handleLongDescriptionChange}
              required
            />
          </div>
          <div className="form-group">
            <div style={{ display: "flex" }}>
              <label>Ingredient:</label>
              <div
                className="inputBoxCust3"
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  margin: "0 0 0 10px",
                }}
                onClick={addSetIngredientChange}
              >
                +
              </div>
            </div>
            <ReactQuill
              value={ingredientMain}
              onChange={(value) => {
                setIngredientMain(value);
              }}
              required
            />
            {ingredient?.map((e, i) => {
              return (
                <>
                  <div style={{ display: "flex" }}>
                    <input
                      type="text"
                      // value={e?.title}
                      onChange={(event) => {
                        console.log("keokrowek", event?.target.value, i);
                        handleSetIngredientChange(
                          event?.target.value,
                          i,
                          "title"
                        );
                      }}
                      // required
                      style={{ margin: "10px 0 0 0", width: "90%" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "10%",
                      }}
                    >
                      {" "}
                      <div
                        className="inputBoxCust3"
                        style={{
                          cursor: "pointer",
                          textAlign: "center",
                          margin: "0 0 0 10px",
                        }}
                        onClick={() => removeSetIngredientChange(i)}
                      >
                        -
                      </div>
                    </div>
                  </div>

                  <ReactQuill
                    value={e?.desc}
                    onChange={(value) =>
                      handleSetIngredientChange(value, i, "desc")
                    }
                    required
                  />
                </>
              );
            })}
          </div>
          <div className="form-group">
            <div style={{ display: "flex" }}>
              <label>Benefits:</label>
              <div
                className="inputBoxCust3"
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  margin: "0 0 0 10px",
                }}
                onClick={addSetBenefitsChange}
              >
                +
              </div>
            </div>
            <ReactQuill
              value={benefitsMain}
              onChange={(value) => {
                setBenefitsMain(value);
              }}
              required
            />
            {benefits?.map((e, i) => {
              return (
                <>
                  <div style={{ display: "flex" }}>
                    <input
                      type="text"
                      // value={e?.title}
                      onChange={(event) => {
                        console.log("keokrowek", event?.target.value, i);
                        handleSetBenefitsChange(
                          event?.target.value,
                          i,
                          "title"
                        );
                      }}
                      // required
                      style={{ margin: "10px 0 0 0", width: "90%" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "10%",
                      }}
                    >
                      {" "}
                      <div
                        className="inputBoxCust3"
                        style={{
                          cursor: "pointer",
                          textAlign: "center",
                          margin: "0 0 0 10px",
                        }}
                        onClick={() => removeSetBenefitsChange(i)}
                      >
                        -
                      </div>
                    </div>
                  </div>

                  <ReactQuill
                    value={e?.desc}
                    onChange={(value) =>
                      handleSetBenefitsChange(value, i, "desc")
                    }
                    required
                  />
                </>
              );
            })}
          </div>
          <div className="form-group">
            <div style={{ display: "flex" }}>
              <label>Faq:</label>
              <div
                className="inputBoxCust3"
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  margin: "0 0 0 10px",
                }}
                onClick={addsetFaqChange}
              >
                +
              </div>
            </div>
            {faq?.map((e, i) => {
              return (
                <>
                  <div style={{ display: "flex" }}>
                    <input
                      type="text"
                      // value={e?.title}
                      onChange={(event) => {
                        console.log("keokrowek", event?.target.value, i);
                        handlesetFaqChange(event?.target.value, i, "title");
                      }}
                      // required
                      style={{ margin: "10px 0 0 0", width: "90%" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "10%",
                      }}
                    >
                      {" "}
                      <div
                        className="inputBoxCust3"
                        style={{
                          cursor: "pointer",
                          textAlign: "center",
                          margin: "0 0 0 10px",
                        }}
                        onClick={() => removesetFaqtChange(i)}
                      >
                        -
                      </div>
                    </div>
                  </div>

                  <ReactQuill
                    value={e?.desc}
                    onChange={(value) => handlesetFaqChange(value, i, "desc")}
                    required
                  />
                </>
              );
            })}
          </div>
          <div className="form-group">
            <label>Highlights:</label>
            <ReactQuill
              value={highlights}
              onChange={handleSetHighlightsChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Stock:</label>
            <input
              type="number"
              value={stock}
              onChange={handleStockChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Discount:</label> {/* New input field for discount */}
            <input
              type="number"
              value={discount}
              onChange={handleDiscountChange}
              required
            />
          </div>
          <div className=''>
            <label>Products display on product section:</label> {/* New input field for discount */}
            <input
              type="checkbox"
              value={isDisplay}
              onChange={(e) =>
                setIsDisplay(!isDisplay)
              }
            />
          </div>
          <div className="form-group">
            <label>Upload Images:</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              required
            />
          </div>

          {category === "kit" &&
            kitItems.map((item, index) => (
              <div key={index} className="kit-item">
                {!item.isManual ? (
                  <>
                    <div className="form-group gk-p">
                      <div style={{ flex: "0 0 auto", width: "50%" }}>
                        <label>Choose from existing single Product:</label>
                        <select
                          value={item.productName}
                          onChange={(e) =>
                            handleKitItemChange(
                              index,
                              "productName",
                              e.target.value
                            )
                          }
                          required
                        >
                          <option value="">Select Product</option>
                          {products
                            ?.filter((it) => it.kit.length === 0)
                            .map((product) => (
                              <option key={product.id} value={product.name}>
                                {product.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <button
                        style={{ flex: "0 0 auto", width: "25%" }}
                        type="button"
                        onClick={() =>
                          handleKitItemChange(index, "isManual", true)
                        }
                      >
                        Or Add Product Manually
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="form-group gk-p">
                    <div style={{ flex: "0 0 auto", width: "50%" }}>
                      <label>Product Name:</label>
                      <input
                        type="text"
                        value={item.productName}
                        onChange={(e) =>
                          handleKitItemChange(
                            index,
                            "productName",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <button
                      type="button"
                      style={{ flex: "0 0 auto", width: "25%" }}
                      onClick={() =>
                        handleKitItemChange(index, "isManual", false)
                      }
                    >
                      Select from Dropdown
                    </button>
                  </div>
                )}
              </div>
            ))}

          {category === "kit" && (
            <button type="button" onClick={addMoreKitItem}>
              Add More Product
            </button>
          )}

          <button style={{ marginBottom: "1rem" }} type="submit">
            {loader ? "Loading" : "Add Product"}
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </AdminNavbar>
  );
}

export default AddProduct;
