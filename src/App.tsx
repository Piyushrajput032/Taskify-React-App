import React,{useState} from 'react';
import './App.css';
import InputField from './component/InputField';
import TodoList from './component/Todolist';
import {Todo} from "./model";

// let name:string;
// let age:number |string;
// let isstudent:boolean;
// let hobies:string[];
// let roletup:[number,string];

// //object
// let person:object;


// let persin:Person={name:"piyush"};

// let lotsofPeople:Person[];

// //define a function
// function printName(name:string){
//   console.log(name);
// };
// let printNme:(name:string)=>never;


// printName("anshu");
// type X=Person &{
//   a:string;
//   b:number;
// }
// type Y={
//   c:string;
//   d:number;
// }
// let y :Y={
//   c:"anshu singh",
//   d:42,
// }
// interface Person{
//   name:string;
//   age?:number;
// }
// interface yue extends Person{
//   profession:string;
// }
// let a:yue={
//   profession:"it",
//   name:"anshu"

// }
// enum b{
//   abc=41,def
// }

const App=()=> {
  const[todo,setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  };
  console.log(todos)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
