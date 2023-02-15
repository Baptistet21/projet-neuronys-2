import React, {useState} from "react";
import {Button} from "@mui/material";
import "./Nav.css"
import Users from "./Users";
import { API, graphqlOperation } from 'aws-amplify';
import {updateCredits} from "../graphql/mutations";
import query from "./query"
import mutation from "./mutation"

import {getIdUser} from "../graphql/queries";

const Reclamation = () => {
    let [name, setName] = useState("");
    const [creditUpdate, setCreditUpdate] = useState(0);
    const [credit, setCredit] = useState(0);
    let [id, setId] = useState([]);
    const [orgaId, setOrgaId] = useState(0);


    /* fonction qui permet le changement de credits*/
    async function updateOrgaCredits() {
        let creditsValid = credit + creditUpdate
        const response = await API.graphql(graphqlOperation(mutation.updateCredits(orgaId, creditsValid)));
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
    /* recup id orga user*/

    async function getOrgaId() {

        const response = await API.graphql(graphqlOperation(query.getIdByName(name)));
        const creditList = response.data.byEmail.items.map(item => item.orga.id)
        setOrgaId(creditList[0])
        return orgaId
    }

    console.log('id',id)
    const handleSubmit = event => {

        event.preventDefault();
        console.log('getId :',getId())
        console.log('getCredit :',getCredit())
        console.log('getIdOrga :',getOrgaId())




    };

    const handleChange = event => {
        setName(event.target.value);

    };

    return <div className={"Reclamation"}>
        <h1 style={{color:"#666"}}>Reclamation</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="User Email" onChange={handleChange} required/>
            <Button type={"submit"}>OK</Button>
        </form>
        <br/>
        {id ? <Users idUser={id}/> : <div>Aucun utilisateur sélectionné</div>}
        <br/>
        <input type="number" placeholder="Credits"  onChange={event => setCreditUpdate(parseInt(event.target.value))}/>
        <Button onClick={() =>updateOrgaCredits()}>Ajouter les credits</Button>


    </div>




};
export default Reclamation;
