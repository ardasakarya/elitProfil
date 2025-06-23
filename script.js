document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuButton = document.querySelector('.ri-menu-line').parentElement;
    const mobileMenu = document.querySelector('.fixed.inset-0.bg-white.z-40');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // Menüdeki tüm itemleri seç (örneğin <a> etiketleri)
    const menuItems = mobileMenu.querySelectorAll('a');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
});

const langTr = document.getElementById("lang-tr");
  const langEn = document.getElementById("lang-en");

  const trImg = langTr.querySelector("img");
  const enImg = langEn.querySelector("img");
  const trText = langTr.querySelector("span");
  const enText = langEn.querySelector("span");

  function setLang(activeBtn, passiveBtn, activeImg, passiveImg, activeText, passiveText) {
    // Aktif buton (bayrak net, yazı görünür)
    activeImg.classList.remove("opacity-100", "brightness-100");
    activeImg.classList.add("opacity-40", "brightness-75");
    activeText.classList.remove("hidden");

    // Pasif buton (bayrak karartılmış, yazı gizli)
    passiveImg.classList.remove("opacity-40", "brightness-40");
    passiveImg.classList.add("opacity-100", "brightness-100");
    passiveText.classList.add("hidden");
  }

  langTr.addEventListener("click", () => {
    setLang(langTr, langEn, trImg, enImg, trText, enText);
  });

  langEn.addEventListener("click", () => {
    setLang(langEn, langTr, enImg, trImg, enText, trText);
  });

  // Başlangıçta TR seçili olsun
  langTr.click();
const detayBtns = document.querySelectorAll('.detay-btn');

detayBtns.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        // Ürün detaylarını dinamik olarak product.html sayfasına yönlendirelim
        window.location.href = `product.html?id=${productId}`;
    });
});
