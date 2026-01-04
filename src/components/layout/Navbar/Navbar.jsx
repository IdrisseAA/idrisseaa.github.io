import React, {useCallback, useEffect, useRef, useState} from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../../assets/images/logos/idrisseaa-logo.svg';
import menuOpen from '../../../assets/images/icons/menu_open.png';
import menuClose from '../../../assets/images/icons/menu_close.png';
import Button from "../../ui/Button/Button.jsx";

const Navbar = () => {
    const menuRef = useRef();
    const menuOpenRef = useRef();
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sectionsRef = useRef({}); // Cache DOM elements

    // Cache section elements on mount
    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'research', 'contact'];
        sections.forEach((section) => {
            sectionsRef.current[section] = document.getElementById(section);
        });
    }, []);

    const openMenu = useCallback(() => {
        setIsMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
        menuOpenRef.current?.focus();
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && menuRef.current?.classList.contains('open')) {
                closeMenu();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closeMenu]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !menuOpenRef.current?.contains(e.target) &&
                menuRef.current.classList.contains('open')
            ) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeMenu]);

    // Debounced scroll handler
    const handleScroll = useCallback(() => {
        let currentSection = 'home';
        for (const section in sectionsRef.current) {
            const element = sectionsRef.current[section];
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section;
                    break;
                }
            }
        }
        setActiveSection(currentSection);
    }, []);

    useEffect(() => {
        let timeout;
        const debouncedScroll = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                handleScroll();
            }, 1000); // Debounce by 100ms
        };

        window.addEventListener('scroll', debouncedScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            clearTimeout(timeout);
        };
    }, [handleScroll]);

    // When menu open state changes, sync ARIA, focus and body scroll
    useEffect(() => {
        const menuEl = menuRef.current;
        const toggleEl = menuOpenRef.current;
        if (!menuEl || !toggleEl) return;

        if (isMenuOpen) {
            menuEl.classList.add('open');
            menuEl.setAttribute('aria-hidden', 'false');
            toggleEl.setAttribute('aria-expanded', 'true');
            // focus first link safely
            const firstLink = menuEl.querySelector('li a');
            firstLink?.focus();
            // prevent background scroll
            document.body.style.overflow = 'hidden';
            // trap focus: add keydown listener
            const trapHandler = (e) => {
                if (e.key !== 'Tab') return;
                const focusable = menuEl.querySelectorAll('a, button');
                if (!focusable.length) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            };
            document.addEventListener('keydown', trapHandler);
            return () => document.removeEventListener('keydown', trapHandler);
        } else {
            menuEl.classList.remove('open');
            menuEl.setAttribute('aria-hidden', 'true');
            toggleEl.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }, [isMenuOpen, closeMenu]);

    return (
        <nav className="navbar">
            <img
                src={logo}
                alt="IdrisseAA logo"
                className="navbar-logo animate"
            />
            <button
                ref={menuOpenRef}
                type="button"
                aria-controls="nav-menu"
                aria-expanded={isMenuOpen}
                className={`nav-mob-open animate ${isMenuOpen ? 'hidden' : ''}`}
                onClick={openMenu}
                aria-label="Open navigation menu"
            >
                <img src={menuOpen} alt="Open menu icon"/>
            </button>
            <ul ref={menuRef} id="nav-menu" className={`nav-menu ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
                <li className="nav-mob-close-item">
                    <button
                        className="nav-mob-close"
                        type="button"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >
                        <img src={menuClose} alt="Close menu icon"/>
                    </button>
                </li>
                <li className={activeSection === 'home' ? 'active' : ''}>
                    <AnchorLink
                        className="anchor-link"
                        href="#home"
                        aria-current={activeSection === 'home' ? 'page' : undefined}
                        onClick={closeMenu} // Auto-close on click
                    >
                        Home
                    </AnchorLink>
                </li>
                <li className={activeSection === 'about' ? 'active' : ''}>
                    <AnchorLink
                        className="anchor-link"
                        offset={50}
                        href="#about"
                        aria-current={activeSection === 'about' ? 'page' : undefined}
                        onClick={closeMenu}
                    >
                        About
                    </AnchorLink>
                </li>
                <li className={activeSection === 'projects' ? 'active' : ''}>
                    <AnchorLink
                        className="anchor-link"
                        offset={50}
                        href="#projects"
                        aria-current={activeSection === 'projects' ? 'page' : undefined}
                        onClick={closeMenu}
                    >
                        Projects
                    </AnchorLink>
                </li>
                <li className={activeSection === 'research' ? 'active' : ''}>
                    <AnchorLink
                        className="anchor-link"
                        offset={50}
                        href="#research"
                        aria-current={activeSection === 'research' ? 'page' : undefined}
                        onClick={closeMenu}
                    >
                        Research
                    </AnchorLink>
                </li>
                <li className={activeSection === 'contact' ? 'active' : ''}>
                    <AnchorLink
                        className="anchor-link"
                        offset={50}
                        href="#contact"
                        aria-current={activeSection === 'contact' ? 'page' : undefined}
                        onClick={closeMenu}
                    >
                        Contact
                    </AnchorLink>
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    <Button variant="primary" className="nav-connect-button">Connect With Me</Button>
                </AnchorLink>
            </div>
        </nav>
    );
};

export default Navbar;