import React from "react";
import {
    IonIcon,
    IonTabs,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonRouterOutlet,
} from '@ionic/react';
import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import { square, triangle, images } from 'ionicons/icons';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Details from './Details';

const TabsPage: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path={`${path}/tab1`} component={Tab1} exact={true} />
                <Route path={`${path}/tab2`} component={Tab2} exact={true} />
                <Route path={`${path}/tab2/details`} component={Details} />
                <Route path={`${path}/tab3`} component={Tab3} />
                <Route path={`${path}/`} render={() => <Redirect to={`${path}/tab1`} />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href={`${path}/tab1`}>
                    <IonIcon icon={triangle} />
                    <IonLabel>Tab One</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href={`${path}/tab2`}>
                    <IonIcon icon={images} />
                    <IonLabel>Photos</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href={`${path}/tab3`}>
                    <IonIcon icon={square} />
                    <IonLabel>Tab Three</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default TabsPage;