import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profile';

const Contact = () => {
  const { personalInfo } = profileData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Simulate API request in local development if no key is provided
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }, 1200);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Siva Shanmugam Website Contact Form'
        })
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert(data.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl flex flex-col gap-12 animate-fade-up">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Get in Touch
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Contact Coordinates
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Column (1 part wide on grid or 1/3) */}
          <div className="md:col-span-1 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col gap-6">
            <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Office Details
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              For research proposals, consultancy briefs, or teaching resources request, feel free to visit during office hours or drop an email.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {/* Address */}
              <div className="flex gap-3.5 text-sm">
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/20 rounded-lg self-start shrink-0">
                  <MapPin className="text-accent-gold" size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="font-bold text-slate-850 dark:text-slate-200">Office Address</div>
                  <div className="text-slate-500 dark:text-slate-400 leading-relaxed">{personalInfo.office}</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3.5 text-sm">
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/20 rounded-lg self-start shrink-0">
                  <Mail className="text-accent-gold" size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="font-bold text-slate-850 dark:text-slate-200">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-accent-color dark:text-accent-gold hover:underline mt-0.5 block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3.5 text-sm">
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/20 rounded-lg self-start shrink-0">
                  <Phone className="text-accent-gold" size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="font-bold text-slate-850 dark:text-slate-200">Office Phone</div>
                  <div className="text-slate-500 dark:text-slate-400 mt-0.5">{personalInfo.phone}</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3.5 text-sm">
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/20 rounded-lg self-start shrink-0">
                  <Clock className="text-accent-gold" size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="font-bold text-slate-850 dark:text-slate-200">Office Hours</div>
                  <div className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">Tuesday & Thursday: 2:00 PM – 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (2 parts wide on grid or 2/3) */}
          <div className="md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col gap-6">
            <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
              Send a Message
            </h2>

            {success && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-400 rounded-lg flex items-center gap-3 text-sm animate-fade-up">
                <CheckCircle size={20} className="shrink-0 text-emerald-500" />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-650 dark:text-slate-350">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-accent-gold"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-650 dark:text-slate-350">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-accent-gold"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-650 dark:text-slate-350">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-accent-gold"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-650 dark:text-slate-350">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-accent-gold resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary self-start justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2 px-6 py-2.5"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
