document.querySelectorAll('.carousel-container').forEach(carousel => {
  let slideIndex = 0; // Índice do slide atual
  const slides = carousel.querySelector('.carousel-slide'); // Seleciona o container dos slides
  const totalSlides = slides.children.length; // Total de slides

  // Exibir apenas a primeira imagem inicialmente
  Array.from(slides.children).forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none'; // Mostra apenas o primeiro slide
  });

  // Cria indicadores
  const indicatorsContainer = carousel.querySelector('.indicators');
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) {
      indicator.classList.add('active'); // Define o primeiro indicador como ativo
    }
    indicatorsContainer.appendChild(indicator);

    // Evento de clique no indicador
    indicator.addEventListener('click', () => {
      slideIndex = i; // Atualiza o índice do slide para o índice do indicador clicado
      updateSlides(slides, slideIndex); // Atualiza os slides
      updateIndicators(indicatorsContainer, slideIndex); // Atualiza os indicadores
    });
  }

  // Função para atualizar a exibição dos slides
  function updateSlides(slides, index) {
    Array.from(slides.children).forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none'; // Mostra apenas o slide atual
    });
    updateIndicators(indicatorsContainer, index); // Atualiza os indicadores ao mudar o slide
  }

  // Função para atualizar os indicadores
  function updateIndicators(container, index) {
    Array.from(container.children).forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index); // Marca o indicador correspondente como ativo
    });
  }

  // Evento de clique no botão "anterior"
  carousel.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // Atualiza o índice do slide
    updateSlides(slides, slideIndex); // Atualiza os slides
  });

  // Evento de clique no botão "próximo"
  carousel.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides; // Atualiza o índice do slide
    updateSlides(slides, slideIndex); // Atualiza os slides
  });

  // Função para mudar automaticamente os slides a cada 4 segundos
  setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides; // Atualiza o índice do slide
    updateSlides(slides, slideIndex); // Atualiza os slides
  }, 4000); // 4000 milissegundos = 4 segundos
});
