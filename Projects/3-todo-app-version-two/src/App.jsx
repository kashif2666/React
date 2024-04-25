import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
   const todoItems=[
    {
      name: "Buy Milk",
      dueDate: "31/01/2024"
    },
    {
      name: "Go To College",
      dueDate: "31/01/2024"
    },
    {
      name: "Go To Market",
      dueDate: "31/01/2024"
    },
    {
      name: "Go To Party",
      dueDate: "31/01/2024"
    },

   ]
  return(
     <center className='todo-container'>
    <AppName />
    <AddTodo />
    <TodoItems todoItems={todoItems}></TodoItems>
   </center>
  );
}

export default App;
