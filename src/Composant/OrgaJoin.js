import React, {useEffect, useState} from "react";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import query from "./query";

function OrgaJoin({id}) {
    const [orgaJoin, setOrgaJoin] = useState([]);


    async function getOrganisation() {
        const response = await API.graphql(graphqlOperation(query.getOrgaByID(id)));
        const orgaList = response.data.listOrganisations.items
        setOrgaJoin(orgaList)
        return orgaJoin
    }

    /*permet de lancer qu'une seule fois la fonction*/

    useEffect(() => {
        if (id !== 0){
            console.log("getOrga",getOrganisation())
        }
    },[id]);




    return (
        <div>
            <div>
                {
                    orgaJoin.map(item => (
                        <div key={item.id}>
                            <h4>Organisation name : {item.name}</h4>
                            <p>credits : {item.credits}</p>
                            <p>orga_type : {item.orga_type}</p>
                            <p>stripe_id : {item.stripe_id}</p>



                        </div>
                    ))
                }
            </div>
        </div>
    );

}
export default OrgaJoin;