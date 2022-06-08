import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit

}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        required
        placeholder ="Client Name"
      />
      <input 
        type="tel"
        value={phone}
        pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
        onChange={(e) => {setPhone(e.target.value)}}
        
        placeholder="Phone Number"
      />
      <input 
        type="email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        required
        placeholder = "Client Email"
      />
      <input
        type="submit"
      />
    </form>
  );
};

