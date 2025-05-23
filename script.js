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


const detayBtns = document.querySelectorAll('.detay-btn');

detayBtns.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        // Ürün detaylarını dinamik olarak product.html sayfasına yönlendirelim
        window.location.href = `product.html?id=${productId}`;
    });
});
