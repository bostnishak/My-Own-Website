document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const links = document.querySelectorAll('nav a');

    // Bu obje, "main" etiketinin içini override edecek olan (değiştirecek) içerikleri tutar.
    const pages = {
        home: `
            <h1>Hoş Geldiniz!</h1>
            <p>Bu, menüden tıklanarak içeriği dinamik olarak değişen (override edilen) ana (main) bölümdür.</p>
        `,
        about: `
            <h1>Hakkımda</h1>
            <p>Ben İshak Bostan. Bu alanda kendimden ve tecrübelerimden bahsediyorum. İçerik anında <code>&lt;main&gt;</code> içine yazıldı.</p>
        `,
        projects: `
            <h1>Projeler</h1>
            <p>Burada üzerinde çalıştığım projeleri görebilirsiniz.</p>
            <ul style="list-style:none; padding:0; display:flex; justify-content:center; gap:1rem; margin-top:2rem;">
                <li style="background:#334155; padding:1rem; border-radius:8px;">Proje 1</li>
                <li style="background:#334155; padding:1rem; border-radius:8px;">Proje 2</li>
                <li style="background:#334155; padding:1rem; border-radius:8px;">Proje 3</li>
            </ul>
        `
    };

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            
            // Aktif link stilini güncelle
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // "main" içeriğini override ediyoruz (önceki içeriğin yerine yenisini yazıyoruz)
            mainContent.style.opacity = 0; // Yumuşak geçiş için
            setTimeout(() => {
                mainContent.innerHTML = pages[target];
                mainContent.style.opacity = 1;
            }, 300);
        });
    });

    // Başlangıçta ana sayfa linkini aktif yap
    document.querySelector('nav a[data-target="home"]').classList.add('active');
});
