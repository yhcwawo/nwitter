import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Auth = () => {
    const [email, setEmail]  = useState("");
    const [password, setpassword]  = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const { name, value } = event.target;
        //const { target: {name, value}} = event;

        if(name === "email"){
            setEmail(value);
        }else if(name ==="password"){
            setpassword(value);
        }

    };

    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data;

            if(newAccount){
                 data = await authService.createUserWithEmailAndPassword(email, password);
                //create account
            } else {
                 data = await authService.signInWithEmailAndPassword(email, password);
                //log in
            }

            console.log(data);
    
        }catch(error){
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {

        const {name} = event.target;
        let provider;

        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();

        }else if(name ==="github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }

    return(
<div> 

    <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" required value={email} onChange = {onChange}></input>    
        <input name="password" type="password" placeholder="password" required value={password} onChange = {onChange}></input>    
        <input type="submit" value={newAccount ? "Create Account" : "Sign In"}></input>    
        {error}
        
    </form>  
    <span onClick={toggleAccount}>{newAccount ? "Sign in." : "Create Account"}</span>

    <div>
        <button name="google" onClick={onSocialClick}>Continue with Google</button>
        <button name="github" onClick={onSocialClick}>Continue with Github</button>

    </div>
</div>


    );
}


export default Auth;


//functional component를 위와 같은 형태로 코딩할 경우 호출할때 자동으로 import 된다.
//this is functional component
