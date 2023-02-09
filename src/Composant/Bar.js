import * as React from 'react';
import {AmplifySignOut} from "@aws-amplify/ui-react";
import {AppBar, Avatar, Box, Toolbar, Typography} from "@mui/material";
const Bar = ({currentUser}) =>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Avatar>{currentUser.attributes.email[0]}</Avatar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {currentUser.attributes.email}
                </Typography>


                <AmplifySignOut/>
            </Toolbar>
        </AppBar>
    </Box>



export default Bar;