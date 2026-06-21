// main.js
// INFC Premium Interactions & Navigation (2026)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Mobile Navigation Menu
    const navContainer = document.querySelector('.nav-container');
    const nav = document.querySelector('nav');
    
    if (navContainer && nav) {
        // Create Hamburger Menu button
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger-menu';
        hamburger.setAttribute('aria-label', 'Ouvrir le menu de navigation');
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        
        // Create mobile navigation overlay
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
        
        // Insert hamburger in nav-container
        const navCta = document.querySelector('.nav-cta');
        if (navCta) {
            navContainer.insertBefore(hamburger, navCta);
        } else {
            navContainer.appendChild(hamburger);
        }
        
        // Mobile CTA button (duplicate for drawer list on very small mobile)
        const mobileLinksList = nav.querySelector('.nav-links');
        if (mobileLinksList) {
            const drawerCtaLi = document.createElement('li');
            drawerCtaLi.className = 'nav-drawer-cta';
            drawerCtaLi.style.marginTop = '2rem';
            drawerCtaLi.style.padding = '0 1.2rem';
            
            // Get text and link from the original navCta or contact link
            const originalCta = document.querySelector('.nav-cta a');
            const ctaUrl = originalCta ? originalCta.getAttribute('href') : 'contact.html';
            const ctaText = originalCta ? originalCta.textContent : 'Bilan découverte';
            
            drawerCtaLi.innerHTML = `<a href="${ctaUrl}" class="btn btn-gold pulse-cta" style="width: 100%; display: flex; text-align: center; justify-content: center; font-size: 0.9rem;">${ctaText}</a>`;
            
            // Only visible on mobile CSS, but let's append it
            mobileLinksList.appendChild(drawerCtaLi);
        }

        // Toggle navigation menu
        const toggleMenu = () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        };

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        const links = nav.querySelectorAll('.nav-links a:not(.btn)');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }

    // 2. Active Navigation Link Highlighting
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Handle direct matches and also sub-anchors/query parameters
        if (href && (href === currentLocation || href.split('?')[0] === currentLocation)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all others
                faqItems.forEach(faq => faq.classList.remove('active'));
                
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 4. Advanced Scroll Animations (Intersection Observer)
    const animElements = document.querySelectorAll('.fade-in, .fade-up, .scale-in, .slide-in-left, .slide-in-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const animationObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply dynamic delay if specified
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    entry.target.style.transitionDelay = `${delay}ms`;
                }
                
                entry.target.classList.add('visible');
                obs.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    animElements.forEach(el => {
        animationObserver.observe(el);
    });

    // 5. Statistics Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    const counterObserverOptions = {
        root: null,
        threshold: 0.2
    };
    
    const startCounter = (counterElement) => {
        const target = parseInt(counterElement.getAttribute('data-target'), 10);
        if (isNaN(target)) return;
        
        let count = 0;
        const duration = 1500; // 1.5s
        const frameRate = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameRate);
        const increment = target / totalFrames;
        
        let frame = 0;
        const animate = () => {
            frame++;
            count = Math.min(Math.round(increment * frame), target);
            
            // Format number with spaces for thousands
            if (target >= 1000) {
                counterElement.textContent = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            } else {
                counterElement.textContent = count;
            }
            
            if (frame < totalFrames) {
                requestAnimationFrame(animate);
            } else {
                counterElement.textContent = target >= 1000 ? target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : target;
            }
        };
        
        requestAnimationFrame(animate);
    };
    
    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                obs.unobserve(entry.target); // Run once
            }
        });
    }, counterObserverOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});
