import React,{useEffect, useState} from "react";
import {getOrgaByName} from "../graphql/queries";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import {useCookies} from "react-cookie";
import query from "./query";

function OrgaJoin({id}) {
    const [orgaJoin, setOrgaJoin] = useState([]);

    console.log("user organisation id",id)


    async function getOrganisation() {
            const response = await API.graphql(graphqlOperation(query.getOrgaByID(id)));
            const orgaList = response.data.listOrganisations.items
            console.log('orga join',orgaList)
            setOrgaJoin(orgaList)
            return orgaJoin



        }

        if (id !== 0){
            console.log("getOrga",getOrganisation())
        }





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