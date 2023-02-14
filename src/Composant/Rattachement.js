import {Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import Users from "./Users";
import "./Nav.css"
import Orga from "./Orga";
import OrgaJoin from "./OrgaJoin";
import {API, graphqlOperation} from "aws-amplify";
import {getIdByName, getIdUser} from "../graphql/queries";
import {useCookies} from "react-cookie";


const Reclamation = () => {
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [idUser, setIdUser] = useState([]);
    const [creditsUser, setCreditsUser] = useState(0)

    /* recuperer le id de l'organisation a rejoindre*/
    let [idOrgaJoin] = useCookies(['OrgaJoinId']);
    idOrgaJoin = idOrgaJoin.OrgaJoinId[0]

    console.log("idOrgaJoin",idOrgaJoin)

    /* recup id user*/


    async function getIdUser({email}) {

        const response = await API.graphql(graphqlOperation(getIdByName,{email}));
        console.log(response)
        const idList = response.data.byEmail.items.map(item => item.id);
        setIdUser(idList[0])
        console.log('id user :',idUser)
        return idUser
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Name: ${name}`, typeof name);
        console.log('getId :',getIdUser({name}))
        console.log('name :',typeof name, name)
        console.log('getCredit :',getCreditUser({name}))



    };

    /* recup credit user*/
    async function getCreditUser({email}) {

        const response = await API.graphql(graphqlOperation(getIdByName,{email}));
        console.log(response)
        const creditList = response.data.byEmail.items.map(item => item.orga.credits)
        setCreditsUser(creditList[0])
        console.log('credit :',creditsUser)
        return creditsUser
    }


    return<div className={"Rattachement"}>
        <h3>id : {idUser} credits : {creditsUser}</h3>

        <h1 style={{color:"#666"}}>Rattachement</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="User Email" value={name} id={name} onChange={event => setName(event.target.value)} required/>
            <Button type={"submit"}>OK</Button>

        </form>
        <br/>
        <form>
            <input type="text" placeholder="Organisation name" onChange={event => setOrganisation(event.target.value)} required/>
            <Button type={"submit"}>OK</Button>

        </form>
        <br/>
        <form>
        </form>
        <br/>
       <Users/>
        <br/>
        <h2>Organisation Join : </h2>
        <ul>
            {organisation}
            <OrgaJoin/>
        </ul>
        <br/>
        <Button>Confirmer</Button>


    </div>
};

export default Reclamation;
