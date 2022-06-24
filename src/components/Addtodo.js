import react from "react";
import {useForm } from 'react-hook-form'
import { addTodo } from "../slices/todoSlice";
import {useDispatch} from "react-redux"


function Addtodo(){
let {register,handleSubmit,formState:{errors}}=useForm()
let dispatch=useDispatch()


  const onFormSubmit=(todoObj)=>{
    
   let actionObj=addTodo(todoObj.newtodo)
  //  dispatch action object to redux s
   dispatch(actionObj)
  }



  return(
  <div>
<p className="display-5 text-info"></p>
  <form className="d-flex br-3" onSubmit={handleSubmit(onFormSubmit)} > 
  <div className="mb-3 w-100">
  <label htmlFor="todo">New todo</label>
  <input type="text" id="todo" className="form-control me-5" {...register("newtodo")}></input>
</div>
<button type="submit" className="btn btn-outline-success mx-3  ">Search</button>
  </form>

  </div>
  )
}

export default Addtodo;