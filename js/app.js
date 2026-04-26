document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a[data-target]');
    const logoLink = document.querySelector('.logo a[data-target]');

    const pages = {
        home: `
            <div class="home-layout">
                <div class="home-container">
                    <div class="home-content" style="text-align: center; max-width: 700px; margin: 0 auto;">
                        <h1>Welcome to my website!</h1>
                        <p>Hi! I'm İshak Bostan, passionate about mathematics, algorithms and parallelism. Welcome to my homepage. Take a look around and get in touch if you'd like.</p>
                        <div class="social-links" style="justify-content: center;">
                            <a href="https://linkedin.com/in/ishakbostan" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/bostnishak" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:ishakbostan@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="recent-activities">
                    <h2>Son Zamanlarda Yaptıklarım</h2>
                    <div class="carousel-wrapper">
                        <button class="carousel-btn prev-btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <div class="carousel-track">
                            <div class="carousel-card">
                                <h3>Proje Alpha</h3>
                                <p>Yeni bir web uygulaması üzerinde çalıştım. Modern UI ve performans odaklı.</p>
                            </div>
                            <div class="carousel-card">
                                <h3>Hackathon 2026</h3>
                                <p>Takımımla birlikte 48 saatte yapay zeka destekli bir eğitim aracı geliştirdik.</p>
                            </div>
                            <div class="carousel-card">
                                <h3>Açık Kaynak Katkısı</h3>
                                <p>Popüler bir açık kaynak kütüphanesine yeni özellikler ekleyerek katkıda bulundum.</p>
                            </div>
                            <div class="carousel-card">
                                <h3>Makine Öğrenmesi</h3>
                                <p>Veri bilimi ve makine öğrenmesi üzerine yeni bir sertifika programını tamamladım.</p>
                            </div>
                            <div class="carousel-card">
                                <h3>Kişisel Blog</h3>
                                <p>Teknoloji ve yazılım üzerine düşüncelerimi paylaştığım yeni blogumu yayına aldım.</p>
                            </div>
                        </div>
                        <button class="carousel-btn next-btn"><i class="fa-solid fa-chevron-right"></i></button>
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
                        <p>Hi! I'm İshak Bostan, a Computer Engineering student at Beykoz University with a strong focus on artificial intelligence and cybersecurity. I'm actively seeking opportunities to contribute to real-world projects and gain professional experience.</p>
                        <p>I have hands-on experience in mobile application development, team leadership, and systematic debugging. My technical skill set spans across various programming languages including C++, Python, Java, Dart, and JavaScript, along with frameworks like Flutter.</p>
                        <p>Throughout my studies, I've led development teams for various applications such as a Smart Expense Tracker (Walletly) and a Course Helper Application (GIMBO). I also hold professional certificates from Google and Microsoft in Cybersecurity and AI Fundamentals.</p>
                        <p>Outside of my core academic work, I'm an active member of several student clubs, including the Computer Engineering Society and Google Developer Student Clubs (GDSC) at Beykoz University, where I organize study groups and engage in collaborative learning.</p>
                        <p>Feel free to reach out if you'd like to connect, collaborate, or learn more!</p>
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
                                <p>Computer Engineering student at Beykoz University (expected graduation: June 2027) with a strong focus on artificial intelligence and cybersecurity. Certified by Google in Cybersecurity and AI Fundamentals. Skilled in C++, Python, Java, Dart/Flutter, and JavaScript, complementing hands-on experience in mobile application development, team leadership, and debugging. Actively seeking a summer internship or part-time junior engineer position to contribute to real-world projects and gain professional experience.</p>
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
                                <p><strong>Frameworks & Tools:</strong> Flutter, Android Studio, SQL, Git, Microsoft Office Suite, Google Workspace</p>
                                <p><strong>Core Competencies:</strong> Data Structures & Algorithms, Problem Solving, Debugging, UI/UX Design, Agile Teamwork</p>
                                <p><strong>Platforms & OS:</strong> Windows, Linux, Logisim</p>
                                <p><strong>Languages:</strong> Turkish (Native), English (C1 – Advanced), German (A2 – Elementary)</p>
                            </div>
                        </div>

                        <div id="certifications" class="cv-section">
                            <h2>Certifications</h2>
                            <div class="cv-item">
                                <ul style="padding-left: 1.2rem; margin: 0; color: var(--text-primary); line-height: 1.6;">
                                    <li>Google Cybersecurity Professional Certificate (Coursera-Google) - <i>Jan 2026</i></li>
                                    <li>AI Essentials (Coursera-Google) - <i>Mar 2026</i></li>
                                    <li>Microsoft AI & ML (Coursera-Microsoft)</li>
                                </ul>
                            </div>
                        </div>

                        <div id="projects" class="cv-section">
                            <h2>Project Experience</h2>
                            <div class="cv-item">
                                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                    <h3>Walletly – Smart Expense Tracker | Team Leader</h3>
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
                                    <h3>GIMBO – Course Helper Application | Team Leader</h3>
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
                                    <h3>Pill Reminder – Medication Tracking App | Team Member</h3>
                                    <span class="cv-meta">Jan 2024 – May 2024</span>
                                </div>
                                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-primary); line-height: 1.6;">
                                    <li>Developed core modules and performed systematic debugging throughout the coding lifecycle.</li>
                                    <li>Proactively identified potential UX issues and refined the interface for a seamless user experience.</li>
                                    <li>Collaborated closely with teammates on module integration, ensuring smooth technical workflow.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="volunteering" class="cv-section">
                            <h2>Extracurricular & Volunteering</h2>
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
                                <h3>Coşar Baykal</h3>
                                <div class="cv-meta">Chief Architect Director, Product Development | Etiya</div>
                                <p><a href="mailto:cosar.baykal@etiya.com" style="color: var(--link-color);">cosar.baykal@etiya.com</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Abdurazzag Ali A. Aburas</h3>
                                <div class="cv-meta">Professor, Department of Computer Engineering | Beykoz University</div>
                                <p><a href="mailto:abdurazzagaliaaburas@beykoz.edu.tr" style="color: var(--link-color);">abdurazzagaliaaburas@beykoz.edu.tr</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Mustafa Cem Kasapbaşı</h3>
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
                
                if (track && prevBtn && nextBtn) {
                    const scrollAmount = 320; // card width + gap
                    
                    prevBtn.addEventListener('click', () => {
                        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    });
                    
                    nextBtn.addEventListener('click', () => {
                        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
