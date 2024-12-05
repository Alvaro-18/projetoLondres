const generosLiterarios = [
  {
    gender: "Épico",
    description:
      "Tem como fim relatar uma história, com narrador, personagem, enredo/trama, tempo e espaço.",
    subgender: [
      {
        gender: "Epopeia",
        description:
          "Texto longo e formal relacionado à cenários históricos, heróicos, mitológicos ou sobrenaturais."
      },
      {
        gender: "Conto",
        description:
          "Texto curto e conciso, focado em um único conflito ou evento e com um desfecho rápido."
      },
      {
        gender: "Novela",
        description:
          "Texto não tão curto quanto um conto, e não tão longo quanto um romance, cujo enredo gira em torno de um conflito central."
      },
      {
        gender: "Romance",
        description:
          "Texto longo, detalhado e sensível, com uma malha de tramas e personagens que se entrelaçam."
      },
      {
        gender: "Fábula",
        description:
          "Texto curto com uma lição de moral, protagonizado por animais ou seres fantásticos."
      },
      {
        gender: "Apólogo",
        description:
          "Texto curto com uma sátira ao comportamento humano, protagonizado por animais ou objetos inanimados."
      },
      {
        gender: "Crônica",
        description:
          "Texto curto, informal e subjetivo que reflete sobre o cotidiano com humor ou crítica social."
      }
    ]
  },
  {
    gender: "Lírico",
    description:
      "Tem como fim expressar temas subjetivos através da musicalidade, do ritmo e da emoção.",
    subgender: [
      {
        gender: "Poesia",
        description:
          "Poema composto de versos que, rimados ou não, expressam emoções, sentimentos e reflexões."
      },
      {
        gender: "Canção",
        description: "Poema cantado com melodia e ritmo próprios."
      },
      {
        gender: "Elegia",
        description: "Poema que expressa lamento ou tristeza."
      },
      {
        gender: "Ode/Hino",
        description: "Poema que exalta ou celebra algo."
      },
      {
        gender: "Sátira",
        description: "Poema que ridiculariza ou critica algo ou alguém."
      },
      {
        gender: "Soneto",
        description:
          "Poema formado por duas estrofes e quatro versos e duas estrofes de três versos."
      }
    ]
  },
  {
    gender: "Dramático",
    description:
      "Tem como fim a representação e dramatização cênica, indicando diálogos e monólogos, as falas e as ações dos personagens.",
    subgender: [
      {
        gender: "Tragédia",
        description:
          "Texto conflituoso em que o destino de um ou mais personagens é marcado por um desfecho trágico."
      },
      {
        gender: "Comédia",
        description:
          "Texto que representa o humor crítico, jocoso e satírico, geralmente com um final feliz."
      },
      {
        gender: "Tragicomédia",
        description:
          "Texto que une elementos trágicos e cômicos na representação teatral."
      }
    ]
  }
];

let generoSorteado = "";
let subgeneroSorteado = "";

function sortearGenero() {
  const generoAleatorio =
    generosLiterarios[Math.floor(Math.random() * generosLiterarios.length)];

  const subgeneroAleatorio =
    generoAleatorio.subgender[
      Math.floor(Math.random() * generoAleatorio.subgender.length)
    ];

  generoSorteado = generoAleatorio.gender;
  subgeneroSorteado = subgeneroAleatorio.gender;
  document.getElementById("genderContainer").textContent =
    generoAleatorio.gender;
  document.getElementById("subContainer").textContent =
    subgeneroAleatorio.gender;

  document.getElementById("genderDescription").textContent =
    generoAleatorio.description;
  document.getElementById("subGenderDescription").textContent =
    subgeneroAleatorio.description;
}

document.getElementById("sortButton").addEventListener("click", sortearGenero);

