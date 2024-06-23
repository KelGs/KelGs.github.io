export const ModalElement = () => {
  const modalElement = `
    <div id="modal">
    <section id="modal-content">
      <header class="modal-content-header">
        <h2>Olá,</h2>

        <svg aria-label="Fechar modal"  tabindex="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x modal-close"><path class="modal-close" d="M18 6 6 18"/><path class="modal-close" d="m6 6 12 12"/></svg>
      </header>

      <div class="modal-content-info">
        <p>Seja bem-vindo ao meu portfólio. É uma satisfação tê-lo aqui e gostaria de compartilhar algumas informações relevantes sobre a estrutura e o desenvolvimento deste site.</p>

        <p>Este portfólio foi criado com foco na eficiência e na experiência do usuário, utilizando nativamente as tecnologias <span>HTML5</span>, <span>CSS3(Sass)</span> e <span>Javascript</span>.</p>

        <p><span>HTML5:</span> Utilizado para estruturar o conteúdo do site de forma semântica e acessível, garantindo uma base sólida para a construção deste portfólio.</p> 

        <p><span>CSS3:</span> Essa linguagem é responsável pela estilização do site, permitindo uma apresentação visual elegante e adaptável a diferentes dispositivos e tamanhos de tela. </p>

        <p><span>Javascript:</span> Empregado para adicionar interatividade dinâmica ao site, proporcionando funcionalidades avançadas e uma experiência mais envolvente para o usuário. Todo o código Javascript foi otimizado para garantir a máxima eficiência e desempenho.</p>
      </div>
    </section>
  </div>
    `;
  return modalElement;
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
          <img src="${image}" alt="${title}">
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
        <img class="image-project" src="${image}" alt="${alt}">
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
  return `
  <div id="fade-image-project">
    <div class="fade-image-content">
      <svg aria-label="Fechar modal"  tabindex="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x modal-close"><path class="modal-close" d="M18 6 6 18"/><path class="modal-close" d="m6 6 12 12"/></svg>
      <img src="${href}" alt="">
    </div>
  </div>
`;
};

export const FacultyContent = (date, href, faculty, university) => {
  return `
  <li class="about-college-item">
      <span class="hidden" data-anime="right">${date}</span>
      <a class="hidden" data-anime="right" href="${href}" target="_blank" rel="noopener noreferer">
      ${faculty}
      <img src="./src/assets/svg/external-link.svg" alt="Icon link">
      </a>
      <p class="hidden" data-anime="right">${university}</p>
  </li>
`;
};
