// eslint-disable-next-line react/prop-types
const Container=({children})=>{
  return(
    <div className="card" style={{width: "70%"}}>
  <div className="card-body">
   {children}
  </div>
</div>
  );

};

export default Container;