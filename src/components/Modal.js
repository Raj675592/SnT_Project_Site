import React from 'react';
import '../App.css';
const Modal = ({ setShowModal }) => {
  return (
    <div className="modal" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
        <h2 className="head-login">Login to SnT Portal</h2>
        <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert('Login functionality not implemented.'); }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email:</label>
            <input type="email" id="email" name="email" required
              style={{ width: '100%', padding: '0.75rem', border: '2px solid #e0e0e0', borderRadius: '10px', outline: 'none' }}
              placeholder="your.email@iitk.ac.in" />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password:</label>
            <input type="password" id="password" name="password" required
              style={{ width: '100%', padding: '0.75rem', border: '2px solid #e0e0e0', borderRadius: '10px', outline: 'none' }}
              placeholder="Enter your password" />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="role" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Role:</label>
            <select id="role" name="role" required
              style={{ width: '100%', padding: '0.75rem', border: '2px solid #e0e0e0', borderRadius: '10px', outline: 'none' }}>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Login</button>
          <p style={{ textAlign: 'center', color: '#666' }}>
            Don't have an account? <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
