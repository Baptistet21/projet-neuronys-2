import React, { useState, useEffect } from 'react';
import './App.css';
import {Auth} from "aws-amplify";
import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import Bar from "./Composant/Bar";
import Nav from "./Composant/Nav"
import {withAuthenticator} from "@aws-amplify/ui-react";
import {Routes,Route} from "react-router-dom";
import Reclamation from "./Composant/Reclamation";
import Rattachement from "./Composant/Rattachement";


Amplify.configure(config);

function App() {
  const [currentUser,setCurrentUser] = useState(undefined)



  useEffect(() =>{
    async function getAuthUser() {
      setCurrentUser(await Auth.currentAuthenticatedUser())
    }
    getAuthUser()
  }, [])

  return currentUser ? <div>
    <Bar currentUser={currentUser}/>
    <Nav/>
    <div className="App">
      <Routes>
        <Route path="/reclamation" element={<Reclamation/>}/>
        <Route path="/rattachement" element={<Rattachement/>}/>


      </Routes>
    </div>
  </div> : null


}

export default withAuthenticator(App);