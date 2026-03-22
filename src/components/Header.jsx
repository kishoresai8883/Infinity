import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`;

  const mobileLinkClass = ({ isActive }) =>
    `text-2xl font-bold transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-slate-900 dark:text-white'}`;

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-3 relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="Infinity Glass Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-slate-600 dark:text-slate-300">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <Link to="/contact" className="hidden sm:inline-flex bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
            Get Quote
          </Link>

          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-slate-900 z-40 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-20 pb-10">
          <nav className="flex flex-col items-center gap-6 w-full">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>About</NavLink>
            <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Services</NavLink>
            <NavLink to="/projects" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Projects</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Contact</NavLink>
          </nav>

          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white w-full max-w-xs py-4 rounded-xl text-center text-lg font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 mt-4">
            Get a Free Quote
          </Link>

          <div className="mt-auto text-center flex flex-col gap-4">
            <a className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 font-medium" href="tel:+918886333361">
              <span className="material-symbols-outlined text-[20px]">call</span> +91 8886333361
            </a>
            <a className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 font-medium" href="mailto:infinityglassinteriors@gmail.com">
              <span className="material-symbols-outlined text-[20px]">mail</span> infinityglassinteriors@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
