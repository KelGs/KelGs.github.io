export const ModalElement = () => {
  const div = document.createElement('div');
  div.id = 'modal';
  div.innerHTML = `
  <section id="modal-content">
      <header class="modal-content-header">
        <h2>Olá,</h2>

        <svg aria-label="Fechar modal"  tabindex="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--contrast)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x modal-close"><path class="modal-close" d="M18 6 6 18"/><path class="modal-close" d="m6 6 12 12"/></svg>
      </header>

      <div class="modal-content-info">
        <p>Seja bem-vindo ao meu portfólio. É uma satisfação tê-lo aqui e gostaria de compartilhar algumas informações relevantes sobre a estrutura e o desenvolvimento deste site.</p>

        <p>Este portfólio foi criado com foco na eficiência e na experiência do usuário, utilizando nativamente as tecnologias <span>HTML5</span>, <span>CSS3(Sass)</span> e <span>Javascript</span>.</p>

        <p><span>HTML5:</span> Utilizado para estruturar o conteúdo do site de forma semântica e acessível, garantindo uma base sólida para a construção deste portfólio.</p> 

        <p><span>CSS3:</span> Essa linguagem é responsável pela estilização do site, permitindo uma apresentação visual elegante e adaptável a diferentes dispositivos e tamanhos de tela. </p>

        <p><span>Javascript:</span> Empregado para adicionar interatividade dinâmica ao site, proporcionando funcionalidades avançadas e uma experiência mais envolvente para o usuário. Todo o código Javascript foi otimizado para garantir a máxima eficiência e desempenho.</p>
      </div>
    </section>
    `
  return div;
};

export const LiContent = (title, content) => {
  return `            
    <li class="skill-text">
        <strong>${title}</strong>
        <p class=" skill-text">${content}</p>
    </li>`;
};

export const LiProject = (
  title,
  description,
  image,
  linkDeploy,
  linkRepository,
  dataAnime,
  iconsSvg,
) => {
  return `
    <li class="project hidden" data-anime="${dataAnime}">
      <section class="project-main">
        <picture class="project-image">
          <img class="image-project" loading="lazy" width="570" height="300"  src="${image}" alt="${title}">
        </picture>

        <aside class="project-aside">
          <header class="project-description">
            <h2>${title}</h2>
            <p>${description}</p>
          </header>

          <section>
            <picture class="project-svg">
              ${iconsSvg}
            </picture>

            <nav class="project-nav">
              <a class="project-btn" href="${linkDeploy}" target="_blank" rel="noopener noreferer"> 
                <p>Deploy</p>         
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link">
                <path d="M15 3h6v6"/>
                <path d="M10 14 21 3"/>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                </svg> 
              </a>

              <a class="project-btn" href="${linkRepository}" target="_blank" rel="noopener noreferer"> 
                <p>Repositório</p>         
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </nav>
          </section>
        </aside>
      </section>
    </li>
  `;
};

export const LiProjectPresentation = (
  title,
  description,
  image,
  alt,
  dataAnime,
  initialDate,
  iconsSvg,
) => {
  return `
  <li class="project project-presentation hidden" data-anime="${dataAnime}">
    <section class="project-main">
      <picture class="project-image">
        <img class="image-project" loading="lazy" width="570" height="300" src="${image}" alt="${alt}">
      </picture>

      <aside class="project-aside">
        <header class="project-description">
          <h2>${title}</h2>
          <p>${description}</p>
          <p>${initialDate}</p>
        </header>

        <picture class="project-svg">
        ${iconsSvg}
        </picture>
      </aside>
    </section>
  </li>
`;
};

export const showModalEmail = () => {
  return `
  <div id="assinc-email">
    <span>Endereço de e-mail copiado.
      <svg width="30" height="30" viewBox="0 0 24 24">
        <path fill="#0d7000" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
      </svg>
    </span>
    <span>Você está sendo redirecionado ao e-mail.</span>
  </div>
  `;
};

export const imageFullContent = (href) => {
  const div = document.createElement('div');
  div.id = 'fade-image-project';
  div.innerHTML = `
  <div class="fade-image-content">
    <svg  aria-label="Fechar modal"  tabindex="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x modal-close"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    <img src="${href}" alt="">
  </div>
  `
  return div;
};

