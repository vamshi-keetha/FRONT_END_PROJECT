import react from "react";
import {useSelector} from 'react-redux'

function Todolist(){

// get todosstate from store

  let todolist=   useSelector(state=>state.todos)


  return(<div>
<p className="display-5 text-primary">list of objects</p>
{/* display the items */}
<div className="text-center">
  {
    todolist.map((todo,index) =><h1 key={index}>{todo}</h1>)
  }
</div>
  </div>
  )
}

export default Todolist;