
// import React, { useState, useEffect } from 'react';
// import AdminNavbar from '../admin-dashboard/AdminNavbar';
// import BASE_URL from '../../Config';
// import { toast } from 'react-toastify';

// function EditDeleteProduct() {
//   const [products, setProducts] = useState([]);
//   const [editMode, setEditMode] = useState(null);
//   let storedUserData = JSON.parse(localStorage.getItem("User343"));

//   const [editData, setEditData] = useState({
//     name: '',
//     price: '',
//     description: '',
//     image: '',
//     src: '',
//     category: 'single-product',
//     kitItems: [{ isManual: false, productName: '' }]
//   });

//   useEffect(() => {
//     fetch(`${BASE_URL}/admin/product`)
//       .then(response => response.json())
//       .then(data => setProducts(data.message))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const handleEdit = (index) => {
//     const product = products[index];
//     if (product) {
//       setEditMode(index);
//       setEditData({
//         name: product.name,
//         price: product.price,
//         description: product.description,
//         image: '',  // Reset image
//         src: product.src,  // Add src to editData
//         category: product.kit.length > 0 ? 'kit' : 'single-product',
//         kitItems: product.kit.length > 0 ? product.kit.map(item => ({ isManual: true, productName: item })) : [{ isManual: false, productName: '' }]
//       });
//     }
//   };
// console.log(storedUserData.logedInUser.accessToken)
//   const handleSave = async (index) => {
//     const uploadImageAndSaveProduct = async () => {
//       const formData = new FormData();
//       formData.append('image', editData.image);

//       try {
//         console.log('Uploading image:', editData.image);
//         const imageResponse = await fetch(`${BASE_URL}/hair-tests/upload-image`, {
//           method: 'POST',
//           body: formData
//         });

//         if (!imageResponse.ok) {
//           toast.error("Error uploading image.");
//           throw new Error('Network response was not ok');
//         }

//         const imageData = await imageResponse.json();
//         console.log('Image uploaded successfully:', imageData.imageUrl);
//         return imageData.imageUrl;
//       } catch (error) {
//         toast.error("Error uploading image.");
//         console.error('Error:', error);
//         throw error;
//       }
//     };

//     const updateProduct = async (imageUrl = null) => {
//       const data = {
//         id: products[index]?._id,
//         newName: editData.name,
//         newPrice: editData.price,
//         newDescription: editData.description,
//         src: imageUrl || products[index]?.src,
//         categoryName: editData.category,
//         kit: editData.category === 'kit' ? editData.kitItems.map((item) => item.productName) : []
//       };

//       try {
//         const response = await fetch(`${BASE_URL}/admin/update-product`, {
//           method: 'PUT',
//           headers: {
//             'Authorization': storedUserData.logedInUser.accessToken,
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data),
//         });

//         if (response.ok) {
//           const result = await response.json();
//           toast.success("Product updated successfully");
//           setEditMode(null);
//           const updatedProducts = [...products];
//           updatedProducts[index] = result.product;
//           setProducts(updatedProducts);
//         } else {
//           toast.error(`Failed to update product: ${response.statusText}`);
//           console.error('Failed to update product:', response.statusText);
//         }
//       } catch (error) {
//         toast.error("Error updating product.");
//         console.error('Error:', error);
//       }
//     };

//     try {
//       if (editData.image) {
//         console.log('Image selected:', editData.image);
//         const imageUrl = await uploadImageAndSaveProduct();
//         await updateProduct(imageUrl);
//       } else {
//         console.log('No image selected, updating product without new image.');
//         await updateProduct();
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


//   const handleDelete = async (index) => {
//     const productId = products[index]?._id; // Added optional chaining

//     try {
//       const response = await fetch(`${BASE_URL}/admin/deleteproduct`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': storedUserData.logedInUser.accessToken,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({id:productId}),

//       });

//       if (response.ok) {
//         toast.success("Product deleted successfully");
//         const updatedProducts = [...products];
//         updatedProducts.splice(index, 1);
//         setProducts(updatedProducts);
//       } else {
//         toast.error(`Failed to delete product: ${response.statusText}`);
//         console.error('Failed to delete product:', response.statusText);
//       }
//     } catch (error) {
//       toast.error("Error deleting product.");
//       console.error('Error:', error);
//     }
//   };
// console.log(products)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData({ ...editData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setEditData({ ...editData, image: file });
//   };

//   const handleKitItemChange = (index, field, value) => {
//     const newKitItems = [...editData.kitItems];
//     newKitItems[index][field] = value;
//     if (field === 'isManual') {
//       newKitItems[index].productName = ''; 
//     }
//     setEditData({ ...editData, kitItems: newKitItems });
//   };

