import {NavLink} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'
import imagefash1 from '../images/fp-fash-1.jpeg'
import imagefash2 from '../images/fp-fash-2.jpeg'
import imagefash3 from '../images/fp-fash-3.jpeg'
import imagefash4 from '../images/fp-fash-4.jpeg'
import React from 'react';
import MultipleItemSlider from './MultipleItemSlider';
function Fashion() {

  

  let MultiItemsList = [
    {
      Image1: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
      Image2: "https://rukminim1.flixcart.com/image/150/150/jyyqc280/shoe/7/g/c/38099-1637-10-levi-s-dark-brown-original-imafj2whvw35qxjs.jpeg?q=70",
      Image3: "https://rukminim1.flixcart.com/image/150/150/k6mibgw0/shoe/u/v/2/4330908-41-nike-black-original-imafpferdrygemuc.jpeg?q=70",
      Image4: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
      Image5: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
      Image6: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
      Image7: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
      Image8: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
      Image9: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
      Text1: "Nike",
      Text2: "Addidas",
      Text3: "Nike",
      Text4: "Addidas",
      Text5: "Nike",
      Text6: "Addidas",
      Text7: "Nike",
      Text8: "Addidas",
      Text9: "Nike",

    },
    {
      Image1: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmPoKL_b09lQWy-hAwbYAHSGLhRqUDq_Y592UP_dTnzkD1Cs2vViiouhtOUtmIBRHmmKFlnAbpeQ&usqp=CAc",
      Image2:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv4kDdudXYyVzb4pbzu8M39XSR8fKQQ2fnAHNaqr1afYUKRwKuW22b97JoCLaxvC_OApo0FPLVRw&usqp=CAc",
      Image3: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHoaaMCulnMU2tX0KiU8wZHGLRuBrIA2stEwkt13lJEMWBlmMYE4iD3UJAixXD&usqp=CAc",
      Image4: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRbcFZICAixyRz2McY6raWt3Z-2eTfx2j-Oj_dogTXPSADDgx7TvWwGANHZcct8mRB65R6xgtY-KgrMvfpmJ_HKCgS36RhZDaUBFmjuE-HWhdbube4zVwO_Q&usqp=CAc",
      Image5: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQi-wxERIMZfvYN5pQyP3aitgEF3axNtW8XvpXWXPIEo6RafJodpyZedlXcF-2sXzYVwWOQdyW1nOls7DoN1WWSBNk9NJiLBivMd4Kpu8M-e3rM4tAHmIs8&usqp=CAc",
      Image6: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2525392/2022/3/31/686778a7-19c3-4021-94ff-5d4f460ecd031648716950163RAREBlueFloralPrintedMaxiDress1.jpg",
      Image7: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg",
      Image8: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg",
      Image9: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQi-wxERIMZfvYN5pQyP3aitgEF3axNtW8XvpXWXPIEo6RafJodpyZedlXcF-2sXzYVwWOQdyW1nOls7DoN1WWSBNk9NJiLBivMd4Kpu8M-e3rM4tAHmIs8&usqp=CAc",
      Text1: "",
      Text2: "",
      Text3: "",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",

    },
    {
      Image1: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image2:"https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image3: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image4: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image5: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image6: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image7: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image8: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Image9: "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg",
      Text1: "",
      Text2: "",
      Text3: "",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",

    }
  ]

let [username,setusername]=useState(<div>
  <img src='https://m.media-amazon.com/images/I/71iTvc9MlgL._AC_UL320_.jpg' alt=''></img>
  <h1>KIDS CLOTHING</h1>
</div>)
// to chane the state
const changeusername=()=>{

  setusername(<div>
    <h1 className='text-center'>TOP RATED KIDS CLOTHING</h1>
    <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
        <div className="col-2">
          <div className="card " style={{width:"160px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10303301a.webp" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972-1-  </NavLink>
            
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"180px"}}>
            <div className="card-body ">
            <NavLink to=''><img src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10303301a.webp" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"160px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10303301a.webp" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"140px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10303301a.webp" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"130px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10303301a.webp" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
        
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"140px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10303301a.webp" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
          
          </div>
          </div>
    </div>
    </div>
  </div>)
}


    return (
      <div className='text-center'>
      {/* navbars */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
    <h1 className='fash'>AMAZON FASHION </h1>
    </NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-tabs  bg-light p-4 me-auto  mb-lg-0">
        {/* link for home */}
        <li className="nav-item ">
          <NavLink className="nav-link"  to="">
      
          </NavLink>
          </li>
           {/* link for books */}
           <li className="nav-item">
          <NavLink className="nav-link text-dark"  to="">Women</NavLink>
          </li>
          {/* link for customerservice */}
          <li className="nav-item">
          <NavLink className="nav-link text-dark"  to="">Men </NavLink>
          </li>
          {/* link for electronics */}
          <li className="nav-item">
          <NavLink className="nav-link text-dark"  to="">Kids</NavLink>
          </li>
        {/* link for bestsellers */}
        <li className="nav-item  ">
          <NavLink className="nav-link text-dark"  to="">Bags and Luggages</NavLink>
          </li>
              {/* link for fashion  */}
              <li className="nav-item">
          <NavLink className="nav-link text-dark"  to="">Sportswear</NavLink>
          </li>
               {/* link for mobiles */}
               <li className="nav-item">
          <NavLink className="nav-link text-dark"  to="">Sales and Deals</NavLink>
          </li>
                {/* link for newreleases */}
                <li className="nav-item">
          <NavLink className="nav-link text-dark"  to=""><h5 className='text-info'>30 DAYS RETURNS Restrictions apply</h5></NavLink>
        </li>
        </ul>
        </div>
  </div>
</nav>
<hr />
<NavLink to=""><img src={imagefash1} alt='' className='imgfash'></img></NavLink>
<NavLink to=""><img src={imagefash2} alt='' className='imgfash'></img></NavLink>
<br />

<h1 className='ven'><img src='https://t3.ftcdn.net/jpg/02/82/53/34/360_F_282533455_ceiCX6VJ2bL3moaqhr6VS0WXWDjigiD9.jpg' alt='' className='van'></img>FREE DELIVERY  ON 1st FASHION ORDER</h1>
{/* women clothing */}
<h2 className='text-center p-3'>TOP RATED WOMEN CLOTHING</h2>
<div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
        <div className="col-2">
          <div className="card " style={{width:"160px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/71PFTwVXjEL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972-1-  </NavLink>
            <h5>Dresses</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"210px"}}>
            <div className="card-body ">
            <NavLink to=''><img src="https://m.media-amazon.com/images/I/61G6PhmDbJL._UX679_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>tops and t-shirts</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"160px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/910A5E9a2bL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>Sarees</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"140px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/71W-ID8G7nL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
          <h5>Kurtis</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"130px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/31FeW4DRcoL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>Jeans</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"140px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/71VRPDfBfIL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>Sleepwear</h5>
          </div>
          </div>
    </div>
    </div>
    <br />
    <h2> special dresses under 999</h2>
    <MultipleItemSlider productObj={MultiItemsList[1]} />
    {/* SHOE FOR WOMEN */}
    <h1>SHOE FOR WOMEN</h1>
    <MultipleItemSlider productObj={MultiItemsList[0]} />
    {/*  */}
    {/* fashion for mens */}
    <h2 className='text-center p-3'>TOP RATED MEN CLOTHING</h2>
    <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
        <div className="col-2">
          <div className="card " style={{width:"130px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/81OXbTSd-GL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>shirts</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"145px"}}>
            <div className="card-body ">
            <NavLink to=''><img src="https://m.media-amazon.com/images/I/617y9EVbn3L._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>T-shirts</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"170px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/61L0xZ0hDFL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>Track Pants</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"145px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/71ucQP7MZyS._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
          <h5>Trousers</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"150px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/617SAeg8hPL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972  </NavLink>
            <h5>Jeans</h5>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"130px",height:"200px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://m.media-amazon.com/images/I/518t5fMT7PL._AC_UL320_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority  </NavLink>
            <h5>Kurtas</h5>
          </div>
          </div>
    </div>
    </div>


    <h2> special dresses for men under 999</h2>
    <MultipleItemSlider productObj={MultiItemsList[2]} />

    {/* shoes for mens */}
     <h1>SHOES FOR MEN</h1>

    <MultipleItemSlider productObj={MultiItemsList[0]} />
    {/*  */}
    {/* Dresses for kids */}
    <p>{username}</p> 
        <button className="btn btn-primary "  onClick={changeusername}>TOP RATED KIDS CLOTHING</button> 
        {/* something  */}
    <h1 className='p-3'>Fashion Made Affordable</h1>
    <NavLink to=""><img src={imagefash3} alt='' className='imgfash'></img></NavLink>
    <br />
    <NavLink to=""><img src={imagefash4} alt='' className='imgfash'></img></NavLink>
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
  
  export default Fashion;
  