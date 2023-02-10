import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, css, Typography} from "@mui/material";
import "./Nav.css"
import Users from "./Users";
import Orga from "./Orga";
import { API, graphqlOperation } from 'aws-amplify';
import {getIdUser, getUsers} from "../graphql/queries";

/*
const updateOrga = `mutation UpdateOrga($input: UpdateOrgaInput!) {
  updateOrga(input: $input) {
    id
    name
    credits
    orga_type
    users_id
  }
}`;

async function updateOrgaCredits(id, credits) {
    const currentOrga = id.credits
    const newCredits = currentOrga + credits;
    const input = { id, credits: newCredits };
    const response = await API.graphql(graphqlOperation(updateOrga, { input }));
    console.log(response);
}*/
const Reclamation = () => {
    const [name, setName] = useState("");
    const [credit, setCredit] = useState(0);
    const [id, setId] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await API.graphql(graphqlOperation(getIdUser));
            console.log(response)
            const idList = response.data.listUsers.items
            console.log('id list',idList)
            setId(idList)
        })();
    }, []);




    return <div className={"Reclamation"}>
        <h1 style={{color:"#666"}}>Reclamation</h1>
        <form>
            <input type="text" placeholder="User Email" value={name} onChange={event => setName(event.target.value)}/>
            <Button type={"submit"}>OK</Button>
        </form>
        <br/>
        <h2>User : </h2>
        <ul>
                {name}
                <Users name={name}/>

        </ul>


        <br/>
        <h2>Organisation : </h2>
        <ul>
        <Orga/>
        </ul>
        <br/>
        <input type="number" placeholder="Credits"  onChange={event => setCredit(parseInt(event.target.value))}/>
        {credit}
        <Button /*onClick={() =>updateOrgaCredits(4,credit)}*/>Ajouter les credits</Button>


    </div>
};
export default Reclamation;
