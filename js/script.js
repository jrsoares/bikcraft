// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", (event) => {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");
    const ativa = resposta.classList.contains("ativo");
    pergunta.setAttribute("aria-expanded", ativa);
  });
}

perguntas.forEach(eventosPerguntas);

// Galeira de Imagens

const imagens = document.querySelectorAll(".bicicleta-imagens img");
const galeria = document.querySelector(".bicicleta-imagens");

function eventosGaleria(img) {
  img.addEventListener("click", (event) => {
    const imagem = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeria.prepend(imagem);
    }
  });
}

imagens.forEach(eventosGaleria);
