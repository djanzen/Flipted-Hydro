import React, { useState  } from 'react';
import { useHistory } from 'react-router';
import './TaskOverview.css';

const TASK_COMPONENT_PATH = "/task";

function MTaskOverview(props) {

  const hist = useHistory();

  if(!props.task){
    return <div></div>;
  }
    
  const mapRequirements = (req) => {
    if(!req) return [];
    return req.map(({description,id}) => (
      <div key={id}>
        <input type="checkbox" value="A1" id="A1"/> 
        <label for="A1">{description}</label>
      </div>))
  }

  function changeToTaskScreen(taskId){
    console.log(taskId);
    hist.push({
      pathname:TASK_COMPONENT_PATH,
      state: {
        id: taskId,
        test: "string"
      }
    });
  }

   return (
      <div>
         <h1>{props.task.name}</h1>
         <h2>{props.task.instructions}</h2>
         <h2>Points: {props.task.points}</h2>
         <h2>Due: {props.task.dueDate}</h2>
         <h2>{mapRequirements(props.task.requirements)}</h2>
         <div  className="start">
         <button onClick={() => changeToTaskScreen(props.task.id)}>Start</button>
         </div>
      </div>
   );
}

export default MTaskOverview;