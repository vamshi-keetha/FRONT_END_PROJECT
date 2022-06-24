import {Route,Routes,NavLink} from 'react-router-dom';
import react from 'react';
import Card from './Card';
import { Outlet,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import MultipleItemSlider from './MultipleItemSlider';
function Home(){


  let MultiItemsList = [
    {
      Image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbFq2QDjmtKqUzuAapDy3SRwfMYTU0mn5TQ&usqp=CAU",
      Image2:"https://m.media-amazon.com/images/I/81pxKNNzWrL._AC_SY200_.jpg",
      Image3: "https://m.media-amazon.com/images/I/41dlE8ZX0lL._AC_SY200_.jpg",
      Image4: "https://m.media-amazon.com/images/I/91r1DemsbRL._AC_SY200_.jpg",
      Image5: "https://images-eu.ssl-images-amazon.com/images/I/61+Q6Rh3OQL._AC_UL450_SR450,320_.jpg",
      Image6: "https://images-eu.ssl-images-amazon.com/images/I/61Li8vJ+7iL._AC_UL450_SR450,320_.jpg",
      Image7: "https://images-eu.ssl-images-amazon.com/images/I/81F02eepKpL._AC_UL160_SR160,160_.jpg",
      Image8: "https://m.media-amazon.com/images/I/51R5G379f3L._AC_SY200_.jpg",
      Image9: "https://m.media-amazon.com/images/I/61BUVC6yhVL._AC_SY200_.jpg",
      Text1: "Refrigerator",
      Text2: "Dates",
      Text3: "Boiler",
      Text4: "key Chain",
      Text5: "one plus",
      Text6: "Table chair",
      Text7: "Peanut Butter",
      Text8: "Cups",
      Text9: "Lamp",

    }
  ]
  

  let productsList=[
    {
       productImageName1 : "Appliances",
       productImageName2 : "furniture",
       productImageName3 : "fooditems",
       productImageName4 : "Clothings",
        productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg",
        productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg",
        productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg",
        productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
    },
    {
       productImageName1 : "Cleaning accessories",
       productImageName2 : "Tyre & rim care",
       productImageName3 : "Helmets",
       productImageName4 : "Vacuum cleaner",
       productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
       productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
       productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
       productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
   },
   {
    productImageName1 : "ACs",
    productImageName2 : "Refigerators",
    productImageName3 : "MicroWaves",
    productImageName4 : "Washing machines",
    productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
    productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
},
{
 productImageName1 : "Professional tools",
 productImageName2 : "Measuring instruments",
 productImageName3 : "Cleaning supplies",
 productImageName4 : "Medical supplies",
 productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg",
 productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg",
 productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg",
 productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
},     
{
 productImageName1 : "Must have baby products",
 productImageName2 : "Baby wishlist",
 productImageName3 : "shopping for expecting mothers",
 productImageName4 : "Explore more",
 productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Must_have_baby_products._SY116_CB667649772_.jpg",
 productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Baby_wishlist._SY116_CB667649772_.jpg",
 productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Shopping_for_Expecting_mothers._SY116_CB667649772_.jpg",
 productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Explore_more2._SY116_CB667648327_.jpg"
},   {
 productImageName1 : "Royol dinner set for royal events ",
 productImageName2 : "Kitchen appliances",
 productImageName3 : "Jwellery",
 productImageName4 : "Gift cards for the special gifted persons",
 productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Dinner-1_1x._SY116_CB653463607_.jpg",
 productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Kitchen-1_1x._SY116_CB653463607_.jpg",
 productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Jewellery-1_1x._SY116_CB653463607_.jpg",
 productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Gift_card-1_1x._SY116_CB653463607_.jpg"
},   {
 productImageName1 : "Up to 50% off on prodocuts",
 productImageName2 : "Microsoft office suites",
 productImageName3 : "25% off on microsoft 365 with your laptop",
 productImageName4 : "Premium headphone",
 productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC-1x_01._SY116_CB665766031_.jpg",
 productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC-1x_02._SY116_CB665766031_.jpg",
 productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC-1x_03._SY116_CB665766031_.jpg",
 productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC_04._SY116_CB665766031_.jpg"
},   {
 productImageName1 : "Fresh and clean as amazon ",
 productImageName2 : "Mobiles",
 productImageName3 : "Fashion renwed with amazon",
 productImageName4 : "Electronics",
 productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg",
 productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg",
 productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg",
 productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
},
{
  productImageName1 : "Appliances",
  productImageName2 : "furniture",
  productImageName3 : "fooditems",
  productImageName4 : "Clothings",
   productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg",
   productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg",
   productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg",
   productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
},
{
  productImageName1 : "Cleaning accessories",
  productImageName2 : "Tyre & rim care",
  productImageName3 : "Helmets",
  productImageName4 : "Vacuum cleaner",
  productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
  productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
  productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
  productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
},
{
productImageName1 : "ACs",
productImageName2 : "Refigerators",
productImageName3 : "MicroWaves",
productImageName4 : "Washing machines",
productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
},
{
productImageName1 : "Professional tools",
productImageName2 : "Measuring instruments",
productImageName3 : "Cleaning supplies",
productImageName4 : "Medical supplies",
productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg",
productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg",
productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg",
productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
}  
 ]
  
  
    return(
      <div className='text-center '>
           <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner align-center">
    <div className="carousel-item active" data-bs-interval='1000'>
      <img src="https://m.media-amazon.com/images/I/71J7DbXNPfL._SX3000_.jpg" className='karo'  alt=""  />
    </div>
    <div className="carousel-item" data-bs-interval='2000'>
      <img src="https://www.junglescout.com/wp-content/uploads/2018/09/50-Amazon-Image-Examples.png" className='imagecar' alt="" />
    </div>
    <div className="carousel-item" data-bs-interval='1000'>
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-selling-amazon-products-1586979875.png" className='caro' alt=""  />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  

 {/* courosel */ }

  {/* <div id="carouselExampleControls" className="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active"></button>
            <button data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></button>
            <button data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner ">
                      <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                        <img src="https://m.media-amazon.com/images/I/617pSVtbf3L._SX3000_.jpg" className="w-75" alt="..."/>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="d-flex justify-content-center">
                        <img src="https://m.media-amazon.com/images/I/61gSTvtvMyL._SX3000_.jpg" className="w-75" alt="..."/>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="d-flex justify-content-center">
                        <img src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" className="w-75"  alt="..."/>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                    </div> */}


<div className='d-flex container-fluid ' >
     {/* {
         productsList.map((productObj, index)=>  <Product key={index} productObj={productObj}>
         <span><h2> This is additional data  </h2></span>
          </Product>
        )
     } */}

     <Card productObj={productsList[0]}> <span><small><h4>Up to 70% off</h4></small></span> </Card>
     <Card productObj={productsList[1]}> <span><h4>Automotive essentials </h4></span> </Card>
     <Card productObj={productsList[2]}> <span><h4>Upgrade your home </h4></span> </Card>
     <Card productObj={productsList[3]}> <span><h4>Professional tools, testing</h4></span> </Card>
 </div>
 <br />
 <MultipleItemSlider productObj={MultiItemsList[0]} />
 <div className='d-flex container-fluid mt-4'>
 <Card productObj={productsList[4]}> <span><small><h4>Everything for the newborn & expecting mothers</h4></small></span> </Card>
     <Card productObj={productsList[5]}> <span><h4>Bring joy with the perfect wedding gifts</h4></span> </Card>
     <Card productObj={productsList[6]}> <span><h4>Multi-tasking made easy and safe </h4></span> </Card>
     <Card productObj={productsList[7]}> <span><h4>Shop by Category as available A-Z</h4></span> </Card>
 </div>
 <br />
 <MultipleItemSlider productObj={MultiItemsList[0]} />
 <div className='d-flex container-fluid mt-4'>
 <Card productObj={productsList[8]}> <span><small><h4>Everything for the newborn & expecting mothers</h4></small></span> </Card>
     <Card productObj={productsList[9]}> <span><h4>Bring joy with the perfect wedding gifts</h4></span> </Card>
     <Card productObj={productsList[10]}> <span><h4>Multi-tasking made easy and safe </h4></span> </Card>
     <Card productObj={productsList[11]}> <span><h4>Shop by Category as available A-Z</h4></span> </Card>
 </div>
 <br />
 <MultipleItemSlider productObj={MultiItemsList[0]} />

 <div className='d-flex container-fluid mt-4'>
 <Card productObj={productsList[8]}> <span><small><h4>Everything for the newborn & expecting mothers</h4></small></span> </Card>
     <Card productObj={productsList[9]}> <span><h4>Bring joy with the perfect wedding gifts</h4></span> </Card>
     <Card productObj={productsList[10]}> <span><h4>Multi-tasking made easy and safe </h4></span> </Card>
     <Card productObj={productsList[11]}> <span><h4>Shop by Category as available A-Z</h4></span> </Card>
 </div>
 <br />
 <MultipleItemSlider productObj={MultiItemsList[0]} />

 <footer className="text-center container-fixed text-lg-start bg-dark text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a to="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a to="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a to="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a to="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a to="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a to="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
   
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
  
      <div className="row mt-3">
     
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Course Finder
          </h6>
          <p>
          Excel your skills by joining with us.
          </p>
        </div>
    
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <NavLink to="#!" className="text-reset">Angular</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">React</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Vue</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Laravel</NavLink>
          </p>
        </div>
     
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="#!" className="text-reset">Pricing</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Settings</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Orders</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Help</NavLink>
          </p>
        </div>
        

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
    
    </div>
  </section>

  <div className="text-center p-4" >
    © 2021 Copyright:
    <a className="text-reset fw-bold" to="https://mdbootstrap.com/">CourseFinder.com</a>
  </div>
 
</footer>
      </div> 
    );
}
 export default Home;