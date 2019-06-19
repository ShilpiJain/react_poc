import React from "react";
import {Switch, Route} from "react-router-dom";
import Profile from "../components/profile/profile";
import Login from "../components/login/Login";

const routes = [
    {
        path : "/",
        exact : true,
        component : Login
    },
    {
        path : "/login",
        exact : true,
        component : Login
    },
    {
        path : "/profile",
        exact : true,
        component : Profile
    }
]

const RenderRoutes  = () => {
    return(
        <main>
            <Switch>
                {routes.map(route => {
                    return <Route key={route.component} {...route} />
                })}
            </Switch>
        </main>
    )
}
export default RenderRoutes;
