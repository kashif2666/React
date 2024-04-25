/* eslint-disable react/prop-types */
const WelcomeMessage=({onGetPostsClick})=>{
return (
   <center className="welcome-message">
    <h1>Sorry, there are no posts avialable.</h1>
    <button type="button" onClick={onGetPostsClick} className="btn btn-primary">Get Posts From Server</button>
    
     </center>
    )
};

export default WelcomeMessage;