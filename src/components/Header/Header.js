import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Rewards", href: "/rewards" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ cartCount = 0, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const toggleSearch = () => setSearchOpen((v) => !v);
  return (
    <header className="site-header">
      <div className="topbar">
        <button className="quiz-btn mobile" type="button">
          Which Manuka is for me?
        </button>
        <button
          className="icon-btn hamburger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <CloseIcon />
          ) : (
            <img
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756627044/Vector_km2mct.svg"
              alt="menu"
            />
          )}
        </button>
        <Link className="brand" to="/" label="Home">
          <img
            src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756625614/Link_SVG_mitbpb.svg"
            alt="New Zealand Honey Co."
          />
        </Link>
        <div className="actions">
          <a className="icon-btn cart" aria-label="Account" href="/account">
            <img
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756626146/Link_SVG_jcp5gr.svg"
              alt="user"
            />
          </a>
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={toggleSearch}
          >
            {" "}
            <img
              alt="search"
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756625994/Link_SVG_n5ojma.svg"
            />
          </button>
          <a className="icon-btn cart" aria-label="Cart" href="/cart">
            <img
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756626242/Vector_huknj3.svg"
              alt="cart"
            />
            {cartCount > 0 && (
              <span className="badge" aria-live="polite">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>
      <nav className="primary-nav" aria-label="Main">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile drawer */}
      <div
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="drawer-header">
          <a className="brand" href="/" aria-label="Home">
            <img
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756625614/Link_SVG_mitbpb.svg"
              alt="New Zealand Honey Co."
            />
          </a>
          <button
            className="icon-btn"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <CloseIcon />
          </button>
        </div>

        <button className="quiz-btn drawer-quiz" type="button">
          Which Manuka is for me?
        </button>

        <ul className="drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="drawer-account">
            <a href="/account">Account</a>
          </li>
        </ul>
      </div>

      {/* Search dropdown */}
      <div className={`search-panel ${searchOpen ? "open" : ""}`}>
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            const q = new FormData(e.currentTarget).get("q");
            if (onSearch) onSearch(q);
          }}
        >
          <input
            name="q"
            type="search"
            placeholder="Search products"
            aria-label="Search products"
          />
          <button type="submit" className="search-submit">
            <img
              src="https://res.cloudinary.com/daqmgqiuf/image/upload/v1756625994/Link_SVG_n5ojma.svg"
              alt="search"
            />
          </button>
          <button
            type="button"
            className="search-close"
            aria-label="Close search"
            onClick={toggleSearch}
          >
            <CloseIcon />
          </button>
        </form>
      </div>
      {/* Backdrop for drawer/search */}
      {(menuOpen || searchOpen) && (
        <div
          className="backdrop"
          onClick={() => {
            setMenuOpen(false);
            setSearchOpen(false);
          }}
        />
      )}
    </header>
  );
}

/* Icons – inline SVGs to avoid extra deps */

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      {" "}
      <path
        fill="currentColor"
        d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z"
      />{" "}
    </svg>
  );
}
