import React, {useState} from "react";
import { HashRouter as Router , Redirect, Route, Switch} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "component/Navigation";
import Profile from "routes/Profile";


const AppRouter = ({ isLogigedIn }) => {

    
    return (
        <Router>
            {isLogigedIn && <Navigation /> }
            <Switch>
                {isLogigedIn ? (
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    
                </>
            ) : (
               //not loggedIn case
               //Redirect의 의미는 route 중 갈 곳이 없으면 해당 주소로 가라는 뜻
               //<Redirect from="*" to="/"></Redirect>
               <>
               <Route exact path="/">
                   <Auth />
                </Route>
               </>
               )}

            </Switch>

        </Router>
    );
}

export default AppRouter;