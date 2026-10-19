import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

// Logo
import easylogo from '../assets/easylogo.png';

// Feature Icons
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import feature5 from '../assets/feature5.png';
import feature6 from '../assets/feature6.png';
import feature7 from '../assets/feature7.png';

// Category Icons
import category1 from '../assets/category1.png';
import category2 from '../assets/category2.png';
import category3 from '../assets/category3.png';
import category4 from '../assets/category4.png';
import category5 from '../assets/category5.png';
import category6 from '../assets/category6.png';
import category7 from '../assets/category7.png';
import category8 from '../assets/category8.png';
import category9 from '../assets/category9.png';
import category10 from '../assets/category10.png';

const featureItems = [
  {
    icon: feature1,
    title: 'Marketing',
    desc: 'Boost sales & increase cash flow with marketing tools designed to convert.'
  },
  {
    icon: feature2,
    title: 'Properties Management',
    desc: 'Manage staff, track products & analyze performance all from one dashboard.'
  },
  {
    icon: feature3,
    title: 'Appointment Management',
    desc: 'Convert instagram followers into loyal, paying clients with a free web portal.'
  },
  {
    icon: feature4,
    title: 'Employee Management',
    desc: 'Make employees more efficient and productive with smart management.'
  },
  {
    icon: feature5,
    title: 'Billing & Payment',
    desc: 'Fast, reliable billing with secure payments and automated invoicing.'
  },
  {
    icon: feature6,
    title: 'Reports & Graphs',
    desc: 'Effortlessly analyze overall business performance and drive sales growth.'
  },
  {
    icon: feature7,
    title: 'Inventory Management',
    desc: 'Reduce product waste & stay ahead in inventory and stock management.'
  }
];

