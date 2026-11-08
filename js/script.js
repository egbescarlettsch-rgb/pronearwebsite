// Mobile navigation behaviour:
// The nav menu opens and closes on small screens so it stays accessible
// without crowding the layout. The desktop version keeps the full menu visible.
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.site-nav');

    if (nav) {
        const toggle = nav.querySelector('.nav-toggle');
        const menu = nav.querySelector('.nav-menu');

        if (toggle && menu) {
            const setMenuState = (isOpen) => {
                nav.classList.toggle('nav-open', isOpen);
                toggle.setAttribute('aria-expanded', String(isOpen));
                toggle.setAttribute(
                    'aria-label',
                    isOpen ? 'Close navigation menu' : 'Open navigation menu'
                );
            };

            toggle.addEventListener('click', () => {
                const isOpen = nav.classList.contains('nav-open');
                setMenuState(!isOpen);
            });

            menu.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 760) {
                        setMenuState(false);
                    }
                });
            });

            document.addEventListener('click', (event) => {
                if (window.innerWidth <= 760 && nav.classList.contains('nav-open') && !nav.contains(event.target)) {
                    setMenuState(false);
                }
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth > 760 && nav.classList.contains('nav-open')) {
                    setMenuState(false);
                }
            });
        }
    }

    const setFormFeedback = (form, message, type = 'success') => {
        let feedback = form.querySelector('.form-status');

        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'form-status';
            form.appendChild(feedback);
        }

        feedback.className = `form-status ${type}`;
        feedback.textContent = message;
        feedback.setAttribute('role', type === 'error' ? 'alert' : 'status');
    };

    const getFriendlyLabel = (field) => {
        const label = field.closest('label')?.textContent?.trim() || field.name || field.id || 'This field';
        return label.replace(/\s+/g, ' ');
    };

    const sendFormByEmail = (form) => {
        const data = new FormData(form);
        const name = (data.get('name') || '').toString().trim();
        const email = (data.get('email') || '').toString().trim();
        const phone = (data.get('phone') || '').toString().trim();
        const subjectValue = (data.get('subject') || data.get('enquiry-type') || 'General enquiry').toString().trim();
        const messageText = (data.get('message') || '').toString().trim();
        const formattedSubject = subjectValue
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

        const emailBody = [
            'Name: ' + (name || 'Not provided'),
            'Email: ' + (email || 'Not provided'),
            'Phone: ' + (phone || 'Not provided'),
            '',
            'Message:',
            messageText || 'No message provided.'
        ].join('\n');

        const mailtoLink = `mailto:hello@pronear.co.za?subject=${encodeURIComponent(`PRONEAR - ${formattedSubject} from ${name || 'Website visitor'}`)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
    };

    const validateField = (field) => {
        const value = field.value.trim();
        let message = '';

        if (field.required && !value) {
            message = field.tagName === 'SELECT'
                ? 'Please choose an option before continuing.'
                : `Please enter your ${getFriendlyLabel(field).toLowerCase()}.`;
        } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            message = 'Please enter a valid email address.';
        } else if (field.type === 'tel' && value && !/^[0-9+()\-\s]{9,15}$/.test(value)) {
            message = 'Please enter a valid phone number with at least 9 digits.';
        } else if (field.type === 'text' && field.id === 'name' && value.length < 2) {
            message = 'Please enter your full name.';
        } else if (field.id === 'location' && value.length < 2) {
            message = 'Please enter a valid location.';
        } else if (field.id === 'message' && value.length > 0 && value.length < 10) {
            message = 'Please add a few more details so we can help you properly.';
        } else if (field.type === 'date' && value) {
            const selectedDate = new Date(`${value}T00:00:00`);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                message = 'Please choose a future date for your appointment.';
            }
        }

        field.setCustomValidity(message);
        field.classList.toggle('invalid', Boolean(message));
        field.setAttribute('aria-invalid', Boolean(message) ? 'true' : 'false');

        return message;
    };

    document.querySelectorAll('form').forEach((form) => {
        const fields = form.querySelectorAll('input, select, textarea');

        fields.forEach((field) => {
            field.addEventListener('blur', () => {
                const message = validateField(field);
                if (message) {
                    setFormFeedback(form, message, 'error');
                } else if (form.querySelector('.form-status')?.classList.contains('error')) {
                    form.querySelector('.form-status').textContent = '';
                    form.querySelector('.form-status').className = 'form-status';
                }
            });

            field.addEventListener('input', () => {
                validateField(field);
                if (field.validity.valid) {
                    field.classList.remove('invalid');
                }
            });
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let hasErrors = false;
            fields.forEach((field) => {
                const message = validateField(field);
                if (message) {
                    hasErrors = true;
                }
            });

            if (hasErrors) {
                setFormFeedback(form, 'Please fix the highlighted fields before submitting.', 'error');
                form.reportValidity();
                return;
            }

            const formType = form.closest('.booking-form') ? 'Booking' : 'Message';
            const successMessage = formType === 'Booking'
                ? 'Your booking request has been received. Our team will contact you shortly.'
                : 'Thank you! Your message has been sent successfully.';

            setFormFeedback(form, successMessage, 'success');
            sendFormByEmail(form);
            form.reset();
            fields.forEach((field) => {
                field.classList.remove('invalid');
                field.setAttribute('aria-invalid', 'false');
            });
        });
    });

    const serviceCatalog = [
        {
            id: 'makeup',
            title: 'Professional Makeup',
            category: 'makeup',
            price: 'From R450',
            description: 'Professional makeup for special occasions, photoshoots, weddings and events.',
            icon: '♡',
            iconClass: 'makeup',
            buttonLabel: 'Book Service'
        },
        {
            id: 'nails',
            title: 'Nail Bar',
            category: 'nails',
            price: 'From R200',
            description: 'Gel, acrylic and nail art services from professional nail technicians.',
            icon: '✦',
            iconClass: 'nails',
            buttonLabel: 'Book Service'
        },
        {
            id: 'hair',
            title: 'Hair Styling & Wigs',
            category: 'hair',
            price: 'From R350',
            description: 'Braids, wig installation and styling for different hair types and occasions.',
            icon: '♢',
            iconClass: 'hair',
            buttonLabel: 'Book Service'
        },
        {
            id: 'lashes',
            title: 'Lash Extensions',
            category: 'lashes',
            price: 'From R300',
            description: 'Classic and volume lash extensions applied by experienced beauty professionals.',
            icon: '✧',
            iconClass: 'makeup',
            buttonLabel: 'Book Service'
        },
        {
            id: 'consultation',
            title: 'Free Consultation',
            category: 'consultation',
            price: 'Free',
            description: 'Not sure what you need? Speak to a beauty professional before choosing your service.',
            icon: '?',
            iconClass: 'nails',
            buttonLabel: 'Book Consultation'
        }
    ];

    const serviceContainer = document.getElementById('services-container');
    const searchInput = document.getElementById('service-search');
    const serviceFilter = document.getElementById('service-filter');
    const serviceResultsText = document.getElementById('service-results');

    const renderServiceCards = () => {
        if (!serviceContainer) {
            return;
        }

        const query = (searchInput?.value || '').trim().toLowerCase();
        const filterValue = serviceFilter?.value || 'all';

        const filteredServices = serviceCatalog.filter((service) => {
            const searchPattern = [service.title, service.category, service.description, service.price]
                .join(' ')
                .toLowerCase();
            const matchesSearch = !query || searchPattern.includes(query);
            const matchesFilter = filterValue === 'all' || service.category === filterValue;

            return matchesSearch && matchesFilter;
        });

        if (serviceResultsText) {
            const count = filteredServices.length;
            const label = count === 1 ? 'service' : 'services';
            serviceResultsText.textContent = `${count} ${label} match your request.`;
        }

        if (!filteredServices.length) {
            serviceContainer.innerHTML = `
                <div class="service-empty">
                    <h3>No matching services found</h3>
                    <p>Try a different keyword or switch back to all categories.</p>
                </div>
            `;
            return;
        }

        serviceContainer.innerHTML = filteredServices.map((service) => `
            <article class="service-card" data-service="${service.id}">
                <div class="service-icon ${service.iconClass}">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.price}</p>
                <p>${service.description}</p>
                <a href="#booking-form" class="small-btn" data-service="${service.id}">
                    ${service.buttonLabel}
                </a>
            </article>
        `).join('');
    };

    if (serviceContainer && searchInput && serviceFilter) {
        searchInput.addEventListener('input', renderServiceCards);
        serviceFilter.addEventListener('change', renderServiceCards);
        renderServiceCards();
    }

    const serviceLinks = document.querySelectorAll('[data-service]');

    serviceLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const serviceValue = link.dataset.service;
            if (!serviceValue) {
                return;
            }

            sessionStorage.setItem('pronearSelectedService', serviceValue);

            if (link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                window.location.href = link.getAttribute('href').includes('#')
                    ? link.getAttribute('href')
                    : 'book.html#booking-form';
            }
        });
    });

    const bookingForm = document.querySelector('.booking-form');
    const bookingServiceSelect = document.getElementById('service');

    if (bookingForm && bookingServiceSelect) {
        const savedService = sessionStorage.getItem('pronearSelectedService');

        if (savedService) {
            const matchingOption = [...bookingServiceSelect.options].find(
                (option) => option.value === savedService
            );

            if (matchingOption) {
                bookingServiceSelect.value = savedService;
            }
        }

        if (window.location.hash === '#booking-form' || sessionStorage.getItem('pronearSelectedService')) {
            setTimeout(() => {
                bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                bookingServiceSelect.focus();
            }, 150);
        }
    }

    const modal = document.getElementById('profile-modal');
    const modalContent = document.getElementById('profile-content');
    const closeModalButton = document.getElementById('close-profile-modal');

    if (modal && modalContent && closeModalButton) {
        const professionalProfiles = {
            'tasha': {
                name: 'Tasha M.',
                title: 'Hair Stylist',
                distance: '2.3 km away',
                price: 'From R350',
                rating: '⭐ 4.8 (124 reviews)',
                bio: 'Tasha creates polished looks for every occasion, from sleek blowouts to protective styling and event-ready finishes.'
            },
            'nadia': {
                name: 'Nadia S.',
                title: 'Makeup Artist',
                distance: '4.7 km away',
                price: 'From R450',
                rating: '⭐ 4.9 (98 reviews)',
                bio: 'Nadia specialises in soft glam and natural beauty finishes that photograph beautifully and feel effortless all day.'
            },
            'zee': {
                name: 'Zee M.',
                title: 'Nail Technician',
                distance: '5.1 km away',
                price: 'From R300',
                rating: '⭐ 4.7 (76 reviews)',
                bio: 'Zee offers precision nail art, classic manicures, and elegant long-wear finishes tailored to your style.'
            }
        };

        const openProfileModal = (profileKey) => {
            const profile = professionalProfiles[profileKey];

            if (!profile) {
                return;
            }

            modalContent.innerHTML = `
                <div class="profile-header">
                    <div class="profile-badge">${profile.title}</div>
                    <h3>${profile.name}</h3>
                </div>
                <ul class="profile-details">
                    <li><strong>Location:</strong> ${profile.distance}</li>
                    <li><strong>Pricing:</strong> ${profile.price}</li>
                    <li><strong>Reviews:</strong> ${profile.rating}</li>
                </ul>
                <p>${profile.bio}</p>
                <a href="book.html#booking-form" class="button primary-btn">Book this pro</a>
            `;

            modal.classList.add('is-visible');
            modal.setAttribute('aria-hidden', 'false');
        };

        closeModalButton.addEventListener('click', () => {
            modal.classList.remove('is-visible');
            modal.setAttribute('aria-hidden', 'true');
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('is-visible');
                modal.setAttribute('aria-hidden', 'true');
            }
        });

        document.querySelectorAll('.view-btn').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const profileKey = button.dataset.profile;
                if (profileKey) {
                    openProfileModal(profileKey);
                }
            });
        });
    }

    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImage = document.getElementById('gallery-lightbox-image');
    const lightboxTitle = document.getElementById('gallery-lightbox-title');
    const lightboxCaption = document.getElementById('gallery-lightbox-caption');
    const closeLightboxButton = document.getElementById('close-gallery-lightbox');
    const prevButton = document.getElementById('prev-gallery-image');
    const nextButton = document.getElementById('next-gallery-image');
    const galleryItems = [...document.querySelectorAll('.gallery-item')];

    if (lightbox && lightboxImage && lightboxTitle && lightboxCaption && closeLightboxButton && galleryItems.length) {
        let currentGalleryIndex = 0;

        const updateLightboxContent = () => {
            const activeItem = galleryItems[currentGalleryIndex];
            if (!activeItem) {
                return;
            }

            const image = activeItem.querySelector('img');
            const src = activeItem.dataset.galleryImage || image?.src || '';

            lightboxImage.src = src;
            lightboxImage.alt = image?.alt || activeItem.dataset.galleryTitle || 'Beauty gallery image';
            lightboxTitle.textContent = activeItem.dataset.galleryTitle || 'Beauty look';
            lightboxCaption.textContent = activeItem.dataset.galleryCaption || '';
        };

        const openLightbox = (index) => {
            currentGalleryIndex = index;
            updateLightboxContent();
            lightbox.classList.add('is-visible');
            lightbox.setAttribute('aria-hidden', 'false');
        };

        const closeLightbox = () => {
            lightbox.classList.remove('is-visible');
            lightbox.setAttribute('aria-hidden', 'true');
        };

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });

        closeLightboxButton.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        prevButton.addEventListener('click', () => {
            currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
            updateLightboxContent();
        });

        nextButton.addEventListener('click', () => {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
            updateLightboxContent();
        });

        document.addEventListener('keydown', (event) => {
            if (!lightbox.classList.contains('is-visible')) {
                return;
            }

            if (event.key === 'Escape') {
                closeLightbox();
            } else if (event.key === 'ArrowRight') {
                currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
                updateLightboxContent();
            } else if (event.key === 'ArrowLeft') {
                currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
                updateLightboxContent();
            }
        });
    }
});
