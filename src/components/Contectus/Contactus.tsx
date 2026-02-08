import React, { useState } from 'react';
import './Contactus.css';

interface ContactusProps {
  open: boolean;
  onClose: () => void;
}

const Contactus: React.FC<ContactusProps> = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`contactus-backdrop${open ? ' open' : ''}`} onClick={onClose}>
      <div
        className={`contactus-modal${open ? ' open' : ''}`}
        onClick={e => e.stopPropagation()}
        tabIndex={-1}
      >
        <button className="contactus-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="contactus-title">Contact Us</h2>
        {submitted ? (
          <div className="contactus-success">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contactus-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
            />
            <button type="submit" className="contactus-submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contactus;