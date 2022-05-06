import React from 'react';
import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useHistory } from 'react-router';

import './Tab3.css';

const Tab3: React.FC = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/example/another-page');
    };
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />

        <IonList>
            <IonItem onClick={() => handleClick()}>PRESS ME</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
