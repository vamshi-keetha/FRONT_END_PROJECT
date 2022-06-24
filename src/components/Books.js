import { NavLink } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import book1 from '../images/fp-1.jpg';
import book2 from '../images/fp-2.jpg';
import book3 from '../images/fp-3.jpg';

function Books() {


    return (
      <div className="  p-4">
        {/* courosel */ }

 <div id="carouselExampleControls" className="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active"></button>
            <button data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></button>
            <button data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner ">
                      <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80" className="bio" alt="..."/>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="d-flex justify-content-center">
                        <img src="https://media.istockphoto.com/photos/world-of-books-picture-id482783107?k=20&m=482783107&s=612x612&w=0&h=_vnkbUqQbfL9cJty4WXyIeShiTbRj10ACQ2HiLUJ0WA=" className="phy" alt="..."/>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="d-flex justify-content-center">
                        <img src="https://shopwaterside.com/wp-content/uploads/2018/10/Mall-Website-Shopping-Page-Detail2.png" className="math"  alt="..."/>
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
                    </div> 

       {/* <div id="carouselExampleControls " className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner align-center text-center">
    <div className="carousel-item active" data-bs-interval='1000'>
      <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80" className='bio'  alt=""  />
    </div>
    <div className="carousel-item" data-bs-interval='1000'>
      <img src="https://media.istockphoto.com/photos/world-of-books-picture-id482783107?k=20&m=482783107&s=612x612&w=0&h=_vnkbUqQbfL9cJty4WXyIeShiTbRj10ACQ2HiLUJ0WA=" className='phy' alt="" />
    </div>
    <div className="carousel-item" data-bs-interval='1000'>
      <img src="https://shopwaterside.com/wp-content/uploads/2018/10/Mall-Website-Shopping-Page-Detail2.png" className='math' alt=""  />
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
</div>  */}
<div className="huge ">
<h2 >Top Offers| Wide Selection |Huge Discounts<h2>&#129313;</h2></h2>
<h3 >Free delivery for first order</h3>
</div> 
<h5 className="mahi">With over 25 million books. Browse through variety of genres such as Fiction, Self help, Children's books, School textbooks, Higher education textbooks, and much more.
Explore Editor's corner, Exam Central, Indian Language Books, New Releases & Best sellers . </h5>
<h2 className="text-info">Recommendations to start your reading journey</h2>
<div className="row row-cols-2 justify-space-around  row-col-mg-3 p-3 ">
        <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81EzbrasB3L.jpg" className="w-100" alt=""></img>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <br />
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-physics-260-3621972-1-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            <div className="card-footer">
            <button className="btn btn-info">$30-$60</button>
            </div>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <img src="https://rukminim1.flixcart.com/image/416/416/regionalbooks/g/s/z/biology-the-best-book-for-all-competitive-books-original-imaenkzftar9dthn.jpeg?q=70" className="w-100" alt=""></img>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-biology-260-3621972-1-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            <div className="card-footer">
            <button className="btn btn-info">$30-$60</button>
            </div>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <img src="https://arrowpublicationsindia.com/wp-content/uploads/2019/01/am1.jpg" className="w-100" alt=""></img>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-mathmetics-260-3621972-1-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            <div className="card-footer">
            <button className="btn btn-info">$30-$60</button>
            </div>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51KhwKJLI8L._SX355_BO1,204,203,200_.jpg" className="w-100" alt=""></img>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-Telugu-book-260-3621972-1-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            <div className="card-footer">
            <button className="btn btn-info">$30-$60</button>
            </div>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <img src="https://www.rachnasagar.in/images/product/big/1388-2-Forever%20Hindi%205_F.jpg" className="w-100" alt=""></img>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-hindi book-260-3621972-1-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            <div className="card-footer">
            <button className="btn btn-info">$30-$60</button>
            </div>
          </div>
          </div>
    </div>
    <div className="col-2">
          <div className="card " style={{width:"200px"}}>
            <div className="card-body ">
            <img src="https://m.media-amazon.com/images/I/41sUbbJUBuL.jpg" className="w-100" alt=""></img>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon" ></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-fill icon"></i>
            <i className="bi bi-star-half icon"></i>
            <NavLink to="" className=" stretched-link">https://www.amazon.in/Priority-english book-260-3621972-1-red-b-ghbxvvdfbb-Zsefsdvc  </NavLink>
            <div className="card-footer">
            <button className="btn btn-info">$30-60</button>
            </div>
          </div>
          </div>
    </div>

    <h2 className="text-center p-3">Everything for your Academics</h2>
    <hr />
    <NavLink to=''><img src={book1} alt="" className="book1"></img></NavLink>
    <hr />
    <NavLink to=''><img src={book2} alt="" className="book1"></img></NavLink>
    <hr />
    <NavLink to=''><img src={book3} alt="" className="book1"></img></NavLink>
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
  
  export default Books;
  