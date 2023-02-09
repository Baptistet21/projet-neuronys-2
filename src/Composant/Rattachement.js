import {Button} from "@mui/material";
import {useState} from "react";
import Users from "./Users";
import "./Nav.css"


const Reclamation = () => {
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");

    return<div className={"Rattachement"}>
        <h1 style={{color:"#666"}}>Rattachement</h1>
        <form>
            <input type="text" placeholder="User Email" onChange={event => setName(event.target.value)}/>
            <Button>OK</Button>
        </form>
        <br/>
        <form>
            <input type="text" placeholder="Organisation" onChange={event => setOrganisation(event.target.value)}/>
            <Button>OK</Button>
        </form>
        <br/>
        <h2>User : </h2>
        <ul>
        {name}
        <Users/>
        </ul>
        <br/>
        <h2>User Organisation  : </h2>

        <br/>
        <h2>Organisation Join : </h2>
        {organisation}
        <br/>
        <Button>Confirmer</Button>


    </div>
};

export default Reclamation;
