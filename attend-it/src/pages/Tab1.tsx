import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import Demo from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const history = useHistory(); // Initialize useHistory

  const handleLoginSuccess = () => {
    history.push('/dashboard'); // Redirect to the Dashboard
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Demo onLoginSuccess={handleLoginSuccess} /> {/* Pass the function as a prop */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
