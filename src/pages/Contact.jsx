import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../components/Contact.css'; // Custom CSS for styling the form

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: '' // Clear the error when the user starts typing
    });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      });
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submission
    let valid = true;
    let newErrors = { ...errors };

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        valid = false;
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      } else if (key === 'email' && !validateEmail(formData.email)) {
        valid = false;
        newErrors.email = 'Please enter a valid email address';
      }
    });

    if (!valid) {
      setErrors(newErrors);
      alert('Please correct the errors before submitting the form.');
      return;
    }

    // Send the form data via EmailJS
    emailjs.send(
      'service_aja4zld',
      'template_oxwqkqb',
      formData,
      'WJtKeynWEObp98YDi'
    ).then((result) => {
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });  // Reset form after submission
    }).catch((error) => {
      alert('There was an issue sending your message. Please try again later.');
    });
  };

  return (
    <div className="contact-container">
      <h1 className="text-center mb-4">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            onBlur={handleBlur}
            required 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            onBlur={handleBlur}
            required 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
