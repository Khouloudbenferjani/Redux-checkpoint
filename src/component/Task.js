import { Button, Card, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTask, editdone, } from '../redux/TaskSlice';
import { useState } from 'react';

function Task({ task }) {
  const dispatch = useDispatch();
  const [edittitle, setEdittitle] = useState("");
  const [oldtitle, setOldtitle] = useState("");
  const [editing, setEditing] = useState(false);
  // ...
  const handleEditing = () => {
    setEditing(!editing);
    setOldtitle(task.title)
    

  };

  const HandleUPDisDone = () => {
    dispatch(editdone(task.id))
  }
  const HandleEditeTask = () => {
    let id = task.id;
    dispatch(editTask({edittitle,id}));

  }

  const Handledelete = (id) => {
    const id1 = id;
    console.log(id1);
    dispatch(deleteTodo(id1));
  };

  return (
    <>


      <Card.Header style={{ width: '100%' }}> {task.id} :
      <Form.Control readOnly={editing} onClick={() => handleEditing() } style={{ width: '100%', alignItems:'center'}} size="sm"

        type="text" 
        placeholder={task.title}
        onChange={(e) => setEdittitle(e.target.value)}
        />
        </Card.Header>
      <ListGroup >

      </ListGroup>
      <ListGroup.Item>
        <Form.Check type='checkbox' checked={task.isdone} onChange={() => { HandleUPDisDone() }} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Button size='sm' onClick={() => HandleEditeTask() } >edit</Button> -----<Button onClick={() => Handledelete(task.id) } size='sm' >delet</Button>
      </ListGroup.Item>

    </>

  )
}

export default Task