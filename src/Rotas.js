import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Orders from "./Components/Pages/Orders";

export default function Rotas (){
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/orders">
                <Orders title="Pedidos" estilo="true"/>
            </Route>
        </Switch>
    )
}