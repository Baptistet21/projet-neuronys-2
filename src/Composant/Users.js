import React,{useEffect, useState} from "react";
import {getUsers} from "../graphql/queries";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";




function Users({name}) {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await API.graphql(graphqlOperation(getUsers));
            console.log(response)
            const userList = response.data.listUsers.items
            console.log('user list',userList)
            setUsers(userList)
        })();
    }, []);

    return (
        <div>
            <div>
                {
                    users.map(item => (
                        <div key={item.id}>
                            <h4>email : {item.email}</h4>
                            <p>pseudo : {item.pseudo}</p>
                            <p>users_id : {item.id}</p>
                            <p>orga_id : {item.orga_id}</p>
                            <p>orga_rank : {item.orga_rank}</p>



                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Users;