const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A tecnologia no campo ocorre quando produtores rurais utilizam computadores para o monitoramento.Isso tem crescido bastante",
        alternativas: [
            {
                texto: "Isso é ruim",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é muito bom",
                afirmacao: "Sim."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial,decidiu fazer uma sequência de aulas sobre esta tecnologia.Isso é utilpara vocẽ?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Sim"
            },
            {
                texto: "Não.",
                afirmacao: "Não."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho a professora realizou um debate entre a turma para entender como foi realizada a pesquisa. A professora fez o serto ou não?",
        alternativas: [
            {
                texto: "Sim ela fez o serto .",
                afirmacao: "Sim."
            },
            {
                texto: "Não.",
                afirmacao: "sim ela fez o serto."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o tema que voce fez.Qual é o tema?",
        alternativas: [
            {
                texto: "Tecnologia no campo.",
                afirmacao: "Serto."
            },
            {
                texto: "Criar imagem de IA.",
                afirmacao: "Errado!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O que você já fez? ",
        alternativas: [
            {
                texto: "Nada.",
                afirmacao: "Voçẽis tenque fazer ate semana que vem."
            },
            {
                texto: "Já terminemos o trabalho.",
                afirmacao: "Parabéns. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();