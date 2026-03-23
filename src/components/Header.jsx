import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`;

  const mobileLinkClass = ({ isActive }) =>
    `text-2xl font-bold transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-white'}`;

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
      <div className={`fixed inset-0 bg-slate-900 z-40 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
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
            <a className="flex items-center justify-center gap-2 text-slate-400 font-medium" href="tel:+918886333361">
              <span className="material-symbols-outlined text-[20px]">call</span> +91 8886333361
            </a>
            <a className="flex items-center justify-center gap-2 text-slate-400 font-medium" href="mailto:infinityglassinteriors@gmail.com">
              <span className="material-symbols-outlined text-[20px]">mail</span> infinityglassinteriors@gmail.com
            </a>
            <div className="flex gap-4 justify-center mt-4">
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" href="https://instagram.com/infinityglassinteriorworks" target="_blank" rel="noreferrer">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" href="https://facebook.com/infinityglassandinteriorworks" target="_blank" rel="noreferrer">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
