import React from "react";
import{useState} from 'react';
//サンプルコードをテストしたい場合はexportから下を変更する
let maxId = 0;
export default function StateTodo(){
  const [title, setTitle]=useState('');
  const [todo, setTodo] =useState([]);

  const handleChangeTitle = e =>{
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id : ++maxId,
        title,
        created : new Date(),
        isDone : false
      }
    ]);
  };
  return(
    <div>
     <label>
      やること：<input type="text" name="title" value={title} onChange={handleChangeTitle}/>
     </label>
     <button type="button" onClick={handleClick}>追加</button>
     <hr />
     <ul>
      {todo.map(item =>(
        <li key={item.id}>{item.title}</li>
      ))}
     </ul>
    </div>
  ); 
 }