const categoryItems = [
  {
    icon: category1,
    title: 'Beauty Salon',
    desc: 'Maximize salon potential with ease using our best-in-class salon software.'
  },
  {
    icon: category2,
    title: 'Spa',
    desc: 'Simplify spa management and reduce stress with an all-in-one software solution.'
  },
  {
    icon: category3,
    title: 'Nail Art',
    desc: 'Create personalized nail & salon experiences for customers with intuitive software.'
  },
  {
    icon: category4,
    title: 'Car Spa',
    desc: 'Easily reduce the daily stress of car spa management with smart software.'
  },
  {
    icon: category5,
    title: 'Aesthetic',
    desc: 'Elevate your aesthetic studio brand with smart aesthetic studio software.'
  },
  {
    icon: category6,
    title: 'Makeup Studio',
    desc: 'Grow & expand a makeup studio brand with comprehensive studio software.'
  },
  {
    icon: category7,
    title: 'Tattoo Studio',
    desc: 'Leading tattoo studio software for efficiently managing business operations.'
  },
  {
    icon: category8,
    title: 'Med Spa',
    desc: 'Increase Medical Spa business growth with your powerful smart solution.'
  },
  {
    icon: category9,
    title: 'Pet Facility',
    desc: 'Simplify management for pet grooming businesses and veterinary clinics.'
  },
  {
    icon: category10,
    title: 'Auto Detailing',
    desc: 'Transform your auto detailing operations and eliminate everyday chaos.'
  }
];

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`easy-chevron-icon ${isOpen ? 'open' : ''}`}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const TiltArrowIcon = () => (
  <svg
    className="easy-tilt-arrow"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'features' | 'categories' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null); // 'features' | 'categories' | null
  const navRef = useRef(null);

  // Toggle dropdown on click (desktop)
  const handleDropdownClick = (menuName) => {
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  // Toggle mobile accordion
  const handleMobileAccordion = (menuName) => {
    setMobileAccordion((prev) => (prev === menuName ? null : menuName));
  };

  // Close menus on click outside & escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile zoom panel is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="easy-navbar-header" ref={navRef}>
      <div className="easy-navbar-container">
        {/* Brand Logo - Left corner */}
        <div className="easy-nav-logo">
          <Link to="/" onClick={closeAllMenus}>
            <img src={easylogo} alt="Easy Software" className="easy-logo-img" />
          </Link>
        </div>

        {/* Middle Action Buttons for Mobile & Tablet Portrait Viewports */}
        <div className="easy-mobile-middle-actions">
          <a href="#free-trial" className="easy-mid-btn-trial">
            Contact Us
          </a>
          <a
            href="https://easyaibot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="easy-mid-btn-bot"
          >
            Easy Bot
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="easy-nav-menu">
          {/* Features Dropdown Toggle */}
          <button
            type="button"
            className={`easy-nav-item has-dropdown ${activeDropdown === 'features' ? 'active' : ''}`}
            onClick={() => handleDropdownClick('features')}
            aria-expanded={activeDropdown === 'features'}
          >
            <span>Features</span>
            <ChevronIcon isOpen={activeDropdown === 'features'} />
          </button>

          {/* Software Category Dropdown Toggle */}
          <button
            type="button"
            className={`easy-nav-item has-dropdown ${activeDropdown === 'categories' ? 'active' : ''}`}
            onClick={() => handleDropdownClick('categories')}
            aria-expanded={activeDropdown === 'categories'}
          >
            <span>Software Category</span>
            <ChevronIcon isOpen={activeDropdown === 'categories'} />
          </button>

          {/* Blogs Link */}
          <Link
            to="/blogs"
            className="easy-nav-item"
            onClick={() => setActiveDropdown(null)}
          >
            Blogs
          </Link>

          {/* Easy AI Link with Animated SVG */}
          <Link
            to="/easy-ai"
            className="easy-nav-item easy-ai-link"
            onClick={() => setActiveDropdown(null)}
          >
            <svg className="easy-ai-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(-30 12 12)"></ellipse>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(30 12 12)"></ellipse>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(90 12 12)"></ellipse>
              <circle cx="12" cy="12" r="2" fill="url(#atomGrad)"></circle>
              <g transform="rotate(-30 12 12)">
                <circle r="1.2" fill="url(#atomGrad)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12"></animateMotion>
                </circle>
              </g>
              <g transform="rotate(30 12 12)">
                <circle r="1.2" fill="url(#atomGrad)">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="1s"></animateMotion>
                </circle>
              </g>
              <g transform="rotate(90 12 12)">
                <circle r="1.2" fill="url(#atomGrad)">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="0.5s"></animateMotion>
                </circle>
              </g>
              <defs>
                <linearGradient id="atomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fe6527"></stop>
                  <stop offset="100%" stopColor="#fe905f"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span>Easy AI</span>
          </Link>
        </nav>

        {/* Right Corner CTA Actions & Animated Burger Toggle */}
        <div className="easy-nav-actions">
          <Link to="/book-call" className="easy-btn-book">
            Book a Call
          </Link>

          {/* Animated Hamburger Button */}
          <button
            type="button"
            className={`easy-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mega Menu Dropdown: Features (Desktop) */}
        {activeDropdown === 'features' && (
          <div className="easy-megamenu-wrapper features-menu" role="dialog" aria-label="Features Menu">
            <div className="easy-megamenu-grid">
              {featureItems.map((item, index) => (
                <Link
                  key={index}
                  to={`/features/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="easy-megamenu-item"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="easy-item-icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="easy-item-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mega Menu Dropdown: Software Category (Desktop) */}
        {activeDropdown === 'categories' && (
          <div className="easy-megamenu-wrapper categories-menu" role="dialog" aria-label="Software Categories Menu">
            <div className="easy-megamenu-grid">
              {categoryItems.map((item, index) => (
                <Link
                  key={index}
                  to={`/category/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="easy-megamenu-item"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="easy-item-icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="easy-item-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Popout Zoom-In Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="easy-mobile-modal-overlay" onClick={closeAllMenus}>
          <div
            className="easy-mobile-modal-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Navigation Panel"
          >
            {/* Panel Top Header: Logo + Close Button */}
            <div className="easy-panel-header">
              <Link to="/" onClick={closeAllMenus}>
                <img src={easylogo} alt="Easy Software" className="easy-panel-logo-img" />
              </Link>
              <button
                type="button"
                className="easy-panel-close-btn"
                onClick={closeAllMenus}
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Nav Items with Left Item and Right Tilt Arrow */}
            <div className="easy-panel-nav-list">
              {/* Features Item */}
              <div className="easy-panel-nav-block">
                <div
                  className={`easy-panel-nav-row ${mobileAccordion === 'features' ? 'expanded' : ''}`}
                  onClick={() => handleMobileAccordion('features')}
                >
                  <span className="easy-panel-item-left">Features</span>
                  <TiltArrowIcon />
                </div>
                {mobileAccordion === 'features' && (
                  <div className="easy-panel-accordion-items">
                    {featureItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`/features/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="easy-megamenu-item"
                        onClick={closeAllMenus}
                      >
                        <div className="easy-item-icon-box">
                          <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="easy-item-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Software Category Item */}
              <div className="easy-panel-nav-block">
                <div
                  className={`easy-panel-nav-row ${mobileAccordion === 'categories' ? 'expanded' : ''}`}
                  onClick={() => handleMobileAccordion('categories')}
                >
                  <span className="easy-panel-item-left">Software Category</span>
                  <TiltArrowIcon />
                </div>
                {mobileAccordion === 'categories' && (
                  <div className="easy-panel-accordion-items">
                    {categoryItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`/category/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="easy-megamenu-item"
                        onClick={closeAllMenus}
                      >
                        <div className="easy-item-icon-box">
                          <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="easy-item-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blogs Link */}
              <Link to="/blogs" className="easy-panel-nav-row" onClick={closeAllMenus}>
                <span className="easy-panel-item-left">Blogs</span>
                <TiltArrowIcon />
              </Link>

              {/* Easy AI Link */}
              <Link to="/easy-ai" className="easy-panel-nav-row" onClick={closeAllMenus}>
                <span className="easy-panel-item-left easy-ai-row-content">
                  <svg className="easy-ai-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGradModal)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(-30 12 12)"></ellipse>
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGradModal)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(30 12 12)"></ellipse>
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGradModal)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(90 12 12)"></ellipse>
                    <circle cx="12" cy="12" r="2" fill="url(#atomGradModal)"></circle>
                    <g transform="rotate(-30 12 12)">
                      <circle r="1.2" fill="url(#atomGradModal)">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12"></animateMotion>
                      </circle>
                    </g>
                    <g transform="rotate(30 12 12)">
                      <circle r="1.2" fill="url(#atomGradModal)">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="1s"></animateMotion>
                      </circle>
                    </g>
                    <g transform="rotate(90 12 12)">
                      <circle r="1.2" fill="url(#atomGradModal)">
                        <animateMotion dur="3.5s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="0.5s"></animateMotion>
                      </circle>
                    </g>
                    <defs>
                      <linearGradient id="atomGradModal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fe6527"></stop>
                        <stop offset="100%" stopColor="#fe905f"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Easy AI</span>
                </span>
                <TiltArrowIcon />
              </Link>

              {/* Easy Bot Link */}
              <a
                href="https://easyaibot.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="easy-panel-nav-row"
                onClick={closeAllMenus}
              >
                <span className="easy-panel-item-left">Easy Bot</span>
                <TiltArrowIcon />
              </a>
            </div>

            {/* Panel Bottom Action */}
            <div className="easy-panel-footer">
              <Link to="/book-call" className="easy-btn-book mobile" onClick={closeAllMenus}>
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;