import React from "react";
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuToggle,
} from "@ionic/react";
import { time } from "ionicons/icons";
import { Link } from "react-router-dom";
import "./MenuList.css";

export default function MenuList() {
  return (
    <>
      <IonMenuToggle>
        <IonList lines="full">
          <IonItem>
            <IonIcon icon={time} size="medium"></IonIcon>
            <IonLabel>Full Lines</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={time} size="medium"></IonIcon>
            <IonLabel>Full Lines</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={time} size="medium"></IonIcon>
            <IonLabel>Full Lines</IonLabel>
          </IonItem>
        </IonList>
        <IonList lines="none">
          <Link to="/register">
            <IonButton expand="block">Registrarse</IonButton>
          </Link>
          <Link to="/login">
            <IonButton expand="block">Iniciar Sesion</IonButton>
          </Link>
        </IonList>
      </IonMenuToggle>
    </>
  );
}
