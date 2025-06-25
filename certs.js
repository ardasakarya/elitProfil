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


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('certificateModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDetails = document.getElementById('modalDetails');
  const closeModal = document.getElementById('closeModal');
  const modalClose = document.getElementById('modalClose');

  // View button click handlers
  const viewButtons = document.querySelectorAll('.btn-view');
  viewButtons.forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.bg-white');
      let certName, issueDate, expiryDate, imgSrc;

      if (card) {
        certName = card.querySelector('h3').textContent;
        imgSrc = card.querySelector('img').src;

        // Örnek tarih verileri (placeholder)
        issueDate = 'January 15, 2023';
        expiryDate = 'January 14, 2026';
      } else {
        const row = this.closest('tr');
        if (row) {
          certName = row.querySelector('td:first-child').textContent;
          issueDate = row.querySelector('td:nth-child(2)').textContent;
          expiryDate = row.querySelector('td:nth-child(3)').textContent;
          imgSrc = row.querySelector('img').src;
        }
      }

      modalTitle.textContent = certName;
      modalImage.src = imgSrc;

      // ↓ Bu bölüm kullanıcıya gösterilmeyecek, sadece HTML içinde yorum satırında kalacak
      modalDetails.innerHTML = `
        <!--
        <p class="mb-2"><strong>Issue Date:</strong> ${issueDate}</p>
        <p class="mb-2"><strong>Expiry Date:</strong> ${expiryDate}</p>
        <p class="mb-2"><strong>Certificate ID:</strong> ${generateRandomID()}</p>
        <p><strong>Issuing Authority:</strong> International Standards Organization</p>
        -->
      `;

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  // Download button click handlers
  const downloadButtons = document.querySelectorAll('.btn-download');
  downloadButtons.forEach(button => {
    button.addEventListener('click', function () {
      const row = this.closest('tr');
      const certName = row?.querySelector('td:first-child')?.textContent || 'Certificate';
      simulateDownload(certName);
    });
  });

  // Modal download button
  const modalDownload = document.getElementById('modalDownload');
  modalDownload.addEventListener('click', function () {
    simulateDownload(modalTitle.textContent);
  });

  // Close modal handlers
  closeModal.addEventListener('click', closeModalFunction);
  modalClose.addEventListener('click', closeModalFunction);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModalFunction();
    }
  });

  // Search functionality (eğer tablo varsa)
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      const rows = document.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const certName = row.querySelector('td:first-child').textContent.toLowerCase();
        row.style.display = certName.includes(searchTerm) ? '' : 'none';
      });
    });
  }

  // Yardımcı Fonksiyonlar
  function closeModalFunction() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  function simulateDownload(certName) {
    const downloadToast = document.createElement('div');
    downloadToast.className = 'fixed bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 scale-in z-50';
    downloadToast.innerHTML = `
      <div class="w-5 h-5 flex items-center justify-center">
        <i class="ri-download-line"></i>
      </div>
      <div>
        <p class="text-sm font-medium">Downloading Certificate</p>
        <p class="text-xs opacity-80">${certName}</p>
      </div>
    `;
    document.body.appendChild(downloadToast);

    setTimeout(() => {
      downloadToast.style.opacity = '0';
      downloadToast.style.transform = 'translateY(20px)';
      downloadToast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(downloadToast);
      }, 300);
    }, 3000);
  }

  function generateRandomID() {
    return 'CERT-' +
      Math.floor(Math.random() * 10000).toString().padStart(4, '0') + '-' +
      Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  }
});

