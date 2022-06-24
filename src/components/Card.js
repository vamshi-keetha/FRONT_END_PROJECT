import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Card(props) {
  
    console.log(props)

  return ( 
  <div className='text-start container'>
       <div className='card'>

       <h1>{props.children}</h1>
           <div className='card-head'>
           </div>
        
       <div className='card-body n shadow'>
       <div className='row'>  
        <div className='col-sm-6'> <a href="./Books"><img className='w-100' src={props.productObj.productImage1} alt="" />  </a> <small> <a className='text-secondary' href="">{props.productObj.productImageName1}</a></small> </div>
        <div className='col-sm-6'> <a href="./Electronics"> <img className='w-100' src={props.productObj.productImage2} alt="" /></a>  <small> <a className='text-secondary' href="">{props.productObj.productImageName2}</a></small> </div>
        </div>
        <div className='row'>
        <div className='col-sm-6'> <a href="./Books"><img className='w-100' src={props.productObj.productImage3} alt="" /></a>  <small> <a className='text-secondary' href="">{props.productObj.productImageName3}</a></small> </div>
        <div className='col-sm-6'> <a href="./Fashion"> <img className='w-100' src={props.productObj.productImage4} alt="" /> </a><small> <a className='text-secondary' href="">{props.productObj.productImageName4}</a></small></div>
       </div>
        </div>
        
        

        {/* <div className="card-body">
         <h2>{props.productObj.productName}</h2>
       </div> */}
       <div className='card-footer text-start'>
            <a href="./Fashion">showMore</a>
       </div>
    
       </div>
  {/* card-2 */}

       </div>
  );
}

export default Card;
