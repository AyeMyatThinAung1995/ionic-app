// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonTitle,
//   IonSearchbar,
//   IonFab,
//   IonFabButton,
//   IonIcon
// } from "@ionic/react";
// import React from "react";
// import { add } from "ionicons/icons";
// import { RouteComponentProps } from "react-router";

// const Home: React.FC<RouteComponentProps> = props => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonSearchbar>
//           <IonTitle>Ionic Blank</IonTitle>
//         </IonSearchbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         The world is your oyster.
//         <p>
//           If you get lost, the{" "}
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://ionicframework.com/docs/"
//           >
//             docs
//           </a>{" "}
//           will be your guide.
//         </p>
//         <IonFab vertical="bottom" horizontal="end" slot="fixed">
//           <IonFabButton onClick={() => props.history.push("/new")}>
//             <IonIcon icon={add} />
//           </IonFabButton>
//         </IonFab>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Home;
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/react";
import React, { useState } from "react";
import { Plugins, CameraResultType } from "@capacitor/core";
import { RouteComponentProps } from "react-router";
import { add } from "ionicons/icons";
const Home: React.FC<RouteComponentProps> = props => {
  const { Camera } = Plugins;
  const [currentPhoto, setCurrentPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    setCurrentPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {currentPhoto && <img src={currentPhoto} alt="sss" />}
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            onClick={() => props.history.push("/new")}
            color="primary"
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
