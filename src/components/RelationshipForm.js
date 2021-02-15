import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './PersonForm.css'
import Button from 'react-bootstrap/Button';



function RelationshipForm() {
    const [items, setItems] = useState([])
    const [person1, setPerson1] = useState("")
    const [relation, setRelation] = useState("")
    const [person2, setPerson2] = useState("")
    const [newRelation,setNewRelation] = useState("")
    const [relationsList,setRelationsList] = useState([])

    const createRelation = () => {
        Axios.post('https://relationship-degree-app.herokuapp.com/relations', {
            person1Name: person1.toString(),
            relation,
            person2Name: person2.toString()
        })
    }

    useEffect(()=>{
        Axios.get('https://relationship-degree-app.herokuapp.com/relations').then((res)=>{
            setRelationsList(res.data);
        })
    },[])

    useEffect(() => {
        async function getCharacters() {
          const json  =await  Axios.get('https://relationship-degree-app.herokuapp.com/persons')
          const body = json.data;
          setItems(body.map(({ name }) => ({ label: name, value: name })));
        }
        getCharacters();
      }, []);

    const updateRelationName = (id)=>{
        Axios.patch(`https://relationship-degree-app.herokuapp.com/relations/update`,{
            newRelation,
            id
        })
    }

    const deleteRelation = (id)=>{
        Axios.delete(`https://relationship-degree-app.herokuapp.com/relations/${id}`)
    }


    return (
        <div className="App">
            <br />
            <h1>Relationship Form</h1>
            <select onChange={(e) => {
                    setPerson1(e.target.value)
                }}>
                <option>
                    First Person
                </option>
                {items.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="Add Relationship Tag" onChange={(e) => {
                setRelation(e.target.value)
            }} />
            <select onChange={(e) => {
                    setPerson2(e.target.value)
                }}>
                <option>
                    Second Person
                </option>
                {items.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            <Button onClick={createRelation}>Add to List</Button>
            {relationsList.map((value,key)=>(
                <div key={key} className="list">
                <h5>Person 1 : {value.person1Name}</h5>
                <h5>Relation Tag : {value.relation}</h5>
                <h5>Person 2 : {value.person2Name}</h5>
                <input type="text" placeholder="Edit Tag" onChange={(e)=>setNewRelation(e.target.value)}/>
                <Button variant="dark" onClick={()=>updateRelationName(value._id)} >Update</Button>
                <Button variant="dark" onClick={()=>deleteRelation(value._id)}>Delete</Button>
                </div>
            ))}
        </div>
    )
}

export default RelationshipForm