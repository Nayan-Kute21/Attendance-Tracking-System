// src/pages/ScanQRCode.tsx

import React, { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAlert } from '@ionic/react';
import { BarcodeScanner, Barcode } from '@capacitor-mlkit/barcode-scanning';

const ScanQRCode: React.FC = () => {
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    BarcodeScanner.isSupported().then(result => {
      setIsSupported(result.supported);
    });
  }, []);

  const scan = async () => {
    const granted = await requestPermissions();
    if (!granted) {
      setShowAlert(true);
      return;
    }
    
    try {
      const { barcodes } = await BarcodeScanner.scan();
      setBarcodes((prevBarcodes) => [...prevBarcodes, ...barcodes]);
    } catch (error) {
      console.error('Error scanning barcode', error);
    }
  };

  const requestPermissions = async (): Promise<boolean> => {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scan QR Code</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {isSupported ? (
          <IonButton onClick={scan}>Scan QR Code</IonButton>
        ) : (
          <IonLabel>Barcode scanning is not supported on this device.</IonLabel>
        )}

        <IonList>
          {barcodes.map((barcode, index) => (
            <IonItem key={index}>
              <IonLabel>{barcode.displayValue}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Permission Denied'}
          message={'Please grant camera permission to use the barcode scanner.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default ScanQRCode;
