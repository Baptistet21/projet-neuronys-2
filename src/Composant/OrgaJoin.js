import React,{useEffect, useState} from "react";
import {getOrgaByName, getUsers} from "../graphql/queries";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";





function OrgaJoin() {
    const [orgaJoin, setOrgaJoin] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await API.graphql(graphqlOperation(getOrgaByName));
            console.log('Orga Join :',response)
            const orgaList = response.data.listOrganisations.items
            console.log('orga list join',orgaList)
            setOrgaJoin(orgaList)


        })();
    }, []);
    return (
        <div>
            <div>
                {
                    orgaJoin.map(item => (
                        <div key={item.id}>
                            <h4>name : {item.name}</h4>
                            <p>orga_id : {item.id}</p>
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
export default OrgaJoin;