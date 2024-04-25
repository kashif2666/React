import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function TodoItem({todoName,todoDate, onDeleteClick}){

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
    <button type="button" className="btn btn-danger kg-btn" onClick={()=>onDeleteClick(todoName)}>
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