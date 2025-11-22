fetch("header.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;

    const s = document.createElement("script");
    s.src = "header.js";
    s.onload = () => document.dispatchEvent(new Event("headerLoaded"));
    document.body.appendChild(s);
  });



document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#hero-slider .slide");
  const dotsContainer = document.getElementById("slider-dots");
  let index = 0;

  // Dotları oluştur
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "w-3 h-3 rounded-full bg-white/50 cursor-pointer transition-colors";
    if (i === 0) dot.classList.add("bg-white");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll("#slider-dots > div");

  function goToSlide(i) {
    slides[index].classList.remove("opacity-100");
    slides[index].classList.add("opacity-0");
    dots[index].classList.remove("bg-white");
    dots[index].classList.add("bg-white/50");

    index = i;

    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");
    dots[index].classList.remove("bg-white/50");
    dots[index].classList.add("bg-white");
  }

  function nextSlide() {
    goToSlide((index + 1) % slides.length);
  }

  setInterval(nextSlide, 3000);
});





    const translations = {
        tr: {
            // Header
            home: "Anasayfa",
            products: "Ürünlerimiz",
            whyUs: "Neden Biz?",
            catalogue: "Katalog",
            certificates: "Sertifikalar",
            contact: "İletişim",
            ePayment: "E-Ödeme",

            // Hero Section
            heroTitle: "Aluminyum Isıcam Profilleri",
            heroDescription: "Salt Profil markası ile 2016 yılında üretimine başlamış olduğumuz 'Isıcam Alüminyum Profilleri' nitelikli ısıcam üretiminde yardımcınız olacaktır. Standart (butilsiz) ve butilli olarak ürettiğimiz profiller, yüksek kalitede indüksiyon kaynağı ile birleştirilir ve 8.5 mm'den 15.5 mm’e kadar farklı ölçülerde üretilir.",
            discoverProducts: "Ürünleri Keşfet",

            // Product Video Section
            videoTitle: "Ürünlerimizi İş Başında Görün",
            videoDescription: "Yenilikçi çözümlerimizin çeşitli sektörlerde iş akışlarını nasıl dönüştürdüğünü ve verimliliği nasıl artırdığını izleyin.",
            videoDemoTitle: "Ultimate Product Demonstration",
            videoDemoText: "A comprehensive overview of our flagship product line and its key features.",

            // Product Showcase
            featuredProductsHeader: "Featured Products",
            featuredProductsDescription: "Explore our most popular products designed to meet the highest industry standards.",
            productStandartTitle: "Standart",
            productStandartDescription: "Flagship industrial processor with advanced automation and energy-efficient design.",
            productBendableTitle: "Bükülebilir",
            productBendableDescription: "Centralized control system with intuitive interface and seamless integration.",
            productPaintedTitle: "Boyalı",
            productPaintedDescription: "High-precision monitoring system with real-time analytics and predictive maintenance.",
            productButilliTitle: "Butilli",
            productButilliDescription: "Compact and rugged data logging device with extended memory and wireless capabilities.",
            examine: "İncele",

            // Features/Benefits Section
            whyChooseUsTitle: "Neden Elit Profil’i Tercih Etmelisiniz?",
            whyChooseUsDescription: "Rakiplerimizden ayrışmamızı sağlayan avantajlarımızı keşfedin.",
            qualityTitle: "Üstün Kalite",
            qualityText: "Yüksek kaliteli alüminyum ve titiz üretim süreçleriyle uzun ömürlü ve dayanıklı profil sistemleri.",
            energyEfficiencyTitle: "Enerji Verimliliği",
            energyEfficiencyText: "Isı yalıtımı sağlayan tasarımıyla enerji tasarrufuna katkı sağlar, ısı kayıplarını minimuma indirir.",
            expertSupportTitle: "Uzman Destek",
            expertSupportText: "Kurulumdan sonraki süreçlerde de teknik destek ekibimiz her zaman yanınızda.",
            environmentFriendlyTitle: "Çevre Dostu",
            environmentFriendlyText: "Geri dönüştürülebilir malzeme kullanımı ve doğaya duyarlı üretim anlayışı.",
            easyAdaptationTitle: "Kolay Uyum",
            easyAdaptationText: "Mevcut pencere ve cephe sistemlerine sorunsuz entegre edilebilir, montaj kolaylığı sağlar.",
            futureReadyTechTitle: "Geleceğe Hazır Teknoloji",
            futureReadyTechText: "Yenilikçi çözümlerimiz, sektör standartlarının ötesinde performans sunar ve gelecekteki ihtiyaçlara da cevap verir.",

            // Catalogue Section
            catalogueTitle: "Download Our Product Catalogue",
            catalogueDescription: "Get comprehensive information about our complete product line, technical specifications, and pricing in our latest catalogue.",
            downloadPdf: "Download PDF",
            viewPdf: "View PDF",

            // Footer
            companyInfo: "2005’ten bu yana yenilikçi endüstriyel çözümler sunuyoruz. Kalite ve müşteri memnuniyetinde mükemmellik hedefimizdir.",
            quickLinks: "Hızlı Linkler",
            headquarters: "Genel Merkez",
            factory: "Fabrika",
            contactInfo: "İletişim",
            copyright: "Tüm Hakları Saklıdır.",
        },
        en: {
            // Header
            home: "Homepage",
            products: "Products",
            whyUs: "Why Us?",
            catalogue: "Catalogue",
            certificates: "Certificates",
            contact: "Contact",
            ePayment: "E-Payment",

            // Hero Section
            heroTitle: "Aluminum Insulating Glass Profiles",
            heroDescription: "Our 'Insulating Glass Aluminum Profiles', which we started producing in 2016 under the Salt Profil brand, will assist you in the production of high-quality insulating glass. The profiles we produce, both standard (without butyl) and with butyl, are joined with high-quality induction welding and are produced in various sizes from 8.5 mm to 15.5 mm.",
            discoverProducts: "Discover Products",

            // Product Video Section
            videoTitle: "See Our Products in Action",
            videoDescription: "Watch how our innovative solutions transform workflows and increase efficiency across various industries.",
            videoDemoTitle: "Ultimate Product Demonstration",
            videoDemoText: "A comprehensive overview of our flagship product line and its key features.",

            // Product Showcase
            featuredProductsHeader: "Featured Products",
            featuredProductsDescription: "Explore our most popular products designed to meet the highest industry standards.",
            productStandartTitle: "Standard",
            productStandartDescription: "Flagship industrial processor with advanced automation and energy-efficient design.",
            productBendableTitle: "Bendable",
            productBendableDescription: "Centralized control system with intuitive interface and seamless integration.",
            productPaintedTitle: "Painted",
            productPaintedDescription: "High-precision monitoring system with real-time analytics and predictive maintenance.",
            productButilliTitle: "Butylated",
            productButilliDescription: "Compact and rugged data logging device with extended memory and wireless capabilities.",
            examine: "Examine",

            // Features/Benefits Section
            whyChooseUsTitle: "Why Choose Elit Profil?",
            whyChooseUsDescription: "Discover the advantages that set us apart from our competitors.",
            qualityTitle: "Superior Quality",
            qualityText: "Long-lasting and durable profile systems with high-quality aluminum and meticulous production processes.",
            energyEfficiencyTitle: "Energy Efficiency",
            energyEfficiencyText: "Contributes to energy savings with its thermal insulation design, minimizing heat loss.",
            expertSupportTitle: "Expert Support",
            expertSupportText: "Our technical support team is always with you, even after installation.",
            environmentFriendlyTitle: "Environmentally Friendly",
            environmentFriendlyText: "Use of recyclable materials and an environmentally conscious production approach.",
            easyAdaptationTitle: "Easy Adaptation",
            easyAdaptationText: "Seamlessly integrates with existing window and facade systems, providing ease of assembly.",
            futureReadyTechTitle: "Future-Ready Technology",
            futureReadyTechText: "Our innovative solutions offer performance beyond industry standards and address future needs.",

            // Catalogue Section
            catalogueTitle: "Download Our Product Catalogue",
            catalogueDescription: "Get comprehensive information about our complete product line, technical specifications, and pricing in our latest catalogue.",
            downloadPdf: "Download PDF",
            viewPdf: "Download PDF",

            // Footer
            companyInfo: "Since 2005, we have been offering innovative industrial solutions. Excellence in quality and customer satisfaction is our goal.",
            quickLinks: "Quick Links",
            headquarters: "Headquarters",
            factory: "Factory",
            contactInfo: "Contact",
            copyright: "All Rights Reserved.",
        }
    };

    // Function to update content based on selected language
    function updateContent(lang) {
        const t = translations[lang];

        // Header
        const headerNavLinks = document.querySelectorAll('header nav a');
        if (headerNavLinks[0]) headerNavLinks[0].textContent = t.home; // Anasayfa
        if (headerNavLinks[1]) headerNavLinks[1].textContent = t.products; // Ürünlerimiz
        if (headerNavLinks[2]) headerNavLinks[2].textContent = t.whyUs; // Neden Biz?
        if (headerNavLinks[3]) headerNavLinks[3].textContent = t.catalogue; // Katalog
        if (headerNavLinks[4]) headerNavLinks[4].textContent = t.certificates; // Sertifikalar
        if (headerNavLinks[5]) headerNavLinks[5].textContent = t.contact; // İletişim

        const desktopEPaymentLink = document.querySelector('header a[href="https://tahsilat.saltcam.com/"] .whitespace-nowrap');
        if (desktopEPaymentLink) {
            desktopEPaymentLink.textContent = t.ePayment;
        }

        // Mobile Menu
        const mobileMenuNavLinks = document.querySelectorAll('.mobile-menu nav a');
        if (mobileMenuNavLinks[0]) mobileMenuNavLinks[0].textContent = t.home;
        if (mobileMenuNavLinks[1]) mobileMenuNavLinks[1].textContent = t.products;
        if (mobileMenuNavLinks[2]) mobileMenuNavLinks[2].textContent = t.whyUs;
        if (mobileMenuNavLinks[3]) mobileMenuNavLinks[3].textContent = t.catalogue;
        if (mobileMenuNavLinks[4]) mobileMenuNavLinks[4].textContent = t.certificates;
        if (mobileMenuNavLinks[5]) mobileMenuNavLinks[5].textContent = t.contact;

        const mobileEPaymentLink = document.querySelector('.mobile-menu a[href="https://tahsilat.saltcam.com/"] .whitespace-nowrap');
        if (mobileEPaymentLink) {
            mobileEPaymentLink.textContent = t.ePayment;
        }

        // Hero Section
        const heroTitle = document.querySelector('#hero h1');
        if (heroTitle) heroTitle.textContent = t.heroTitle;
        const heroDescription = document.querySelector('#hero p');
        if (heroDescription) heroDescription.textContent = t.heroDescription;
        const heroButton = document.querySelector('#hero button');
        if (heroButton) heroButton.textContent = t.discoverProducts;

        // Product Video Section
        const videoSectionTitle = document.querySelector('.py-20 .text-center h2');
        if (videoSectionTitle) videoSectionTitle.textContent = t.videoTitle;
        const videoSectionDesc = document.querySelector('.py-20 .text-center p');
        if (videoSectionDesc) videoSectionDesc.textContent = t.videoDescription;
        const videoDemoTitle = document.querySelector('.bg-white.p-6 h3');
        if (videoDemoTitle) videoDemoTitle.textContent = t.videoDemoTitle;
        const videoDemoText = document.querySelector('.bg-white.p-6 p');
        if (videoDemoText) videoDemoText.textContent = t.videoDemoText;

        // Product Showcase
        const featuredProductsHeader = document.querySelector('#featured-products-header h2');
        if (featuredProductsHeader) featuredProductsHeader.textContent = t.featuredProductsHeader;
        const featuredProductsDescription = document.querySelector('#featured-products-header p');
        if (featuredProductsDescription) featuredProductsDescription.textContent = t.featuredProductsDescription;

        const productData = {
            "standart": { title: t.productStandartTitle, description: t.productStandartDescription },
            "bukulebilir": { title: t.productBendableTitle, description: t.productBendableDescription },
            "boyali": { title: t.productPaintedTitle, description: t.productPaintedDescription },
            "butilli": { title: t.productButilliTitle, description: t.productButilliDescription }
        };

        document.querySelectorAll('.detay-btn').forEach(button => {
            const id = button.getAttribute('data-id');
            const cardData = productData[id];
            const parentDiv = button.closest('.p-6');
            if (parentDiv && cardData) {
                const h3 = parentDiv.querySelector('h3');
                const p = parentDiv.querySelector('p');
                if (h3) h3.textContent = cardData.title;
                if (p) p.textContent = cardData.description;
            }
            button.textContent = t.examine;
        });

        // Features/Benefits Section
        const whyChooseUsTitle = document.querySelector('#about .text-center h2');
        if (whyChooseUsTitle) whyChooseUsTitle.textContent = t.whyChooseUsTitle;
        const whyChooseUsDescription = document.querySelector('#about .text-center p');
        if (whyChooseUsDescription) whyChooseUsDescription.textContent = t.whyChooseUsDescription;

        const featureCards = document.querySelectorAll('#about .group');
        if (featureCards[0]) {
            featureCards[0].querySelector('h3').textContent = t.qualityTitle;
            featureCards[0].querySelector('p').textContent = t.qualityText;
        }
        if (featureCards[1]) {
            featureCards[1].querySelector('h3').textContent = t.energyEfficiencyTitle;
            featureCards[1].querySelector('p').textContent = t.energyEfficiencyText;
        }
        if (featureCards[2]) {
            featureCards[2].querySelector('h3').textContent = t.expertSupportTitle;
            featureCards[2].querySelector('p').textContent = t.expertSupportText;
        }
        if (featureCards[3]) {
            featureCards[3].querySelector('h3').textContent = t.environmentFriendlyTitle;
            featureCards[3].querySelector('p').textContent = t.environmentFriendlyText;
        }
        if (featureCards[4]) {
            featureCards[4].querySelector('h3').textContent = t.easyAdaptationTitle;
            featureCards[4].querySelector('p').textContent = t.easyAdaptationText;
        }
        if (featureCards[5]) {
            featureCards[5].querySelector('h3').textContent = t.futureReadyTechTitle;
            featureCards[5].querySelector('p').textContent = t.futureReadyTechText;
        }

        // Catalogue Section
        const catalogueTitle = document.querySelector('#catalogue h2');
        if (catalogueTitle) catalogueTitle.textContent = t.catalogueTitle;
        const catalogueDescription = document.querySelector('#catalogue .max-w-6xl p');
        if (catalogueDescription) catalogueDescription.textContent = t.catalogueDescription;
        const downloadPdfLink = document.querySelector('#catalogue a[download] .whitespace-nowrap');
        if (downloadPdfLink) downloadPdfLink.textContent = t.downloadPdf;
        const viewPdfLink = document.querySelector('#catalogue a[target="_blank"] .whitespace-nowrap');
        if (viewPdfLink) viewPdfLink.textContent = t.viewPdf;

        // Footer
        const companyInfo = document.querySelector('footer p.max-w-xs');
        if (companyInfo) companyInfo.textContent = t.companyInfo;

        const quickLinksHeader = document.querySelector('footer h3 .ri-links-line');
        if (quickLinksHeader && quickLinksHeader.nextSibling) {
            quickLinksHeader.nextSibling.textContent = " " + t.quickLinks;
        }
const footerNavLinks = document.querySelectorAll('footer ul.space-y-3 li a .nav-text');
if (footerNavLinks[0]) footerNavLinks[0].textContent = t.home;
if (footerNavLinks[1]) footerNavLinks[1].textContent = t.products;
if (footerNavLinks[2]) footerNavLinks[2].textContent = t.whyUs;
if (footerNavLinks[3]) footerNavLinks[3].textContent = t.catalogue;
if (footerNavLinks[4]) footerNavLinks[4].textContent = t.certificates;
if (footerNavLinks[5]) footerNavLinks[5].textContent = t.contact;


        const contactInfoHeader = document.querySelector('footer h3 .ri-contacts-line');
        if (contactInfoHeader && contactInfoHeader.nextSibling) {
            contactInfoHeader.nextSibling.textContent = " " + t.contactInfo;
        }

        const footerStrongElements = document.querySelectorAll('footer strong');
        if (footerStrongElements[0]) footerStrongElements[0].textContent = t.headquarters;
        if (footerStrongElements[1]) footerStrongElements[1].textContent = t.factory;

        const copyrightText = document.querySelector('footer p.text-gray-500');
        if (copyrightText) copyrightText.textContent = `© 2025 Salt Cam. ${t.copyright}`;
    }

    // --- Language Button Handling ---
    const langTrButton = document.getElementById('lang-tr');
    const langEnButton = document.getElementById('lang-en');

    // Bu kısımda doğrudan buton elementleri üzerinde işlem yapıyoruz.
    // HTML'deki ilgili butonlara `lang-tr` ve `lang-en` id'lerini verdiğinizden emin olun.
    // Her bir butonun içinde bir `img` ve bir `span` olduğundan emin olun.

    function updateButtonStyles(lang) {
        if (langTrButton && langEnButton) { // Null check for buttons
            const trImg = langTrButton.querySelector('img');
            const trSpan = langTrButton.querySelector('span');
            const enImg = langEnButton.querySelector('img');
            const enSpan = langEnButton.querySelector('span');

            if (lang === 'tr') {
                if (trImg) {
                    trImg.classList.remove('opacity-40', 'brightness-75');
                    trImg.classList.add('opacity-100', 'brightness-100');
                }
                if (trSpan) trSpan.classList.remove('hidden');

                if (enImg) {
                    enImg.classList.remove('opacity-100', 'brightness-100');
                    enImg.classList.add('opacity-40', 'brightness-75');
                }
                if (enSpan) enSpan.classList.add('hidden');
            } else { // lang === 'en'
                if (enImg) {
                    enImg.classList.remove('opacity-40', 'brightness-75');
                    enImg.classList.add('opacity-100', 'brightness-100');
                }
                if (enSpan) enSpan.classList.remove('hidden');

                if (trImg) {
                    trImg.classList.remove('opacity-100', 'brightness-100');
                    trImg.classList.add('opacity-40', 'brightness-75');
                }
                if (trSpan) trSpan.classList.add('hidden');
            }
        }
    }

    // Check for saved language preference or default to TR
    let currentLang = localStorage.getItem('lang') || 'tr';
    updateContent(currentLang);
    updateButtonStyles(currentLang); // Sayfa yüklendiğinde doğru butonu vurgula

    if (langTrButton) {
        langTrButton.addEventListener('click', () => {
            currentLang = 'tr';
            localStorage.setItem('lang', 'tr');
            updateContent(currentLang);
            updateButtonStyles(currentLang);
        });
    }

    if (langEnButton) {
        langEnButton.addEventListener('click', () => {
            currentLang = 'en';
            localStorage.setItem('lang', 'en');
            updateContent(currentLang);
            updateButtonStyles(currentLang);
        });
    }

    // --- Product Detail Buttons ---
    const detayBtns = document.querySelectorAll('.detay-btn');
    detayBtns.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            window.location.href = `product.html?id=${productId}`;
        });
    });
