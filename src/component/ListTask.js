import React from 'react'
import { useParams } from 'react-router'
import Task from './Task'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Addtask from './Addtask';


function ListTask() {
  const {name}=useParams()
  const tasks= useSelector((state)=>state.task)

  return (
    <div style={{textAlign:'center' , margin:'auto'}}>
    <div>Welcome back M. {name}</div>
    <div style={{textAlign:'center' , margin:'auto'}}><Addtask/> </div>
    <div style={{textAlign:'center', margin:'auto'}}>
      {tasks.map((task,key)=>(
        <div style={{ width: 500, alignItems:'center',margin:'auto'}} >
        <Card 
        style={{  alignItems:'center',margin:'auto'}}
        
        
        
      >
          <Task key={key} task={task} style={{ width: 500, alignItems:'center',margin:'auto'}} /> 
          </Card>
          </div>
      ))}
</div>
    </div>
  )
}

export default ListTask