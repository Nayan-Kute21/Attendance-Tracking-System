import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Demo from '../components/ExploreContainer';
import './Tab3.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Demo/>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
