const generosLiterarios = [
    {
        gender: "Épico",
        description: "Tem como fim relatar uma história, com narrador, personagem, enredo/trama, tempo e espaço.",
        subgender: [
            {
                gender: "Epopeia",
                description: "Texto longo e formal relacionado à cenários históricos, heróicos, mitológicos ou sobrenaturais."
            },
            {
                gender: "Conto",
                description: "Texto curto e conciso, focado em um único conflito ou evento e com um desfecho rápido."
            },
            {
                gender: "Novela",
                description: "Texto não tão curto quanto um conto, e não tão longo quanto um romance, cujo enredo gira em torno de um conflito central."
            },
            {
                gender: "Romance",
                description: "Texto longo, detalhado e sensível, com uma malha de tramas e personagens que se entrelaçam."
            },
            {
                gender: "Fábula",
                description: "Texto curto com uma lição de moral, protagonizado por animais ou seres fantásticos."
            },
            {
                gender: "Apólogo",
                description: "Texto curto com uma sátira ao comportamento humano, protagonizado por animais ou objetos inanimados."
            },
            {
                gender: "Crônica",
                description: "Texto curto, informal e subjetivo que reflete sobre o cotidiano com humor ou crítica social."
            }
        ]
    },
    {
        gender: "Lírico",
        description: "Tem como fim expressar temas subjetivos através da musicalidade, do ritmo e da emoção.",
        subgender: [
            {
                gender: "Poesia",
                description: "Poema composto de versos que, rimados ou não, expressam emoções, sentimentos e reflexões."
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
                description: "Poema formado por duas estrofes e quatro versos e duas estrofes de três versos."
            }
        ]
    },
    {
        gender: "Dramático",
        description: "Tem como fim a representação e dramatização cênica, indicando diálogos e monólogos, as falas e as ações dos personagens.",
        subgender: [
            {
                gender: "Tragédia",
                description: "Texto conflituoso em que o destino de um ou mais personagens é marcado por um desfecho trágico."
            },
            {
                gender: "Comédia",
                description: "Texto que representa o humor crítico, jocoso e satírico, geralmente com um final feliz."
            },
            {
                gender: "Tragicomédia",
                description: "Texto que une elementos trágicos e cômicos na representação teatral."
            }
        ]
    }
];


// Função para sortear um gênero e subgênero
function sortearGenero() {
    // Sorteia um índice aleatório para o gênero
    const generoAleatorio = generosLiterarios[Math.floor(Math.random() * generosLiterarios.length)];

    // Sorteia um subgênero dentro do gênero escolhido
    const subgeneroAleatorio = generoAleatorio.subgender[Math.floor(Math.random() * generoAleatorio.subgender.length)];

    // Atualiza o conteúdo das tags com id="genderContainer" e id="subContainer"
    document.getElementById("genderContainer").textContent = generoAleatorio.gender;
    document.getElementById("subContainer").textContent = subgeneroAleatorio.gender;

    // Atualiza as descrições dos gêneros e subgêneros
    document.getElementById("genderDescription").textContent = generoAleatorio.description;
    document.getElementById("subGenderDescription").textContent = subgeneroAleatorio.description;
}

// Adiciona o evento ao botão
document.getElementById("sortButton").addEventListener("click", sortearGenero);

async function obterPalavra() {
    // URL para realizar o fetch
    const url = "https://www.palavrasaleatorias.com/?fs=1&fs2=0&Submit=Nova+palavra";

    try {
        // Realiza a requisição para a URL
        const response = await fetch(url);
        
        // Verifica se a requisição foi bem-sucedida (status 200)
        if (!response.ok) {
            throw new Error('Erro ao buscar a página.');
        }

        // Converte a resposta para texto
        const html = await response.text();

        // Cria um elemento temporário para analisar o HTML retornado
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Busca o elemento com a palavra, de acordo com o seletor CSS fornecido
        const div = doc.querySelector('div[style="font-size:3em; color:#6200C5;"]');

        if (div) {
            // Atualiza o conteúdo de 'wordContainer' com o texto da palavra
            document.getElementById("wordContainer").textContent = div.innerText;
        } else {
            console.log('Elemento não encontrado.');
        }

    } catch (error) {
        console.error('Erro:', error);
    }
}

// Adiciona o evento de clique ao botão
document.getElementById("sortWord").addEventListener("click", obterPalavra);