const palavras = [
  "abacaxi",
  "banco",
  "cachorro",
  "dado",
  "elefante",
  "foca",
  "gato",
  "hipopotamo",
  "iguana",
  "jacaré",
  "kiwi",
  "leão",
  "macaco",
  "navio",
  "olho",
  "pato",
  "quadro",
  "rato",
  "sapo",
  "tigre",
  "urso",
  "vaca",
  "wolverine",
  "xadrez",
  "yoga",
  "zebra",
  "abacate",
  "bola",
  "cachoeira",
  "dente",
  "escola",
  "fogo",
  "guitarra",
  "hotel",
  "igreja",
  "jacarandá",
  "kilo",
  "lima",
  "mangueira",
  "noite",
  "orvalho",
  "pipa",
  "quente",
  "rosa",
  "sol",
  "tinta",
  "urso",
  "vassoura",
  "xadrez",
  "zangado",
  "azul",
  "amarelo",
  "verde",
  "laranja",
  "roxo",
  "branco",
  "preto",
  "rosa",
  "cinza",
  "marrom",
  "violeta",
  "prata",
  "ouro",
  "claro",
  "escuro",
  "luz",
  "som",
  "nuvem",
  "estrela",
  "lua",
  "sol",
  "música",
  "cantar",
  "dança",
  "festa",
  "piano",
  "bateria",
  "violão",
  "guitarra",
  "saxofone",
  "cantor",
  "compositor",
  "produtor",
  "áudio",
  "melodia",
  "orquestra",
  "barítono",
  "tenor",
  "baixo",
  "soprano",
  "viola",
  "flauta",
  "teclado",
  "trompete",
  "trombone",
  "clarinete",
  "harpa",
  "saxofone",
  "contrabaixo",
  "bongo",
  "culinária",
  "cozinha",
  "chef",
  "restaurante",
  "comida",
  "receita",
  "almoço",
  "jantar",
  "café",
  "lanche",
  "sopa",
  "feijão",
  "arroz",
  "carne",
  "frango",
  "peixe",
  "salada",
  "fruta",
  "legume",
  "verdura",
  "doce",
  "bolo",
  "torta",
  "sobremesa",
  "chocolate",
  "sorvete",
  "café",
  "chá",
  "água",
  "suco",
  "refrigerante",
  "vinho",
  "cerveja",
  "licor",
  "cachaça",
  "tequila",
  "rum",
  "vodka",
  "whisky",
  "champanhe",
  "praia",
  "montanha",
  "floresta",
  "campo",
  "deserto",
  "cidade",
  "vila",
  "rua",
  "avenida",
  "praça",
  "parque",
  "jardim",
  "lago",
  "mar",
  "oceano",
  "rio",
  "pântano",
  "ilhas",
  "cascata",
  "cachoeira",
  "rio",
  "lagoa",
  "coral",
  "restaurante",
  "bar",
  "shopping",
  "loja",
  "mercado",
  "farmácia",
  "hospital",
  "escola",
  "universidade",
  "faculdade",
  "biblioteca",
  "livraria",
  "cinema",
  "teatro",
  "sala",
  "auditório",
  "empresa",
  "escritório",
  "indústria",
  "loja",
  "fábrica",
  "armazém",
  "almoxarifado",
  "prédio",
  "apartmento",
  "casa",
  "quarto",
  "sala",
  "cozinha",
  "banheiro",
  "escritório",
  "garagem",
  "piscina",
  "jardim",
  "pátio",
  "carro",
  "moto",
  "ônibus",
  "trem",
  "avião",
  "balsa",
  "helicóptero",
  "bicicleta",
  "patins",
  "skate",
  "peão",
  "roda",
  "ferramenta",
  "martelo",
  "serra",
  "chave",
  "parafernálias",
  "carroça",
  "transporte",
  "logística",
  "computador",
  "laptop",
  "tablet",
  "smartphone",
  "teclado",
  "mouse",
  "monitor",
  "tela",
  "vídeo",
  "câmera",
  "foto",
  "imagem",
  "rede",
  "internet",
  "site",
  "blog",
  "rede social",
  "facebook",
  "twitter",
  "instagram",
  "email",
  "mensagem",
  "telefone",
  "chamada",
  "whatsapp",
  "telegram",
  "videoconferência",
  "zoom",
  "meet",
  "skype",
  "trabalho",
  "projeto",
  "reunião",
  "palestra",
  "treinamento",
  "desafio",
  "competição",
  "exame",
  "prova",
  "tarefa",
  "estudo",
  "aluno",
  "professor",
  "educação",
  "ensino",
  "universidade",
  "faculdade",
  "escola",
  "técnico",
  "graduado",
  "mestre",
  "doutor",
  "pesquisa",
  "experiência",
  "laboratório",
  "ciência",
  "tecnologia",
  "física",
  "química",
  "biologia",
  "matemática",
  "geografia",
  "história",
  "literatura",
  "filosofia",
  "artes",
  "música",
  "dança",
  "teatro",
  "escultura",
  "fotografia",
  "pintura",
  "escultura",
  "designer",
  "desenho",
  "computação",
  "programação",
  "sistema",
  "software",
  "hardware",
  "amor",
  "felicidade",
  "carro",
  "cidade",
  "cachorro",
  "amigo",
  "trabalho",
  "escola",
  "livro",
  "jogo",
  "estrela",
  "cielo",
  "sol",
  "lua",
  "mar",
  "flor",
  "gato",
  "casa",
  "brasil",
  "paz",
  "futebol",
  "correr",
  "andar",
  "beber",
  "comer",
  "escrever",
  "ler",
  "sorrir",
  "chorar",
  "esperança",
  "alegria",
  "tristeza",
  "saúde",
  "dinheiro",
  "professor",
  "estudar",
  "universidade",
  "ensinar",
  "aprender",
  "escola",
  "arte",
  "música",
  "dança",
  "teatro",
  "cinema",
  "fotografia",
  "história",
  "geografia",
  "matemática",
  "física",
  "química",
  "biologia",
  "educação",
  "cultura",
  "literatura",
  "filme",
  "jornal",
  "revista",
  "notícia",
  "inovação",
  "tecnologia",
  "ciência",
  "internet",
  "computador",
  "smartphone",
  "rede",
  "social",
  "blog",
  "vídeo",
  "aplicativo",
  "programa",
  "código",
  "sistema",
  "servidor",
  "nuvem",
  "computação",
  "inteligência",
  "artificial",
  "algoritmo",
  "robot",
  "inteligente",
  "invenção",
  "futuro",
  "progresso",
  "crescimento",
  "mudança",
  "transformação",
  "revolução",
  "evolução",
  "natureza",
  "ecologia",
  "meio ambiente",
  "floresta",
  "oceano",
  "deserto",
  "rio",
  "montanha",
  "planeta",
  "animal",
  "plantas",
  "árvore",
  "semente",
  "flor",
  "fogo",
  "água",
  "ar",
  "terra",
  "vento",
  "chuva",
  "sol",
  "clima",
  "temperatura",
  "estação",
  "primavera",
  "verão",
  "outono",
  "inverno",
  "neve",
  "geada",
  "neblina",
  "tornado",
  "furacão",
  "terremoto",
  "tsunami",
  "furioso",
  "calmo",
  "quente",
  "frio",
  "molhado",
  "seco",
  "úmido",
  "seco",
  "gelo",
  "vapor",
  "energia",
  "força",
  "pressão",
  "tensão",
  "impacto",
  "construção",
  "arquitetura",
  "estrada",
  "ponte",
  "edifício",
  "hospital",
  "loja",
  "restaurante",
  "supermercado",
  "farmácia",
  "escritório",
  "indústria",
  "empresa",
  "fábrica",
  "oficina",
  "conserto",
  "manutenção",
  "equipamento",
  "máquina",
  "ferramenta",
  "carro",
  "ônibus",
  "trem",
  "avião",
  "bicicleta",
  "moto",
  "caminhão",
  "navio",
  "transporte",
  "viagem",
  "praia",
  "campo",
  "montanha",
  "lago",
  "rio",
  "floresta",
  "deserto",
  "ilhas",
  "vila",
  "aldeia",
  "cidade",
  "metrópole",
  "bairro",
  "rua",
  "avenida",
  "estrada",
  "luz",
  "som",
  "cor",
  "imagem",
  "foto",
  "vídeo",
  "movimento",
  "velocidade",
  "distância",
  "altura",
  "profundidade",
  "largura",
  "comprimento",
  "tamanho",
  "peso",
  "massa",
  "volume",
  "forma",
  "contorno",
  "textura",
  "superfície",
  "dureza",
  "flexibilidade",
  "elasticidade",
  "físico",
  "químico",
  "biológico",
  "genético",
  "cósmico",
  "planetário",
  "astronômico",
  "molecular",
  "celular",
  "organismo",
  "carne",
  "fruto",
  "verdura",
  "legume",
  "cereal",
  "proteína",
  "vitamina",
  "mineral",
  "nutrição",
  "alimentação",
  "saúde",
  "medicina",
  "tratamento",
  "doença",
  "cura",
  "cirurgia",
  "exame",
  "diagnóstico",
  "medicamento",
  "vacina",
  "psicologia",
  "ansiedade",
  "depressão",
  "estresse",
  "saúde mental",
  "relacionamento",
  "amizade",
  "família",
  "amor",
  "ódio",
  "raiva",
  "tristeza",
  "felicidade",
  "alegria",
  "tristeza",
  "angústia",
  "medo",
  "coragem",
  "esperança",
  "fé",
  "religião",
  "deus",
  "espírito",
  "alma",
  "fé",
  "oração",
  "paz",
  "guerra",
  "conflito",
  "batalha",
  "armas",
  "soldado",
  "guerreiro",
  "vitória",
  "derrota",
  "honra",
  "luta",
  "competição",
  "esporte",
  "atleta",
  "campeão",
  "medalha",
  "troféu",
  "recorde",
  "jogo",
  "time",
  "treinamento",
  "preparação",
  "estratégia",
  "tática",
  "jogo",
  "vencedor",
  "derrotado",
  "torcedor",
  "competidor",
  "ginástica",
  "futebol",
  "basquete",
  "voleibol",
  "natação",
  "atletismo",
  "boxe",
  "luta",
  "esgrima",
  "ciclismo",
  "esqui",
  "rugby",
  "hóquei",
  "handebol",
  "ginásio",
  "piscina",
  "quadra",
  "campo",
  "stadium",
  "competição",
  "partida",
  "gol",
  "ponto",
  "vitória",
  "derrota",
  "meritocracia",
  "trabalho",
  "carreira",
  "profissão",
  "emprego",
  "consultoria",
  "serviço",
  "desempenho",
  "salário",
  "promoção",
  "direção",
  "gestão",
  "equipe",
  "colaborador",
  "chefe",
  "supervisor",
  "coordenador",
  "gerente",
  "diretor",
  "presidente",
  "política",
  "governo",
  "partido",
  "eleição",
  "candidato",
  "voto",
  "cidadania",
  "democracia",
  "ditadura",
  "liberdade",
  "justiça",
  "direitos",
  "liberdades",
  "constituição",
  "código",
  "lei",
  "tribunal",
  "juiz",
  "advogado",
  "promotor",
  "prisão",
  "penitenciária",
  "criminal",
  "delito",
  "crime",
  "infração",
  "julgamento",
  "sentença",
  "fiscal",
  "auditoria",
  "imposto",
  "tributação",
  "economia",
  "mercado",
  "consumo",
  "oferta",
  "demanda",
  "preço",
  "lucro",
  "capital",
  "ações",
  "investimento",
  "banco",
  "finanças",
  "câmbio",
  "juros",
  "empréstimo",
  "dívida",
  "investidor",
  "bolsa",
  "empresas",
  "indústria",
  "tecnologia",
  "software",
  "aplicativo",
  "produto",
  "serviço",
  "mercado",
  "estratégia",
  "competição"
];

