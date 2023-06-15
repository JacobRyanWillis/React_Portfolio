import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from './utils/helper';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and Message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the Message is not valid. If so, we set an error message regarding the Message.
    }
    if (checkMessage(message)) {
      setErrorMessage(
        `Please enter a message.`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div className='col-sm d-flex justify-content-center align-items-center flex-column bg-dark'>
      <p className='text-primary m-2'>Want to contact me directly?<br></br> 
      Leave me a message!</p>
      <form className="form d-flex justify-content-center align-items-center flex-column p-2">
        <input className='m-2'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          onBlur={() => {
            if (!email) {
                setErrorMessage('Please enter a email.')
            }
          }}
        />
        <input className='m-2'
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          onBlur={() => {
            if (!userName) {
                setErrorMessage('Please enter a username.')
            }
          }}
        />
        <textarea className='m-2 message-box'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          rows={4}
          onBlur={() => {
            if (!message) {
                setErrorMessage('Please write out a message.') 
            }
          }}
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text text-primary">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
