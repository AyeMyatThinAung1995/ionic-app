import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel
} from "@ionic/react";
import { home } from "ionicons/icons";
const appPages = [
  {
    title: "Home",
    url: "/home",
    icon: home
  }
];
const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList style={{ background: "#3880ff" }} color="primary">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} auto-hide="false">
                <IonItem color="primary" href={appPage.url}>
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
