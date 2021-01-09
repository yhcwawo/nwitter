import React, {useEffect, useState} from "react";
import AppRouter from 'component/Router';
import firebase from "fbase";
import {authService} from "fbase";


function App() {

  const [init, setInit] = useState(false);
  const [isLogigedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);

      } else{
        setIsLoggedIn(false);
      }

      setInit(true);

    });

  },[]);
  
  return (
    <>
    {init ? <AppRouter isLogigedIn={isLogigedIn} /> :  "initializing..." }
    
    <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
