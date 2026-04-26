document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a[data-target]');
    const logoLink = document.querySelector('.logo a[data-target]');

    const pages = {
        home: `
            <div class="home-container">
                <div class="home-image">
                    <img src="img/home.png" alt="Home Image">
                </div>
                <div class="home-content">
                    <h1>Welcome to my website!</h1>
                    <p>Hi! I'm İshak Bostan, passionate about mathematics, algorithms and parallelism. Welcome to my homepage. Take a look around and get in touch if you'd like.</p>
                    <div class="social-links">
                        <a href="#" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        `,
        about: `
            <div class="about-container">
                <h1 class="about-title">Who am I?</h1>
                <div class="about-content-wrapper">
                    <div class="about-image">
                        <img src="img/about.png" alt="Profile Picture">
                    </div>
                    <div class="about-text">
                        <p>Hi! I'm İshak Bostan. My main academic interests lie in mathematics, algorithms and, more recently, parallel computing, which is a field I discovered and quickly came to enjoy. What fascinates me most is not just writing code, but understanding the theoretical and mathematical foundations that drive efficient, elegant systems.</p>
                        <p>During my studies, I've explored (and am still exploring) a variety of topics, from systems programming to discrete mathematics and logic. I enjoy diving into the abstract principles that underpin computational ideas and the theoretical foundations that support them.</p>
                        <p>Outside of academics, I've been involved in various student organisations as well as musical ensembles like choirs and orchestras. Music has always been an important part of my life. The violin is my primary instrument, and I also enjoy playing the guitar.</p>
                        <p>I'm also passionate about languages. At the moment, I am learning French, and I'm already thinking about what comes next. Perhaps Italian or even Romansh, since I'm in Switzerland :)</p>
                        <p>Feel free to reach out if you'd like to connect, collaborate or learn more!</p>
                    </div>
                </div>
            </div>
        `,
        cv: `
            <div class="cv-container">
                <h1 class="cv-title">CV</h1>
                <p class="cv-intro">Should you have any questions or require a more comprehensive version of my CV, please don't hesitate to reach out.</p>
                
                <div class="cv-layout">
                    <div class="cv-sidebar">
                        <ul>
                            <li><a href="#education" class="scroll-link">Education</a></li>
                            <li><a href="#volunteering" class="scroll-link">Volunteering</a></li>
                            <li><a href="#activities" class="scroll-link">Activities & Societies</a></li>
                            <li><a href="#skills" class="scroll-link">Skills</a></li>
                            <li><a href="#languages" class="scroll-link">Languages</a></li>
                        </ul>
                    </div>
                    
                    <div class="cv-main">
                        <div class="cv-header-info">
                            <strong>Name</strong>
                            <span>İshak Bostan</span>
                            <strong>Email</strong>
                            <span>ishak[at]example.com</span>
                        </div>

                        <div id="education" class="cv-section">
                            <h2>Education</h2>
                            <div class="cv-item">
                                <h3>University Name</h3>
                                <div class="cv-meta">BSc Computer Science</div>
                                <div class="cv-meta">Sep 2024 - Present</div>
                            </div>
                            <div class="cv-item">
                                <h3>High School Name</h3>
                                <div class="cv-meta">Matura</div>
                                <div class="cv-meta">Sep 2019 - Jun 2024</div>
                            </div>
                        </div>

                        <div id="volunteering" class="cv-section">
                            <h2>Volunteering</h2>
                            <div class="cv-item">
                                <h3>Semester Spokesperson</h3>
                                <div class="cv-meta">Association of Computer Science Students</div>
                                <div class="cv-meta">Representative for Algorithms and Data Structures - Fall 2025</div>
                                <div class="cv-meta">Sep 2025 - Present</div>
                            </div>
                            <div class="cv-item">
                                <h3>Member of Peer Support Project</h3>
                                <div class="cv-meta">Lower Grade Support Programme</div>
                                <div class="cv-meta">Tutoring and Mentorship</div>
                                <div class="cv-meta">Sep 2019 - Jun 2024</div>
                            </div>
                        </div>

                        <div id="activities" class="cv-section">
                            <h2>Activities & Societies</h2>
                            <div class="cv-item">
                                <h3>Member of the Art Exhibition Team</h3>
                                <div class="cv-meta">Associated with High School</div>
                                <div class="cv-meta">Sep 2023 - Jan 2024</div>
                            </div>
                            <div class="cv-item">
                                <h3>Member of the String Orchestra</h3>
                                <div class="cv-meta">Associated with High School</div>
                                <div class="cv-meta">Sep 2022 - Jun 2023</div>
                            </div>
                        </div>
                        
                        <div id="skills" class="cv-section">
                            <h2>Skills</h2>
                            <div class="cv-item">
                                <p>Java, C++, Python, HTML/CSS, JavaScript</p>
                            </div>
                        </div>

                        <div id="languages" class="cv-section">
                            <h2>Languages</h2>
                            <div class="cv-item">
                                <p>Turkish (Native), English (Fluent), German (Advanced)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    function loadPage(target) {
        if (!pages[target]) return;
        
        mainContent.style.opacity = 0;
        
        setTimeout(() => {
            mainContent.innerHTML = pages[target];
            mainContent.style.opacity = 1;
            
            // Re-attach scroll behavior for CV sidebar links after injecting content
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
