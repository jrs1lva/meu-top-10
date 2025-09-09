var slides = [
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "1º lugar - Camisa Corinthians (Approve Collab)",
        descricao: "Um design moderno em parceria com a marca Approve, trazendo um estilo streetwear para o manto alvinegro.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "2º lugar - Camisa Flamengo 2019",
        descricao: "Modelo histórico usado na conquista da Libertadores e do Brasileirão. Um verdadeiro manto sagrado!",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "3º lugar - Camisa Barcelona 2010/11",
        descricao: "O uniforme do time mágico de Guardiola, com Messi, Xavi e Iniesta encantando o mundo.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "4º lugar - Camisa Brasil 2002",
        descricao: "A icônica camisa usada na conquista do penta, com Ronaldo Fenômeno brilhando.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "5º lugar - Camisa Alemanha 2014",
        descricao: "A camisa usada na histórica goleada 7x1 sobre o Brasil e no título mundial.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "6º lugar - Camisa Argentina 2022",
        descricao: "O uniforme usado por Messi na conquista da Copa do Mundo no Catar.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "7º lugar - Camisa Milan 2007",
        descricao: "Clássico rossonero usado na conquista da Champions, liderado por Kaká.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "8º lugar - Camisa França 1998",
        descricao: "A camisa azul usada na primeira Copa conquistada pelos franceses em casa.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "9º lugar - Camisa Real Madrid 2017",
        descricao: "O uniforme do bicampeonato seguido da Champions, com Cristiano Ronaldo em grande fase.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    },
    {
        img: "assets/Approve x Corinthians.jpg",
        titulo: "10º lugar - Camisa Brasil 1970",
        descricao: "A camisa amarela mais icônica da história do futebol, usada por Pelé e companhia no tricampeonato.",
        nomeLink: "Compre agora!",
        link: "https://www.youtube.com/"
    }
];

var imagem = document.getElementById('foto')
var titulo = document.getElementById('titulo')
var descricao = document.getElementById('descricao')
var link = document.getElementById('link')
var container = document.getElementById('container')

var index = -1

function renderSlide() {
    var slide = slides[index];
    container.innerHTML = `
        <img src="${slide.img}" alt="${slide.titulo}">
        <h2>${slide.titulo}</h2>
        <p>${slide.descricao}</p>
        <a href="slide.link" target="_blank">${slide.nomeLink}</a>
    `;
}

function passaSlide() {
    index++
    if (index >= slides.length) {
        index = 0
    }
    renderSlide()
}

function voltaSlide() {
    index--
    if (index < 0) {
        index = slides.length -1
    }
    renderSlide()
}