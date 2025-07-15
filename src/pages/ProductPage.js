import React, { useEffect, useState } from 'react'
import Navbar from '../features/nav/Navbar'
import Products from '../features/products/Products'
import ShoppingFeature from '../features/shopping-feature/ShoppingFeature'
import SliderImage from '../features/video-slider/SliderImage'
import Footer from '../features/footer/Footer'
import { ToastContainer } from 'react-toastify'
import MiniCart from './MiniCart'
import { Helmet } from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'

function ProductPage(props) {


  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  useEffect(() => {
    
    if(props?.setTitle) props?.setTitle(window.location.pathname)
      scrollToTop()
  },[])


  let {cart,
    setCart} = props;

    useEffect(() => {
      console.log("sfoerjore")
    },[cart])
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

    const [selectedQ, setSelectedQ] = useState(0);

    let section8 = [
      {
        desc: "Can Hair Loss Be Reversed?",
        text: "While some types of hair loss, such as telogen effluvium, can be reversed once the underlying cause is addressed, genetic hair loss (male pattern baldness) is typically permanent. However, treatments like minoxidil, finasteride, and hair transplants can slow down or reverse the progression in many cases.",
      },
      {
        desc: "How Do I Know If I’m Losing My Hair?",
        text: "Signs of hair loss include a receding hairline, thinning at the crown, or noticeable shedding during combing or washing. If you suspect hair loss, consult with a healthcare provider or dermatologist for a proper diagnosis.",
      },
      {
        desc: "Are There Natural Remedies for Hair Loss?",
        text: "Some natural remedies, such as massaging the scalp with essential oils (e.g., rosemary oil), consuming a nutrient-rich diet, and using supplements like biotin, can promote hair health. However, their effectiveness may vary from person to person, and they are not substitutes for clinically proven treatments.",
      }
    ];

    const section7 = [
      {"title" :"Hair Loss Treatment Products for Men",
        desc :"The best hair loss products for men target male pattern baldness by addressing DHT with proven treatments like Minoxidil and Finasteride. Combining DHT blockers and multivitamins rich in biotin and zinc helps prevent further hair thinning and supports regrowth. Key ingredients like Capixyl and Redensyl in hair growth shampoos and conditioners nourish and strengthen hair. An effective haircare routine, paired with these solutions, can help men regrow, strengthen, and revitalize their hair, boosting confidence."
        },{"title":"Hair Loss Treatment Products for Women",
        desc :"For women, hair loss often stems from hormonal changes, stress, or genetics, but the best hair loss products can restore volume and scalp health. Treatments like hair regrowth products and shampoos for hair loss are designed to rejuvenate the scalp and strengthen hair strands. Biotin and keratin fortify hair naturally, while advanced treatments stimulate growth. A combination of natural hair loss products and clinical solutions helps women achieve fuller, healthier hair and regain confidence."
        },{"title":"Dandruff Treatment Products",
        desc :"Dealing with dandruff can be uncomfortable, but effective dandruff treatment eliminates flakes and itching. Whether caused by a dry scalp, excess oil, or fungal infection, the best dandruff shampoos containing zinc pyrithione or ketoconazole restore scalp health. Natural options, like tea tree oil or aloe vera, soothe irritation and balance scalp health. Specialized shampoos for men or women address different scalp needs, keeping dandruff under control."
        },{"title":"Premature Greying of Hair Products",
        desc :"Premature greying can be reversed with the right anti-greying hair products, restoring natural color by targeting the root causes, such as genetics, stress, and nutritional deficiencies. Treatments rich in biotin and B12 support pigment production and scalp nourishment. For those seeking natural solutions, ingredients like amla and bhringraj promote melanin production without harsh chemicals. Addressing the underlying causes helps maintain youthful, healthy hair and restores confidence."
        },
        
        {"title" :  "Hair Supplements",
        desc :"If your hair feels thin or weak, using the best hair supplements for growth can improve strength and health. Nutrients like biotin, zinc, and vitamins B, C, and E promote hair resilience. Hair vitamins for damaged hair restore lost nutrients, resulting in stronger, fuller hair."
        },{"title":"Damaged Hair",
        desc :"Restore strength and shine with the best products for damaged hair like shampoos, deep conditioners, and leave-in treatments. These hair repair products address split ends and dry strands. Limiting heat styling and using moisture-rich formulas helps transform brittle hair."
        },{"title":"Ayurvedic Products for Hair Growth and Scalp Health",
        desc :"Ayurvedic hair oil and products like bhringraj, amla, and neem naturally promote hair growth and scalp health. Ayurvedic shampoo for hair fall and deep conditioning masks reduce shedding and restore strength. These natural solutions nourish the scalp and improve overall hair health."
        },{"title":"Color-Treated Hair Treatment",
        desc :"Best shampoo for color-treated hair locks in vibrancy and prevents fading. Conditioners and hair masks for color-treated hair add moisture and repair damage. These products ensure your color stays fresh while keeping hair healthy."
        },{"title":"Prevent Heat Damage and Repair Your Hair",
        desc :"Use the best heat protectant for hair to prevent dryness and breakage caused by styling tools. For heat-damaged hair, deep conditioners and repair treatments restore moisture and strength. Hydrating masks repair damage and keep hair shiny."
        },{"title":"Thyroid Hair Loss Products",
        desc :"Best shampoo for thyroid hair loss helps restore thinning hair and promote regrowth. Targeted supplements with biotin and keratin nourish hair from within. Using these thyroid hair loss solutions strengthens hair and stops further shedding."
        },{"title":"Stress Hair Loss Products",
        desc :"Stress-related thinning can be reversed with the best shampoo for stress-related hair loss and supplements like biotin. These products nourish follicles and reduce shedding. Stress hair loss solutions promote regrowth and strengthen hair."
        },{"title":"PCOS Hair Loss Products",
        desc :"The best PCOS hair loss products target hormonal imbalances to minimize shedding and promote regrowth. Shampoos with biotin and saw palmetto are highly effective. Combining these with supplements ensures thicker, healthier hair."
        },{"title":"Anemia Hair Loss Products",
        desc :"The best anemia hair loss treatment restores fullness by addressing iron deficiency. Shampoos and serums rich in biotin and iron nourish the scalp and stimulate regrowth. Supplements for anemia hair loss support hair growth from within."
        },{"title":"Oily Scalp Treatment Products",
        desc :"Manage excess oil with the best shampoo for oily scalp, balancing oil production without over-drying. Ingredients like tea tree oil and salicylic acid cleanse while maintaining moisture. Natural remedies like apple cider vinegar rinses help prevent buildup."
        },{"title":"Best Products for Dry Scalp",
        desc :"Soothe irritation and hydrate with the best products for dry scalp like shampoos with coconut oil or shea butter. These formulas restore balance and provide lasting relief from itchiness. Keep your scalp healthy and moisturized."
        },{"title":"Hair Products for Sensitive Scalp",
        desc :"The best hair products for sensitive scalp reduce discomfort and irritation. Shampoos free of harsh chemicals, paired with soothing conditioners, protect sensitive skin. These products help restore scalp health while ensuring comfort."
        },{"title":"Hair Products for Normal Scalp",
        desc :"The best hair products for normal scalp maintain hydration and protect against environmental stressors. Regular use of moisturizing shampoos and conditioners prevents buildup. Normal scalp hair products ensure balanced, healthy hair."
        },
        {"title" : "Best Products for Straight Hair",
        desc :"Best products for straight hair manage oil buildup, frizz, and lack of volume. Lightweight conditioners and anti-frizz serums keep straight hair sleek and shiny. Heat protectants are essential to prevent damage from styling tools."
        },{"title":"Best Products for Wavy Hair",
        desc :"Keep waves defined and frizz-free with the best products for wavy hair. Volume-enhancing shampoos and wave-boosting conditioners maintain bounce. Heat protection is crucial for long-lasting, healthy waves."
        },{"title":"Best Products for Curly Hair",
        desc :"Combat dryness and frizz with the best products for curly hair. Moisturizing shampoos reduce tangles, while styling products provide long-lasting curl definition. Frizz control and heat protection are essential for healthy curls."
        },{"title":"Best Products for Frizzy Hair",
        desc :"Best products for frizzy hair smooth cuticles and lock in moisture for sleek, polished results. Frizz is caused by dryness and humidity, but anti-frizz shampoos and serums tame flyaways. These products repair damage and restore shine."
        },{"title":"Best Products for Split Ends",
        desc :"Best products for split ends repair and protect damaged tips, restoring strength and preventing further breakage. Heat styling and chemicals cause split ends, but targeted treatments seal and nourish. Proper care strengthens hair and prevents future damage."
        }
        
    ]
  

  return (
    <div style={{ position: "relative" }}>
      <Navbar cart={cart} setCart={setCart}>
      <Helmet>
        <link rel="canonical" href="https://hairsncares.com/best-hair-care-products-hair-loss-scalp-health" />
      </Helmet>
        <MiniCart
          isOpen={isCartOpen}
          onClose={toggleCart}
          cart={cart}
          setCart={setCart}
        />

        <Products cart={cart} setCart={setCart} toggleCart={toggleCart} />

        <div style={{ backgroundColor: "rgba(236, 244, 255, 1)" }}>
          <div
            className="container d-flex flex-column"
            style={{
              alignItems: "center",
              padding: "40px 0 40px 0",
              gap: "10px",
              width: "75%",
            }} 
          >
            <div style={{ fontSize: "48px", fontWeight: "700" }} className="text-align">
              Hair <span className='blue-btw-text'>Care Products </span> for Your Hair Health Introduction
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "rgba(54, 54, 54, 1)",
              }}
              className="text-align"
            >
              Maintaining healthy hair is not just about good genes; it requires
              the right care and products. Whether you’re experiencing hair
              thinning or simply want to strengthen your hair, choosing the
              right products is key to achieving strong, vibrant, and nourished
              hair. From shampoos and conditioners to hair oils and serums, each
              product plays a role in addressing specific hair health needs. Our
              specially formulated hair care range is designed to combat hair
              loss, boost scalp health, and ensure your hair looks and feels its
              best.
            </div>
            <div className="">
              <button
                onClick={scrollToTop}
                className="btn sub-button-section-3-op"
              >
                Shop Hair Care Products
              </button>
            </div>
          </div>
        </div>

        <div
          className="container d-flex flex-column"
          style={{
            alignItems: "center",
            padding: "40px 0 40px 0",
            gap: "10px",
            width: "75%",
          }}
        >
          <div style={{ fontSize: "48px", fontWeight: "700"  }} className="text-align">
            Hair <span className='blue-btw-text'>Care Products </span> for Your Hair Health{" "}
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(54, 54, 54, 1)",
            }}
            className="text-align"
          >
            Our hair care product line offers a holistic approach to improving
            hair health. Here’s how our products can benefit your hair
          </div>
          
            {
              section7?.map((e) => {
                return(
                  <>
                            <div
            style={{
              fontWeight: "600",
              fontSize: "28px",
              color: "rgba(86, 86, 86, 1)",
            }}
            className="text-align"
          >
           {e?.title}
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(54, 54, 54, 1)",
            }}
            className="text-align"
          >
            {e?.desc}
          </div>
                  </>
                )
              })
            }




          <div className="">
            <button
              onClick={scrollToTop}
              className="btn sub-button-section-3-op"
            >
              Explore Our Products
            </button>
          </div>
        </div>

        <div style={{ backgroundColor: "rgba(236, 244, 255, 1)" }}>
          <div
            className="container d-flex flex-column"
            style={{
              alignItems: "center",
              padding: "40px 0 40px 0",
              gap: "10px",
              width: "75%",
            }}
          >
            <div style={{ fontSize: "48px", fontWeight: "700"  }} className="text-align">
              Conclusion{" "}
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "rgba(54, 54, 54, 1)",
              }}
              className="text-align"
            >
              Caring for your hair doesn't have to be complicated. With our hair
              care products, you can easily integrate effective treatments into
              your daily routine. No matter your hair type or specific concerns,
              our products are here to help you regain confidence in your hair
              health. Explore our range today, and take the first step toward
              stronger, healthier, and more resilient hair.{" "}
            </div>
            <div className="">
              <button
                onClick={scrollToTop}
                className="btn sub-button-section-3-op"
              >
                Explore Our Hair Solutions{" "}
              </button>
            </div>
          </div>
        </div>


        <div style={{ padding : "40px 0 40px 0" }}>
        <div className="container mt-3">
          <div className="main-text-section-8-htw" style={{textAlign : "center" }}>
            Frequently <div className='blue-btw-text'>Asked Questions </div> (FAQs)
          </div>
          <div className="mt-5 d-flex flex-column">
            {section8?.map((item, indx) => {
              return (
                <div className="d-flex flex-column">
                                  <div
                  className="main-heading-box-section-8-htw d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div
                    className="main-heading-text-section-8-htw faq-dropDown-main-1"
                    style={{ padding: "10px" }}
                  >
                   {item?.desc}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // width:"20%"

                    }}
                    className='faq-dropDown-main'
                    onClick={() => {
                      if(selectedQ == indx + 1) setSelectedQ(0)
                      else setSelectedQ(indx + 1);
                    }}
                  >
                    <img
                    className='faq-dropDown'
                      src={"/assets/img/hairTreatmentWomen/image-16.png"}
                      alt="Faqs icon"
                      title='Faqs icon'                    
                    />
                  </div>
                </div>
                {selectedQ == indx + 1 ? (
                    <div className="main-sub-heading-text-section-8-htw">
                                         {item?.text}

                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        </div>

        <ShoppingFeature />
        <SliderImage />
        <Footer />
        <ToastContainer position="bottom-right" />
      </Navbar>
    </div>
  );
}

export default ProductPage