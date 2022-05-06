
import {
    IonPage,
    IonRouterOutlet,
} from '@ionic/react';
import React from "react";
import { Route, RouteComponentProps } from "react-router";
import AnotherPage from './AnotherPage';

const LayeredRoutes: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonPage>
            <IonRouterOutlet>
                <Route path={`${match.url}/another-page`} component={AnotherPage} />
            </IonRouterOutlet>
        </IonPage>
    );
};

export default LayeredRoutes;