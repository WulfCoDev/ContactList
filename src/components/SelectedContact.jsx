import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const contactData = await response.json();
        setContact(contactData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContact();
  }, [selectedContactId]);

  console.log(contact); // Check the contact data in the console

  // Render the selected contact details
  return (
    <div>
      {contact ? (
        <>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </>
      ) : (
        <p>Loading contact...</p>
      )}

      <button onClick={() => setSelectedContactId(null)}>Return</button>
    </div>
  );
};

export default SelectedContact;