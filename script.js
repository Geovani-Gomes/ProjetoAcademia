document.querySelectorAll('.carousel-container').forEach(carousel => {
  let slideIndex = 0; 
  const slides = carousel.querySelector('.carousel-slide'); 
  const totalSlides = slides.children.length; 

  // Exibir apenas a primeira imagem
  Array.from(slides.children).forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none'; // Mostra apenas o primeiro slide
  });

  // Cria indicadores
  const indicatorsContainer = carousel.querySelector('.indicators');
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) {
      indicator.classList.add('active'); 
    }
    indicatorsContainer.appendChild(indicator);

    
    indicator.addEventListener('click', () => {
      slideIndex = i; 
      updateSlides(slides, slideIndex); 
      updateIndicators(indicatorsContainer, slideIndex); 
    });
  }

  
  function updateSlides(slides, index) {
    Array.from(slides.children).forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none'; 
    });
    updateIndicators(indicatorsContainer, index); 
  }

  
  function updateIndicators(container, index) {
    Array.from(container.children).forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index); 
    });
  }

  
  carousel.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; 
    updateSlides(slides, slideIndex);
  });

  
  carousel.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides; 
    updateSlides(slides, slideIndex); 
  });

  
  setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides; 
    updateSlides(slides, slideIndex); 
  }, 4000); 
});
