import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import Users from "./Users";
import "./Nav.css"
import OrgaJoin from "./OrgaJoin";
import {API, graphqlOperation} from "aws-amplify";
import query from "../Fonction_graphql/query";
import mutation from "../Fonction_graphql/mutation";


const Rattachement = () => {
    const [name, setName] = useState(""); /* email rentré dans form */
    const [organisation, setOrganisation] = useState(""); /* nom orga rentré dans form */

    /*User*/
    const [idUser, setIdUser] = useState([]); /* resultat de getIdUser */
    const [creditsUser, setCreditsUser] = useState(0) /* resultat de getCreditUser */
    const [idOrgaUser, setIdOrgaUser] = useState([])
    const [TypeOrgaUser,setTypeOrgaUser] = useState("")


    /*Orga join*/
    const [idOrga, setIdOrga] = useState([]) /* resultat de getOrganisationId */
    const [creditsOrga, setCreditsOrga] = useState(0)
    let [userOrgaList, setUserOrgaList] = useState([]); /* resultat de getListUserByOrga */
    const [TypeOrgaJoin,setTypeOrgaJoin] = useState("")


    let [validButton,setValidButton] = useState("false") /* button validation */


    /* rattachement + update credits */
    async function updateOrganisationUser() {
        if(validButton === "true"){
        if (userOrgaList.includes(idUser)) {
            window.alert(name + " a déjà été ajouté à l'organisation : " + organisation)
            window.location.reload()

        }
        else if (TypeOrgaUser !== "solo") {
            window.alert(name + " appartient déjà à une organisation team ")
            window.location.reload()

        }
        else if (TypeOrgaJoin !== "team") {
            window.alert(organisation + " n'est pas une organisation team ")
            window.location.reload()

        }
        else  if (TypeOrgaUser === "solo" || !userOrgaList.includes(idUser) || TypeOrgaJoin === "team"){

            let creditsValid = creditsUser + creditsOrga
            userOrgaList.push(idUser)
            console.log('user',[userOrgaList])
            await API.graphql(graphqlOperation(mutation.updateCredits(idOrga, creditsValid))); /* transfert des credits dans la nouvelle organisation*/
            await API.graphql(graphqlOperation(mutation.updateCredits(idOrgaUser, 0))); /* l'ancienne organisation perd ses credits */
            await API.graphql(graphqlOperation(mutation.updateOrga(idUser, idOrga))); /* changement organisation pour User*/
            await API.graphql(graphqlOperation(mutation.updateListUserOrga(idOrga, [userOrgaList],"team")));/* update de la liste des users de la nouvelle organisation + changement de type*/
            await API.graphql(graphqlOperation(mutation.updateListUserOrga(idOrgaUser, [],"orphan")));/* liste des users ancienne organisation est vide + changement de type */


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
        const typeUserList = response.data.byEmail.items.map(item => item.orga.orga_type)
        setIdOrgaUser(orgaUserList[0])
        setCreditsUser(creditList[0])
        setTypeOrgaUser(typeUserList[0])
        console.log("type :", TypeOrgaUser)

        return creditsUser
    }

    /* recuperer id organisation*/

    async function getOrganisationId() {
        const response = await API.graphql(graphqlOperation(query.getOrgaIdByName(organisation)));
        const orgaList = response.data.listOrganisations.items.map(item => item.id);
        const creditsList = response.data.listOrganisations.items.map(item => item.credits);
        const TypeList = response.data.listOrganisations.items.map(item => item.orga_type);
        setCreditsOrga(creditsList[0])
        setIdOrga(orgaList[0])
        setTypeOrgaJoin(TypeList[0])
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
        {idUser ? <Users idUser={idUser}/> : <div> Aucun utilisateur trouvé </div>}
        <br/>
        <h2>Organisation Join : </h2>
        <ul>
            {idOrga ? <OrgaJoin id={idOrga}/> : <div> Aucune organisation trouvée </div>}
        </ul>
        <br/>
        <Button variant="contained" onClick={() =>updateOrganisationUser()}>Confirmer</Button>


    </div>
};

export default Rattachement;
