// Interação com WhatsApp e Instagram
document.getElementById("btn-whatsapp").addEventListener("click", function() {
    window.open("https://wa.me/5551999999999", "_blank");
  });
  
  document.getElementById("btn-instagram").addEventListener("click", function() {
    window.open("https://instagram.com/brunoamancio", "_blank");
  });
  
  // Efeitos de scroll suave
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Slider da Galeria de Fotos
  const slider = document.querySelector('.gallery-slider');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  let currentSlide = 0;
  
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slider.children.length - 1;
    updateSliderPosition();
  });
  
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide < slider.children.length - 1) ? currentSlide + 1 : 0;
    updateSliderPosition();
  });
  
  function updateSliderPosition() {
    const slideWidth = slider.children[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
  
  // Alterar o texto do botão de contato ao passar o mouse
  const btnWhatsapp = document.getElementById("btn-whatsapp");
  btnWhatsapp.addEventListener("mouseover", function() {
    btnWhatsapp.textContent = "Enviar mensagem para Bruno!";
  });
  btnWhatsapp.addEventListener("mouseout", function() {
    btnWhatsapp.textContent = "Fale com Bruno no WhatsApp";
  });
  
  // Função para alternar o idioma
  const btnLanguage = document.getElementById('btn-language');
  btnLanguage.addEventListener('click', function() {
    if (btnLanguage.textContent === 'English') {
      translateToEnglish();
      btnLanguage.textContent = 'Português';
    } else {
      translateToPortuguese();
      btnLanguage.textContent = 'English';
    }
  });
  
  function translateToEnglish() {
    document.getElementById('title').textContent = 'Bruno Amâncio';
    document.getElementById('subtitle').textContent = 'Tour Guide and Videomaker';
    document.getElementById('hero-title').textContent = 'Explore Nature with a Specialized Guide';
    document.getElementById('about-title').textContent = 'About Bruno';
    document.getElementById('about-text').textContent = 'I am Bruno Amâncio, a tour guide and videomaker passionate about nature and capturing unforgettable moments.';
    document.getElementById('services-title').textContent = 'Services';
    document.getElementById('service-tour').textContent = 'Tour Guide';
    document.getElementById('service-tour-text').textContent = 'Natural explorations, trails, and personalized adventures.';
    document.getElementById('service-video').textContent = 'Videomaker';
    document.getElementById('service-video-text').textContent = 'Producing incredible videos in nature.';
    document.getElementById('gallery-title').textContent = 'Photo Gallery';
    document.getElementById('contact-title').textContent = 'Contact';
    document.getElementById('instagram-text').textContent = 'Follow on Instagram:';
    document.getElementById('footer-text').textContent = '&copy; 2024 Bruno Amâncio - All rights reserved.';
    btnWhatsapp.textContent = 'Contact Bruno on WhatsApp';
  }
  
  function translateToPortuguese() {
    document.getElementById('title').textContent = 'Bruno Amâncio';
    document.getElementById('subtitle').textContent = 'Guia de Turismo e Videomaker';
    document.getElementById('hero-title').textContent = 'Explore a Natureza com um Guia Especializado';
    document.getElementById('about-title').textContent = 'Sobre Bruno';
    document.getElementById('about-text').textContent = 'Sou Bruno Amâncio, guia de turismo e videomaker apaixonado pela natureza e por registrar momentos inesquecíveis.';
    document.getElementById('services-title').textContent = 'Serviços';
    document.getElementById('service-tour').textContent = 'Guias de Turismo';
    document.getElementById('service-tour-text').textContent = 'Explorações naturais, trilhas e aventuras personalizadas.';
    document.getElementById('service-video').textContent = 'Videomaker';
    document.getElementById('service-video-text').textContent = 'Produção de vídeos incríveis em meio à natureza.';
    document.getElementById('gallery-title').textContent = 'Galeria de Fotos';
    document.getElementById('contact-title').textContent = 'Contato';
    document.getElementById('instagram-text').textContent = 'Siga no Instagram:';
    document.getElementById('footer-text').textContent = '&copy; 
  