async function sortearPalavra() {
  const indiceAleatorio = Math.floor(Math.random() * palavras.length);
  document.getElementById("wordContainer").textContent =
    palavras[indiceAleatorio];
}

document.getElementById("sortWord").addEventListener("click", sortearPalavra);

function saveData() {
  const title = document.getElementById("inputTitle").value || "Frase";
  const content = document.getElementById("editor").innerHTML;
  const gender = document.getElementById("genero").value || generoSorteado;
  const subgender =
    document.getElementById("subgenero").value || subgeneroSorteado;

  if (!content.trim()) return;

  const storedData = localStorage.getItem("texts");
  const texts = storedData ? JSON.parse(storedData) : [];

  const text = {
    title: title,
    content: content,
    favorite: false,
    gender: gender,
    subgender: subgender,
    date: new Date().toLocaleDateString()
  };

  texts.unshift(text);

  localStorage.setItem("texts", JSON.stringify(texts));
  renderTexts();
  document.getElementById("inputTitle").value = "";
  document.getElementById("editor").innerHTML = "";
  document.getElementById("genero").value = "";
  document.getElementById("subgenero").value = "";
  RenderNivel();
}

document.getElementById("saveButton").addEventListener("click", saveData);

document.getElementById("boldBtn").addEventListener("click", () => {
  document.execCommand("bold");
});

