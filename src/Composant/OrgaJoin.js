import React,{useEffect, useState} from "react";
import {getOrgaByName} from "../graphql/queries";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import {useCookies} from "react-cookie";

function OrgaJoin() {
    const [orgaJoin, setOrgaJoin] = useState([]);
    const [Id, setId] = useState(0);
    const [cookies, setCookie] = useCookies(['OrgaJoinId']);

    useEffect(() => {
        (async () => {
            const response = await API.graphql(graphqlOperation(getOrgaByName));
            const orgaList = response.data.listOrganisations.items
            console.log('orga join',orgaList)
            setOrgaJoin(orgaList)
            setId(orgaList.map(item => item.id))
            console.log("setId",setId)



        })();
    }, []);

    useEffect(() => {
        console.log("id",Id)
        setCookie('OrgaJoinId', Id, { path: '/' ,sameSite:'none',secure:true});

    }, [Id]);
    console.log("cookies",cookies)



    return (
        <div>
            <h3>Id : {Id} </h3>
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