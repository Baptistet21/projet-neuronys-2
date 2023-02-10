import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import Users from "./Users";
import "./Nav.css"
import Orga from "./Orga";
import OrgaJoin from "./OrgaJoin";
import {API, graphqlOperation} from "aws-amplify";
import {getIdUser} from "../graphql/queries";


const Reclamation = () => {
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [idUser, setIdUser] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await API.graphql(graphqlOperation(getIdUser));
            console.log(response)
            const idList = response.data.listUsers.items
            console.log('id list',idList)
            setIdUser(idList)
        })();
    }, []);

    return<div className={"Rattachement"}>
        <h1 style={{color:"#666"}}>Rattachement</h1>
        <form>
            <input type="text" placeholder="User Email" onChange={event => setName(event.target.value)}/>
            <>          </>
            <input type="text" placeholder="Organisation name" onChange={event => setOrganisation(event.target.value)}/>
            <br/>
            <Button>OK</Button>

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
