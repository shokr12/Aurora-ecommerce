import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success', 'error', 'loading'
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error);
      }
    } catch (err) {
      setStatus('error');
      setResponseMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="page-enter container">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="heading-lg">Get in Touch</h2>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              Have a question about our products, your order, or just want to say hello? Drop us a line.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h4>
              <p className="text-body">hello@aurora.com</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</h4>
              <p className="text-body">+1 (555) 123-4567</p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>HQ</h4>
              <p className="text-body">123 Design Avenue<br/>Creative District, NY 10001</p>
            </div>
          </div>

          <div className="contact-form">
            {status === 'success' && (
              <div className="alert-success">
                <CheckCircle size={20} />
                {responseMsg}
              </div>
            )}
            
            {status === 'error' && (
              <div className="alert-error">
                <AlertCircle size={20} />
                {responseMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  placeholder="Jane Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="jane@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  className="form-control" 
                  placeholder="How can we help?" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>Send Message <Send size={18}/></span>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
