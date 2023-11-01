import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function Home() {
  const [name,setName]=useState("");
  const navigate=useNavigate();
const navigateToList = () =>{

  navigate(`/TaskList/${name}`)

}
  return (
    // <div>
       
    //     <label for="fname">First name:</label>
    //     <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
    //     <button onClick={()=>navigateToList()}>ENVOYER</button>
    // </div>

<Card className="text-center">
<Card.Header>First name:</Card.Header>
<Card.Body>
  <Card.Title>~~~~~~~~~~~~~~~~~~</Card.Title>
  <Card.Text>
  <div style={{  textAlign:'center'} }>
  <Form.Control type="text" style={{ width: 500, alignItems:'center',margin:'auto'}} placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
</div>
    </Card.Text>
  <Button  variant="primary" onClick={()=>navigateToList()} >ENVOYER</Button>
</Card.Body>
<Card.Footer className="text-muted">-----------------------------------</Card.Footer>
</Card>
  )
}

export default Home