import react from "react";
import {useForm} from "react-hook-form"
import axios from "axios"
import { useState,useEffect } from "react";

function Products(){
    let {register,handleSubmit}=useForm()

    let [products,setproducts]=useState([])

    useEffect(()=>{
getData()
    },[])

    const getData=async()=>{
  let res=await axios.get("http://localhost:7000/Products")
  setproducts(res.data)
    }


  let onFormSubmit=async (prodObj)=>{
     let res=await axios.post("http://localhost:7000/Products",prodObj)
     let message=res.data;
     alert("product created")   
    }
    return(
            <div className="container text-center mt-5">
                <h1 className="text-info">create Products</h1>
                {/* form to create a product */}
                <form className="w-50 mx-auto p-3" onSubmit={handleSubmit(onFormSubmit)}>
         <input type="text"  {...register("productName")} id="" className="form-control p-2" placeholder="product-name" ></input>
         <input type="number"  {...register("productPrize")} id="" className="form-control p-2" placeholder="product-prize" ></input>
         <input type="text"  {...register("productImage")} id="" className="form-control p-2" placeholder="product-Image url" ></input>
         <button type="submit" className="btn btn-warning"> add product</button>    
                </form>
                {/* list of products */}
                <h1 className="text-success mt-3">LIST OF PRODUCTS</h1>
                <table className="table text-center">
                    <tr>
                        <th className=" hel">Name of Product</th>
                        <th className=" hel">Prize of product</th>
                        <th className=" hel">Image of Product</th>
                    </tr>
                    <tbody>{
products.map(prodObj=><tr key={prodObj.id}>
    <td className="tff">{prodObj.productName}</td>
    <td className="tff">{prodObj.productPrize}</td>
    <td>
      <img src={prodObj.productImage} alt="" className="w-50"></img>  </td>
    </tr>)
    }
                    </tbody>
                </table>
            </div>
    );
}
export default Products;