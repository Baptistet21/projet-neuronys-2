import React, {useEffect, useState} from "react";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import query from "../Fonction_graphql/query"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled, TableCell, tableCellClasses} from "@mui/material";



function Users({idUser}) {
    const [users, setUsers] = useState([]);
    const [orga, setOrga] = useState([]);

        async function getUser() {
                const response = await API.graphql(graphqlOperation(query.getUserOrga(idUser)));
                const userList = response.data.getUser
                const orgaList = response.data.getUser.orga
                setUsers(userList)
                setOrga(orgaList)
            }

    /*permet de lancer qu'une seule fois la fonction*/

    useEffect(() => {
            if(idUser.length > 0) {
                console.log("getUser",getUser())
            }
    },[idUser]);


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor:  theme.palette.primary.dark,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 20,
        },
    }));

      



    return (
        /*
        <TableContainer component={Paper}>
            <br/> <br/>
            <h2>User : </h2>

            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">email</StyledTableCell>
                        <StyledTableCell align="center">pseudo</StyledTableCell>
                        <StyledTableCell align="center">orga_rank</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                            <StyledTableCell align="center">{users.email}</StyledTableCell>
                            <StyledTableCell align="center">{users.pseudo}</StyledTableCell>
                            <StyledTableCell align="center">{users.orga_rank}</StyledTableCell>

                </TableBody>
            </Table>
            <br/>
            <h2>Organisation : </h2>

            <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Organisation name</StyledTableCell>
                    <StyledTableCell align="center">credits</StyledTableCell>
                    <StyledTableCell align="center">orga_type</StyledTableCell>
                    <StyledTableCell align="center">stripe_id</StyledTableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                    <StyledTableCell align="center">{orga.name}</StyledTableCell>
                    <StyledTableCell align="center">{orga.credits}</StyledTableCell>
                    <StyledTableCell align="center">{orga.orga_type}</StyledTableCell>
                    <StyledTableCell align="center">{orga.stripe_id}</StyledTableCell>

            </TableBody>
        </Table>
    </TableContainer>
    );*/


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
                    <p>users_id : {orga.users_id}</p>

                </div>
            </ul>
            <br/>
        </div>

    );
}

export default Users;