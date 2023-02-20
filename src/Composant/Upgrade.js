
import React, {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import "./Nav.css"
import Users from "./Users";
import { API, graphqlOperation } from 'aws-amplify';
import query from "../Fonction_graphql/query"
import mutation from "../Fonction_graphql/mutation"


const Upgrade = () => {
    let [name, setName] = useState(""); /* email form */
    const [creditUpdate, setCreditUpdate] = useState(0); /* credits orga */
    const [credit, setCredit] = useState(0); /* credits form */
    let [id, setId] = useState([]); /* id user */
    const [orgaId, setOrgaId] = useState([]); /* id orga */
    let [TypeOrga, setTypeOrga] = useState(""); /* rank user */



    /* fonction qui permet le changement de credits*/
    async function updateOrga() {
        if(TypeOrga === "solo") {
            let creditsValid = credit + creditUpdate
            await API.graphql(graphqlOperation(mutation.updateCredits(orgaId, creditsValid)));
            await API.graphql(graphqlOperation(mutation.updateTypeOrga(orgaId, "team")));

            window.location.reload()
        }
        else{
            window.alert(name + " appartient déjà à une organisation team ")
            window.location.reload()
        }

    }

    /* recup id user*/
    async function getIdUser() {
        const response = await API.graphql(graphqlOperation(query.getIdByName(name)));
        const idList = response.data.byEmail.items.map(item => item.id);
        setId(idList[0])
        return id
    }

    /* recup credit user et recup id orga user et Orga type*/
    async function getOrga() {

        const response = await API.graphql(graphqlOperation(query.getIdByName(name)));
        const creditList = response.data.byEmail.items.map(item => item.orga.credits)
        const IdList = response.data.byEmail.items.map(item => item.orga.id)
        const TypeList = response.data.byEmail.items.map(item => item.orga.orga_type)
        setOrgaId(IdList[0])
        setCredit(creditList[0])
        setTypeOrga(TypeList[0])
        return orgaId
    }


    const handleSubmit = event => {
        event.preventDefault();
        console.log('getId :',getIdUser())
    };

    const handleSubmit2 = event => {
        event.preventDefault();
        console.log('getCreditEtId :',getOrga())
    };
    const handleChange = event => {
        setName(event.target.value);

    };

    return <div className={"Reclamation"}>
        <h1 style={{color:"#099ac8"}}>Upgrade</h1>
        <form onSubmit={handleSubmit}>
            <TextField id={name} label="User Email" variant="standard" type="email" value={name} onChange={handleChange} required />
            <Button type={"submit"}>OK</Button>
        </form>
        <br/>
        <form onSubmit={handleSubmit2}>
            <TextField label="Credits" type="number" onChange={event => setCreditUpdate(parseInt(event.target.value))} required></TextField>
            <Button type={"submit"}>OK</Button>
        </form>
        <br/>
        {id ? <Users idUser={id}/> : <div>Aucun utilisateur sélectionné</div>}
        <br/>
        <>   </>
        <h3>{creditUpdate} crédits vont être ajouté à l'organisation de {name}</h3>
        <Button variant="contained" onClick={() =>updateOrga()}>Confirmer</Button>


    </div>




};
export default Upgrade;
