import {useEffect, useState} from "react";
import {Button, Card, CardContent, css, Typography} from "@mui/material";
import "./Nav.css"
import Users from "./Users";
import Orga from "./Orga";


const Reclamation = () => {
    const [name, setName] = useState("");
    const [credit, setCredit] = useState(0);







    return <div className={"Reclamation"}>
        <h1 style={{color:"#666"}}>Reclamation</h1>
        <form>
            <input type="text" placeholder="User Email" onChange={event => setName(event.target.value)}/>
            <Button type="submit">OK</Button>
        </form>
        <br/>
        <h2>User : </h2>
        <ul>
                {name}
                <Users/>


        </ul>


        <br/>
        <h2>Organisation : </h2>
        <ul>
        <Orga/>
        </ul>
        <br/>
        <input type="number" placeholder="Credits"  onChange={event => setCredit(parseInt(event.target.value))}/>
        {credit}
        <Button>Ajouter les credits</Button>


    </div>
};
export default Reclamation;
