import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";


function App() {
   

   const [todoItems,setTodoItems]=useState([]);

   const handleNewItem=(itemName,itemDueDate)=> {
  
  //   setTodoItems((currValue)=>{
  //     const newTodoItems=[...currValue,{ name: itemName, dueDate: itemDueDate }];
  //     return newTodoItems; 
  //  });

  // 2nd method
   setTodoItems((currValue)=>
    [...currValue,{ name: itemName, dueDate: itemDueDate }]);
   };

   const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item =>
      item.name !== todoItemName);
    setTodoItems(newTodoItems);
   
   }
  return(
     <center className='todo-container'>
    <AppName />
    <AddTodo onNewItem={handleNewItem} />
    {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
   </center>
  );
}

export default App;
