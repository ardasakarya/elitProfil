
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.ri-menu-line').parentElement;
    const mobileMenu = document.querySelector('.fixed.inset-0.bg-white.z-40');
    
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });
});

document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.contact-card');
cards.forEach((card, index) => {
card.style.animationDelay = `${index * 0.2}s`;
});
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
input.addEventListener('focus', function() {
this.parentElement.classList.add('transform', 'scale-[1.02]');
});
input.addEventListener('blur', function() {
this.parentElement.classList.remove('transform', 'scale-[1.02]');
});
});
form.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(form);
const data = Object.fromEntries(formData);
if (validateForm(data)) {
showToast('Form başarıyla gönderildi!');
form.reset();
} else {
showToast('Lütfen tüm alanları doldurun!', 'error');
}
});
});
function validateForm(data) {
return Object.values(data).every(value => value.trim() !== '');
}
function copyToClipboard(elementId) {
const element = document.getElementById(elementId);
const text = element.innerText;
navigator.clipboard.writeText(text).then(() => {
showToast(`${elementId.charAt(0).toUpperCase() + elementId.slice(1)} copied to clipboard!`);
}).catch(err => {
console.error('Failed to copy text: ', err);
});
}
function showToast(message, type = 'success') {
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const icon = toast.querySelector('i');
if (type === 'error') {
toast.classList.remove('bg-gray-800');
toast.classList.add('bg-red-600');
icon.classList.remove('ri-check-line', 'text-green-400');
icon.classList.add('ri-error-warning-line', 'text-red-200');
} else {
toast.classList.remove('bg-red-600');
toast.classList.add('bg-gray-800');
icon.classList.remove('ri-error-warning-line', 'text-red-200');
icon.classList.add('ri-check-line', 'text-green-400');
}
toastMessage.textContent = message;
toast.classList.remove('translate-y-10', 'opacity-0');
toast.classList.add('translate-y-0', 'opacity-100');
setTimeout(() => {
toast.classList.remove('translate-y-0', 'opacity-100');
toast.classList.add('translate-y-10', 'opacity-0');
}, 3000);
}
