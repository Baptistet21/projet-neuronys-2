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
import mutation from "./mutation";


const Rattachement = () => {
    const [name, setName] = useState(""); /* email rentré dans form */
    const [organisation, setOrganisation] = useState(""); /* nom orga rentré dans form */
    const [idUser, setIdUser] = useState([]); /* resultat de getIdUser */
    const [creditsUser, setCreditsUser] = useState(0) /* resultat de getCreditUser */
    const [idOrga, setIdOrga] = useState([]) /* resultat de getOrganisationId */
    const [creditsOrga, setCreditsOrga] = useState(0)



    /* rattachement + update credits */
    async function updateOrganisationUser() {
        let creditsValid = creditsUser + creditsOrga
        const response = await API.graphql(graphqlOperation(mutation.updateCredits(idOrga, creditsValid)));
        const response2 = await API.graphql(graphqlOperation(mutation.updateOrga(idUser, idOrga)));
        console.log("mutation",response);
        console.log("mutation",response2);


    }


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
        const orgaList = response.data.listOrganisations.items.map(item => item.id);
        const creditsList = response.data.listOrganisations.items.map(item => item.credits);
        setCreditsOrga(creditsList[0])
        setIdOrga(orgaList[0])
        return idOrga
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
            {idOrga && <OrgaJoin id={idOrga}/>}
        </ul>
        <br/>
        <Button onClick={() =>updateOrganisationUser()}>Confirmer</Button>


    </div>
};

export default Rattachement;
