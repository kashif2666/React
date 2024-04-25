import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls=()=>{

  const inputElement=useRef();

  const dispatch=useDispatch();

  const handleIncrement=()=>{
dispatch({type: "INCREMENT"});
  }
  
  const handleDecrement=()=>{
dispatch({type: "DECREMENT"});
    
  }
  const handlePrivacyToggle=()=>{
    dispatch({type: "PRIVACY_TOGGLE"});
        
      }
  const handleReset=()=>{
        dispatch({type: "RESET"});
            
  }
const handleAdd=()=>{
    dispatch({type: "ADD",
  payload:{
    num: inputElement.current.value,
  },
});
inputElement.current.value="";
       
}
  const handleSubtract=()=>{
        dispatch({type: "SUBTRACT",
        payload:{
          num: inputElement.current.value,
        },
      });
inputElement.current.value="";
            
 }
  return(
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
   <button type="button" className="btn btn-success" onClick={handleIncrement}>+1</button>
   <button type="button" className="btn btn-danger" onClick={handleDecrement}>-1</button>
   <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
   <button type="button" className="btn btn-dark" onClick={handleReset}>RESET</button>

  </div>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
   <input type="text" className="number-input" ref={inputElement} placeholder="Enter a number" />
   <button type="button" className="btn btn-info" onClick={handleAdd}>ADD</button>
   <button type="button" className="btn btn-secondary" onClick={handleSubtract}>SUBTRACT</button>

  </div>
  </>
  );

};

export default Controls;