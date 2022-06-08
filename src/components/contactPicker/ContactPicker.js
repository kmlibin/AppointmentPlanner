import React from "react";

export const ContactPicker = ({contacts, onChange}) => {


  return (
    <select onChange={onChange}>
      <option value="">Select a contact</option>
      {contacts.map(contact => (
        <option value={contact.name}
                key={contact.phone}>
                {contact.name}
                </option>)
          )}
    </select>

  );
};