export const loading = () => {
  let div = document.createElement("div");
  div.id = 'loading';
  div.innerHTML = `    
  <svg  width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
  `
  return div;
}

export const socialLinkElement = () => {
  const section = document.createElement('section');
  section.classList.add('social-content');
  section.innerHTML =  `
    <a href="https://github.com/KelGs" class="social-link" target="_blank" rel="noopener noreferer">
      <svg       
      width="30" 
      height="30" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width=".5" 
      aria-label="Icone do Github">
      >
        <path fill="currentColor" d="M9.653 20.865a.501.501 0 0 0-.59-.492c-1.59.295-3.608.299-4.194-1.347a5.622 5.622 0 0 0-1.679-2.249a1.46 1.46 0 0 1-.408-.31a.5.5 0 0 0-.491-.42h-.002a.5.5 0 0 0-.5.499c-.003.57.71.997.922 1.11c.53.475.947 1.064 1.222 1.721c.348.98 1.41 2.495 4.722 2.072c.003.365.008.553.012.697l.005.294a.5.5 0 0 0 1 0l-.005-.322a38.783 38.783 0 0 1-.014-1.253M20.921 5.224a7.357 7.357 0 0 0-.096-.119c.067-.21.12-.427.158-.645a6.033 6.033 0 0 0-.397-3.17a.5.5 0 0 0-.309-.29c-.141-.047-1.433-.395-4.13 1.382a13.973 13.973 0 0 0-6.884 0C6.567.626 5.283.955 5.14.997a.503.503 0 0 0-.316.292a6.038 6.038 0 0 0-.394 3.219c.038.2.087.397.145.592a3.584 3.584 0 0 0-.1.128A5.946 5.946 0 0 0 3.2 9.002c-.002.31.012.62.043.929c.34 4.664 3.349 5.962 5.947 6.405a3.807 3.807 0 0 0-.376.967a.5.5 0 0 0 .971.238c.093-.46.325-.88.665-1.202a.5.5 0 0 0-.272-.874C7.422 15.152 4.56 14.24 4.24 9.84a7.683 7.683 0 0 1-.039-.838a4.982 4.982 0 0 1 1.07-3.168c.076-.102.16-.194.243-.286a.501.501 0 0 0 .096-.516a4.05 4.05 0 0 1-.194-.695a4.955 4.955 0 0 1 .232-2.39a6.71 6.71 0 0 1 3.248 1.39a.497.497 0 0 0 .414.067a12.973 12.973 0 0 1 6.793 0a.5.5 0 0 0 .415-.067a6.555 6.555 0 0 1 3.242-1.398a4.94 4.94 0 0 1 .237 2.356a3.877 3.877 0 0 1-.206.737a.501.501 0 0 0 .097.516c.088.097.175.205.253.302a4.913 4.913 0 0 1 1.07 3.152c.002.286-.012.572-.042.856c-.317 4.381-3.19 5.292-5.957 5.607a.5.5 0 0 0-.273.874c.345.325.576.752.659 1.219c.085.329.125.668.118 1.008v2.46c-.01.675-.01 1.182-.01 1.414a.5.5 0 0 0 1 0c0-.23 0-.731.01-1.407v-2.467a4.633 4.633 0 0 0-.15-1.255a3.653 3.653 0 0 0-.367-.975c2.609-.442 5.63-1.74 5.966-6.385c.033-.315.049-.632.046-.949a5.892 5.892 0 0 0-1.29-3.778" />
      </svg>
  </a>
  
  <a 
  href="https://www.linkedin.com/in/kelgs/" 
  class="social-link" 
  target="_blank" 
  rel="noopener noreferer">
    <svg       
    width="34" 
    height="34"
    viewBox="0 0 256 256"
    >
      <path fill="currentColor" d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12" />
  </svg>
  </a>

  <a 
  href="https://api.whatsapp.com/send?phone=5561991897102" 
  class="social-link" 
  target="_blank" 
  rel="noopener noreferer"
  >
  <svg     
    width="32" 
    height="32" 
    viewBox="0 0 24 24"
    aria-label="Icone do Whastapp"
    >
      <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
    </svg>
  </a>
  `

  return section;
}