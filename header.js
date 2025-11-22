// =========================
// HEADER LOADED EVENT
// =========================

// Bu event header.html tamamen yüklendiğinde çalışacak
document.addEventListener("headerLoaded", () => {

    const header = document.getElementById("header");
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeButton = document.getElementById("mobile-close");

    // Elemanlardan biri bile yoksa devam etmeyelim
    if (!header || !menuButton || !mobileMenu || !closeButton) {
        console.warn("Header elemanları bulunamadı.");
        return;
    }

    // =========================
    // SCROLL EFFECT
    // =========================
   document.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add('bg-white/20', 'backdrop-blur-md');
        header.classList.remove('bg-transparent');

        header.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('text-white', 'text-gray-800');
            a.classList.add('text-white'); // ← SİYAH YAZI
        });

        menuButton.classList.remove('text-white', 'text-gray-800');
        menuButton.classList.add('text-white'); // ← Hamburger simgesi siyah olsun

    } else {
        header.classList.remove('bg-white/20', 'backdrop-blur-md');
        header.classList.add('bg-transparent');

        header.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('text-white');
            a.classList.add('text-white'); // ← Eski haline geri
        });

        menuButton.classList.remove('text-black');
        menuButton.classList.add('text-white');
    }
});


    // =========================
    // MOBILE MENU LOGIC
    // =========================

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        menuButton.classList.toggle('hidden');

        // === Scroll kilidi ekleme ===
        if (!mobileMenu.classList.contains("hidden")) {
            document.body.style.overflow = "hidden";   // scroll kapat
        } else {
            document.body.style.overflow = "";         // scroll aç
        }
    });

    closeButton.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuButton.classList.remove('hidden');

        // === Scroll yeniden açılsın ===
        document.body.style.overflow = "";
    });

    mobileMenu.querySelectorAll('.mobile-link')
        .forEach(item => {
            item.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                menuButton.classList.remove('hidden');

                // === Scroll yeniden açılsın ===
                document.body.style.overflow = "";
            });
        });



    // =========================
    // LANGUAGE TOGGLE
    // =========================

    function toggleLanguage(knob, flag, leftText, rightText, isMobile = false) {
        const isTR = rightText.style.opacity !== "0";
        const moveX = isMobile ? 52 : 44;

        if (isTR) {
            knob.style.transform = `translateX(${moveX}px)`;
            flag.src = "uk.png";
            leftText.style.opacity = "1";
            rightText.style.opacity = "0";
        } else {
            knob.style.transform = `translateX(0px)`;
            flag.src = "tr.webp";
            leftText.style.opacity = "0";
            rightText.style.opacity = "1";
        }
    }

    // Desktop
    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            toggleLanguage(
                document.getElementById("langKnob"),
                document.getElementById("langFlag"),
                document.getElementById("langTextLeft"),
                document.getElementById("langTextRight"),
                false
            );
        });
    }

    // Mobile
    const langToggleMobile = document.getElementById("langToggleMobile");
    if (langToggleMobile) {
        langToggleMobile.addEventListener("click", () => {
            toggleLanguage(
                document.getElementById("langKnobMobile"),
                document.getElementById("langFlagMobile"),
                document.getElementById("langTextLeftMobile"),
                document.getElementById("langTextRightMobile"),
                true
            );
        });
    }


    // =========================
    // Z-INDEX FIXES
    // =========================
    closeButton.style.zIndex = 60;
    menuButton.style.zIndex = 70;
    mobileMenu.style.zIndex = 50;

});
