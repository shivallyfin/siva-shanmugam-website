import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, GraduationCap, Award } from 'lucide-react';
import { profileData } from '../data/profile';

const Footer = () => {
  const { personalInfo } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand/About Col */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-tight">
              Dr. Siva Shanmugam C
            </h3>
            <p className="text-sm text-slate-400 max-w-sm">
              Professor of Corporate Finance and Management Studies. Researching empirical finance, working capital optimization, and financial analytics.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-accent-gold hover:bg-slate-700 transition-colors flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={personalInfo.socials.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-accent-gold hover:bg-slate-700 transition-colors"
                aria-label="Google Scholar Profile"
              >
                <GraduationCap size={18} />
              </a>
              <a
                href={personalInfo.socials.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-accent-gold hover:bg-slate-700 transition-colors"
                aria-label="ResearchGate Profile"
              >
                <Award size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm list-none">
              <li>
                <Link to="/about" className="hover:text-accent-gold transition-colors">
                  Biography & CV
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-accent-gold transition-colors">
                  Research Publications
                </Link>
              </li>
              <li>
                <Link to="/teaching" className="hover:text-accent-gold transition-colors">
                  Courses & Mentorship
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-accent-gold transition-colors">
                  Events & Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent-gold transition-colors">
                  Academic Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider">
              Coordinates
            </h4>
            <ul className="flex flex-col gap-3 text-sm list-none">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent-gold shrink-0 mt-0.5" />
                <span>{personalInfo.office}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-accent-gold shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-accent-gold transition-colors">
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] bg-slate-800 w-full mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-slate-400 transition-colors">Home</Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
