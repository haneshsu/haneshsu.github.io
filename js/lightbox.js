let slideIndex = {};

function openLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = 'block';
  if (!slideIndex[lightboxId]) {
    slideIndex[lightboxId] = 1;
  }
  showSlide(slideIndex[lightboxId], lightboxId);
}

function closeLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = 'none';
}

function changeSlide(n, lightboxId) {
  showSlide(slideIndex[lightboxId] += n, lightboxId);
}

function toSlide(n, lightboxId) {
  showSlide(slideIndex[lightboxId] = n, lightboxId);
}

function showSlide(n, lightboxId) {
  const slides = document.querySelectorAll(`#${lightboxId} .slide`);
  const modalPreviews = document.querySelectorAll(`#${lightboxId} .modal-preview`);

  if (n > slides.length) {
    slideIndex[lightboxId] = 1;	
  }
  
  if (n < 1) {
    slideIndex[lightboxId] = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  }
  
  slides[slideIndex[lightboxId] - 1].style.display = 'block';
  modalPreviews[slideIndex[lightboxId] - 1].className += ' active';
}
