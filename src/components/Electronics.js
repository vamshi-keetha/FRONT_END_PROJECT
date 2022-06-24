import imageele from '../images/fp-ele-1.jpg'
import { NavLink, Outlet } from 'react-router-dom'
import 'bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ele1 from '../images/ele-1.jpeg'
import ele2 from '../images/ele-2.jpeg'
import ele3 from '../images/ele-3.jpeg'
import ele4 from '../images/ele-4.jpeg'
import MultipleItemSlider from './MultipleItemSlider';
import React from 'react';

function Electronics() {



  let [username,setusername]=useState(<div>
     
  </div>)
  // to chane the state
  const changeusername=()=>{
  
    setusername(<div>
      <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
          <div className="col-2">
            <div className="card " style={{width:"160px"}}>
              <div className="card-body ">
              <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjn288v08UzhkYBD4e-vzb6Uvy3x-jg7bUQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
              <NavLink to=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjn288v08UzhkYBD4e-vzb6Uvy3x-jg7bUQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
              <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjn288v08UzhkYBD4e-vzb6Uvy3x-jg7bUQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
              <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjn288v08UzhkYBD4e-vzb6Uvy3x-jg7bUQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
              <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjn288v08UzhkYBD4e-vzb6Uvy3x-jg7bUQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
              <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjn288v08UzhkYBD4e-vzb6Uvy3x-jg7bUQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
  let [user,setuser]=useState(<div>
     
    </div>)
    // to chane the state
    const changeuser=()=>{
    
      setusername(<div>
        <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
            <div className="col-2">
              <div className="card " style={{width:"160px"}}>
                <div className="card-body ">
                <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNFdeqLLXxTcL8uAulScNGH4kB6wveK4brQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                <NavLink to=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNFdeqLLXxTcL8uAulScNGH4kB6wveK4brQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNFdeqLLXxTcL8uAulScNGH4kB6wveK4brQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNFdeqLLXxTcL8uAulScNGH4kB6wveK4brQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNFdeqLLXxTcL8uAulScNGH4kB6wveK4brQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNFdeqLLXxTcL8uAulScNGH4kB6wveK4brQ&usqp=CAU" className="w-100" alt=""></img></NavLink>
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

    let [use,setuse]=useState(<div>
     
      </div>)
      // to chane the state
      const changeuse=()=>{
      
        setusername(<div>
          <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
              <div className="col-2">
                <div className="card " style={{width:"160px"}}>
                  <div className="card-body ">
                  <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6gwiZH9D1Gi0GEU7pbVopifNlWrFHWzMwA&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                  <NavLink to=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6gwiZH9D1Gi0GEU7pbVopifNlWrFHWzMwA&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                  <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6gwiZH9D1Gi0GEU7pbVopifNlWrFHWzMwA&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                  <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6gwiZH9D1Gi0GEU7pbVopifNlWrFHWzMwA&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                  <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6gwiZH9D1Gi0GEU7pbVopifNlWrFHWzMwA&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                  <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6gwiZH9D1Gi0GEU7pbVopifNlWrFHWzMwA&usqp=CAU" className="w-100" alt=""></img></NavLink>
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

      let [iphone,setiphone]=useState(<div>
     
        </div>)
        // to chane the state
        const changeiphone=()=>{
        
          setusername(<div>
            <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
                <div className="col-2">
                  <div className="card " style={{width:"160px"}}>
                    <div className="card-body ">
                    <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjv4pFA-Yb0I5DNZx_qJXwGL4bsGCjOPlsg&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                    <NavLink to=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjv4pFA-Yb0I5DNZx_qJXwGL4bsGCjOPlsg&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                    <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjv4pFA-Yb0I5DNZx_qJXwGL4bsGCjOPlsg&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                    <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjv4pFA-Yb0I5DNZx_qJXwGL4bsGCjOPlsg&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                    <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjv4pFA-Yb0I5DNZx_qJXwGL4bsGCjOPlsg&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
                    <NavLink to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjv4pFA-Yb0I5DNZx_qJXwGL4bsGCjOPlsg&usqp=CAU" className="w-100" alt=""></img></NavLink>
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
  

  // let MultiItemsList = [
  //   {
  //     Image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbFq2QDjmtKqUzuAapDy3SRwfMYTU0mn5TQ&usqp=CAU",
  //     Image2:"https://m.media-amazon.com/images/I/81pxKNNzWrL._AC_SY200_.jpg",
  //     Image3: "https://m.media-amazon.com/images/I/41dlE8ZX0lL._AC_SY200_.jpg",
  //     Image4: "https://m.media-amazon.com/images/I/91r1DemsbRL._AC_SY200_.jpg",
  //     Image5: "https://images-eu.ssl-images-amazon.com/images/I/61+Q6Rh3OQL._AC_UL450_SR450,320_.jpg",
  //     Image6: "https://images-eu.ssl-images-amazon.com/images/I/61Li8vJ+7iL._AC_UL450_SR450,320_.jpg",
  //     Image7: "https://images-eu.ssl-images-amazon.com/images/I/81F02eepKpL._AC_UL160_SR160,160_.jpg",
  //     Image8: "https://m.media-amazon.com/images/I/51R5G379f3L._AC_SY200_.jpg",
  //     Image9: "https://m.media-amazon.com/images/I/61BUVC6yhVL._AC_SY200_.jpg",
  //     Text1: "Refrigerator",
  //     Text2: "Dates",
  //     Text3: "Boiler",
  //     Text4: "key Chain",
  //     Text5: "one plus",
  //     Text6: "Table chair",
  //     Text7: "Peanut Butter",
  //     Text8: "Cups",
  //     Text9: "Lamp",

  //   }
  // ]


    return (
      <div className='container-fixed'>
       <h1 className="text-center">Electronics & accessories</h1>
       <img src={imageele} alt=''></img>
       <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
        <div className="col-3">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
              
            <NavLink to="" className="streched-link"><img src="https://m.media-amazon.com/images/I/41ReoEjYZJL._AC_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            
            </div>
          </div>
    </div>
    <div className="col-3">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <NavLink to="" className="streched-link" ><img src="https://images-eu.ssl-images-amazon.com/images/I/51W7zI9HKpL._AC._SR240,240.jpg" className="w-100" alt=""></img>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            </NavLink>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            </div>
          </div>
    </div>
    <div className="col-3">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://images-eu.ssl-images-amazon.com/images/I/41UD9vNsIjS._AC_SX184_.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            </div>
          </div>
    </div>
    <div className="col-3">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://images-eu.ssl-images-amazon.com/images/I/71bV203ASmL._AC._SR360,460.jpg" className="w-100"  alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            </div>
          </div>
          
    </div>
    </div>
    <br />
    <h3 className='text-dark'>Most bought by customers this season</h3>
    <hr />
    <div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 container-fluid ">
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://lazbar.com/public/uploads/all/vH4SPkwXgCBeCxKlhEbCSlx05rpBZrMmsd35m84w.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
  
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <NavLink to=""><img src="https://5.imimg.com/data5/SELLER/Default/2020/10/MF/DR/SO/12721597/airpods-pro-ith-charging-case-earpods-airpods-earbuds-earphones-with-mic-for-android-ios-smartphones-500x500.jpg" className="w-100" alt=""></img></NavLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
          
          </div>
          </div>
    </div>
    
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <navLink to=""><img src="https://m.media-amazon.com/images/I/61WKnlPcilL._SL1500_.jpg" className="w-100" alt=""></img></navLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
    
            
          </div>
          </div>
    </div>
    
        <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <navLink to=""><img src="https://images-eu.ssl-images-amazon.com/images/I/41A6x4TXvHL._AC_SX184_.jpg" className="w-100" alt=""></img></navLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <navLink to=""><img src="https://ae01.alicdn.com/kf/Hb0ff7adb9f5b43d0bd54166c063069a6Z.jpg_Q90.jpg_.webp" className="w-100" alt=""></img></navLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <navLink to=""><img src="https://m.media-amazon.com/images/I/31efBN7RpKL._AC_SS450_.jpg" className="w-100" alt=""></img></navLink>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-pen-drive-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
          </div>
          </div>
    </div>
    
    {/* < MultipleItemSlider productObj={MultiItemsList[0]} /> */}

   </div>
   <br />
   <h3 className="text-center text-dark" >Handpicked collection for you</h3>
   <br />
      <p>{username}</p> 
     <div className='d-flex flex-column'>
        <button className="btn btn-secondary  "  onClick={changeusername} >under $200</button>
        <button className="btn btn-secondary  "  onClick={changeuser} >under $400</button>
        <button className="btn btn-secondary  "  onClick={changeuse} >under $600</button>
        <button className="btn btn-secondary  "  onClick={changeiphone} >under $800</button>
        </div> 
      <hr />
      <h4 className='text-danger'>Up to extra 10% discount via coupons</h4>
      <h5 className="instruct"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcW2clf_W39x-v-Cmr9mRPpyuxjQbWxheiNG_rcIZ9Nv2iwrG2148JkfHwfiUdaSTZWb8&usqp=CAU" className="caut"></img>  There are no coupons to display at this time.please check back later.</h5>
      <br />
      <navLink to=""><button className='btn btn-light'><img src={ele1} className='p-3'></img></button></navLink>
      <navLink to=""><button className='btn btn-light'><img src={ele2} className='p-3'></img></button></navLink>
      <navLink to=""><button className='btn btn-light'><img src={ele3} className='p-3'></img></button></navLink>
      <navLink to=""><button className='btn btn-light'><img src={ele4} className='p-3'></img></button></navLink>
      <br />
      <h4 className="text-primary">Explore Electronics on Amazon.in</h4>
      <h6 className='vam'>Browse through a range of high-quality electronic items cherry-picked from some of the most popular and prestigious names in the industry. We specialize in a wide array of products comprising categories like mobile phones, laptops, tablets, cameras, TVs, headphones, home speakers, home entertainment systems, musical instruments, portable media players, telephones, storage and networking devices, camera and mobile accessories, computer accessories and peripherals and more.

Have a passion to own the latest electronic gadgets? Love to explore the unending possibilities the modern-day devices unravel for you? Wait no further. Our electronic store has got everything in it for you, that too, at the most compelling price. We have gone that extra mile to source the most popular and reliable electronic items to fulfil all your requirements well. All the leading brands like Apple, Samsung, Micromax, LG, HTC, Lenovo, HP, Dell, Acer, Nikon, Sony, Canon, Panasonic, Philips, Sennheiser, JBL, Casio, Denon, Creative, Boston Acoustics, Logitech, Seagate, Western Digital, SanDisk, PNY, Fender, Ibanez, Cort, D’Addario, Yamaha, Benq, Epson, D-Link, Tenda, TP Link, Netgear, Linksys, Cisco and more have their exhaustive product inventory available on Amazon India. You can buy them online right at the comfort zone of your home, without any hassles.</h6>
<h5>Buy Electronic Devices for Home and Office</h5>
<h6 className='vam'>We at Amazon India believe that customers’ requirements need to be met under all circumstances. That is why we have always been practising a fully customer-centric approach, thus, giving full freedom to all our customers so that they can check and buy their necessary products online on our user-friendly website. Whether you are an individual or a business enterprise, you can shop for your electronic items on Amazon India from virtually anywhere you like. Our multiple product categories enable you to easily find all items in just a matter of few clicks. Looking for mobile phones and tablets? You would love to browse through different categories including Android, iOS, Windows and more. Computer seekers have easy access to desktops and laptops featuring different operating systems like Windows, Mac, DOS and Linux. DSLRs, Point & Shoots, Mirrorless and camcorders fall under the camera category comprising some of the biggest names of brands. LCD, LED, Plasma are the filters which you can use while browsing through our large collection of TVs. Amazon India brings to you a great selection of wired and wireless headphones which can be easily found under headphone types such as in-ear, on-ear, over-ear and earbud. While for music and movie aficionados we have home theatre systems, DVD and Blue-ray players and projectors, for computer geeks we have brought high-performance storage and networking devices from world renowned brands. That’s not all. On Amazon India you can also shop for musical instruments and accessories for mobiles, cameras and computers.</h6>
   <h5>Avail Great Bargains on Multiple Brands</h5>
   <h6 className='vam'>Amazon India is happy to offer you deep discounts and bargains on different brands available. In respect to your requirement, we always keep on updating our product inventory with latest and more-advanced electronic items. So, you always have a win-win situation when you shop for your favourite product on our user-friendly website or mobile app. Do not think twice. Buy your product online and get it delivered to your address without having to be worried just about anything.

</h6>
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
  
  export default Electronics;
  