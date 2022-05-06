import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
} from '@ionic/react';
import React from 'react';

const AnotherPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Another page</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                Another Page data.
            </IonContent>
        </IonPage>
    )
};

export default AnotherPage;