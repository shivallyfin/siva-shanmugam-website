import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, Sun, Moon } from 'lucide-react';
import { profileData } from '../data/profile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/publications', label: 'Research' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/events', label: 'Corporate Connections' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
        }`}>
        <div className="container flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold group-hover:bg-accent-gold/20 transition-all duration-300">
              <BookOpen size={20} className="transform group-hover:rotate-3 transition-transform" />
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {profileData.personalInfo.name}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium relative py-1 transition-colors hover:text-accent-gold ${isActive
                        ? 'text-accent-gold dark:text-accent-gold font-semibold'
                        : 'text-slate-600 dark:text-slate-300'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold rounded-full transition-all duration-300" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border-none bg-transparent"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border-none bg-transparent"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-none bg-transparent cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-slate-900 shadow-xl border-l border-slate-200 dark:border-slate-850 p-6 pt-24 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ 
          backgroundColor: theme === 'dark' ? '#0b0f19' : '#ffffff',
          zIndex: 99999
        }}
      >
        <ul className="flex flex-col gap-6 list-none">
          {links.map((link) => (
            <li key={link.path} className="w-full">
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-base font-medium py-2 border-b border-slate-100 dark:border-slate-800 transition-colors ${isActive
                    ? 'text-accent-gold dark:text-accent-gold font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-accent-gold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden"
          style={{ zIndex: 99998 }}
        />
      )}
    </>
  );
};

export default Navbar;
