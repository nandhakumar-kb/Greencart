import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 text-gray-500/80 pt-10 px-6 md:px-16 lg:px-24 xl:px-32 mt-24 transition-all duration-300 ease-in-out">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        {/* Brand & Social */}
        <div className="max-w-80">
          <img
            src={assets.logo}
            alt="GreenCart logo"
            className="mb-4 h-8 md:h-9"
            loading="lazy"
          />
          <p className="text-sm text-gray-700">
            We deliver fresh groceries and snacks from farmers straight to your door.
          </p>
          <div className="flex items-center gap-6 mt-6" aria-label="Social media links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <p className="text-lg text-gray-800">Company</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {['Home', 'Best Sellers', 'Offers', 'Products', 'Partners'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Support Links */}
        <nav aria-label="Support Links">
          <p className="text-lg text-gray-800">Support</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {['Help Center', 'Safety Information', 'Cancellation Options', 'Contact Us', 'Accessibility'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mt-10" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-5 text-xs sm:text-sm">
        <p>© {currentYear} GreenCart. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          {['Privacy', 'Terms', 'Sitemap'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
