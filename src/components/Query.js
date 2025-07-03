/* It is used to post doubts that user can ask with mentors. It should be render below each project. */

import React, { useState, useEffect } from 'react';

import './query.css';
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
    <div className="query-section">
      <div className="header">
      <h1 className="h1-queryheader">Welcome to Our Support Page</h1>
      <p className="p-queryheader">We are here to assist you with any questions or issues you may have.</p>
    </div>
    <div className="questions-section">   
<div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input placeholder="username@iitk.ac.in" type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required value={text} onChange={e => setText(e.target.value)}></textarea>
        </div>
        <button id="form-btn" className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    <div className="message-container">
      <h2 className="h2-queryheader">Your Questions</h2>
      {messages.map((msg, idx) => (
        <div key={idx} className="message">
          <p><strong>{msg.email}</strong>: {msg.text}</p>
          <button
            className="delete-btn"
            onClick={() => {
              const updatedMessages = messages.filter((_, i) => i !== idx);
              setMessages(updatedMessages);
              localStorage.setItem('messages', JSON.stringify(updatedMessages));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
    </div>
    </div>
    
    </>
  );
}

export default Query;