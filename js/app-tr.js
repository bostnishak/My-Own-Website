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
                        <p>Merhabalar! Beykoz Üniversitesi'nde Bilgisayar Mühendisliği alanında eğitim gören, yapay zeka (AI) ve siber güvenlik alanlarında uzmanlaşan bir Bilgisayar Mühendisi adayıyım. Gerçek dünya projelerine katkıda bulunarak pratik deneyimler kazanmayı hedefliyorum.</p>
                        <p>Yeni programlama dillerini, uygulama iskeletlerini (framework) ve farklı donanım mimarilerini test etmeme olanak tanıyan projeler geliştirmekle aktif olarak ilgileniyorum. Temel odak noktam; modern mesaj kuyruğu (message broker) ve konteynerizasyon teknolojilerini kullanarak ölçeklenebilir mikroservisler ve servis odaklı mimariler (SOA) tasarlamaktır.</p>
                        <p>Bir mobil uygulama geliştiricisi olarak; ExpenseGuard (Kurumsal Yapay Zeka Harcama Platformu), Walletly (Akıllı Harcama Takipçisi) ve GIMBO (Ders Asistanı Uygulaması) gibi birçok farklı türde uygulama geliştirme ve bu süreçlerde ekiplere liderlik etme deneyimine sahibim. Ayrıca, Google ve Microsoft'tan alınmış Siber Güvenlik ve Yapay Zeka Temelleri sertifikalarına sahibim.</p>
                        <p>Akademik çalışmalarıma ek olarak, Beykoz Üniversitesi'ndeki Bilgisayar Mühendisliği Topluluğu ve Google Developer Student Clubs (GDSC) dahil olmak üzere çeşitli öğrenci kulüplerinin aktif bir üyesiyim. Amacım, algoritma tasarlama ve analitik çözümler üretme yeteneğimi sürekli geliştirerek akademik teori ile pratik uygulama arasındaki köprüyü kurmaktır.</p>
                        <p>Klavyeden uzaklaştığım zamanlarda ise hayatı dengede tutmaya ve sağlıklı bir yaşam tarzı sürdürmeye özen gösteriyorum. Fitness, futbol ve masa tenisi gibi sporlarla aktif kalmayı seviyorum. Yaratıcı tarafta ise gitar çalmaktan keyif alıyorum; hatta tam bir Lego yapma ve koleksiyon tutkunuyum! Tüm bu aktiviteler, enerjimi yenilememe ve problem çözme becerilerimi her zaman zinde tutmama yardımcı oluyor.</p>
                        <p>Benimle bağlantı kurmak, iş birliği yapmak veya sadece hakkımda daha fazla bilgi edinmek isterseniz, iletişim kurmaktan çekinmeyin!</p>
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
