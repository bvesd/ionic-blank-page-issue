import React from "react";
import { Redirect, Route } from "react-router";
import { IonRouterOutlet } from "@ionic/react";
import LayeredRoutes from "./pages/LayeredRoutes";
import MoreLayeredRoutes from "./pages/MoreLayeredRoutes";

const Router = () => {
    return (
        <IonRouterOutlet>
            <Route path="/example/" component={LayeredRoutes} />
            <Route path="/example-tabber/" component={MoreLayeredRoutes} />
            
            <Route path="/" exact>
                <Redirect from="/" to="/example-tabber/tabs-page" exact />
            </Route>
        </IonRouterOutlet>
    );
};

export default Router;