fetch("frontend/components/header/header.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;

    const s = document.createElement("script");
    s.src = "frontend/components/header/header.js";
    s.onload = () => document.dispatchEvent(new Event("headerLoaded"));
    document.body.appendChild(s);
  });



// CERTIFICATE PAGE LOGIC
document.addEventListener('DOMContentLoaded', function () {

  // --- MODAL ELEMENTLERİ ---
  const modal = document.getElementById('certificateModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDetails = document.getElementById('modalDetails');
  const closeModalBtn = document.getElementById('closeModal');
  const modalCloseX = document.getElementById('modalClose');
  const modalDownload = document.getElementById('modalDownload');



// --- VIEW BUTTON ---
const viewButtons = document.querySelectorAll('.btn-view');

viewButtons.forEach(button => {
  button.addEventListener('click', function () {

    let certName = "";
    let issueDate = "";
    let expiryDate = "";
    let imgSrc = "";

    // CARD STRUCTURE
    const card = this.closest('.bg-white');
    if (card) {
      certName = card.querySelector('h3').textContent;
      imgSrc = card.querySelector('img').src;

      issueDate = 'January 15, 2023';
      expiryDate = 'January 14, 2026';
    }

    // TABLE STRUCTURE
    const row = this.closest('tr');
    if (row) {
      certName = row.querySelector('td:first-child').textContent;
      issueDate = row.querySelector('td:nth-child(2)').textContent;
      expiryDate = row.querySelector('td:nth-child(3)').textContent;
      imgSrc = row.querySelector('img').src;
    }

    // ---------- PDF & IMAGE PREVIEW FIX ----------
    modalTitle.textContent = certName;

    const file = this.getAttribute("data-cert");

    if (file && file.toLowerCase().endsWith(".pdf")) {
      modalImage.style.display = "none";
      modalDetails.innerHTML = `
        <iframe src="${file}" class="w-full h-[70vh] rounded-lg border"></iframe>
      `;
    } else {
      modalImage.style.display = "block";
      modalImage.src = imgSrc;
      modalDetails.innerHTML = "";
    }
    // ----------------------------------------------

    // OPEN MODAL
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });
});



  // --- DOWNLOAD BUTTON ---
  const downloadButtons = document.querySelectorAll('.btn-download');

  downloadButtons.forEach(button => {
    button.addEventListener('click', function () {
      const row = this.closest('tr');
      const certName = row?.querySelector('td:first-child')?.textContent || 'Certificate';
      simulateDownload(certName);
    });
  });



  // --- MODAL İÇİ INDİRME ---
  if (modalDownload) {
    modalDownload.addEventListener('click', function () {
      simulateDownload(modalTitle.textContent);
    });
  }



  // --- MODAL KAPAT ---
  function closeModalFunction() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModalFunction);
  if (modalCloseX) modalCloseX.addEventListener('click', closeModalFunction);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModalFunction();
  });



  // --- SEARCH (VARSA) ---
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const term = this.value.toLowerCase();
      const rows = document.querySelectorAll('tbody tr');

      rows.forEach(row => {
        const certName = row.querySelector('td:first-child').textContent.toLowerCase();
        row.style.display = certName.includes(term) ? '' : 'none';
      });
    });
  }



  // --- YARDIMCI FONKSIYONLAR ---
  function simulateDownload(certName) {
    const toast = document.createElement('div');
    toast.className =
      'fixed bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 scale-in z-50';

    toast.innerHTML = `
      <div class="w-5 h-5 flex items-center justify-center">
        <i class="ri-download-line"></i>
      </div>
      <div>
        <p class="text-sm font-medium">Downloading Certificate</p>
        <p class="text-xs opacity-80">${certName}</p>
      </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  function generateRandomID() {
    return 'CERT-' +
      Math.floor(Math.random() * 10000).toString().padStart(4, '0') + '-' +
      Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  }

});

 fetch("components/footer/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });