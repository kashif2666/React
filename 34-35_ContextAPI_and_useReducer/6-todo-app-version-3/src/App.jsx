import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";




function App() {
  return(
    <TodoItemsContextProvider>
     <center className='todo-container'>
    <AppName />
    <AddTodo />
   <WelcomeMessage ></WelcomeMessage>
    <TodoItems></TodoItems>
   </center>
   </TodoItemsContextProvider>
  );
}

export default App;