//   const addMoreKitItem = () => {
//     setEditData({ ...editData, kitItems: [...editData.kitItems, { isManual: false, productName: '' }] });
//   };

//   return (
//     <AdminNavbar>
//       <h2>Edit/Delete Products</h2>
//       <div className="edit-delete-product-container">
//         {products.length > 0 && products.map((product, index) => (
//           <div className="product-item" key={index}>
//             <img loading="lazy" src={editMode === index ? (editData.image ? URL.createObjectURL(editData.image) : product?.src) : product?.src} alt={product?.name} /> {/* Added optional chaining */}
//             {editMode === index ? (
//               <div className="edit-mode">
//                 <input
//                   type="text"
//                   name="name"
//                   value={editData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   value={editData.price}
//                   onChange={handleChange}
//                   placeholder="Price"
//                 />
//                 <textarea
//                   name="description"
//                   value={editData.description}
//                   onChange={handleChange}
//                   placeholder="Description"
//                 />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//                 {editData.category === 'kit' && editData.kitItems.map((item, index) => (
//                   <div key={index} className="kit-item">
//                     {!item.isManual ? (
//                       <div className="form-group gk-p">
//                         <div style={{flex: "0 0 auto", width: "50%"}}>
//                           <label>Choose from existing single Product:</label>
//                           <select
//                             value={item.productName}
//                             onChange={(e) => handleKitItemChange(index, 'productName', e.target.value)}
//                             required
//                           >
//                             <option value="">Select Product</option>
//                             {products?.filter((it) => it.kit.length === 0).map(product => (
//                               <option key={product._id} value={product.name}>{product.name}</option>
//                             ))}
//                           </select>
//                         </div>
//                         <button
//                           style={{flex: "0 0 auto", width: "25%"}}
//                           type="button"
//                           onClick={() => handleKitItemChange(index, 'isManual', true)}
//                         >
//                           Or Add Product Manually
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="form-group gk-p">
//                         <div style={{flex: "0 0 auto", width: "50%"}}>
//                           <label>Product Name:</label>
//                           <input
//                             type="text"
//                             value={item.productName}
//                             onChange={(e) => handleKitItemChange(index, 'productName', e.target.value)}
//                             required
//                           />
//                         </div>
//                         <button
//                           style={{flex: "0 0 auto", width: "25%"}}
//                           type="button"
//                           onClick={() => handleKitItemChange(index, 'isManual', false)}
//                         >
//                           Select from Dropdown
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//                 {editData.category === 'kit' && (
//                   <button type="button" onClick={addMoreKitItem}>Add More Kit Item</button>
//                 )}
//                 <button type="button" onClick={() => handleSave(index)}>Save</button>
//                 <button type="button" onClick={() => setEditMode(null)}>Cancel</button>
//               </div>
//             ) : (
//               <div className="view-mode">
//                 <h3>{product?.name}</h3>
//                 <p>Price: ${product?.price}</p>
//                 <p>Description: {product?.description}</p>
//                 <p>Category: {product?.kit.length > 0 ? 'Kit' : 'Single Product'}</p>
//                 {product?.kit.length > 0 && (
//                   <ul>
//                     Kit Items:
//                     {product.kit.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 )}
//                 <button type="button" onClick={() => handleEdit(index)}>Edit</button>
//                 <button type="button" onClick={() => handleDelete(index)}>Delete</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </AdminNavbar>
//   );
// }

// export default EditDeleteProduct;

import React, { useState, useEffect } from 'react';
import AdminNavbar from '../admin-dashboard/AdminNavbar';
import BASE_URL from '../../Config';
import { toast, ToastContainer } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactPaginate from 'react-paginate';

