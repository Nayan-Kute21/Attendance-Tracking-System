import React, { useState, ChangeEvent, FormEvent } from 'react';
import './register.css'; // Importing the CSS file

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  password: string;
  rollNo: string;
  batch: string;
  image: File | null;
}

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    rollNo: '',
    batch: '',
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? (files ? files[0] : null) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prepare form data for submission
    const data = new FormData();
    for (const key in formData) {
      data.append(key, (formData as any)[key]); // `as any` to avoid TS errors on formData key types
    }

    try {
      const response = await fetch('YOUR_BACKEND_API_URL/register', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollNo">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="batch">Batch:</label>
          <input
            type="text"
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
