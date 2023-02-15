import {Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import Users from "./Users";
import "./Nav.css"
import Orga from "../Composant_delete/Orga";
import OrgaJoin from "./OrgaJoin";
import {API, graphqlOperation} from "aws-amplify";
import {getIdByName, getIdUser} from "../graphql/queries";
import {useCookies} from "react-cookie";
import query from "./query";


const Reclamation = () => {
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [idUser, setIdUser] = useState([]);
    const [creditsUser, setCreditsUser] = useState(0)
    const [idUserOrga, setIdUserOrga] = useState([])


    /* recup id user*/


    async function getIdUser() {
        const response = await API.graphql(graphqlOperation(query.getIdByName(name)));
        const idList = response.data.byEmail.items.map(item => item.id);
        setIdUser(idList[0])
        return idUser
    }

    /* recup credit user*/
    async function getCreditUser() {

        const response = await API.graphql(graphqlOperation(query.getIdByName(name)));
        const creditList = response.data.byEmail.items.map(item => item.orga.credits)
        setCreditsUser(creditList[0])
        return creditsUser
    }

    /* recuperer id organisation*/

    async function getOrganisationId() {
        const response = await API.graphql(graphqlOperation(query.getOrgaIdByName(organisation)));
        const orgaList = response.data.listOrganisations.items[0].users.items.map(user => user.id);        console.log("idUserOrga",orgaList)
        setIdUserOrga(orgaList[0])
        return idUserOrga




    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('getId :',getIdUser())
        console.log('getCredit :',getCreditUser())
    };

    const handleSubmit2 = event => {
        event.preventDefault();
        console.log('getOrgaJoin :',getOrganisationId())
    };





    return<div className={"Rattachement"}>
        <h1 style={{color:"#666"}}>Rattachement</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="User Email" value={name} id={name} onChange={event => setName(event.target.value)} required/>
            <Button type={"submit"}>OK</Button>

        </form>
        <br/>
        <form onSubmit={handleSubmit2}>
            <input type="text" placeholder="Organisation name" value={organisation} onChange={event => setOrganisation(event.target.value)} required/>
            <Button type={"submit"}>OK</Button>

        </form>
        <br/>
        <form>
        </form>
        <br/>
        {idUser ? <Users idUser={idUser}/> : <div>Aucun utilisateur sélectionné</div>}
        <br/>
        <h2>Organisation Join : </h2>
        <ul>
            {idUserOrga && <OrgaJoin id={idUserOrga}/>}
        </ul>
        <br/>
        <Button>Confirmer</Button>


    </div>
};

export default Reclamation;
