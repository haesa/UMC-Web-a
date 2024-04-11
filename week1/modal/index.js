const modal = document.getElementById('modal-wrapper');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => (modal.style.display = 'flex'));
closeBtn.addEventListener('click', () => (modal.style.display = 'none'));
