// Minimal JS (kept intentionally tiny for speed).

// Countdown timer: days until Red Foundations release (2026-06-01).
(function () {
  var el = document.getElementById('countdown-days');
  if (!el) return;
  var MS_PER_DAY = 86400000;
  var release = new Date('2026-06-01T00:00:00Z');
  function update() {
    var now = new Date();
    var diff = release - now;
    if (diff <= 0) {
      el.textContent = 'Available now!';
      return;
    }
    el.textContent = Math.ceil(diff / MS_PER_DAY);
  }
  update();
  setInterval(update, 60000);
}());

// ==========================================================================
// LIGHTBOX GALLERY
// ==========================================================================
(function() {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var lightboxImage = lightbox.querySelector('.lightbox__image');
  var lightboxTitle = lightbox.querySelector('.lightbox__title');
  var lightboxDesc = lightbox.querySelector('.lightbox__desc');
  var lightboxCounter = lightbox.querySelector('.lightbox__counter');
  var closeBtn = lightbox.querySelector('.lightbox__close');
  var prevBtn = lightbox.querySelector('.lightbox__nav--prev');
  var nextBtn = lightbox.querySelector('.lightbox__nav--next');

  var galleryItems = [];
  var currentIndex = 0;

  // Collect all gallery items on the page
  function initGallery() {
    galleryItems = Array.from(document.querySelectorAll('.gallery__item[data-src]'));
    
    galleryItems.forEach(function(item, index) {
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', 'View ' + (item.dataset.title || 'image'));
      
      item.addEventListener('click', function() {
        openLightbox(index);
      });
      
      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });
  }

  function openLightbox(index) {
    if (galleryItems.length === 0) return;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    // Return focus to the gallery item
    if (galleryItems[currentIndex]) {
      galleryItems[currentIndex].focus();
    }
  }

  function updateLightboxContent() {
    var item = galleryItems[currentIndex];
    if (!item) return;

    lightboxImage.src = item.dataset.src;
    lightboxImage.alt = item.dataset.title || 'Gallery image';
    
    if (lightboxTitle) {
      lightboxTitle.textContent = item.dataset.title || '';
    }
    if (lightboxDesc) {
      lightboxDesc.textContent = item.dataset.desc || '';
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = (currentIndex + 1) + ' / ' + galleryItems.length;
    }

    // Show/hide nav buttons
    if (prevBtn) prevBtn.style.display = galleryItems.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = galleryItems.length > 1 ? 'flex' : 'none';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxContent();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightboxContent();
  }

  // Event listeners
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', showPrev);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', showNext);
  }

  // Click outside to close
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrev();
        break;
      case 'ArrowRight':
        showNext();
        break;
    }
  });

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
}());
