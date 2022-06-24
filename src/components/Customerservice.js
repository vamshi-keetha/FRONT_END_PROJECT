import { NavLink,useNavigate } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import React from "react";
function Customerservice() {

   // let [username,setusername]=useState('rajesh')
  // // to change the state
   // const changeusername=()=>{
  //     setusername('vamshi')
  // }


  let account=useNavigate();

    return (
      <div className="container">
        {/* <p>{user}</p>
        <button className="btn btn-info" onClick={changeusername}>changeusername</button> */}
        <h5 className="instruct"><img src="https://thumbs.dreamstime.com/b/caution-sign-icon-isolated-vector-illustration-yellow-white-background-warning-symbol-flat-style-157731844.jpg" alt="" className="caution"></img>Please note your access to, and use of the marketplace www.amazon.in , operated by Amazon seller Service Private limited, is governed by the Conditions of Use and Sale , Privacy Policy and other applicable user policies and agreements which are publicly available. The above-mentioned policies and user agreements are updated, and you are advised to go through the same. Note that we reserve the right to remove any information and/or terminate your access to and usage of our marketplace in case of any non-compliance with the rules and regulations, privacy policy and/ or user agreements governing our marketplace. Therefore, in order to ensure continued use of, and access to our marketplace, you are advised to please read the user agreements, policies and regulations carefully and ensure compliance with the same.</h5>
      <hr />
      <h2>Hello. What can we help you with?</h2>
      <h1 className="display-5">&#128578;</h1>
      <hr />
      <h4 className="text-dark">Some things you can do here</h4>
      <div className="row row-cols-3 justify-space-around  row-col-mg-3 p-3 ">
      <div className="col-4">
    <div className="card">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu24w9Guv4aNzN4R5fCEWhbM40ZbWjnq1-QA&usqp=CAU" className="w-100 "></img>
         </div>
         <div className="col-sm-8">
           <h5 className="text-dark p-2" >YOUR ORDER</h5>
           <h6> Track packages edit or cancel orders</h6>
         </div>
         </div>
       </div>
       </div> 

       <div className="col-4">
       <div className="card">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://5.imimg.com/data5/FQ/XT/MY-4025192/cardboard-shipping-box-500x500.jpg" className="w-100"></img>
         </div>
         <div className="col-sm-8">
         <h5 className="text-dark p-2" >Return and Refunds</h5>
           <h6> Return or exchange items print return mailing labels</h6> 
         </div>
         </div>

       </div>
       </div> 
       <div className="col-4">
       <div className="card w-100">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://media.istockphoto.com/vectors/heart-sign-in-house-icon-ed-icon-love-home-symbol-vector-id1029955978?k=20&m=1029955978&s=612x612&w=0&h=gwJ1u-PQ_hJHvQorYovIfRIDt5QQp9dZPDz0grh0Jdw=" className="w-100"></img>
         </div>
         <div className="col-sm-8">
         <h5 className="text-dark p-2" >Manage Adresses</h5>
           <h6>Update your addresses add addresses,landmark details </h6>
         </div>
     </div>
       </div>
       </div> 
      </div>
      {/* row-2 */}
      <div className="row row-cols-3 justify-space-around  row-col-mg-3 p-3 ">
      <div className="col-4">
    <div className="card">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://i.pcmag.com/imagery/reviews/02dIsBiVpmVTMeXkrKxWy0W-13..v1582749138.png" className="w-100 "></img>
         </div>
         <div className="col-sm-8">
           <h5 className="text-dark p-2" >Manage Prime</h5>
           <h6> View your benefit membership details</h6>
         </div>
         </div>
       </div>
       </div> 
       <div className="col-4">
       <div className="card">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://cdn.xxl.thumbs.canstockphoto.com/blue-credit-card-stock-images_csp29788553.jpg" className="w-100"></img>
         </div>
         <div className="col-sm-8">
         <h5 className="text-dark p-2" >Payment Settings</h5>
           <h6> Add or edit payment methodschange expired debit or creditcard</h6> 
         </div>
         </div>

       </div>
       </div> 
       <div className="col-4">
       <div className="card w-100">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://t4.ftcdn.net/jpg/01/18/03/35/360_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg" className="w-100"></img>
         </div>
         <div className="col-sm-8">
         <h5 className="text-dark p-2" >Account Settings</h5>
           <h6>Change your email or password update login information </h6>
         </div>
     </div>
       </div>
       </div> 
      </div>
      {/* row-3 */}
      <div className="row row-cols-3 justify-space-around  row-col-mg-3 p-3 ">
      <div className="col-4">
    <div className="card">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://st.depositphotos.com/1654249/2526/i/600/depositphotos_25269357-stock-photo-3d-man-with-red-question.jpg" className="w-100 "></img>
         </div>
         <div className="col-sm-8">
           <h5 className="text-dark p-2" >Amazon & COVID-19</h5>
           <h6> Impacts on order and delivary</h6>
         </div>
         </div>
       </div>
       </div> 
       <div className="col-4">
       <div className="card">
     <div className="row">
       <div className="col-sm-4">
         <img src="https://www.vodafone.co.uk/business/media/image/1508882391665/img_192x192_answers_when_you_need_them.png" className="w-100"></img>
         </div>
         <div className="col-sm-8">
         <h5 className="text-dark p-2" >Digital services and Device support</h5>
           <h6> Find device help and support trouble shoot device issues</h6> 
         </div>
         </div>
  </div>
       </div>
       </div>
       <hr />
       <h4 className="text-dark">Find more solutions   Type something like, <span className="ven">"question about a charge"</span></h4>
       <form className="d-flex br-3">
      <input className="form-control me-2" type="search" placeholder="Mention Your Problem" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit"><img src="https://cdn-icons-png.flaticon.com/512/3176/3176396.png" alt="" className="search"></img></button>
    </form>
    <hr />
    <h2>Browse Help Topics</h2>
    <div className="card">
    <div className="row">
       <div className="col-sm-4 text-center">
       <NavLink to="" className=" stretched-link"> Recommended Topics </NavLink>
       <hr />
       <NavLink to="" className=" stretched-link"> Shipping and delivary </NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link"> Payments and Piricing  </NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link"> Amazon Pay </NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link"> Return,Refunds </NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link"> Ordering </NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link"> Managing Your Account </NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link">  Devices & Digital Services</NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link">Amazon Business  </NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link">  Other Topics & Help Sites</NavLink>
       <hr/>
       <NavLink to="" className=" stretched-link"> Customer Service </NavLink>
         </div>
         <div className="col-sm-8 text-center">
         <h5 className="text-dark " >Customer Service</h5>
         <NavLink to="" className=" stretched-link"> Ask the digital and device community </NavLink>
         <hr />
         <NavLink to="" className=" stretched-link"> Track your Package </NavLink>
         <hr />
         <NavLink to="" className=" stretched-link"> About our return policies </NavLink>
         <hr />
         <NavLink to="" className=" stretched-link"> Order gift cards </NavLink>
         <hr />

          <button className="btn btn-info" onClick={()=>account("/Books")}>Help</button>
         </div>
         </div>
         <hr />
         </div>
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
  
  export default Customerservice;
  