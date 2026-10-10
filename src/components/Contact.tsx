import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { portfolio } from '../data/portfolio';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{ type: 'idle' | 'error' | 'success'; message: string }>({ type: 'idle', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.subject.trim()) next.subject = 'Please enter a subject.';
    if (!form.message.trim()) next.message = 'Please write a message.';
    if (form.message.trim().length < 12) next.message = 'Message should be at least 12 characters.';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' });
      return;
    }

    const email = portfolio.contact.email || portfolio.socialLinks.email || 'harshsutrakar426@gmail.com';
    const subject = encodeURIComponent(form.subject.trim());
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus({ type: 'success', message: 'Your email client has been opened.' });
    setForm(initialState);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">HAVE AN IDEA?</span>
          <p className="subhead">Let's turn a good idea into something real.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-copy">
            <div className="mail-pill"><Mail size={16} /> {portfolio.contact.email}</div>
            <div className="social-row">
              {portfolio.socialLinks.github && <a href={portfolio.socialLinks.github}>GitHub</a>}
              {portfolio.socialLinks.instagram && <a href={portfolio.socialLinks.instagram}>Instagram</a>}
              {portfolio.socialLinks.linkedin && <a href={portfolio.socialLinks.linkedin}>LinkedIn</a>}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} />
              {errors.name && <small>{errors.name}</small>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!errors.email} />
              {errors.email && <small>{errors.email}</small>}
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} aria-invalid={!!errors.subject} />
              {errors.subject && <small>{errors.subject}</small>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} />
              {errors.message && <small>{errors.message}</small>}
            </div>

            <button type="submit" className="button primary submit-btn">
              <span>SEND MESSAGE</span>
              <Send size={16} />
            </button>

            {status.message && <p className={status.type === 'error' ? 'form-status error' : 'form-status success'}>{status.message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