function EditDeleteProduct() {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(null);
  let storedUserData = JSON.parse(localStorage.getItem("User343"));

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
  const [images, setImages] = useState([]);
  const [imagesrc, setImagesSrc] = useState([]);

  const [isImage, setIsImage] = useState(false);


  useEffect(() => {

  }, [])
  const [editData, setEditData] = useState({
    name: '',
    price: '',
    shortDescription: '',
    longDescription: '',
    discount: '',
    stock: '',
    image: '',
    src: '',
    category: 'single-product',
    kitItems: [{ isManual: false, productName: '' }],
    productDisplay: ''
  });

  console.log("jeijro", editData)

  useEffect(() => {
    fetch(`${BASE_URL}/admin/product`)
      .then(response => response.json())
      .then(data => setProducts(data.message))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const [cur, setCur] = useState(0);

  let pageCount =
    products?.length % 10 === 0
      ? products?.length / 10
      : Math.floor(products?.length / 10) + 1;



  const handlePageClick = (event) => {
    setCur(event.selected)
    // console.log("sjiorjfre",event.selected)
    // setSelectedPage(event.selected)

  };

  const handleEdit = (index) => {
    const product = products[index];
    if (product) {
      setEditMode(index);
      setEditData({
        name: product.name,
        price: product.price,
        shortDescription: product.description,
        longDescription: product.longDes,
        discount: product.discount,
        stock: product.stock,
        image: '',  // Reset image
        // src: product.src,  // Add src to editData
        category: product.kit.length > 0 ? 'kit' : 'single-product',
        kitItems: product.kit.length > 0 ? product.kit.map(item => ({ isManual: true, productName: item })) : [{ isManual: false, productName: '' }],
        productDisplay: product?.productDisplay
      });
      setIngredient(product?.ingredient)
      setIngredientMain(product?.ingredientMain)
      setBenefits(product?.benefits)
      setBenefitsMain(product?.benefitsMain)
      setHighlights(product?.highlights)
      setImagesSrc(product?.src)
      // setImages(product?.src)
    }
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

  const handleSetHighlightsChange = (value) => {
    setHighlights(value);
  };


  const handleSave = async (index) => {
    const uploadImageAndSaveProduct = async () => {
      let imageArr = []
      for (let index = 0; index < imagesrc?.length; index++) {
        const element = imagesrc[index];
        imageArr.push(element);
      }
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
        return imageArr;

      } catch (error) {
        toast.error("Somethin want wrong try again");
        console.error('Error:', error);
        return [];
        throw error;
      }
    };

    const updateProduct = async (imageUrl = null) => {
      const data = {
        id: products[index]?._id,
        newName: editData.name,
        newPrice: editData.price,
        newDescription: editData.shortDescription,
        longDes: editData.longDescription,
        discount: editData.discount,
        stock: editData.stock,
        src: imageUrl || products[index]?.src,
        categoryName: editData.category,
        kit: editData.category === 'kit' ? editData.kitItems.map((item) => item.productName) : [],
        ingredient,
        benefits,
        highlights,
        benefitsMain,
        ingredientMain,
        productDisplay: editData?.productDisplay
      };
      console.log(data, "edited")
      try {
        const response = await fetch(`${BASE_URL}/admin/update-product`, {
          method: 'PUT',
          headers: {
            'Authorization': storedUserData.logedInUser.accessToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          toast.success("Product updated successfully");
          setEditMode(null);
          const updatedProducts = [...products];
          updatedProducts[index] = result?.data;
          console.log("korkto", updatedProducts, result)
          setProducts(updatedProducts);
        } else {
          toast.error(`Failed to update product: ${response.statusText}`);
          console.error('Failed to update product:', response.statusText);
        }
      } catch (error) {
        toast.error("Somethin want wrong try again");
        console.error('Error:', error);
      }
    };

    try {
      if (isImage) {
        const imageUrl = await uploadImageAndSaveProduct();
        // console.log("krokofer",imageUrl)
        await updateProduct(imageUrl);
      } else {
        await updateProduct();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (index) => {
    const productId = products[index]?._id;

    try {
      const response = await fetch(`${BASE_URL}/admin/deleteproduct`, {
        method: 'DELETE',
        headers: {
          'Authorization': storedUserData.logedInUser.accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: productId }),
      });

      if (response.ok) {
        toast.success("Product deleted successfully");
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
      } else {
        toast.error(`Failed to delete product: ${response.statusText}`);
        console.error('Failed to delete product:', response.statusText);
      }
    } catch (error) {
      toast.error("Somethin want wrong try again");
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleLongDescriptionChange = (value) => {
    setEditData({ ...editData, longDescription: value });
  };

  const handleImageChange = (e) => {
    setIsImage(true)
    // // const files = Array.from(e.target.files);
    // setImages([...images,e.target.files]);

    const files = Array.from(e.target.files);
    console.log("kojoewjojfe", [...images, files[0]])
    // console.log("kojoewjojfe",files)
    setImages([...images, files[0]]);
  };
  const RemoveOriginalImg = (index) => {
    setIsImage(true)

    let newArr = imagesrc?.filter((it, indx) => indx != index);
    setImagesSrc(newArr || []);

  };

  const handleKitItemChange = (index, field, value) => {
    const newKitItems = [...editData.kitItems];
    newKitItems[index][field] = value;
    if (field === 'isManual') {
      newKitItems[index].productName = '';
    }
    setEditData({ ...editData, kitItems: newKitItems });
  };

  const addMoreKitItem = () => {
    setEditData({ ...editData, kitItems: [...editData.kitItems, { isManual: false, productName: '' }] });
  };

  return (
    <AdminNavbar>
      <h2>Edit/Delete Products</h2>
      <div className="edit-delete-product-container">
        {products.length > 0 && products?.slice(cur * 10, (cur + 1) * 10)?.map((product, index) => (
          <div className="product-item" key={index}>
            <img loading="lazy" src={editMode === index ? (editData.image ? URL.createObjectURL(editData.image) : product?.src) : product?.src?.[0]} alt={product?.name} />
            {editMode === index ? (
              <div className="edit-mode">
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  type="number"
                  name="price"
                  value={editData.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
                <textarea
                  name="shortDescription"
                  value={editData.shortDescription}
                  onChange={handleChange}
                  placeholder="Short Description"
                />
                <ReactQuill
                  value={editData.longDescription}
                  onChange={handleLongDescriptionChange}
                />
                <div>
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
                            defaultValue={e?.title}
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
                  <div>
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
                              defaultValue={e?.title}
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
                  <label>Highlights:</label>
                  <ReactQuill
                    value={highlights}
                    onChange={handleSetHighlightsChange}
                    required
                  />
                </div>
                <input
                  type="number"
                  name="discount"
                  value={editData.discount}
                  onChange={handleChange}
                  placeholder="Discount"
                />
                <input
                  type="number"
                  name="stock"
                  value={editData.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                />
                <label>Products display on product section:</label>
                <input
                  type="checkbox"
                  name="productDisplay"
                  defaultChecked={editData.productDisplay || false}
                  onChange={(e) => handleChange({
                    target: {
                      name: "productDisplay",
                      value: e?.target?.checked
                    }
                  })}
                  placeholder="Stock"
                />
                <label>Upload Images:</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  required
                />

                {imagesrc?.map((item, index) => {
                  return (
                    <div className='d-flex flex-column'>
                      <img loading="lazy" src={item} />
                      <button type="button" onClick={() => RemoveOriginalImg(index)}> Remove</button>
                    </div>

                  )
                })}
                {editData.category === 'kit' && editData.kitItems.map((item, index) => (
                  <div key={index} className="kit-item">
                    {!item.isManual ? (
                      <div className="form-group gk-p">
                        <div style={{ flex: "0 0 auto", width: "50%" }}>
                          <label>Choose from existing single Product:</label>
                          <select
                            value={item.productName}
                            onChange={(e) => handleKitItemChange(index, 'productName', e.target.value)}
                            required
                          >
                            <option value="">Select Product</option>
                            {products?.filter((it) => it.kit.length === 0).map(product => (
                              <option key={product._id} value={product.name}>{product.name}</option>
                            ))}
                          </select>
                        </div>
                        <button
                          style={{ flex: "0 0 auto", width: "25%" }}
                          type="button"
                          onClick={() => handleKitItemChange(index, 'isManual', true)}
                        >
                          Or Add Product Manually
                        </button>
                      </div>
                    ) : (
                      <div className="form-group gk-p">
                        <div style={{ flex: "0 0 auto", width: "50%" }}>
                          <label>Product Name:</label>
                          <input
                            type="text"
                            value={item.productName}
                            onChange={(e) => handleKitItemChange(index, 'productName', e.target.value)}
                            required
                          />
                        </div>
                        <button
                          style={{ flex: "0 0 auto", width: "25%" }}
                          type="button"
                          onClick={() => handleKitItemChange(index, 'isManual', false)}
                        >
                          Select from Dropdown
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                {editData.category === 'kit' && (
                  <button type="button" onClick={addMoreKitItem}>Add More Kit Item</button>
                )}
                <button type="button" onClick={() => handleSave(index)}>Save</button>
                <button type="button" onClick={() => setEditMode(null)}>Cancel</button>
              </div>
            ) : (
              <div className="view-mode">
                <h3>{product?.name}</h3>
                <p>Price: ₹{product?.price}</p>

                <p>Category: {product?.kit.length > 0 ? 'Kit' : 'Single Product'}</p>
                {product?.kit.length > 0 && (
                  <ul>
                    Kit Items:
                    {product.kit.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                <button type="button" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="reactPagination" style={{
        display: "flex",
        justifyContent: "end"
      }}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          // forcePage={selectedPage} 
          previousLabel="<"
          renderOnZeroPageCount={null}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
      <ToastContainer position="bottom-right" />
    </AdminNavbar>
  );
}

export default EditDeleteProduct;
