import React from 'react';
import Login from '@react-login-page/page5';

const css = {
  '--login-bg': '#5b6ef4',
  '--login-color': '#fff',
  '--login-input': '#333',
  '--login-input-bg': '#fff',
  '--login-input-before': 'rgb(62 41 255 / 15%)',
  '--login-input-after': 'rgb(49 141 255 / 20%)',
  '--login-btn': '#fff',
  '--login-btn-bg': '#5b6ef4',
  '--login-btn-focus': '#3648c6',
  '--login-btn-hover': '#3648c6',
  '--login-btn-active': '#5b6ef4',
  '--login-footer': '#ffffff99',
};

interface DemoProps {
  onLoginSuccess: () => void; // Define the prop type
}

const Demo: React.FC<DemoProps> = ({ onLoginSuccess }) => {
  // Custom login handler
  const handleLogin = (data: any) => {
    // Assuming data contains user login information; handle it as needed.
    console.log(data); // You can log or process the data

    // Call the onLoginSuccess function to redirect to the dashboard
    onLoginSuccess();
  };

  return (
    <Login 
      style={{ height: 380, ...css }} 
      onSubmit={handleLogin} // Pass the custom handler to the onSubmit prop
    />
  );
};

export default Demo;
