import React,{useEffect, useState} from "react";
import {getOrga, getUsers, listUsers} from "../graphql/queries";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";





function Orga() {
    const [orga, setOrga] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await API.graphql(graphqlOperation(getOrga));
            console.log(response)
            })();
    }, []);

    return (
        <div>
            <div>
                {
                    orga.map(item => (
                        <div key={item.id}>
                            <h4>id : {item.id}</h4>
                            <p>name : {item.name}</p>
                            <p>credits : {item.credits}</p>
                            <p>orga_type : {item.orga_type}</p>
                            <p>users_id : {item.users_id}</p>



                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Orga;