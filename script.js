// script.js

class SlideController {
  constructor(slides, containerId) {
    this.slides = slides;
    this.current = 0;
    this.container = document.getElementById(containerId);
    this.render();
  }

  // Renderiza o slide atual
  render() {
    const slide = this.slides[this.current];
    this.container.innerHTML = `
      <div class="slide">
        <img src="${slide.img}" alt="${slide.nome}">
        <div class="text">
          <h2>${slide.posicao} - ${slide.nome}</h2>
          <p>${slide.descricao}</p>
        </div>
      </div>
    `;
  }

  // Avança para o próximo slide
  next() {
    if (this.current < this.slides.length - 1) {
      this.current++;
      this.render();
    }
  }

  // Volta para o slide anterior
  prev() {
    if (this.current > 0) {
      this.current--;
      this.render();
    }
  }
}

// Dados dos slides (Top 10 camisas)
const slides = [
  { img: "camisa10.jpg", posicao: "10º", nome: "Time X", descricao: "Descrição da camisa do Time X." },
  { img: "camisa9.jpg", posicao: "9º", nome: "Time Y", descricao: "Descrição da camisa do Time Y." },
  { img: "camisa8.jpg", posicao: "8º", nome: "Time Z", descricao: "Descrição da camisa do Time Z." },
  { img: "camisa7.jpg", posicao: "7º", nome: "Time A", descricao: "Descrição da camisa do Time A." },
  { img: "camisa6.jpg", posicao: "6º", nome: "Time B", descricao: "Descrição da camisa do Time B." },
  { img: "camisa5.jpg", posicao: "5º", nome: "Time C", descricao: "Descrição da camisa do Time C." },
  { img: "camisa4.jpg", posicao: "4º", nome: "Time D", descricao: "Descrição da camisa do Time D." },
  { img: "camisa3.jpg", posicao: "3º", nome: "Time E", descricao: "Descrição da camisa do Time E." },
  { img: "camisa2.jpg", posicao: "2º", nome: "Time F", descricao: "Descrição da camisa do Time F." },
  { img: "camisa1.jpg", posicao: "1º", nome: "Time G", descricao: "Descrição da camisa do Time G." },
];

// Inicializa o slide controller
const slideCtrl = new SlideController(slides, "slide-container");

// Eventos dos botões
document.getElementById("btn-prev").addEventListener("click", () => {
  slideCtrl.prev();
});

document.getElementById("btn-next").addEventListener("click", () => {
  slideCtrl.next();
});
