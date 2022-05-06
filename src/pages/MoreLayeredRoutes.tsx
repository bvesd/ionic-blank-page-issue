
import {
    IonPage,
    IonRouterOutlet,
} from '@ionic/react';
import React from "react";
import { Route, RouteComponentProps } from "react-router";
import TabsPage from './TabsPage';

const MoreLayeredRoutes: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonPage>
            <IonRouterOutlet>
                <Route path={`${match.url}/tabs-page`} component={TabsPage} />
            </IonRouterOutlet>
        </IonPage>
    );
};

export default MoreLayeredRoutes;