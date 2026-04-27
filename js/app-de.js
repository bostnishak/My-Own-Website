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
                                <h3>AHK Türkiye Karrieretag</h3>
                                <p>Austausch mit Branchenexperten und Erkundung von Karrieremöglichkeiten auf dem 9. Karrieretag.</p>
                            </div>
                            <div class="carousel-card">
                                <span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; font-weight: 500;">Apr 2026</span>
                                <h3>Microsoft AI & ML Zertifizierung</h3>
                                <p>Erfolgreicher Abschluss des professionellen Zertifizierungsprogramms für Microsoft KI und Maschinelles Lernen.</p>
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
                                    <li>Google Cybersecurity Professional Certificate (Coursera-Google) - <i>Jan 2026</i></li>
                                    <li>KI-Grundlagen (Coursera-Google) - <i>Mär 2026</i></li>
                                    <li>Microsoft AI & ML (Coursera-Microsoft) - <i>Apr 2026</i></li>
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
                                    <h3>Walletly – Smart Expense Tracker | Teamleiter</h3>
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
                                    <h3>9. Karrieretag (AHK Türkiye) | Teilnehmer</h3>
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
                                <h3>Coşar Baykal</h3>
                                <div class="cv-meta">Chief Architect Director, Produktentwicklung | Etiya</div>
                                <p><a href="mailto:cosar.baykal@etiya.com" style="color: var(--link-color);">cosar.baykal@etiya.com</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Abdurazzag Ali A. Aburas</h3>
                                <div class="cv-meta">Professor, Fakultät für Informatik | Beykoz Universität</div>
                                <p><a href="mailto:abdurazzagaliaaburas@beykoz.edu.tr" style="color: var(--link-color);">abdurazzagaliaaburas@beykoz.edu.tr</a></p>
                            </div>
                            <div class="cv-item">
                                <h3>Mustafa Cem Kasapbaşı</h3>
                                <div class="cv-meta">Außerordentlicher Professor, Fakultät für Informatik | Beykoz Universität</div>
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
