import React from 'react';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

const Scan: React.FC = () => {

  const checkPermissionAndScan = async () => {
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (!status.granted) {
      console.log('Camera permission not granted');
      return; // Exit if permission is not granted
    }

    await startScan();
  };

  const startScan = async () => {
    try {
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log('Scanned content: ', result.content);
      } else {
        console.log('No content found');
      }
    } catch (err) {
      console.error('Error during scanning: ', err);
    }
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <button onClick={checkPermissionAndScan}>Start Scan</button>
    </div>
  );
};

export default Scan;
