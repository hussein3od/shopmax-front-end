import { Link, useLocation } from "react-router-dom";
import Container from "./container";
import Logo from "../assets/logo.png";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <style>{`
        .nav-link { position: relative; padding-bottom: 0.45rem; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 6px;
          height: 3px;
          width: 0%;
          background: linear-gradient(90deg, #60a5fa, #06b6d4);
          border-radius: 99px;
          transition: width 260ms cubic-bezier(.2,.9,.2,1);
        }
        .nav-link:hover::after,
        .nav-link.active::after { width: calc(100% - 24px); }
      `}</style>
      <Container>
        <header className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-gray-900">ShopMax</h1>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Link to="/home" className={`nav-link text-base text-gray-700 py-2 px-3 rounded-full transition ${location.pathname === '/home' ? 'active' : ''}`}>Home</Link>
            <Link to="/aboutUs" className={`nav-link text-base text-gray-700 py-2 px-3 rounded-full transition ${location.pathname === '/aboutUs' ? 'active' : ''}`}>About Us</Link>
            <Link to="/cart" className={`nav-link text-base text-gray-700 py-2 px-3 rounded-full transition ${location.pathname === '/cart' ? 'active' : ''}`}>Cart</Link>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
            >
              <svg className="w-6 h-6 text-gray-800 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </header>

        <div className={`${open ? 'block' : 'hidden'} md:hidden mb-4`}>
          <div className="flex flex-col gap-2 px-2 pb-4">
            <Link to="/home" onClick={() => setOpen(false)} className="block text-gray-700 bg-white border border-gray-100 py-2 px-3 rounded-lg">Home</Link>
            <Link to="/aboutUs" onClick={() => setOpen(false)} className="block text-gray-700 bg-white border border-gray-100 py-2 px-3 rounded-lg">About Us</Link>
            <Link to="/cart" onClick={() => setOpen(false)} className="block text-gray-700 bg-white border border-gray-100 py-2 px-3 rounded-lg">Cart</Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;