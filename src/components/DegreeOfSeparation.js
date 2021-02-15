import React, { useState, useEffect } from 'react'
import './PersonForm.css'
import Axios from 'axios'
import {FaArrowAltCircleDown} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';


function DegreeOfSeparation() {
    const [items, setItems] = useState([])
    const [firstPerson, setFirstPerson] = useState("")
    const [secondPerson, setSecondPerson] = useState("")
    const [degree, setDegree] = useState([])

    useEffect(() => {
        async function getCharacters() {
            const json = await Axios.get('https://relationship-degree-app.herokuapp.com/persons')
            const body = json.data;
            setItems(body.map(({ name }) => ({ label: name, value: name })));
        }
        getCharacters();
    }, []);

    
    async function calculateDegree(first, last) {
        const arr = []  
        const res = await Axios.get('https://relationship-degree-app.herokuapp.com/relations')
        const data =await res.data
       
        //handle sepration
        for (let i = 0; i < data.length; i++) {
            if (data[i].person1Name === first ) {
               arr.push(data[i].person1Name, data[i].person2Name)
                if (arr[arr.length - 1] === last && arr[0] === first) {
                    return arr
                }
            }

            if (arr[arr.length - 1] === data[i].person1Name) {
                arr.push(data[i].person2Name)
                if (arr[arr.length - 1] === last && arr[0] === first) {
                    return arr
                }
            }
        }
        if (arr[arr.length - 1] === last && arr[0] === first) {
            return arr
        }

        return

    }

    async function handleClick() {
        console.log("Find Degree")
        await setDegree(await calculateDegree(firstPerson, secondPerson))
        console.log(degree);
    }

    const mapping = ()=>{
        if(degree){
            console.log(degree);
           return degree.map((value,key)=>(
                <>
                <FaArrowAltCircleDown />
                <h5 key={key}>{value}</h5>
                </>
             ))
        }else{
            return <span>No Relation</span>
        }
    }

    return (
        <div className="App">
            <br />
            <select onChange={(e) => {
                setFirstPerson(e.target.value)
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
            <select onChange={(e) => {
                setSecondPerson(e.target.value)
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
            <Button variant="dark" onClick={handleClick}>Find</Button>
            <h1>Degree of Separation</h1>
            {mapping()}
        </div>
    )
}

export default DegreeOfSeparation