document.getElementById("italicBtn").addEventListener("click", () => {
  document.execCommand("italic");
});

document.getElementById("underlineBtn").addEventListener("click", () => {
  document.execCommand("underline");
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("editor").innerHTML = "";
});

const colorButtons = document.getElementsByClassName("color");
Array.from(colorButtons).forEach(button => {
  button.addEventListener("click", function () {
    const color = this.style.backgroundColor;
    document.execCommand("foreColor", false, color);
  });
});

const colorPicker = document.getElementById("picker");
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(p => {
    const color = event.target.value;
    colorPicker.style.backgroundColor = color;
    document.execCommand("foreColor", false, color);
  });
}

function renderTexts() {
  const storedData = localStorage.getItem("texts");
  const texts = storedData ? JSON.parse(storedData) : [];
  const section = document.getElementById("containerTextsId");

  if (!texts.length) {
    section.style.display = "none";
  } else {
    section.style.display = "block";
  }

  const textList = document.getElementById("textList");

  textList.innerHTML = "";

  texts.forEach((text, index) => {
    const containerText = document.createElement("div");
    containerText.classList.add("containerText");

    containerText.innerHTML = `
      <div>
        <div class="head">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis" data-index="${index}">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>

          <div class="menu" style="display: none;">
            <button class="editButton">Editar</button>
            <button class="saveButton">Salvar</button>
            <button class="deleteButton">Excluir</button>
          </div>
        </div>
        <h3>${text.title}</h3>
        <div class="content">${text.content}</div>
        <p class="containerGen">Genêro: ${text.gender}</p>
        <p class="containerGen">Subgenêro: ${text.subgender}</p>
      </div>

      <div class="bottom">
        <p>${text.date}</p>
        <div class="setFavorite">        
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${
            text.favorite ? "#ffe3c1" : "none"
          }" stroke="${
      text.favorite ? "#ffe3c1" : "currentColor"
    }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star" data-index="${index}">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        </div>
      </div>
    `;

    textList.appendChild(containerText);

    const starIcon = containerText.querySelector(".lucide-star");
    starIcon.addEventListener("click", function () {
      toggleFavorite(index);
    });

    const menuButton = containerText.querySelector(".lucide-ellipsis");
    const menu = containerText.querySelector(".menu");

    menuButton.addEventListener("click", function (event) {
      menu.style.display =
        menu.style.display === "none" || menu.style.display === ""
          ? "block"
          : "none";
      event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.style.display = "none";
      }
    });

    containerText
      .querySelector(".editButton")
      .addEventListener("click", function () {
        editText(index);
        menu.style.display = "none";
      });

    containerText
      .querySelector(".saveButton")
      .addEventListener("click", function () {
        downloadPDF(index);
        menu.style.display = "none";
      });

    containerText
      .querySelector(".deleteButton")
      .addEventListener("click", function () {
        deleteText(index);
        menu.style.display = "none";
      });
  });
}

