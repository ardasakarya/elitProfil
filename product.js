document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.ri-menu-line').parentElement;
    const mobileMenu = document.querySelector('.fixed.inset-0.bg-white.z-40');
    
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });
});



const productData = {
    standart: {
        title: "Standart Ürün 1",
        description:"Bu ürün, standart ısıcam profilleri için özel olarak tasarlanmış dayanıklı ve uzun ömürlü bir seçenektir. Uygun fiyatlıdır ve inşaat projelerinde güvenle kullanılabilir. Yüksek kaliteli malzeme ile üretilen bu profiller, kolay montaj ve sağlamlık sağlar.",
        imgSrc: "1.jpg", // Resmin yolu
       specs: [
  { header: "Ürün", value: ["8,5 mm Standart", "10,5 mm Standart", "11,5 mm Standart", "13,5 mm Standart", "14,5 mm Standart", "15,5 mm Standart"] },
  { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
  { header: "3 metre", value: ["1140", "900", "840", "720", "660", "600"] },
  { header: "5 metre", value: ["1900", "1500", "1400", "1200", "1100", "1000"] },
  { header: "5,7 metre", value: ["2166", "1710", "1596", "1368", "1254", "1140"] },
  { header: "6 metre", value: ["2280", "1800", "1680", "1440", "1320", "1200"] },
  { header: "Toplam Profil", value: ["380", "300", "280", "240", "220", "200"] }
],

    },
    bukulebilir: {
        title: "Bükülebilir Ürün 2",
        description: "Bu bükülebilir ısıcam profilleri, esnek yapısı sayesinde farklı projelerde kullanılabilir. Dayanıklı ve uzun ömürlüdür, ayrıca estetik açıdan şık bir görünüm sunar. Çeşitli şekillerde bükülerek projelere uyum sağlar ve kolay montaj imkânı sunar.",
        imgSrc: "2.webp", // Resmin yolu
       specs: [
  { header: "Ürün", value: ["8,5 mm Standart", "10,5 mm Standart", "11,5 mm Standart", "13,5 mm Standart", "14,5 mm Standart", "15,5 mm Standart"] },
  { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
  { header: "3 metre", value: ["1140", "900", "840", "720", "660", "600"] },
  { header: "5 metre", value: ["1900", "1500", "1400", "1200", "1100", "1000"] },
  { header: "5,7 metre", value: ["2166", "1710", "1596", "1368", "1254", "1140"] },
  { header: "6 metre", value: ["2280", "1800", "1680", "1440", "1320", "1200"] },
  { header: "Toplam Profil", value: ["380", "300", "280", "240", "220", "200"] }
],
    },

        boyali: {
        title: "Boyalı Ürün 2",
        description: "Boyalı ısıcam profilleri, estetik görünümleri ve yüksek dayanıklılıkları ile dikkat çeker. Dış mekan koşullarına karşı dayanıklıdır, uzun ömürlüdür ve renk seçenekleriyle çeşitli projelere uyum sağlar. Kolay bakım gerektirir ve modern tasarımlar için idealdir.",
        imgSrc: "3.jpg", // Resmin yolu
 specs: [
  { header: "Ürün", value: ["8,5 mm Butilli", "10,5 mm Butilli", "11,5 mm Butilli", "13,5 mm Butilli", "14,5 mm Butilli", "15,5 mm Butilli"] },
  { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
  { header: "3 metre", value: ["1002", "1002", "1002", "750", "750", "750"] },
  { header: "5 metre", value: ["1670", "1670", "1670", "1250", "1250", "1250"] },
  { header: "5,7 metre", value: ["1903,8", "1903,8", "1903,8", "1425", "1425", "1425"] },
  { header: "6 metre", value: ["2004", "2004", "2004", "1500", "1500", "1500"] },
  { header: "Toplam Profil", value: ["334", "334", "334", "250", "250", "250"] }
],

    },
         butilli: {
        title: "Butilli Ürün 2",
        description: "Butilli ısıcam profilleri, esnekliği ve dayanıklılığı ile bilinir. Bu profiller, özellikle uzun süreli kullanım için uygundur ve farklı hava koşullarına karşı dayanıklıdır. Butilli yapı, suya karşı yüksek direnç sağlar ve yüksek ısı yalıtımı sunar.",
        imgSrc: "4.jpg", // Resmin yolu
  specs:  [
  { header: "Ürün", value: ["8,5 mm Butilli", "10,5 mm Butilli", "11,5 mm Butilli", "13,5 mm Butilli", "14,5 mm Butilli", "15,5 mm Butilli"] },
  { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
  { header: "3 metre", value: ["1002", "1002", "1002", "750", "750", "750"] },
  { header: "5 metre", value: ["1670", "1670", "1670", "1250", "1250", "1250"] },
  { header: "5,7 metre", value: ["1903,8", "1903,8", "1903,8", "1425", "1425", "1425"] },
  { header: "6 metre", value: ["2004", "2004", "2004", "1500", "1500", "1500"] },
  { header: "Toplam Profil", value: ["334", "334", "334", "250", "250", "250"] }
],

    },
    // Diğer ürünler burada...
};

// URL parametrelerinden 'id' parametresini al
const params = new URLSearchParams(window.location.search);
const productId = params.get('id'); // 'id' parametresini al

// Eğer geçerli bir ID varsa
if (productId && productData[productId]) {
    const productDetails = productData[productId];
    document.getElementById('productTitle').textContent = productDetails.title;
    document.getElementById('productDescription').textContent = productDetails.description;
    document.getElementById('productImage').src = productDetails.imgSrc;

    const tableBody = document.getElementById('standardTableBody');
    tableBody.innerHTML = "";

    const specs = productDetails.specs;

    // specs içindeki her bir value dizisini alıp index'lerine göre gruplayalım
    const rowCount = specs[0].value.length;

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');

        // Her bir sütundan, o sıradaki değeri al (i. index)
        specs.forEach(spec => {
            const cell = document.createElement('td');
            cell.textContent = spec.value[i];
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    }
} else {
    document.getElementById('productTitle').textContent = 'Ürün Bulunamadı';
}

