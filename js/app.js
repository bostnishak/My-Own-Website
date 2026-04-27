document.addEventListener('DOMContentLoaded', () => {
    // Hide loader on initial load
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 400); // Let the spinner spin for a bit
    }

    // Intercept language button clicks for smooth transition
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = langBtn.getAttribute('href');
            if (loader) {
                loader.classList.remove('hidden');
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500); // Wait for spinner to show before navigating
            } else {
                window.location.href = targetUrl;
            }
        });
    }

    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a[data-target]');
    const logoLink = document.querySelector('.logo a[data-target]');

    const pages = {
        home: `
            <div class="home-layout">
                <div class="home-container">
                    <div class="home-content" style="text-align: center; max-width: 700px; margin: 0 auto;">
                        <h1>Welcome to my website!</h1>
                        <p style="display: inline-block; padding: 6px 12px; border: 1px solid rgba(0,0,0,0.1); border-radius: 20px; font-size: 0.9rem; font-weight: 500; margin-bottom: 15px; color: #444;"><i class="fa-solid fa-briefcase" style="margin-right: 5px;"></i> Actively seeking Summer Internship / Part-time position</p>
                        <p>Hi! I'm İshak Bostan, a Computer Engineering student and Full Stack Developer passionate about Artificial Intelligence, Cybersecurity, and building scalable enterprise software. Welcome to my homepage. Take a look around and get in touch if you'd like to connect!</p>
                        <div class="social-links" style="justify-content: center;">
                            <a href="https://linkedin.com/in/ishakbostan" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/bostnishak" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:ishakbostan@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="recent-activities">
                    <h2>Recent Activities</h2>
                    <div class="carousel-wrapper">
                        <button class="carousel-btn prev-btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <div class="carousel-track">
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Apr 25, 2026</span>
                                <h3>AHK Türkiye Career Day</h3>
                                <p>Engaged with industry professionals and explored career opportunities at the 9th Career Day event.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Apr 2026</span>
                                <h3>AI & Machine Learning Certification</h3>
                                <p>Completed the AI & Machine Learning professional certification program.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Mar 2026</span>
                                <h3>Google AI Essentials Certification</h3>
                                <p>Completed the Google AI Essentials professional certification program.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Mar 2026</span>
                                <h3>OMDb Movie Application</h3>
                                <p>Built a responsive Single Page Application (SPA) utilizing vanilla JavaScript and the OMDb REST API.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Feb 2026 - Present</span>
                                <h3>ExpenseGuard</h3>
                                <p>Developed an AI-driven enterprise expense management and fraud detection (OCR) SaaS platform for B2B companies.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2026 - Present</span>
                                <h3>Edulera</h3>
                                <p>Developed a web-based e-learning system featuring automated certification logic based on quiz performance.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2026 - Present</span>
                                <h3>Chat Application for PC</h3>
                                <p>Developed a real-time TCP messaging application with a graphical user interface (GUI) using Python, Sockets, and Multi-threading.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2026</span>
                                <h3>Google Cybersecurity Certification</h3>
                                <p>Completed the Google Cybersecurity Professional Certification program.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2025 - May 2025</span>
                                <h3>Walletly</h3>
                                <p>Worked on a personal finance and smart expense tracking application with a user-friendly interface.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Sep 2024 - Dec 2024</span>
                                <h3>GIMBO</h3>
                                <p>Developed a desktop application that streamlines course and task management for students.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2024 - Jun 2024</span>
                                <h3>Pill Reminder</h3>
                                <p>A mobile health application that simplifies medication tracking and improves the user experience.</p>
                            </div>
                        </div>
                        <button class="carousel-btn next-btn"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <div class="carousel-indicators" id="carouselIndicators"></div>
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
                        <p>Hi! I'm İshak Bostan, a Computer Engineering student at Beykoz University with a strong focus on artificial intelligence and cybersecurity. I'm actively seeking opportunities to contribute to real-world projects and gain professional experience.</p>
                        <p>I actively build projects to explore new programming languages, frameworks, and hardware architectures. My main focus is on designing service-oriented architectures (SOA) and scalable microservices utilizing modern message brokers and containerization.</p>
                        <p>I have hands-on experience in mobile application development, team leadership, and systematic debugging. My technical skill set spans across various programming languages including C++, Python, Java, Dart, and JavaScript, along with frameworks like Flutter and ASP.NET Core.</p>
                        <p>Throughout my studies, I've led development teams for various applications such as ExpenseGuard (an Enterprise AI Expense Platform), Walletly (Smart Expense Tracker), and GIMBO (Course Helper Application). I also hold professional certificates from Google and Microsoft in Cybersecurity and AI Fundamentals.</p>
                        <p>Outside of my core academic work, I'm an active member of several student clubs, including the Computer Engineering Society and Google Developer Student Clubs (GDSC) at Beykoz University. I am dedicated to continuous improvement in algorithm design and analytical thinking, bridging the gap between academic theory and practical implementation.</p>
                        <p>When I step away from the keyboard, I believe in maintaining a healthy balance. I love staying active through fitness, playing football, and table tennis. On my creative side, I enjoy playing the guitar, and I actually have a soft spot for building and collecting Legos! These hobbies help me recharge and keep my problem-solving skills sharp in a fun way.</p>
                        <p>Feel free to reach out if you'd like to connect, collaborate, or learn more!</p>
                    </div>
                </div>
            </div>
        `,
        cv: `
            <div class="cv-container">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h1 class="cv-title" style="margin-bottom: 0;">CV</h1>
                    <a href="docs/Ishak_Bostan_CV.pdf" target="_blank" class="download-btn"><i class="fa-solid fa-download"></i> Download PDF</a>
                </div>
                <p class="cv-intro" style="margin-top: 0;">Should you have any questions or require a more comprehensive version of my CV, please don't hesitate to reach out.</p>
                
                <div class="cv-layout">
                    <div class="cv-sidebar">
                        <ul>
                            <li><a href="#summary" class="scroll-link">Summary</a></li>
                            <li><a href="#education" class="scroll-link">Education</a></li>
                            <li><a href="#skills" class="scroll-link">Technical Skills</a></li>
                            <li><a href="#certifications" class="scroll-link">Certifications</a></li>
                            <li><a href="#projects" class="scroll-link">Project Experience</a></li>
                            <li><a href="#volunteering" class="scroll-link">Extracurricular</a></li>
                            <li><a href="#references" class="scroll-link">References</a></li>
                        </ul>
                    </div>
                    
                    <div class="cv-main">
                        <div class="cv-header-info">
                            <strong>Name</strong>
                            <span>İshak Bostan</span>
                            <strong>Email</strong>
                            <span><a href="mailto:ishakbostan@gmail.com" style="color: inherit; text-decoration: underline;">ishakbostan@gmail.com</a></span>
                        </div>

                        <div id="summary" class="cv-section">
                            <h2>Summary</h2>
                            <div class="cv-item">
                                <p>Computer Engineering student at Beykoz University (expected graduation: June 2027) with a strong focus on artificial intelligence and cybersecurity. Certified by Google in Cybersecurity and AI Fundamentals. Skilled in C++, Python, Java, Dart/Flutter, JavaScript, and .NET, complementing hands-on experience in mobile application development, enterprise SaaS architecture, team leadership, and debugging. Dedicated to continuous improvement in algorithm design and analytical thinking. Actively seeking a summer internship or part-time junior engineer position to contribute to real-world projects and gain professional experience.</p>
                            </div>
                        </div>

                        <div id="education" class="cv-section">
                            <h2>Education</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz University</h3>
                                    <span class="cv-meta">Expected Graduation: June 2027</span>
                                </div>
                                <div class="cv-meta">Faculty of Engineering and Architecture</div>
                                <p>Bachelor of Science in Computer Engineering (English)</p>
                            </div>
                        </div>
                        
                        <div id="skills" class="cv-section">
                            <h2>Technical Skills</h2>
                            <div class="cv-item">
                                <p><strong>Programming Languages:</strong> C++, C, Python, Java, JavaScript, C#, Dart, CSS/HTML</p>
                                <p><strong>Frameworks & Tools:</strong> ASP.NET Core Web API, Flutter, FastAPI, Docker, RabbitMQ, Redis, SQL (PostgreSQL), Git, Google Analytics, Android Studio, Visual Studio</p>
                                <p><strong>Core Competencies:</strong> SOA / Clean Architecture, Microservices, Prompt Engineering, Project Management, Network Security & Threat Detection, Data Protection, Data Structures & Algorithms, OOP, Agile Teamwork</p>
                                <p><strong>Platforms & OS:</strong> Windows, Linux, AWS S3, Microsoft Azure</p>
                                <p><strong>Languages:</strong> Turkish (Native), English (C1 – Advanced), German (A2 – Elementary)</p>
                            </div>
                        </div>

                        <div id="certifications" class="cv-section">
                            <h2>Certifications</h2>
                            <div class="cv-item">
                                <ul style="padding-left: 1.2rem; margin: 0; color: var(--text-primary); line-height: 1.6;">
                                    <li>Google Cybersecurity Professional Certificate (Coursera-Google) <a href="https://coursera.org/share/e27c2e05caf88dfcbb78b26118aed218" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Jan 2026</i></li>
                                    <li>AI Essentials (Coursera-Google) <a href="https://coursera.org/share/7d0a3c97773eda9253f971c33aec788c" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Mar 2026</i></li>
                                    <li>AI & Machine Learning (Coursera-Microsoft) <a href="https://coursera.org/share/0031ccfb30a33b9028d6ca351952c21f" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Apr 2026</i></li>
                                </ul>
                            </div>
                        </div>

                        <div id="projects" class="cv-section">
                            <h2>Project Experience</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>ExpenseGuard – Enterprise AI Expense & Fraud Detection Platform | Lead Developer <a href="https://github.com/bostnishak/ExpenseGuard" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Feb 2026 – Present</span>
                                </div>
                                <div class="project-image-placeholder" style="margin: 15px 0; max-width: 100%; border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                                    <img src="img/expenseguard.png" alt="ExpenseGuard UI" style="width: 100%; display: block;" onerror="this.parentElement.style.display='none'">
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Architected a cloud-native, multi-tenant SaaS platform automating B2B expense workflows and AI-driven fraud detection using OpenAI GPT-4 Vision.</li>
                                    <li>Developed a highly scalable backend with ASP.NET Core 9, PostgreSQL (pgcrypto encryption), and Redis, integrated with a Python/FastAPI AI service via RabbitMQ.</li>
                                    <li>Implemented robust security measures including JWT authentication, Role-Based Access Control (RBAC), real-time budget tracking, and IDOR protection.</li>
                                    <li>Designed a fast, modular frontend using Vanilla JS (Glassmorphism UI) and built a cross-platform mobile application with Flutter for on-the-go receipt scanning.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Edulera – Online Education & Certification Platform <a href="https://github.com/bostnishak/Edulera-the-Course-Helper-Website" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2026 – Present</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Developed a web-based e-learning system featuring automated certification logic that generates "Participation" or "Success" certificates based on quiz performance.</li>
                                    <li>Designed a full-stack platform using HTML, CSS, and JavaScript with interactive dashboards and secure payment integration.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Walletly – Smart Expense Tracker | Team Leader <a href="https://github.com/bostnishak/Walletly" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2025 – May 2025</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Led project team: organized meetings, set milestones, and ensured timely delivery of the product.</li>
                                    <li>Made key architectural decisions and aligned the team's technical direction with project goals and timeline.</li>
                                    <li>Focused on UI/UX improvements to deliver a polished, user-friendly personal finance management experience.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>OMDb Movie Application – SPA <a href="https://github.com/bostnishak/omdb-project" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Mar 2026</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Built a fully responsive, modular Single Page Application (SPA) consuming the OMDb REST API.</li>
                                    <li>Implemented asynchronous data fetching, dynamic UI updates with vanilla JavaScript, and utilized LocalStorage for maintaining search history.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>GIMBO – Course Helper Application | Team Leader <a href="https://github.com/bostnishak/Gimbo-The-Course-Helper-Mobile-Application-" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Sep 2024 – Dec 2024</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Led the full development lifecycle as Team Leader: task distribution, technical guidance, and progress tracking.</li>
                                    <li>Conducted user needs analysis and contributed actively to design and architecture decisions.</li>
                                    <li>Delivered the desktop application for student course/task management on schedule and at target quality.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Pill Reminder – Medication Tracking App | Team Member <a href="https://github.com/bostnishak/Pill-Reminder-Project-2024-" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2024 – Jun 2024</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Developed core modules and performed systematic debugging throughout the coding lifecycle.</li>
                                    <li>Proactively identified potential UX issues and refined the interface for a seamless user experience.</li>
                                    <li>Collaborated closely with teammates on module integration, ensuring smooth technical workflow.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Chat Application for PC <a href="https://github.com/bostnishak/Chat-application-for-PC" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2026 – Present</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Developed a real-time TCP messaging application with a graphical user interface (GUI) using Python, Sockets, and Multi-threading.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="volunteering" class="cv-section">
                            <h2>Extracurricular & Volunteering</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>9th Career Day (AHK Türkiye) | Attendee <a href="https://www.linkedin.com/posts/ishakbostan_ahktaesrkiye-kariyergaesnaes-networking-ugcPost-7453851114543910912-ktIu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9QbZ4BHZkPCJPKyom5pG8uTa7HktNeJoY" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                    <span class="cv-meta">Apr 2026</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Engaged with industry professionals and explored career opportunities at the career fair organized by the German-Turkish Chamber of Commerce and Industry.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz University Computer Engineering Society | Society Member</h3>
                                    <span class="cv-meta">Oct 2023 – Present</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Organized technical study groups focusing on Object-Oriented Programming (OOP) concepts and database management systems.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz University Software Engineering Club | Club Member</h3>
                                    <span class="cv-meta">Dec 2024 – Apr 2026</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Engaged in peer code review sessions and collaborative debugging practices to improve overall code quality and maintainability.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Google Developer Student Clubs (GDSC) Beykoz University | Club Member</h3>
                                    <span class="cv-meta">Jan 2024 – Jun 2025</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Attended specialized training sessions on Artificial Intelligence and Cybersecurity fundamentals to stay updated on emerging industry trends.</p>
                            </div>
                        </div>

                        <div id="references" class="cv-section">
                            <h2>References</h2>
                            <div class="cv-item">
                                <h3>Coşar Baykal <a href="https://www.linkedin.com/in/cosarbaykal/" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                <div class="cv-meta">Chief Architect Director, Product Development | Etiya</div>
                                <p><a href="mailto:cosar.baykal@etiya.com" style="color: var(--link-color);">cosar.baykal@etiya.com</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Abdurazzag Ali A. Aburas</h3>
                                <div class="cv-meta">Professor, Department of Computer Engineering | Beykoz University</div>
                                <p><a href="mailto:abdurazzagaliaaburas@beykoz.edu.tr" style="color: var(--link-color);">abdurazzagaliaaburas@beykoz.edu.tr</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Mustafa Cem Kasapbaşı <a href="https://www.linkedin.com/in/mustafa-cem-kasapbaşı-546b692/" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                <div class="cv-meta">Associate Professor, Department of Computer Engineering | Beykoz University</div>
                                <p><a href="mailto:mustafacemkasapbasi@beykoz.edu.tr" style="color: var(--link-color);">mustafacemkasapbasi@beykoz.edu.tr</a></p>
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
