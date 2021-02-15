import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PersonForm.css'


function personForm() {

    const [name,setName] = useState('')
    const [nameList,setNameList] = useState([])
    const [newName,setNewName] = useState('')

    const handleChange= (e)=>{
        setName(e.target.value)
    }

    useEffect(()=>{
        Axios.get('https://relationship-degree-app.herokuapp.com/persons').then((res)=>{
            setNameList(res.data);
        })
    },[name])
    const createPerson = ()=>{
        Axios.post('https://relationship-degree-app.herokuapp.com/persons',{
            name : name
        })
    }

    const updateName = (id)=>{
        Axios.patch(`https://relationship-degree-app.herokuapp.com/persons/update`,{
            newName,
            id
        })
    }

    const deletePerson = (id)=>{
        Axios.delete(`https://relationship-degree-app.herokuapp.com/persons/${id}`)
    }

    return (
        <div className="App">
            <Container>
            <br />
            <label>Person Name:</label>
            <input type="text" onChange={handleChange} />
            <Button className="create" variant="outline-dark" onClick={createPerson}>Add to List</Button>
            </Container>
            {nameList.map((value,key)=>(
                <Container  key={key}>
                <Row >
                <Col>
                <Card className="list" >
                <h5>{value.name}</h5>
                <input type="text" onChange={(e)=>setNewName(e.target.value)}/>
                <Button variant="dark" onClick={()=>updateName(value._id)}>Update</Button>
                <Button variant="dark" onClick={()=>deletePerson(value._id)}>Delete</Button>
                </Card>
                </Col>
                </Row>
                </Container>
            ))}
        </div>
    )
}

export default personForm
