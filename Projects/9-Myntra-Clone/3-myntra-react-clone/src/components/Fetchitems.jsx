import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";


const FetchItems=()=>{
  const fetchStatus=useSelector((store)=>store.fetchStatus);
  const dispatch=useDispatch();
  // console.log("FetchStatus",fetchStatus);

  useEffect(()=>{
    if(fetchStatus.fetchDone) return;

    const controller=new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch('http://localhost:8080/items',{signal})
    .then((res) => res.json())
    .then(({items})=>{
      dispatch(fetchStatusActions.markFetchDone());
    dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(itemsActions.addInitialitems(items));
    });

    return ()=>{
  
      controller.abort();
    }
  },[dispatch, fetchStatus]);

  // console.log("Fetch Status 2",fetchStatus);
  return (
<>
</>
  );
}

export default FetchItems;