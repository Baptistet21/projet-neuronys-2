import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import Users from "./Users";
import "./Nav.css"
import OrgaJoin from "./OrgaJoin";
import {API, graphqlOperation} from "aws-amplify";
import query from "./query";
import mutation from "./mutation";


const Rattachement = () => {
    const [name, setName] = useState(""); /* email rentré dans form */
    const [organisation, setOrganisation] = useState(""); /* nom orga rentré dans form */

    /*User*/
    const [idUser, setIdUser] = useState([]); /* resultat de getIdUser */
    const [creditsUser, setCreditsUser] = useState(0) /* resultat de getCreditUser */
    const [idOrgaUser, setIdOrgaUser] = useState([])


    /*Orga join*/
    const [idOrga, setIdOrga] = useState([]) /* resultat de getOrganisationId */
    const [creditsOrga, setCreditsOrga] = useState(0)
    let [userOrgaList, setUserOrgaList] = useState([]); /* resultat de getListUserByOrga */

    let [validButton,setValidButton] = useState("false") /* button validation */


    /* rattachement + update credits */
    async function updateOrganisationUser() {
        if(validButton === "true"){
        if (userOrgaList.includes([idUser])) {
            window.alert(name + " a déjà été ajouté à l'organisation : " + organisation)
            window.location.reload()

        } else {

            let creditsValid = creditsUser + creditsOrga
            userOrgaList.push(idUser)
            console.log('user',[userOrgaList])
            await API.graphql(graphqlOperation(mutation.updateCredits(idOrga, creditsValid)));
            await API.graphql(graphqlOperation(mutation.updateOrga(idUser, idOrga)));
            await API.graphql(graphqlOperation(mutation.updateListUserOrga(idOrga, [userOrgaList])));
            await API.graphql(graphqlOperation(mutation.updateTypeOrga(idOrgaUser)));

            window.alert(name + " a été ajouté à l'organisation : " + organisation)
            window.location.reload()

            }}
        else {
            window.alert("Vous devez valider avant de confirmer")

        }

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
        const orgaUserList = response.data.byEmail.items.map(item => item.orga.id)
        setIdOrgaUser(orgaUserList[0])
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

    /* recuperer list user par orga*/

    async function getListUserByOrga() {
        const response = await API.graphql(graphqlOperation(query.getListUserByIdOrga(idOrga)));
        const userList = response.data.usersByOrga_idAndPseudo.items.map(item => item.orga.users_id);
        setUserOrgaList(userList[0])
        return userOrgaList
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


    const handleSubmit3 = event => {
        event.preventDefault();
        console.log('getOrgaJoin :',getListUserByOrga())
        setValidButton("true")



    };


    return<div className={"Rattachement"}>
        <h2>user : {userOrgaList}</h2>
        <h1 style={{color:"#099ac8"}}>Rattachement</h1>
        <form onSubmit={handleSubmit}>
            <TextField id={name} label="User Email" variant="standard" type="email"value={name} onChange={event => setName(event.target.value)} required />
            <Button type={"submit"}>OK</Button>

        </form>
        <br/>
        <form onSubmit={handleSubmit2}>
            <TextField label="Organisation name" variant="standard" type="text" value={organisation} onChange={event => setOrganisation(event.target.value)} required />
            <Button type={"submit"}>OK</Button>
        </form>
        <br/>
        <form onSubmit={handleSubmit3}>
            <Button variant="outlined" type={"submit"}>Valider</Button>
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
        <Button variant="contained" onClick={() =>updateOrganisationUser()}>Confirmer</Button>


    </div>
};

export default Rattachement;
