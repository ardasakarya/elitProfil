fetch("components/header/header.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;

    const s = document.createElement("script");
    s.src = "/frontend/components/header/header.js";
    s.onload = () => document.dispatchEvent(new Event("headerLoaded"));
    document.body.appendChild(s);
  });


const productData = {
    standart: {
        title: "Standart Profil",
        description:"Bu ürün, standart ısıcam profilleri için özel olarak tasarlanmış dayanıklı ve uzun ömürlü bir seçenektir. Uygun fiyatlıdır ve inşaat projelerinde güvenle kullanılabilir.",
        imgSrc: "product_img/standart/SALTC0027.webp",
        gallery: [
            "product_img/standart/SALTC0027.webp",
            "product_img/standart/SALTC0026.webp",
            "product_img/standart/SALTC0030.webp",
              "product_img/standart/SALTC0038.webp",
            "product_img/standart/SALTC0040.webp",
              "product_img/standart/SALTC0077.webp",
            "product_img/standart/SALTC0080.webp",
            "product_img/standart/SALTC0081.webp",
              "product_img/standart/SALTC0084.webp",
            "product_img/standart/SALTC0087.webp",
           
        ],
        specs: [
            { header: "Ürün", value: ["8,5 mm Standart", "10,5 mm Standart", "11,5 mm Standart", "13,5 mm Standart", "14,5 mm Standart", "15,5 mm Standart"] },
            { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
            { header: "3 metre", value: ["1140", "900", "840", "720", "660", "600"] },
            { header: "5 metre", value: ["1900", "1500", "1400", "1200", "1100", "1000"] },
            { header: "5,7 metre", value: ["2166", "1710", "1596", "1368", "1254", "1140"] },
            { header: "6 metre", value: ["2280", "1800", "1680", "1440", "1320", "1200"] },
            { header: "Toplam Profil", value: ["380", "300", "280", "240", "220", "200"] }
        ]
    },

    bukulebilir: {
        title: "Bükülebilir Profil",
        description: "Esnek ve dayanıklı profillerdir.",
        imgSrc: "product_img/bükülebilir/SALTC0068.webp",
        gallery: [
            "product_img/bükülebilir/SALTC0068.webp",
            "product_img/bükülebilir/SALTC0070.webp",
            "product_img/bükülebilir/SALTC0071.webp",
            "product_img/bükülebilir/SALTC0091.webp",
            "product_img/bükülebilir/SALTC0092.webp"
        ],
        specs: [
            { header: "Ürün", value: ["8,5 mm Standart", "10,5 mm Standart", "11,5 mm Standart", "13,5 mm Standart", "14,5 mm Standart", "15,5 mm Standart"] },
            { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
            { header: "3 metre", value: ["1140", "900", "840", "720", "660", "600"] },
            { header: "5 metre", value: ["1900", "1500", "1400", "1200", "1100", "1000"] },
            { header: "5,7 metre", value: ["2166", "1710", "1596", "1368", "1254", "1140"] },
            { header: "6 metre", value: ["2280", "1800", "1680", "1440", "1320", "1200"] },
            { header: "Toplam Profil", value: ["380", "300", "280", "240", "220", "200"] }
        ]
    },

    boyali: {
        title: "Boyalı Profil",
        description: "Estetik ve dayanıklı boyalı profiller.",
        imgSrc: "product_img/boyalı/SALTC0073v 2-2.webp",
        gallery: [
            "product_img/boyalı/SALTC0073v 2-2.webp",
            "product_img/boyalı/SALTC0074.webp",
            "product_img/boyalı/SALTC0073-2.webp",
            "product_img/boyalı/SALTC0073-3.webp",
            "product_img/boyalı/SALTC0073.webp"
        ],
        specs: [
            { header: "Ürün", value: ["8,5 mm Butilli", "10,5 mm Butilli", "11,5 mm Butilli", "13,5 mm Butilli", "14,5 mm Butilli", "15,5 mm Butilli"] },
            { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
            { header: "3 metre", value: ["1002", "1002", "1002", "750", "750", "750"] },
            { header: "5 metre", value: ["1670", "1670", "1670", "1250", "1250", "1250"] },
            { header: "5,7 metre", value: ["1903,8", "1903,8", "1903,8", "1425", "1425", "1425"] },
            { header: "6 metre", value: ["2004", "2004", "2004", "1500", "1500", "1500"] },
            { header: "Toplam Profil", value: ["334", "334", "334", "250", "250", "250"] }
        ]
    },

    butilli: {
        title: "Butilli Profil",
        description: "Dış koşullara dayanıklı güçlü profiller.",
        imgSrc: "product_img/butilli/SALTC0060.webp",
        gallery: [
             "product_img/butilli/SALTC0060.webp",
            "product_img/butilli/SALTC0048.webp",
            "product_img/butilli/SALTC0050.webp",
             "product_img/butilli/SALTC0053.webp",
            "product_img/butilli/SALTC0055.webp",
            "product_img/butilli/SALTC0057.webp",
            "product_img/butilli/SALTC0061.webp",
            "product_img/butilli/SALTC0065.webp",
            "product_img/butilli/SALTC0095.webp",
        ],
        specs: [
            { header: "Ürün", value: ["8,5 mm Butilli", "10,5 mm Butilli", "11,5 mm Butilli", "13,5 mm Butilli", "14,5 mm Butilli", "15,5 mm Butilli"] },
            { header: "Kalınlık", value: ["0,18 mm", "0,18 mm", "0,18 mm", "0,21 mm", "0,21 mm", "0,21 mm"] },
            { header: "3 metre", value: ["1002", "1002", "1002", "750", "750", "750"] },
            { header: "5 metre", value: ["1670", "1670", "1670", "1250", "1250", "1250"] },
            { header: "5,7 metre", value: ["1903,8", "1903,8", "1903,8", "1425", "1425", "1425"] },
            { header: "6 metre", value: ["2004", "2004", "2004", "1500", "1500", "1500"] },
            { header: "Toplam Profil", value: ["334", "334", "334", "250", "250", "250"] }
        ]
    }
};


// ------------------------------
// ÜRÜN YÜKLEME SİSTEMİ
// ------------------------------

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

// productData içindeki imgSrc ve gallery pathlerini düzenliyoruz
function fixPath(path) {
    return `/frontend/${path}`; // tüm dosya yollarını frontend klasörü altında kabul ediyoruz
}

if (productId && productData[productId]) {

    const product = productData[productId];

    document.getElementById("productTitle").textContent = product.title;
    document.getElementById("productDescription").textContent = product.description;
    document.getElementById("productImage").src = fixPath(product.imgSrc);

    const thumbnailContainer = document.getElementById("thumbnailContainer");
    thumbnailContainer.innerHTML = "";

    const thumbs = product.gallery;

    // --- SCROLL AÇILMA KURALI ---
    if (window.innerWidth > 768) {
        if (thumbs.length <= 3) {
            thumbnailContainer.style.height = "auto";
            thumbnailContainer.style.overflowY = "hidden";
        } else {
            thumbnailContainer.style.height = "300px"; 
            thumbnailContainer.style.overflowY = "auto";
        }
    } else {
        thumbnailContainer.style.height = "auto";
        thumbnailContainer.style.overflowY = "hidden";
        thumbnailContainer.style.overflowX = "auto";
    }

    // Thumbnail oluştur
    thumbs.forEach(img => {
        const th = document.createElement("img");
        th.src = fixPath(img);  // path düzenleme burada da uygulanıyor
        th.className = "thumb-img";

        th.onclick = () => {
            document.getElementById("productImage").src = fixPath(img);
        };

        thumbnailContainer.appendChild(th);
    });

    // TABLOYU DOLDUR
    const tbody = document.getElementById("standardTableBody");
    tbody.innerHTML = "";

    const specs = product.specs;
    const rowCount = specs[0].value.length;

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("tr");

        specs.forEach(spec => {
            const cell = document.createElement("td");
            cell.textContent = spec.value[i];
            cell.className = "border px-4 py-2 text-center";
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    }

} else {
    document.getElementById("productTitle").textContent = "Ürün Bulunamadı";
}

  fetch("components/footer/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });