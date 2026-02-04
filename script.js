// ===================================
// Dasaba & Sons Nigeria Limited
// Website JavaScript
// ===================================

// === MOBILE NAVIGATION ===
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// === STICKY NAVIGATION ===
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// === QUOTE FORM MODAL (Services Page) ===
function showQuoteForm(serviceName) {
    const modal = document.getElementById('quoteModal');
    const serviceInput = document.getElementById('serviceName');
    if (modal && serviceInput) {
        serviceInput.value = serviceName;
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeQuoteForm() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('quoteForm').reset();
    }
}

// Quote form submission
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quoteForm);
        const data = Object.fromEntries(formData);
        
        // Demo submission - in production, this would send to backend
        console.log('Quote Request:', data);
        
        // Show success message
        alert('Thank you for your quote request! We will contact you shortly at ' + data.email);
        
        // Close modal and reset form
        closeQuoteForm();
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('quoteModal');
    if (modal && e.target === modal) {
        closeQuoteForm();
    }
});

// === PRODUCT FILTER (Shop Page) ===
const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.shop-product-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.dataset.category;
        
        // Filter products
        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// === PRODUCT DETAIL MODAL (Shop Page) ===
function showProductDetail(productName, price) {
    const modal = document.getElementById('productModal');
    const content = document.getElementById('productDetailContent');
    
    if (modal && content) {
        content.innerHTML = `
            <h2>${productName}</h2>
            <p class="shop-product-price">₦${parseInt(price).toLocaleString()}</p>
            <div style="margin: 2rem 0;">
                <p style="margin-bottom: 1.5rem; line-height: 1.8;">
                    Interested in this product? Contact us for more details, availability, and to place your order.
                </p>
                <div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h3 style="margin-bottom: 1rem; color: #2c3e50;">Product Features:</h3>
                    <ul style="list-style-position: inside; color: #2c3e50; line-height: 1.8;">
                        <li>High quality and reliable</li>
                        <li>Competitive pricing</li>
                        <li>Warranty included</li>
                        <li>Fast delivery available</li>
                    </ul>
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="contact.html" class="btn btn-primary">Contact Us to Order</a>
                    <button onclick="closeProductDetail()" class="btn btn-outline">Close</button>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeProductDetail() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// === APPLICATION FORM MODAL (Careers Page) ===
function showApplicationForm(jobTitle) {
    const modal = document.getElementById('applicationModal');
    const jobInput = document.getElementById('jobPosition');
    if (modal && jobInput) {
        jobInput.value = jobTitle;
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeApplicationForm() {
    const modal = document.getElementById('applicationModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('applicationForm').reset();
    }
}

// Application form submission
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(applicationForm);
        const data = Object.fromEntries(formData);
        
        // Demo submission
        console.log('Job Application:', data);
        
        // Show success message
        alert('Thank you for your application! We have received your submission for the ' + data.jobPosition + ' position. We will review your application and contact you at ' + data.appEmail + ' if you are shortlisted.');
        
        // Close modal and reset form
        closeApplicationForm();
    });
}

// === CONTACT FORM (Contact Page) ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Demo submission
        console.log('Contact Form:', data);
        
        // Show success message
        alert('Thank you for contacting us, ' + data.contactName + '! We have received your message and will respond to ' + data.contactEmail + ' within 24 hours.');
        
        // Reset form
        contactForm.reset();
    });
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// === FADE IN ON SCROLL ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should fade in
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.service-card, .product-card, .feature-card, .job-card, .news-card, .value-card, .working-card, .benefit-card');
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// === FILE UPLOAD PREVIEW ===
const fileInputs = document.querySelectorAll('input[type="file"]');
fileInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            const fileNames = Array.from(files).map(file => file.name).join(', ');
            console.log('Files selected:', fileNames);
            
            // Create or update file preview
            let preview = input.parentElement.querySelector('.file-preview');
            if (!preview) {
                preview = document.createElement('div');
                preview.className = 'file-preview';
                preview.style.cssText = 'margin-top: 0.5rem; padding: 0.5rem; background-color: #f8f9fa; border-radius: 4px; font-size: 0.9rem; color: #2c3e50;';
                input.parentElement.appendChild(preview);
            }
            preview.textContent = `📎 ${files.length} file(s) selected: ${fileNames.substring(0, 50)}${fileNames.length > 50 ? '...' : ''}`;
        }
    });
});

// === LOADING STATE FOR FORMS ===
function showLoading(button) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.textContent = 'Sending...';
}

function hideLoading(button) {
    button.disabled = false;
    button.textContent = button.dataset.originalText;
}

// === FORM VALIDATION ENHANCEMENT ===
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '#27ae60';
            }
        });
        
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.style.borderColor = '#27ae60';
            }
        });
    });
});

// === EMAIL VALIDATION ===
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// === PHONE VALIDATION ===
function validatePhone(phone) {
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Apply email validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.style.borderColor = '#e74c3c';
            
            // Show error message
            let error = input.parentElement.querySelector('.error-message');
            if (!error) {
                error = document.createElement('small');
                error.className = 'error-message';
                error.style.color = '#e74c3c';
                error.textContent = 'Please enter a valid email address';
                input.parentElement.appendChild(error);
            }
        } else {
            input.style.borderColor = input.value ? '#27ae60' : '';
            const error = input.parentElement.querySelector('.error-message');
            if (error) error.remove();
        }
    });
});

// Apply phone validation
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validatePhone(input.value)) {
            input.style.borderColor = '#e74c3c';
            
            let error = input.parentElement.querySelector('.error-message');
            if (!error) {
                error = document.createElement('small');
                error.className = 'error-message';
                error.style.color = '#e74c3c';
                error.textContent = 'Please enter a valid phone number';
                input.parentElement.appendChild(error);
            }
        } else {
            input.style.borderColor = input.value ? '#27ae60' : '';
            const error = input.parentElement.querySelector('.error-message');
            if (error) error.remove();
        }
    });
});

// === CONSOLE MESSAGE ===
console.log('%c Welcome to Dasaba & Sons Nigeria Limited ', 'background: #2c3e50; color: #fff; font-size: 20px; padding: 10px;');
console.log('%c Quality Printing & Branding Services ', 'background: #e74c3c; color: #fff; font-size: 16px; padding: 8px;');
console.log('Website developed with ❤️');

// === KEYBOARD ACCESSIBILITY ===
document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            if (activeModal.id === 'quoteModal') closeQuoteForm();
            if (activeModal.id === 'productModal') closeProductDetail();
            if (activeModal.id === 'applicationModal') closeApplicationForm();
        }
    }
});

// === PRINT FUNCTIONALITY ===
function printPage() {
    window.print();
}

// === BACK TO TOP BUTTON ===
// Create back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.className = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTop);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll to top on click
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTop.addEventListener('mouseenter', () => {
    backToTop.style.backgroundColor = '#c0392b';
    backToTop.style.transform = 'translateY(-5px)';
});

backToTop.addEventListener('mouseleave', () => {
    backToTop.style.backgroundColor = '#e74c3c';
    backToTop.style.transform = 'translateY(0)';
});

// === PAGE LOAD ANIMATION ===
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// === COPYRIGHT YEAR ===
const currentYear = new Date().getFullYear();
const copyrightElements = document.querySelectorAll('.footer-bottom p');
copyrightElements.forEach(el => {
    if (el.textContent.includes('2024')) {
        el.textContent = el.textContent.replace('2024', currentYear);
    }
});
