import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/TaskSlice';
import { Button } from 'react-bootstrap';


function Addtask() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [isdone, setIsdone] = useState("");

  const HandleAdd = () => { 
    
    title !== ""?dispatch(addTask({title,isdone})):alert("Forgot to right something!");
    setTitle("");
  };

  return (
    <div style={{ width: 500, alignItems:'center',margin:'auto'}} >
       <Form.Label >Add TAsk</Form.Label>
      <Form.Control style={{ width: 500, alignItems:'center'}} size="sm"
        type="text"
        id="addtaskinput"
        aria-describedby="taskaddinfo"
        placeholder='add task'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      
      <Form.Text muted> Etat</Form.Text>
      <Form.Check type='checkbox' style={{ width: 500, alignItems:'center'}}
       onChange={(e) => setIsdone(e.target.checked)} />
      
      <label>
        
        <Button
          onClick={() => HandleAdd()}
          size='sm'
        >
          add
         </Button>
      </label>
<br/>
<br/>

    </div>
  )
}

export default Addtask