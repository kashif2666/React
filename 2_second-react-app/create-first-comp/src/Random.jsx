function Random(){
let number=Math.random()*100;
return <h3 style={{'backgroundColor':'#776691'}}>Random no. is {Math.round(number)}</h3>
}

export default Random;