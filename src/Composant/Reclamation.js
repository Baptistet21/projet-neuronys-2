import React, {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import "./Nav.css"
import Users from "./Users";
import { API, graphqlOperation } from 'aws-amplify';
import query from "./query"
import mutation from "./mutation"


const Reclamation = () => {
    let [name, setName] = useState(""); /* email form */
    const [creditUpdate, setCreditUpdate] = useState(0); /* credits orga */
    const [credit, setCredit] = useState(0); /* credits form */
    let [id, setId] = useState([]); /* id user */
    const [orgaId, setOrgaId] = useState(0); /* id orga */


    /* fonction qui permet le changement de credits*/
    async function updateOrgaCredits() {
        let creditsValid = credit + creditUpdate
        await API.graphql(graphqlOperation(mutation.updateCredits(orgaId, creditsValid)));
        window.alert(name + " a maintenant " + creditsValid + " credits")
        window.location.reload()

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
        <h1 style={{color:"#099ac8"}}>Reclamation</h1>
        <form onSubmit={handleSubmit}>
            <TextField id={name} label="User Email" variant="standard" type="email" value={name} onChange={handleChange} required />
            <Button type={"submit"}>OK</Button>
        </form>
        <br/>
        {id ? <Users idUser={id}/> : <div>Aucun utilisateur sélectionné</div>}
        <br/>
        <TextField label="Credits" type="number" onChange={event => setCreditUpdate(parseInt(event.target.value))}></TextField>

        <>   </>
        <Button variant="contained" onClick={() =>updateOrgaCredits()}>Ajouter les credits</Button>


    </div>




};
export default Reclamation;
