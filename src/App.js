import React from "react";
import PersonForm from "./components/PersonForm"
import RelationshipForm from "./components/RelationshipForm"
import DegreeOfSeparation from "./components/DegreeOfSeparation"
import {Link, Switch, Route} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import "./App.css"


function App(){
    return(
        <div className="home">
        
        <Navbar className="navbar mb-5">
                <Link className="mr-5" to="/">Home</Link>
                <Link className="mr-5" to="/persons">Create Person</Link>
                <Link to="/relations">Create Relation</Link>
        </Navbar>
            <Switch>
                <Route exact path="/">
                    <DegreeOfSeparation />
                </Route>
                <Route exact path="/persons">
                    <PersonForm />
                </Route>
                <Route exact path="/relations">
                    <RelationshipForm />
                </Route>
            </Switch>
        </div>
    )
}

export default App