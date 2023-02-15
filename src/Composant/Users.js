import React,{useEffect, useState} from "react";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import query from "./query"




function Users({idUser}) {
    const [users, setUsers] = useState([]);
    const [orga, setOrga] = useState([]);
    console.log("idUser",idUser)

        async function getUser() {
            console.log(idUser)
                const response = await API.graphql(graphqlOperation(query.getUserOrga(idUser)));
                console.log(response)
                const userList = response.data.getUser
                const orgaList = response.data.getUser.orga
                console.log('user list', userList)
                setUsers(userList)
                console.log('orga list', orgaList)
                setOrga(orgaList)
            }

        if(idUser.length > 0) {
            console.log("getUser",getUser())
        }
      



    return (

        <div>
            <h2>User : </h2>
            <ul>
                <div key={users.id}>
                    <h4>email : {users.email}</h4>
                    <p>pseudo : {users.pseudo}</p>
                    <p>orga_rank : {users.orga_rank}</p>
                </div>
            </ul>
            <br/>
            <h2>Organisation : </h2>
            <ul>
                <div key={users.id}>
                    <h4>Organisation name : {orga.name}</h4>
                    <p>credits : {orga.credits}</p>
                    <p>orga_type : {orga.orga_type}</p>
                    <p>stripe_id : {orga.stripe_id}</p>
                </div>
            </ul>
            <br/>
        </div>

    );
}

export default Users;