function toggleFavorite(index) {
  const storedData = localStorage.getItem("texts");
  const texts = storedData ? JSON.parse(storedData) : [];

  texts[index].favorite = !texts[index].favorite;

  localStorage.setItem("texts", JSON.stringify(texts));

  renderTexts();
}

function deleteText(index) {
  const storedData = localStorage.getItem("texts");
  const texts = storedData ? JSON.parse(storedData) : [];

  texts.splice(index, 1);

  localStorage.setItem("texts", JSON.stringify(texts));

  renderTexts();
  RenderNivel();
}

function editText(index) {
  const storedData = localStorage.getItem("texts");
  const texts = storedData ? JSON.parse(storedData) : [];

  document.getElementById("inputTitle").value = texts[index].title;
  document.getElementById("editor").innerHTML = texts[index].content;
  document.getElementById("genero").value = texts[index].gender;
  document.getElementById("subgenero").value = texts[index].subgender;

  texts.splice(index, 1);

  localStorage.setItem("texts", JSON.stringify(texts));

  renderTexts();
}

function downloadPDF(index) {
  const storedData = localStorage.getItem("texts");
  const texts = storedData ? JSON.parse(storedData) : [];
  const text = texts[index];

  if (!text) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const title = text.title.replace(/<\/?[^>]+(>|$)/g, "\n");
  const content = text.content.replace(/<\/?[^>]+(>|$)/g, "\n");
  const gender = text.gender;
  const subgender = text.subgender;
  const maxWidth = 180;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);

  doc.text(title, 10, 10, { maxWidth: maxWidth });

  const titleHeight = doc.getTextDimensions(title, { maxWidth: maxWidth }).h;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Gênero: ${gender}`, 10, titleHeight + 14);
  doc.text(`Subgênero: ${subgender}`, 10, titleHeight + 22);

  let yPosition = titleHeight + 30;

  const lines = doc.splitTextToSize(content, maxWidth);

  function addTextToPDF(lines, yPosition) {
    for (let i = 0; i < lines.length; i++) {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 10;
      }

      doc.text(lines[i], 10, yPosition);
      yPosition += 6;
    }
    return yPosition;
  }

  yPosition = addTextToPDF(lines, yPosition);

  doc.save(`${text.title.slice(0, 20)}_Salvo.pdf`);
}

window.onload = renderTexts;

const niveis = [
  {
    name: "Sem nível",
    iconPath: "./assets/none.png",
    maxQuantity: 10
  },
  {
    name: "Estilete de madeira",
    iconPath: "./assets/estilete.PNG",
    maxQuantity: 20
  },
  {
    name: "Pena de ganso",
    iconPath: "./assets/pena-escura.PNG",
    maxQuantity: 30
  },
  {
    name: "Pena de cisne",
    iconPath: "./assets/pena.PNG",
    maxQuantity: 40
  },
  {
    name: "Pincel",
    iconPath: "./assets/pincel.PNG",
    maxQuantity: 50
  },
  {
    name: "Lápis",
    iconPath: "./assets/lapis.PNG",
    maxQuantity: 60
  },
  {
    name: "Caneta tinteiro",
    iconPath: "./assets/caneta-tinteiro.PNG",
    maxQuantity: 70
  },
  {
    name: "Caneta esferográfica",
    iconPath: "./assets/caneta.PNG",
    maxQuantity: 100
  }
];

function RenderNivel() {
  const storedData = localStorage.getItem("texts");
  const texts = storedData ? JSON.parse(storedData) : [];
  const textsQuantity = texts.length;
  const progressBar = document.querySelector(".percent");
  const container = document.getElementById("containerGeneric");

  const nivelAtual =
    niveis.find(item => textsQuantity <= item.maxQuantity) ||
    niveis[niveis.length - 1];

  const percentAtual = Math.min(
    (textsQuantity * 100) / nivelAtual.maxQuantity,
    100
  );


    container.innerHTML = `
      <div class="container">
        <p id="nivelName">${nivelAtual.name}</p>
        <div class="percentContainer">
          <div class="percent" style="width: ${percentAtual}%"></div> 
        </div>
      </div>
      <img src="${nivelAtual.iconPath}" alt="Imagem que identifica o nível ${nivelAtual.name}" id="icon">
    `;

    

  if (progressBar) {
    progressBar.style.width = `${percentAtual}%`;
  }

  const name = document.getElementById("nivelName");
  const icon = document.getElementById("icon");

  if (name.offsetWidth >= 196) icon.style.marginLeft = "12%";
}

RenderNivel();
