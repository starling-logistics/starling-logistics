document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle logic
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // For now, toggle a class. In a real scenario, this would open a side drawer.
            // Since we didn't style the drawer, we'll just log or do a simple alert/expand
            // For this clone, we'll focus on desktop, but here is where you'd expand the menu.
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = '#0a1a2e';
            nav.style.padding = '20px';
            nav.style.textAlign = 'center';
            nav.style.flexDirection = 'column';
        });
    }

    // Number Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target') || parseInt(counter.innerText);
                const count = +counter.innerText.replace('+', ''); // Clean non-numbers
                
                // Simple check to keep the "+" if it exists in the original text
                const hasPlus = counter.innerText.includes('+');

                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc) + (hasPlus ? '+' : '');
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + (hasPlus ? '+' : '');
                }
            };
            
            // Only run if not already run? For now, just run.
            // Ideally we'd use IntersectionObserver to start when visible.
            // updateCount(); 
        });
    };
    
    // Trigger animation effectively immediately for demo purposes
    // animateCounters();
});
