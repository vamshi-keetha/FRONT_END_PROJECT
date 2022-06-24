import {NavLink} from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import React from 'react';
import {useForm} from 'react-hook-form'
function Account() {

    //  forms
    const {register,handleSubmit,formState:{errors}}=useForm() 

  

// form submission
const onFormSumbit=(userobj)=>{
 

  }


  let [username,setusername]=useState(<div>
    {/* <button className='btn w-25 btn-info'>Create new Account</button> */}
  </div>)
  // to change the state
    const changeusername=()=>{
      setusername(<div>
<div className="card  form" style={{width:"550px"}}>
            <div className="card-body ">
           <div >
           <form className=" text-center mx-auto" onSubmit={handleSubmit(onFormSumbit)}>
    {/* username */}
    <div className="mb-3 p-2">
      <label htmlFor="username">username</label>
      <input type="text" name=""  id="username" className='form-control' {...register("username",{required:true,minLength:4})} />
      {/* validation of form */}
      {errors.username?.type==='required' && <p className="text-danger">* username is required</p>}
      {/* minlength validation */}
      {errors.username?.type==='minLength' && <p className="text-center">* atleast 4 characters required</p>}
    </div>
    {/* email */}
    <div className="mb-3 p-2">
      <label htmlFor="email">email</label>
      <input type="email" name=""  id="email" className='form-control' {...register("email",{required:true})} />
      {errors.username?.type==='required' && <p className="text-danger">* email is required</p>}
    </div>
    {/* dob */}
    <div className="mb-3">
      <label htmlFor="dob">date of birth</label>
      <input type="date" name=""  id="dob" className='form-control' {...register("dob",{required:true})} />
      {errors.username?.type==='required' && <p className="text-danger">* date of birth is required</p>}

    </div>
    {/* skills */}

<div className="mb-3">
  <label className=' text-info'><h4>select skills</h4></label>
  {/* checkbox-1 */}
  <div className="form-check">
  <input type="checkbox" name="" id="js" className="form-check-input" {...register("javascript")} ></input>
  <label htmlFor="js" className="form-check-label">Javascript</label>
  </div>
  {/* checkbox-2 */}
  <div className="form-check">
  <input type="checkbox" name="" id="html" className="form-check-input" {...register("html")} ></input>
  <label htmlFor="html" className="form-check-label">html</label>
  </div>
  
  {/* checkbox-3 */}
  <div className="form-check">
  <input type="checkbox" name="" id="react" className="form-check-input" {...register("react")} ></input>
  <label htmlFor="reactn" className="form-check-label">react</label>
  </div> 
   </div>

 {/* skills */}

{/* <div className="mb-3">
  <label>select skills</label> */}
  {/* checkbox-1 */}
  {/* <div className="form-check">
  <input type="checkbox" name="" id="js" className="form-check-input" {...register("javascript")} ></input>
  <label htmlFor="js" className="form-check-label">Javascript</label>
  </div> */}
  {/* checkbox-2 */}
  {/* <div className="form-check">
  <input type="checkbox" name="" id="html" className="form-check-input" {...register("html")} ></input>
  <label htmlFor="html" className="form-check-label">html</label>
  </div> */}
  
  {/* checkbox-3 */}
  {/* <div className="form-check">
  <input type="checkbox" name="" id="react" className="form-check-input" {...register("react")} ></input>
  <label htmlFor="reactn" className="form-check-label">react</label>
  </div> 
   </div> */}

    {/*feedback  */}
    <div className="mb-3">
      <label htmlFor="feedback">feedback</label>
      <textarea name="" id=""  rows="5" className="form-control" {...register("feedback")} ></textarea>
    </div>
    {/* submit button */}
<button type="submit" className="btn btn-success d-block mx-auto ">add user</button>

   </form>
           </div>
<h6 className='p-2'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h6>
<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
            need help?
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">forgot password</NavLink></li>
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">other issues with sign up link</NavLink></li>
            {/* <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li> */}
          </ul>
        </li>   
          </div>
         </div>
      </div>)
    }

    return (
      <div className="container text-center ">
         <img src='https://www.techadvisor.com/cmsdata/features/3662346/amazon-logo-good_thumb800.jpg' alt='' className='ind'></img>
         <div className="card  form" style={{width:"550px"}}>
            <div className="card-body ">
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label ">Email or Phonenumber</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"  placeholder="sign up" />
</div>
<button className='btn btn-info w-25'>continue</button>
<h6 className='p-2'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h6>
<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            need help?
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">forgot password</NavLink></li>
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">other issues with sign up link</NavLink></li>
            {/* <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li> */}
          </ul>
        </li>   
          </div>
         </div>
        
{/* <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<label for="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
<div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div> */}
<hr />
<p>{username}</p>
      <h6 className='text-secondary'>new to amazon</h6>
      <button className="btn btn-primary" onClick={changeusername}>Create new Account</button>
      <br />
      <br />
      <hr />
      </div>
    );
  }
  
  export default Account;
  