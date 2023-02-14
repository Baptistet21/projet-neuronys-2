import React, {useState} from "react";
import {Button} from "@mui/material";
import "./Nav.css"
import Users from "./Users";
import { API, graphqlOperation } from 'aws-amplify';
import {updateCredits} from "../graphql/mutations";
import query from "./query"

const Reclamation = () => {
    let [name, setName] = useState("");
    const [creditUpdate, setCreditUpdate] = useState(0);
    const [credit, setCredit] = useState(0);
    let [id, setId] = useState(0);

    /* fonction qui permet le changement de credits*/
    async function updateOrgaCredits() {
        /* pas de parametre encore*/
        const response = await API.graphql(graphqlOperation(updateCredits))
        console.log("mutation",response);
    }

    /* recup id user*/
    async function getId() {
            const response = await API.graphql(graphqlOperation(query.getIdByName(name)));
            const idList = response.data.byEmail.items.map(item => item.id);
            setId(idList[0])
            return id
    }

    /* recup credit user*/
    async function getCredit() {

        const response = await API.graphql(graphqlOperation(query.getIdByName(name)));
        const creditList = response.data.byEmail.items.map(item => item.orga.credits)
        setCredit(creditList[0])
        return credit
    }



    const handleSubmit = event => {
        event.preventDefault();
        console.log('getId :',getId())
        console.log('getCredit :',getCredit())



    };

    const handleChange = event => {
        setName(event.target.value);

    };

    return <div className={"Reclamation"}>
        <h3>id : {id} credits : {credit}</h3>
        <h1 style={{color:"#666"}}>Reclamation</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="User Email" value={name} id={name} onChange={handleChange} required/>
            <Button type={"submit"}>OK</Button>
        </form>
        <br/>
        <Users idUser={id}/>
        <br/>
        <input type="number" placeholder="Credits"  onChange={event => setCreditUpdate(parseInt(event.target.value))}/>
        {creditUpdate}
        <Button onClick={() =>updateOrgaCredits()}>Ajouter les credits</Button>


    </div>




};
export default Reclamation;
