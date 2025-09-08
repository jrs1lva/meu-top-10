class SlideController {
  constructor(slides, containerId) {
    this.slides = slides;
    this.current = 0;
    this.container = document.getElementById(containerId);
    this.render();
  }

  render() {
    const slide = this.slides[this.current];

    this.container.innerHTML = `
      <div class="slide">
        <img src="${slide.img}" alt="Imagem">
        <div class="texto">
          <p>${slide.posicao}</p>
          <p>${slide.titulo}</p>
          <p>${slide.texto}</p>
        </div>
      </div>
    `;
  }

  next() {
    if (this.current < this.slides.length - 1) {
      this.current++;
      this.render();
    }
  }

  prev() {
    if (this.current > 0) {
      this.current--;
      this.render();
    }
  }
}


const slides = [
  {
    img: "uncharted.jpg",
    posicao: "10º lugar",
    titulo: "Uncharted",
    texto: "Aventuras ao estilo Indiana Jones com gráficos de cair o queixo. A franquia Uncharted segue o carismático caçador de tesouros Nathan Drake em suas jornadas pelo mundo. Mistura de ação, escaladas absurdas, tiroteios e muito humor. Um verdadeiro filme jogável. 📜💎 "
  },
  {
    img: "mortalkombat.jpg",
    posicao: "9º lugar",
    titulo: "Mortal Kombat",
    texto: "A franquia mais brutal dos jogos de luta! Desde os anos 90, Mortal Kombat vem inovando com violência extrema, fatalities icônicos e personagens lendários. O MK11 elevou tudo com gráficos incríveis, combos insanos e uma campanha cheia de viagens no tempo. Finish him! 💀🔥"
  },
  {
    img: "thelast.jpg",
    posicao: "8º lugar",
    titulo: "The Last of Us",
    texto: "Drama, ação e muitos fungos mortais. Essa obra-prima da Naughty Dog é uma aula de narrativa emocional. Joel e Ellie enfrentam um mundo pós-apocalíptico devastado por um fungo zumbi realista. Com jogabilidade tensa e roteiro digno de cinema. 😢🧟‍♂️"
  },
  {
    img: "Minecraft.png",
    posicao: "7º lugar",
    titulo: "Minecraft",
    texto: "Não tem como não amar o bloco! Minecraft é o jogo de construção e sobrevivência mais famoso do mundo. Criado por Markus Persson, virou uma característica cultural. Você pode construir castelos, sobreviver a trepadeiras e criar mods insanos. Um playground infinito de criatividade! 🧱🌍",
  },
  {
    img: "cod.jpg",
    posicao: "6º lugar",
    titulo: "Call of Duty",
    texto: "A franquia Call of Duty é referência em FPS, e a linha Black Ops é uma das favoritas do público. Black Ops III trouxe um clima futurista, com exoesqueletos, robôs e muita ação intensa, além de um modo zumbi sensacional que virou tradição. Tiroteio frenético? Aqui tem de sobra! 💥 "
  },
  {
    img: "fifa.webp",
    posicao: "5º lugar",
    titulo: "Fifa",
    texto: "Uma bola, 22 jogadores e muita emoção (e raiva). A franquia FIFA , da EA Sports, é sinônimo de futebol virtual há décadas. O FIFA 17 marcou uma revolução com a introdução do modo história “ The Journey ”, estrelando Alex Hunter. Pela primeira vez, o futebol ganhou enredo no estilo filme esportivo."
  },
  {
    img: "ac4.png",
    posicao: "4º lugar",
    titulo: "Assassini's Creed",
    texto: "A Ubisoft mandou benzaço nessa joia pirata! A franquia Assassin's Creed sempre misturou ficção histórica com parkour e ação. Mas Black Flag trouxe navios, batalhas navais e pirataria em alto nível. Edward Kenway é um dos assassinos mais carismáticos, e a vibe “Piratas do Caribe hardcore” é irresistível. ⚓☠️"
  },
  {
    img: "RedDead.png",
    posicao: "3º lugar",
    titulo: "Red Dead Redemption",
    texto: "A franquia Red Dead é um faroeste cinematográfico com gráficos absurdos, mundo imersivo e narrativa de partir do coração. A história de Arthur Morgan e da gangue Van der Linde é considerada uma das melhores já feitas. Vai por mim: até os cavalos são mais realistas que gente. 🐴💔"
  },
  {
    img: "godOfWar.jpg",
    posicao: "2º lugar",
    titulo: "God of War",
    texto: "Kratos, o espartano mais brabo dos jogos! A franquia começou na mitologia grega com muita porradaria e violência estilosa, mas se reinventou lindamente com o título de 2018. Agora com Kratos e seu filho Atreus, o foco é na mitologia nórdica, com mais profundidade emocional, mas sem perder o machado na cara dos inimigos. 🪓"
  },
  {
    img: "gta.png",
    posicao: "1º lugar",
    titulo: "GTA",
    texto: "Um clássico absoluto do caos urbano! A franquia GTA , da Rockstar Games, é famosa por seus mundos abertos, liberdade total e missões criminosas cinematográficas. No GTA V , controlamos três personagens diferentes em Los Santos, cada um com sua própria história e estilo. O online virou febre e ainda bomba anos depois!"
  }
]; 

// Inicialização
const slideCtrl = new SlideController(slides, "slides-container");

// Eventos dos botões
document.getElementById("btn-avancar").addEventListener("click", () => {
  slideCtrl.next();
});

document.getElementById("btn-voltar").addEventListener("click", () => {
  slideCtrl.prev();
});