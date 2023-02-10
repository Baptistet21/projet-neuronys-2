import React,{useEffect, useState} from "react";
import {getOrga, getUsers, listOrganisations, listUsers} from "../graphql/queries";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";




function Orga({id}) {
    const [orga, setOrga] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await API.graphql(graphqlOperation(getOrga));
            console.log('Orga :',response)
            const orgaList = response.data.listOrganisations.items
            console.log('orga list',orgaList)
            setOrga(orgaList)
            })();
    }, []);

    return (
        <div>
            <div>
                {
                    orga.map(item => (
                        <div key={item.id}>
                            <h4>name : {item.name}</h4>
                            <p>id_orga : {item.id}</p>
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