// Application Constants

// EmailJS Configuration
// Note: These are public keys designed for client-side use
// Domain restrictions are set in EmailJS dashboard for security
export const EMAILJS_CONFIG = {
    serviceId: 'service_dh79ymf',
    templateId: 'template_xob86go',
    publicKey: 'PVHX4-AG5iqWIXVvp'
};

// Navigation Items
export const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' }
];

// Social Media Links
export const SOCIAL_LINKS = {
    linkedin: 'https://linkedin.com/in/idrisseaa',
    github: 'https://github.com/idrisseaa',
    twitter: 'https://twitter.com/idrisseaa'
};

// Form Validation Limits
export const FORM_LIMITS = {
    NAME_MAX: 60,
    SUBJECT_MAX: 120,
    EMAIL_MAX: 254,
    MESSAGE_MAX: 1000
};

// Project & Research Pagination
export const PAGINATION = {
    INITIAL_VISIBLE: 6,
    LOAD_MORE_COUNT: 3
};
