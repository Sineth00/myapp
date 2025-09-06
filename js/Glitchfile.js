 // Sidebar toggle and lazy-load code remains unchanged
        function toggleSidebar() {
            document.getElementById("sidebar").classList.toggle("active");
        }

        document.addEventListener("DOMContentLoaded", () => {
            const lazyImages = document.querySelectorAll(".lazy-img");
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute("data-src");
                        img.onload = () => img.classList.add("loaded");
                        img.removeAttribute("data-src");
                        obs.unobserve(img);
                    }
                });
            }, { threshold: 0.1 });
            lazyImages.forEach(img => observer.observe(img));
        });

        // Download button - open 2 links
        function openTwoLinks(url1, url2) {
            let popup1 = window.open(url1, '_blank');
            let popup2 = window.open(url2, '_blank');

            if (!popup1 || popup1.closed || typeof popup1.closed == 'undefined' ||
                !popup2 || popup2.closed || typeof popup2.closed == 'undefined') {
                alert('🚫 ඔබගේ බ්‍රව්සරයේ Popup-blocker සක්‍රීය වී ඇති නිසා File එක Download කරගත නොහැක. කරුණාකර Popup-blocker අක්‍රීය කරන්න.');
            }
        }

        document.getElementById('openPagesBtn1').addEventListener('click', function () {
            openTwoLinks('https://ads.example.com', './Glitch/introductionglitch');
        });
