import PropTypes from "prop-types";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

// eslint-disable-next-line react/prop-types
function TodoItem({todoName,todoDate}){
  const {deleteItem} =useContext(TodoItemsContext);

  return (
    <div className="container">
   
  <div className="row kg-row">
    <div className="col-6">
     {todoName}
    </div>
    <div className="col-4">
     {todoDate}
     </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-btn" onClick={()=>deleteItem(todoName)}>
    <MdDelete />
    </button>
    </div>
  </div>
</div>
  );
  }

  TodoItem.propTypes={
    todoName: PropTypes.string,
    todoDate: PropTypes.string
  }
  
  export default TodoItem;