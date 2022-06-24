import { useState } from 'react'
import Addtodo from './Addtodo';
import Todolist from './Todolist';
import Todocount from './Todocount';
import React from 'react'
function Stack(){

    let [todolist,setTodolist]=useState([])

    return(
        <div>
       <div className='container text-center'>
<div className='row'>
  <div className='col-sm-12'>
    <Todolist todolist={todolist} />
  </div>
  {/* <div className='col-sm-4'>
    <Todocount Todocount={Todocount} />
  </div> */}
</div>
</div>n
        </div>
    )
}


export default Stack;