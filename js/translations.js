const translations = {
    "en": {
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
                                <h3>AHK Turkey Career Day</h3>
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
                                    <h3>9th Career Day (AHK Turkey) | Attendee <a href="https://www.linkedin.com/posts/ishakbostan_ahktaesrkiye-kariyergaesnaes-networking-ugcPost-7453851114543910912-ktIu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9QbZ4BHZkPCJPKyom5pG8uTa7HktNeJoY" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
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
    },
    "tr": {
        home: `
            <div class="home-layout">
                <div class="home-container">
                    <div class="home-content" style="text-align: center; max-width: 700px; margin: 0 auto;">
                        <h1>Web siteme hoş geldiniz!</h1>
                        <p style="display: inline-block; padding: 6px 12px; border: 1px solid rgba(0,0,0,0.1); border-radius: 20px; font-size: 0.9rem; font-weight: 500; margin-bottom: 15px; color: #444;"><i class="fa-solid fa-briefcase" style="margin-right: 5px;"></i> Yaz Stajı / Yarı zamanlı pozisyon arayışındayım</p>
                        <p>Merhaba! Ben İshak Bostan, Yapay Zeka, Siber Güvenlik ve ölçeklenebilir kurumsal yazılımlar geliştirmeye tutkuyla bağlı bir Bilgisayar Mühendisliği öğrencisi ve Full Stack Geliştiriciyim. Ana sayfama hoş geldiniz. İnceleyebilir ve bağlantı kurmak isterseniz benimle iletişime geçebilirsiniz!</p>
                        <div class="social-links" style="justify-content: center;">
                            <a href="https://linkedin.com/in/ishakbostan" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/bostnishak" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:ishakbostan@gmail.com" aria-label="E-posta"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="recent-activities">
                    <h2>Son Aktiviteler</h2>
                    <div class="carousel-wrapper">
                        <button class="carousel-btn prev-btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <div class="carousel-track">
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">25 Nis 2026</span>
                                <h3>AHK Türkiye Kariyer Günü</h3>
                                <p>9. Kariyer Günü etkinliğinde sektör profesyonelleriyle bir araya geldim ve kariyer fırsatlarını değerlendirdim.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Nis 2026</span>
                                <h3>AI & Machine Learning Sertifikası</h3>
                                <p>Yapay Zeka ve Makine Öğrenmesi profesyonel sertifika programını başarıyla tamamladım.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Mar 2026</span>
                                <h3>Google Yapay Zeka Temelleri Sertifikası</h3>
                                <p>Google Yapay Zeka Temelleri (AI Essentials) profesyonel sertifika programını başarıyla tamamladım.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Mar 2026</span>
                                <h3>OMDb Film Uygulaması</h3>
                                <p>Saf JavaScript ve OMDb REST API kullanarak duyarlı (responsive) bir Tek Sayfa Uygulaması (SPA) geliştirdim.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Şub 2026 - Günümüz</span>
                                <h3>ExpenseGuard</h3>
                                <p>B2B şirketleri için yapay zeka destekli kurumsal masraf yönetimi ve sahtekarlık tespiti (OCR) sağlayan SaaS platformu geliştirdim.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Oca 2026 - Günümüz</span>
                                <h3>Edulera</h3>
                                <p>Test performansına dayalı otomatik sertifikalandırma mantığı içeren web tabanlı bir e-öğrenme sistemi geliştirdim.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Oca 2026 - Günümüz</span>
                                <h3>PC için Sohbet Uygulaması</h3>
                                <p>Python, Soketler ve Çoklu İş Parçacığı (Multi-threading) kullanarak grafik kullanıcı arayüzüne (GUI) sahip gerçek zamanlı bir TCP mesajlaşma uygulaması geliştirdim.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Oca 2026</span>
                                <h3>Google Siber Güvenlik Sertifikası</h3>
                                <p>Google Siber Güvenlik Profesyonel Sertifika programını başarıyla tamamladım.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Oca 2025 - May 2025</span>
                                <h3>Walletly</h3>
                                <p>Kullanıcı dostu arayüze sahip bir kişisel finans ve akıllı harcama takip uygulaması üzerinde çalıştım.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Eyl 2024 - Ara 2024</span>
                                <h3>GIMBO</h3>
                                <p>Öğrenciler için ders ve görev yönetimini kolaylaştıran bir masaüstü uygulaması geliştirdim.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Oca 2024 - Haz 2024</span>
                                <h3>Pill Reminder (İlaç Hatırlatıcı)</h3>
                                <p>İlaç takibini kolaylaştıran ve kullanıcı deneyimini iyileştiren bir mobil sağlık uygulaması.</p>
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
                <h1 class="about-title">Ben Kimim?</h1>
                <div class="about-content-wrapper">
                    <div class="about-image">
                        <img src="img/about.png" alt="Profil Fotoğrafı">
                    </div>
                    <div class="about-text">
                        <p>Merhaba! Ben İshak Bostan, Beykoz Üniversitesi'nde yapay zeka ve siber güvenlik odaklı çalışmalar yapan bir Bilgisayar Mühendisliği öğrencisiyim. Gerçek dünya projelerine katkıda bulunmak ve profesyonel deneyim kazanmak için aktif olarak fırsatlar arıyorum.</p>
                        <p>Yeni programlama dillerini, framework'leri ve donanım mimarilerini keşfetmek için aktif olarak projeler geliştiriyorum. Temel odak noktam, modern mesaj aracıları (message brokers) ve konteynerleştirme kullanarak servis odaklı mimariler (SOA) ve ölçeklenebilir mikroservisler tasarlamaktır.</p>
                        <p>Mobil uygulama geliştirme, takım liderliği ve sistematik hata ayıklama (debugging) konularında pratik tecrübeye sahibim. Teknik beceri setim; C++, Python, Java, Dart ve JavaScript gibi çeşitli programlama dillerinin yanı sıra Flutter ve ASP.NET Core gibi framework'leri içermektedir.</p>
                        <p>Öğrenim hayatım boyunca ExpenseGuard (Kurumsal Yapay Zeka Masraf Platformu), Walletly (Akıllı Harcama Takipçisi) ve GIMBO (Ders Asistanı Uygulaması) gibi çeşitli uygulamalar için geliştirme ekiplerine liderlik ettim. Ayrıca Siber Güvenlik ve Yapay Zeka Temelleri alanlarında Google ve Microsoft'tan profesyonel sertifikalara sahibim.</p>
                        <p>Temel akademik çalışmalarımın dışında, Beykoz Üniversitesi'ndeki Bilgisayar Mühendisliği Topluluğu ve Google Developer Student Clubs (GDSC) dahil olmak üzere birçok öğrenci kulübünün aktif bir üyesiyim. Algoritma tasarımı ve analitik düşünme konularında sürekli gelişime, akademik teori ile pratik uygulama arasındaki köprüyü kurmaya kendimi adadım.</p>
                        <p>Bilgisayar başından kalktığımda sağlıklı bir denge kurmaya inanıyorum. Fitness yaparak, futbol ve masa tenisi oynayarak aktif kalmayı seviyorum. Yaratıcı tarafımda ise gitar çalmaktan keyif alıyor ve Lego yapıp biriktirmekten büyük zevk duyuyorum! Bu hobiler benim yenilenmeme yardımcı olurken problem çözme becerilerimi de eğlenceli bir şekilde keskin tutuyor.</p>
                        <p>Bağlantı kurmak, işbirliği yapmak veya daha fazlasını öğrenmek isterseniz benimle iletişime geçmekten çekinmeyin!</p>
                    </div>
                </div>
            </div>
        `,
        cv: `
            <div class="cv-container">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h1 class="cv-title" style="margin-bottom: 0;">Özgeçmiş</h1>
                    <a href="docs/Ishak_Bostan_CV.pdf" target="_blank" class="download-btn"><i class="fa-solid fa-download"></i> PDF İndir</a>
                </div>
                <p class="cv-intro" style="margin-top: 0;">Herhangi bir sorunuz olursa veya özgeçmişimin daha kapsamlı bir versiyonuna ihtiyaç duyarsanız, lütfen benimle iletişime geçmekten çekinmeyin.</p>
                
                <div class="cv-layout">
                    <div class="cv-sidebar">
                        <ul>
                            <li><a href="#summary" class="scroll-link">Özet</a></li>
                            <li><a href="#education" class="scroll-link">Eğitim</a></li>
                            <li><a href="#skills" class="scroll-link">Teknik Beceriler</a></li>
                            <li><a href="#certifications" class="scroll-link">Sertifikalar</a></li>
                            <li><a href="#projects" class="scroll-link">Proje Deneyimi</a></li>
                            <li><a href="#volunteering" class="scroll-link">Ders Dışı Etkinlikler</a></li>
                            <li><a href="#references" class="scroll-link">Referanslar</a></li>
                        </ul>
                    </div>
                    
                    <div class="cv-main">
                        <div class="cv-header-info">
                            <strong>İsim</strong>
                            <span>İshak Bostan</span>
                            <strong>E-posta</strong>
                            <span><a href="mailto:ishakbostan@gmail.com" style="color: inherit; text-decoration: underline;">ishakbostan@gmail.com</a></span>
                        </div>

                        <div id="summary" class="cv-section">
                            <h2>Özet</h2>
                            <div class="cv-item">
                                <p>Beykoz Üniversitesi'nde (beklenen mezuniyet: Haziran 2027) yapay zeka ve siber güvenlik odaklı Bilgisayar Mühendisliği öğrencisiyim. Siber Güvenlik ve Yapay Zeka Temelleri alanlarında Google tarafından sertifikalandırıldım. Mobil uygulama geliştirme, kurumsal SaaS mimarisi, takım liderliği ve hata ayıklama konusundaki pratik deneyimlerimi destekleyen C++, Python, Java, Dart/Flutter, JavaScript ve .NET dillerinde yetkinim. Algoritma tasarımı ve analitik düşünme konularında sürekli gelişime odaklanıyorum. Gerçek dünya projelerine katkı sağlamak ve profesyonel deneyim kazanmak için aktif olarak yaz stajı veya yarı zamanlı junior mühendis pozisyonu arıyorum.</p>
                            </div>
                        </div>

                        <div id="education" class="cv-section">
                            <h2>Eğitim</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz Üniversitesi</h3>
                                    <span class="cv-meta">Beklenen Mezuniyet: Haziran 2027</span>
                                </div>
                                <div class="cv-meta">Mühendislik ve Mimarlık Fakültesi</div>
                                <p>Bilgisayar Mühendisliği Lisans Programı (İngilizce)</p>
                            </div>
                        </div>
                        
                        <div id="skills" class="cv-section">
                            <h2>Teknik Beceriler</h2>
                            <div class="cv-item">
                                <p><strong>Programlama Dilleri:</strong> C++, C, Python, Java, JavaScript, C#, Dart, CSS/HTML</p>
                                <p><strong>Framework & Araçlar:</strong> ASP.NET Core Web API, Flutter, FastAPI, Docker, RabbitMQ, Redis, SQL (PostgreSQL), Git, Google Analytics, Android Studio, Visual Studio</p>
                                <p><strong>Temel Yetkinlikler:</strong> SOA / Temiz Mimari, Mikroservisler, Prompt Mühendisliği, Proje Yönetimi, Ağ Güvenliği ve Tehdit Tespiti, Veri Koruma, Veri Yapıları ve Algoritmalar, OOP, Çevik (Agile) Ekip Çalışması</p>
                                <p><strong>Platformlar ve İşletim Sistemleri:</strong> Windows, Linux, AWS S3, Microsoft Azure</p>
                                <p><strong>Yabancı Diller:</strong> Türkçe (Anadil), İngilizce (C1 – İleri Seviye), Almanca (A2 – Başlangıç)</p>
                            </div>
                        </div>

                        <div id="certifications" class="cv-section">
                            <h2>Sertifikalar</h2>
                            <div class="cv-item">
                                <ul style="padding-left: 1.2rem; margin: 0; color: var(--text-primary); line-height: 1.6;">
                                    <li>Google Siber Güvenlik Profesyonel Sertifikası (Coursera-Google) <a href="https://coursera.org/share/e27c2e05caf88dfcbb78b26118aed218" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Oca 2026</i></li>
                                    <li>Yapay Zeka Temelleri (Coursera-Google) <a href="https://coursera.org/share/7d0a3c97773eda9253f971c33aec788c" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Mar 2026</i></li>
                                    <li>AI & Machine Learning (Coursera-Microsoft) <a href="https://coursera.org/share/0031ccfb30a33b9028d6ca351952c21f" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Nis 2026</i></li>
                                </ul>
                            </div>
                        </div>

                        <div id="projects" class="cv-section">
                            <h2>Proje Deneyimi</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>ExpenseGuard – Kurumsal Yapay Zeka Masraf ve Sahtekarlık Tespit Platformu | Lider Geliştirici <a href="https://github.com/bostnishak/ExpenseGuard" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Şub 2026 – Günümüz</span>
                                </div>
                                <div class="project-image-placeholder" style="margin: 15px 0; max-width: 100%; border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                                    <img src="img/expenseguard.png" alt="ExpenseGuard Arayüzü" style="width: 100%; display: block;" onerror="this.parentElement.style.display='none'">
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>OpenAI GPT-4 Vision kullanarak B2B masraf iş akışlarını ve yapay zeka destekli sahtekarlık tespitini otomatikleştiren, buluta özgü (cloud-native), çok kiracılı (multi-tenant) bir SaaS platformu mimarisi tasarladım.</li>
                                    <li>ASP.NET Core 9, PostgreSQL (pgcrypto şifreleme) ve Redis ile son derece ölçeklenebilir bir arka uç (backend) geliştirdim ve RabbitMQ aracılığıyla Python/FastAPI yapay zeka servisine entegre ettim.</li>
                                    <li>JWT kimlik doğrulama, Rol Tabanlı Erişim Kontrolü (RBAC), gerçek zamanlı bütçe takibi ve IDOR koruması dahil olmak üzere sağlam güvenlik önlemleri uyguladım.</li>
                                    <li>Vanilla JS (Glassmorphism UI) kullanarak hızlı ve modüler bir ön uç (frontend) tasarladım ve hareket halindeyken fiş tarama için Flutter ile çapraz platformlu bir mobil uygulama geliştirdim.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Edulera – Online Eğitim ve Sertifika Platformu <a href="https://github.com/bostnishak/Edulera-the-Course-Helper-Website" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Oca 2026 – Günümüz</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Test performansına dayalı olarak "Katılım" veya "Başarı" sertifikaları üreten otomatik sertifikalandırma mantığına sahip web tabanlı bir e-öğrenme sistemi geliştirdim.</li>
                                    <li>Etkileşimli kontrol panelleri ve güvenli ödeme entegrasyonuna sahip HTML, CSS ve JavaScript kullanarak tam yığın (full-stack) bir platform tasarladım.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Walletly – Akıllı Harcama Takipçisi | Takım Lideri <a href="https://github.com/bostnishak/Walletly" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Oca 2025 – May 2025</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Proje ekibine liderlik ettim: toplantılar düzenledim, kilometre taşları belirledim ve ürünün zamanında teslim edilmesini sağladım.</li>
                                    <li>Önemli mimari kararlar aldım ve ekibin teknik yönünü proje hedefleri ve zaman çizelgesiyle uyumlu hale getirdim.</li>
                                    <li>Daha iyi ve kullanıcı dostu bir kişisel finans yönetimi deneyimi sunmak için UI/UX iyileştirmelerine odaklandım.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>OMDb Film Uygulaması – SPA <a href="https://github.com/bostnishak/omdb-project" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Mar 2026</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>OMDb REST API kullanan, tamamen duyarlı ve modüler bir Tek Sayfa Uygulaması (SPA) geliştirdim.</li>
                                    <li>Eşzamansız veri çekme işlemlerini, Vanilla JavaScript ile dinamik UI güncellemelerini gerçekleştirdim ve arama geçmişini tutmak için LocalStorage kullandım.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>GIMBO – Ders Asistanı Uygulaması | Takım Lideri <a href="https://github.com/bostnishak/Gimbo-The-Course-Helper-Mobile-Application-" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Eyl 2024 – Ara 2024</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Takım Lideri olarak tüm geliştirme yaşam döngüsüne liderlik ettim: görev dağılımı, teknik rehberlik ve ilerleme takibi.</li>
                                    <li>Kullanıcı ihtiyaç analizi yaptım ve tasarım ile mimari kararlarına aktif olarak katkıda bulundum.</li>
                                    <li>Öğrenci ders/görev yönetimi için masaüstü uygulamasını planlanan zamanda ve hedeflenen kalitede teslim ettim.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Pill Reminder – İlaç Takip Uygulaması | Takım Üyesi <a href="https://github.com/bostnishak/Pill-Reminder-Project-2024-" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Oca 2024 – Haz 2024</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Temel modülleri geliştirdim ve kodlama yaşam döngüsü boyunca sistematik hata ayıklama işlemlerini gerçekleştirdim.</li>
                                    <li>Olası UX sorunlarını proaktif olarak tespit edip kusursuz bir kullanıcı deneyimi için arayüzü iyileştirdim.</li>
                                    <li>Modül entegrasyonu konusunda ekip arkadaşlarımla yakından çalışarak sorunsuz bir teknik iş akışı sağladım.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>PC için Sohbet Uygulaması <a href="https://github.com/bostnishak/Chat-application-for-PC" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Oca 2026 – Günümüz</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Python, Soketler ve Çoklu İş Parçacığı (Multi-threading) kullanarak grafik kullanıcı arayüzüne (GUI) sahip gerçek zamanlı bir TCP mesajlaşma uygulaması geliştirdim.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="volunteering" class="cv-section">
                            <h2>Ders Dışı Etkinlikler ve Gönüllülük</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>9. Kariyer Günü (AHK Türkiye) | Katılımcı <a href="https://www.linkedin.com/posts/ishakbostan_ahktaesrkiye-kariyergaesnaes-networking-ugcPost-7453851114543910912-ktIu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9QbZ4BHZkPCJPKyom5pG8uTa7HktNeJoY" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                    <span class="cv-meta">Nis 2026</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Türk-Alman Ticaret ve Sanayi Odası tarafından düzenlenen kariyer fuarında sektör profesyonelleriyle bir araya geldim ve kariyer fırsatlarını değerlendirdim.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz Üniversitesi Bilgisayar Mühendisliği Topluluğu | Topluluk Üyesi</h3>
                                    <span class="cv-meta">Eki 2023 – Günümüz</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Nesne Yönelimli Programlama (OOP) kavramları ve veritabanı yönetim sistemleri üzerine teknik çalışma grupları organize ettim.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz Üniversitesi Yazılım Mühendisliği Kulübü | Kulüp Üyesi</h3>
                                    <span class="cv-meta">Ara 2024 – Nis 2026</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Genel kod kalitesini ve sürdürülebilirliğini artırmak için eşler arası kod inceleme oturumlarına ve ortak hata ayıklama uygulamalarına katıldım.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Google Developer Student Clubs (GDSC) Beykoz Üniversitesi | Kulüp Üyesi</h3>
                                    <span class="cv-meta">Oca 2024 – Haz 2025</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Gelişen endüstri trendlerini takip etmek için Yapay Zeka ve Siber Güvenlik temelleri üzerine özel eğitim oturumlarına katıldım.</p>
                            </div>
                        </div>

                        <div id="references" class="cv-section">
                            <h2>Referanslar</h2>
                            <div class="cv-item">
                                <h3>Coşar Baykal <a href="https://www.linkedin.com/in/cosarbaykal/" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                <div class="cv-meta">Baş Mimar Direktörü, Ürün Geliştirme | Etiya</div>
                                <p><a href="mailto:cosar.baykal@etiya.com" style="color: var(--link-color);">cosar.baykal@etiya.com</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Abdurazzag Ali A. Aburas</h3>
                                <div class="cv-meta">Profesör, Bilgisayar Mühendisliği Bölümü | Beykoz Üniversitesi</div>
                                <p><a href="mailto:abdurazzagaliaaburas@beykoz.edu.tr" style="color: var(--link-color);">abdurazzagaliaaburas@beykoz.edu.tr</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Mustafa Cem Kasapbaşı <a href="https://www.linkedin.com/in/mustafa-cem-kasapbaşı-546b692/" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                <div class="cv-meta">Doçent, Bilgisayar Mühendisliği Bölümü | Beykoz Üniversitesi</div>
                                <p><a href="mailto:mustafacemkasapbasi@beykoz.edu.tr" style="color: var(--link-color);">mustafacemkasapbasi@beykoz.edu.tr</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "de": {
        home: `
            <div class="home-layout">
                <div class="home-container">
                    <div class="home-content" style="text-align: center; max-width: 700px; margin: 0 auto;">
                        <h1>Willkommen auf meiner Website!</h1>
                        <p style="display: inline-block; padding: 6px 12px; border: 1px solid rgba(0,0,0,0.1); border-radius: 20px; font-size: 0.9rem; font-weight: 500; margin-bottom: 15px; color: #444;"><i class="fa-solid fa-briefcase" style="margin-right: 5px;"></i> Suche aktiv nach einem Sommerpraktikum / einer Teilzeitstelle</p>
                        <p>Hallo! Ich bin İshak Bostan, ein Informatikstudent und Full Stack Entwickler mit einer Leidenschaft für Künstliche Intelligenz, Cybersicherheit und die Entwicklung skalierbarer Unternehmenssoftware. Willkommen auf meiner Startseite. Schauen Sie sich um und melden Sie sich, wenn Sie sich vernetzen möchten!</p>
                        <div class="social-links" style="justify-content: center;">
                            <a href="https://linkedin.com/in/ishakbostan" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/bostnishak" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:ishakbostan@gmail.com" aria-label="E-Mail"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="recent-activities">
                    <h2>Neueste Aktivitäten</h2>
                    <div class="carousel-wrapper">
                        <button class="carousel-btn prev-btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <div class="carousel-track">
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">25. Apr 2026</span>
                                <h3>AHK Türkei Karrieretag</h3>
                                <p>Austausch mit Branchenexperten und Erkundung von Karrieremöglichkeiten auf dem 9. Karrieretag.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Apr 2026</span>
                                <h3>AI & Machine Learning Zertifizierung</h3>
                                <p>Erfolgreicher Abschluss des professionellen Zertifizierungsprogramms für KI und Maschinelles Lernen.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Mär 2026</span>
                                <h3>Google AI Essentials Zertifizierung</h3>
                                <p>Erfolgreicher Abschluss des professionellen Google AI Essentials Zertifizierungsprogramms.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Mär 2026</span>
                                <h3>OMDb Filmanwendung</h3>
                                <p>Erstellung einer responsiven Single Page Application (SPA) unter Verwendung von Vanilla JavaScript und der OMDb REST API.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Feb 2026 - Heute</span>
                                <h3>ExpenseGuard</h3>
                                <p>Entwicklung einer KI-gesteuerten SaaS-Plattform für Ausgabenmanagement und Betrugserkennung (OCR) für B2B-Unternehmen.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2026 - Heute</span>
                                <h3>Edulera</h3>
                                <p>Entwicklung eines webbasierten E-Learning-Systems mit automatisierter Zertifizierungslogik basierend auf der Quizleistung.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2026 - Heute</span>
                                <h3>Chat-Anwendung für PC</h3>
                                <p>Entwicklung einer Echtzeit-TCP-Messaging-Anwendung mit grafischer Benutzeroberfläche (GUI) unter Verwendung von Python, Sockets und Multi-Threading.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2026</span>
                                <h3>Google Cybersecurity Zertifizierung</h3>
                                <p>Erfolgreicher Abschluss des professionellen Google Cybersecurity Zertifizierungsprogramms.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2025 - Mai 2025</span>
                                <h3>Walletly</h3>
                                <p>Mitarbeit an einer benutzerfreundlichen Anwendung für persönliche Finanzen und smarte Ausgabenverfolgung.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Sep 2024 - Dez 2024</span>
                                <h3>GIMBO</h3>
                                <p>Entwicklung einer Desktop-Anwendung, die das Kurs- und Aufgabenmanagement für Studenten optimiert.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Jan 2024 - Jun 2024</span>
                                <h3>Pill Reminder (Pillenerinnerung)</h3>
                                <p>Eine mobile Gesundheitsanwendung, die die Medikamentenverfolgung vereinfacht und das Benutzererlebnis verbessert.</p>
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
                <h1 class="about-title">Wer bin ich?</h1>
                <div class="about-content-wrapper">
                    <div class="about-image">
                        <img src="img/about.png" alt="Profilbild">
                    </div>
                    <div class="about-text">
                        <p>Hallo! Ich bin İshak Bostan, Informatikstudent an der Beykoz Universität mit einem starken Fokus auf künstliche Intelligenz und Cybersicherheit. Ich suche aktiv nach Möglichkeiten, zu realen Projekten beizutragen und Berufserfahrung zu sammeln.</p>
                        <p>Ich entwickle aktiv Projekte, um neue Programmiersprachen, Frameworks und Hardware-Architekturen zu erkunden. Mein Hauptfokus liegt auf dem Design von serviceorientierten Architekturen (SOA) und skalierbaren Microservices unter Verwendung moderner Message-Broker und Containerisierung.</p>
                        <p>Ich verfüge über praktische Erfahrung in der Entwicklung mobiler Anwendungen, Teamführung und systematischem Debugging. Meine technischen Fähigkeiten umfassen verschiedene Programmiersprachen wie C++, Python, Java, Dart und JavaScript sowie Frameworks wie Flutter und ASP.NET Core.</p>
                        <p>Während meines Studiums leitete ich Entwicklungsteams für verschiedene Anwendungen wie ExpenseGuard (eine Enterprise-KI-Ausgabenplattform), Walletly (Smart Expense Tracker) und GIMBO (Course Helper Application). Außerdem besitze ich professionelle Zertifikate von Google und Microsoft in Cybersicherheit und KI-Grundlagen.</p>
                        <p>Außerhalb meiner akademischen Kerntätigkeit bin ich aktives Mitglied mehrerer Studentenclubs, darunter die Computer Engineering Society und Google Developer Student Clubs (GDSC) an der Beykoz Universität. Ich widme mich der kontinuierlichen Verbesserung im Algorithmus-Design und analytischem Denken und schlage die Brücke zwischen akademischer Theorie und praktischer Umsetzung.</p>
                        <p>Wenn ich nicht am Computer sitze, glaube ich an ein gesundes Gleichgewicht. Ich bleibe gerne aktiv durch Fitness, Fußball und Tischtennis. Auf meiner kreativen Seite spiele ich gerne Gitarre und habe eine Schwäche für das Bauen und Sammeln von Legos! Diese Hobbys helfen mir, neue Energie zu tanken und meine Problemlösungsfähigkeiten auf spielerische Weise scharf zu halten.</p>
                        <p>Zögern Sie nicht, mich zu kontaktieren, wenn Sie sich vernetzen, zusammenarbeiten oder mehr erfahren möchten!</p>
                    </div>
                </div>
            </div>
        `,
        cv: `
            <div class="cv-container">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h1 class="cv-title" style="margin-bottom: 0;">Lebenslauf</h1>
                    <a href="docs/Ishak_Bostan_CV.pdf" target="_blank" class="download-btn"><i class="fa-solid fa-download"></i> PDF herunterladen</a>
                </div>
                <p class="cv-intro" style="margin-top: 0;">Sollten Sie Fragen haben oder eine detailliertere Version meines Lebenslaufs benötigen, zögern Sie bitte nicht, mich zu kontaktieren.</p>
                
                <div class="cv-layout">
                    <div class="cv-sidebar">
                        <ul>
                            <li><a href="#summary" class="scroll-link">Zusammenfassung</a></li>
                            <li><a href="#education" class="scroll-link">Ausbildung</a></li>
                            <li><a href="#skills" class="scroll-link">Technische Fähigkeiten</a></li>
                            <li><a href="#certifications" class="scroll-link">Zertifizierungen</a></li>
                            <li><a href="#projects" class="scroll-link">Projekterfahrung</a></li>
                            <li><a href="#volunteering" class="scroll-link">Außerschulische Aktivitäten</a></li>
                            <li><a href="#references" class="scroll-link">Referenzen</a></li>
                        </ul>
                    </div>
                    
                    <div class="cv-main">
                        <div class="cv-header-info">
                            <strong>Name</strong>
                            <span>İshak Bostan</span>
                            <strong>E-Mail</strong>
                            <span><a href="mailto:ishakbostan@gmail.com" style="color: inherit; text-decoration: underline;">ishakbostan@gmail.com</a></span>
                        </div>

                        <div id="summary" class="cv-section">
                            <h2>Zusammenfassung</h2>
                            <div class="cv-item">
                                <p>Informatikstudent an der Beykoz Universität (voraussichtlicher Abschluss: Juni 2027) mit starkem Fokus auf künstliche Intelligenz und Cybersicherheit. Zertifiziert von Google in Cybersicherheit und KI-Grundlagen. Kenntnisse in C++, Python, Java, Dart/Flutter, JavaScript und .NET, ergänzt durch praktische Erfahrung in der Entwicklung mobiler Anwendungen, Enterprise-SaaS-Architektur, Teamführung und Debugging. Engagiert in der kontinuierlichen Verbesserung von Algorithmus-Design und analytischem Denken. Suche aktiv nach einem Sommerpraktikum oder einer Teilzeitstelle als Junior-Ingenieur, um zu realen Projekten beizutragen und Berufserfahrung zu sammeln.</p>
                            </div>
                        </div>

                        <div id="education" class="cv-section">
                            <h2>Ausbildung</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz Universität</h3>
                                    <span class="cv-meta">Voraussichtlicher Abschluss: Juni 2027</span>
                                </div>
                                <div class="cv-meta">Fakultät für Ingenieurwesen und Architektur</div>
                                <p>Bachelor of Science in Informatik (Englisch)</p>
                            </div>
                        </div>
                        
                        <div id="skills" class="cv-section">
                            <h2>Technische Fähigkeiten</h2>
                            <div class="cv-item">
                                <p><strong>Programmiersprachen:</strong> C++, C, Python, Java, JavaScript, C#, Dart, CSS/HTML</p>
                                <p><strong>Frameworks & Werkzeuge:</strong> ASP.NET Core Web API, Flutter, FastAPI, Docker, RabbitMQ, Redis, SQL (PostgreSQL), Git, Google Analytics, Android Studio, Visual Studio</p>
                                <p><strong>Kernkompetenzen:</strong> SOA / Clean Architecture, Microservices, Prompt Engineering, Projektmanagement, Netzwerksicherheit & Bedrohungserkennung, Datenschutz, Datenstrukturen & Algorithmen, OOP, Agile Teamarbeit</p>
                                <p><strong>Plattformen & Betriebssysteme:</strong> Windows, Linux, AWS S3, Microsoft Azure</p>
                                <p><strong>Sprachen:</strong> Türkisch (Muttersprache), Englisch (C1 – Fließend), Deutsch (A2 – Grundkenntnisse)</p>
                            </div>
                        </div>

                        <div id="certifications" class="cv-section">
                            <h2>Zertifizierungen</h2>
                            <div class="cv-item">
                                <ul style="padding-left: 1.2rem; margin: 0; color: var(--text-primary); line-height: 1.6;">
                                    <li>Google Cybersecurity Professional Certificate (Coursera-Google) <a href="https://coursera.org/share/e27c2e05caf88dfcbb78b26118aed218" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Jan 2026</i></li>
                                    <li>KI-Grundlagen (Coursera-Google) <a href="https://coursera.org/share/7d0a3c97773eda9253f971c33aec788c" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Mär 2026</i></li>
                                    <li>AI & Machine Learning (Coursera-Microsoft) <a href="https://coursera.org/share/0031ccfb30a33b9028d6ca351952c21f" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> - <i>Apr 2026</i></li>
                                </ul>
                            </div>
                        </div>

                        <div id="projects" class="cv-section">
                            <h2>Projekterfahrung</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>ExpenseGuard – Enterprise KI Ausgaben- & Betrugserkennungsplattform | Leitender Entwickler <a href="https://github.com/bostnishak/ExpenseGuard" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Feb 2026 – Heute</span>
                                </div>
                                <div class="project-image-placeholder" style="margin: 15px 0; max-width: 100%; border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                                    <img src="img/expenseguard.png" alt="ExpenseGuard UI" style="width: 100%; display: block;" onerror="this.parentElement.style.display='none'">
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Architektur einer Cloud-nativen, mandantenfähigen SaaS-Plattform zur Automatisierung von B2B-Ausgaben-Workflows und KI-gesteuerter Betrugserkennung mithilfe von OpenAI GPT-4 Vision.</li>
                                    <li>Entwicklung eines hochskalierbaren Backends mit ASP.NET Core 9, PostgreSQL (pgcrypto-Verschlüsselung) und Redis, integriert in einen Python/FastAPI KI-Dienst über RabbitMQ.</li>
                                    <li>Implementierung robuster Sicherheitsmaßnahmen einschließlich JWT-Authentifizierung, rollenbasierter Zugriffskontrolle (RBAC), Echtzeit-Budgetverfolgung und IDOR-Schutz.</li>
                                    <li>Design eines schnellen, modularen Frontends mit Vanilla JS (Glassmorphism UI) und Entwicklung einer plattformübergreifenden mobilen Anwendung mit Flutter für das Scannen von Belegen unterwegs.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Edulera – Online-Bildungs- & Zertifizierungsplattform <a href="https://github.com/bostnishak/Edulera-the-Course-Helper-Website" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2026 – Heute</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Entwicklung eines webbasierten E-Learning-Systems mit automatisierter Zertifizierungslogik, das basierend auf der Quizleistung "Teilnahme"- oder "Erfolgs"-Zertifikate generiert.</li>
                                    <li>Design einer Full-Stack-Plattform mit HTML, CSS und JavaScript mit interaktiven Dashboards und sicherer Zahlungsintegration.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Walletly – Smart Expense Tracker | Teamleiter <a href="https://github.com/bostnishak/Walletly" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2025 – Mai 2025</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Leitung des Projektteams: Organisation von Meetings, Festlegung von Meilensteinen und Sicherstellung der termingerechten Lieferung des Produkts.</li>
                                    <li>Treffen wichtiger architektonischer Entscheidungen und Ausrichtung der technischen Richtung des Teams an den Projektzielen und dem Zeitplan.</li>
                                    <li>Fokus auf UI/UX-Verbesserungen, um eine ausgefeilte, benutzerfreundliche Erfahrung im persönlichen Finanzmanagement zu bieten.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>OMDb Filmanwendung – SPA <a href="https://github.com/bostnishak/omdb-project" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Mär 2026</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Erstellung einer vollständig responsiven, modularen Single Page Application (SPA), die die OMDb REST API nutzt.</li>
                                    <li>Implementierung von asynchronem Datenabruf, dynamischen UI-Updates mit Vanilla JavaScript und Nutzung von LocalStorage zur Aufrechterhaltung des Suchverlaufs.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>GIMBO – Kurshelfer-Anwendung | Teamleiter <a href="https://github.com/bostnishak/Gimbo-The-Course-Helper-Mobile-Application-" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Sep 2024 – Dez 2024</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Leitung des gesamten Entwicklungszyklus als Teamleiter: Aufgabenverteilung, technische Anleitung und Fortschrittskontrolle.</li>
                                    <li>Durchführung von Nutzerbedarfsanalysen und aktive Beteiligung an Design- und Architekturentscheidungen.</li>
                                    <li>Lieferung der Desktop-Anwendung für das Kurs-/Aufgabenmanagement von Studenten im Zeitplan und in der angestrebten Qualität.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Pill Reminder – Medikamenten-Tracking-App | Teammitglied <a href="https://github.com/bostnishak/Pill-Reminder-Project-2024-" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2024 – Jun 2024</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Entwicklung von Kernmodulen und Durchführung systematischen Debuggings während des gesamten Codierungszyklus.</li>
                                    <li>Proaktive Identifizierung potenzieller UX-Probleme und Verfeinerung der Benutzeroberfläche für ein nahtloses Benutzererlebnis.</li>
                                    <li>Enge Zusammenarbeit mit Teamkollegen bei der Modulintegration, um einen reibungslosen technischen Arbeitsablauf sicherzustellen.</li>
                                </ul>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Chat-Anwendung für PC <a href="https://github.com/bostnishak/Chat-application-for-PC" target="_blank" style="color: var(--text-primary); font-size: 0.9em; margin-left: 8px;"><i class="fa-brands fa-github"></i></a></h3>
                                    <span class="cv-meta">Jan 2026 – Heute</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Entwicklung einer Echtzeit-TCP-Messaging-Anwendung mit grafischer Benutzeroberfläche (GUI) unter Verwendung von Python, Sockets und Multi-Threading.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="volunteering" class="cv-section">
                            <h2>Außerschulische Aktivitäten & Freiwilligenarbeit</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>9. Karrieretag (AHK Türkei) | Teilnehmer <a href="https://www.linkedin.com/posts/ishakbostan_ahktaesrkiye-kariyergaesnaes-networking-ugcPost-7453851114543910912-ktIu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9QbZ4BHZkPCJPKyom5pG8uTa7HktNeJoY" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                    <span class="cv-meta">Apr 2026</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Austausch mit Branchenexperten und Erkundung von Karrieremöglichkeiten auf der Karrieremesse der Deutsch-Türkischen Industrie- und Handelskammer.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz University Computer Engineering Society | Mitglied</h3>
                                    <span class="cv-meta">Okt 2023 – Heute</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Organisation von technischen Lerngruppen mit Fokus auf Konzepte der objektorientierten Programmierung (OOP) und Datenbankmanagementsysteme.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Beykoz University Software Engineering Club | Mitglied</h3>
                                    <span class="cv-meta">Dez 2024 – Apr 2026</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Teilnahme an Peer-Code-Review-Sitzungen und kollaborativen Debugging-Praktiken, um die allgemeine Codequalität und Wartbarkeit zu verbessern.</p>
                            </div>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Google Developer Student Clubs (GDSC) Beykoz University | Mitglied</h3>
                                    <span class="cv-meta">Jan 2024 – Jun 2025</span>
                                </div>
                                <p style="margin-top: 0.5rem;">Teilnahme an speziellen Schulungen zu Grundlagen der Künstlichen Intelligenz und Cybersicherheit, um über aufkommende Branchentrends auf dem Laufenden zu bleiben.</p>
                            </div>
                        </div>

                        <div id="references" class="cv-section">
                            <h2>Referenzen</h2>
                            <div class="cv-item">
                                <h3>Coşar Baykal <a href="https://www.linkedin.com/in/cosarbaykal/" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                <div class="cv-meta">Chief Architect Director, Produktentwicklung | Etiya</div>
                                <p><a href="mailto:cosar.baykal@etiya.com" style="color: var(--link-color);">cosar.baykal@etiya.com</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Abdurazzag Ali A. Aburas</h3>
                                <div class="cv-meta">Professor, Fakultät für Informatik | Beykoz Universität</div>
                                <p><a href="mailto:abdurazzagaliaaburas@beykoz.edu.tr" style="color: var(--link-color);">abdurazzagaliaaburas@beykoz.edu.tr</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Mustafa Cem Kasapbaşı <a href="https://www.linkedin.com/in/mustafa-cem-kasapbaşı-546b692/" target="_blank" style="color: var(--text-primary); font-size: 0.85em; margin-left: 8px;"><i class="fa-brands fa-linkedin"></i></a></h3>
                                <div class="cv-meta">Außerordentlicher Professor, Fakultät für Informatik | Beykoz Universität</div>
                                <p><a href="mailto:mustafacemkasapbasi@beykoz.edu.tr" style="color: var(--link-color);">mustafacemkasapbasi@beykoz.edu.tr</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
};
