document.addEventListener('DOMContentLoaded', () => {
    // Hide loader on initial load
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 400); // Let the spinner spin for a bit
    }

    // Intercept language button clicks for smooth transition
    const langLinks = document.querySelectorAll('.dropdown-menu a');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            // Close dropdown
            document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('open'));
            if (loader) {
                loader.classList.remove('hidden');
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500);
            } else {
                window.location.href = targetUrl;
            }
        });
    });

    // Language dropdown toggle (touch & click friendly)
    const langDropdowns = document.querySelectorAll('.lang-dropdown');
    langDropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.lang-btn');
        if (!btn) return;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('open');
            // Close all other dropdowns first
            langDropdowns.forEach(d => d.classList.remove('open'));
            // Toggle this one
            if (!isOpen) dropdown.classList.add('open');
        });
    });

    // Close dropdown when clicking/touching outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-dropdown')) {
            langDropdowns.forEach(d => d.classList.remove('open'));
        }
    });
    document.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.lang-dropdown')) {
            langDropdowns.forEach(d => d.classList.remove('open'));
        }
    }, { passive: true });

    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a[data-target]');
    const logoLink = document.querySelector('.logo a[data-target]');

    
    const lang = document.documentElement.lang || 'en';
    const pages = translations[lang] || translations['en'];

    function loadPage(target) {
        if (!pages[target]) return;
        
        mainContent.style.opacity = 0;
        
        setTimeout(() => {
            mainContent.innerHTML = pages[target];
            mainContent.style.opacity = 1;
            
            // Re-attach scroll behavior for CV sidebar links after injecting content
            if (target === 'cv') {
                const scrollLinks = document.querySelectorAll('.scroll-link');
                scrollLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = link.getAttribute('href').substring(1);
                        const targetSection = document.getElementById(targetId);
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                });
            }
            
            // Attach carousel functionality for Home page
            if (target === 'home') {
                const track = document.querySelector('.carousel-track');
                const prevBtn = document.querySelector('.prev-btn');
                const nextBtn = document.querySelector('.next-btn');
                const indicatorsContainer = document.getElementById('carouselIndicators');
                
                if (track && prevBtn && nextBtn && indicatorsContainer) {
                    const cards = Array.from(track.children);
                    let currentIndex = 0;
                    
                    // Create dots
                    indicatorsContainer.innerHTML = '';
                    cards.forEach((_, index) => {
                        const dot = document.createElement('div');
                        dot.classList.add('carousel-dot');
                        if (index === 0) dot.classList.add('active');
                        dot.addEventListener('click', () => scrollToIndex(index));
                        indicatorsContainer.appendChild(dot);
                    });
                    
                    const dots = document.querySelectorAll('.carousel-dot');
                    
                    function scrollToIndex(index) {
                        if (index < 0 || index >= cards.length) return;
                        currentIndex = index;
                        const cardWidth = cards[0].getBoundingClientRect().width;
                        const gap = parseInt(window.getComputedStyle(track).gap) || 0;
                        track.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
                        updateDots();
                    }
                    
                    function updateDots() {
                        dots.forEach(dot => dot.classList.remove('active'));
                        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
                    }
                    
                    prevBtn.addEventListener('click', () => {
                        if (currentIndex > 0) scrollToIndex(currentIndex - 1);
                    });
                    
                    nextBtn.addEventListener('click', () => {
                        if (currentIndex < cards.length - 1) scrollToIndex(currentIndex + 1);
                    });
                    
                    // Auto-play
                    let autoPlayInterval = setInterval(() => {
                        if (currentIndex < cards.length - 1) {
                            scrollToIndex(currentIndex + 1);
                        } else {
                            scrollToIndex(0);
                        }
                    }, 4000);
                    
                    // Pause on hover or click
                    const wrapper = document.querySelector('.carousel-wrapper');
                    if (wrapper) {
                        wrapper.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
                        wrapper.addEventListener('touchstart', () => clearInterval(autoPlayInterval));
                    }
                    
                    // Update dots on manual scroll
                    track.addEventListener('scroll', () => {
                        const scrollPosition = track.scrollLeft;
                        const cardWidth = cards[0].getBoundingClientRect().width;
                        const gap = parseInt(window.getComputedStyle(track).gap) || 0;
                        const newIndex = Math.round(scrollPosition / (cardWidth + gap));
                        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
                            currentIndex = newIndex;
                            updateDots();
                        }
                    });
                }
            }
            
        }, 300); // 300ms transition time
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            loadPage(target);
        });
    });

    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Reset active states and make home active
            navLinks.forEach(l => l.classList.remove('active'));
            const homeLink = document.querySelector('nav a[data-target="home"]');
            if (homeLink) homeLink.classList.add('active');
            
            loadPage('home');
        });
    }

    // Load initial page
    document.querySelector('nav a[data-target="home"]').classList.add('active');
    loadPage('home');
});
