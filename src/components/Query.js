/* It is used to post doubts that user can ask with mentors. It should be render below each project. */

import React, { useState, useEffect } from 'react';
import '../App.css';
function Query(){
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && text) {
      const newMessages = [...messages, {email, text}];
      setMessages(newMessages);
      localStorage.setItem('messages', JSON.stringify(newMessages));
      setEmail('');
      setText('');
    }
  };

useEffect(() => {
  localStorage.setItem('messages', JSON.stringify(messages) );
}, [messages]);

  return(
    <>
    <div className="header">
      <h1>Welcome to Our Support Page</h1>
      <p>We are here to assist you with any questions or issues you may have.</p>
    </div>
    <div className="questions-section">   
<div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required value={text} onChange={e => setText(e.target.value)}></textarea>
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    <div className="message-container">
      <h2>Your Questions</h2>
      {messages.map((msg, idx) => (
        <div key={idx} className="message">
          <p><strong>{msg.email}</strong>: {msg.text}</p>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Query;