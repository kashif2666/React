


import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import './App.css'
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';
function App() {
//  if-else condition
// let foodItems=[];
  // let foodItem=["Dal","Green veggies","Roti","Fruits","Salad","Milk","Ghee"];
  // let emptyMessage=foodItem.length==0 ? <h3>I am still Hungry</h3> : null;

  // if(foodItem.length==0){
  //   return <h3>I am still Hungry.</h3>
  // }

// method -1

  // let textStateArr=useState("Food Item Entered by user.");
  // let textToShow=textStateArr[0];
  // let setTextState=textStateArr[1];
  // console.log(`Current value of textState:${textToShow}`);

  // method -2

  let [textToShow,setTextState]=useState();

  const onKeyDown=(event)=>{
    if (event.key=='Enter') {
      let newFoodItem=event.target.value;
      event.target.value='';
      let newItems=[...foodItem, newFoodItem];
      setFoodItems(newItems)
      console.log('Food value entered is: '+newFoodItem);
    }
  
  }

  let [foodItem, setFoodItems]=useState([
    
  ]);
  return (
    <>
  <Container>
   
   
    <h1 className="food-heading">Healthy Foods</h1>
    
    {/* Ternary method */}
    {/* {emptyMessage} */}

    {/* Logical Method */}
    <ErrorMessage items={foodItem}></ErrorMessage>
   <FoodInput handleKeyDown={onKeyDown}></FoodInput>
   <p></p>
   <FoodItems items={foodItem}></FoodItems>
   </Container>
   <Container>
<p>Above is the list of Healthy Food Items for your health and Well being.</p>
   </Container>

   </>
  );
}

export default App;
