const difficult = window.localStorage.getItem("difficult");
const OPCOES = Difficults[difficult];

// Seleção dos elementos HTML

const [sectionCards, sectionMathProblem] =
  document.querySelectorAll("section");

const [iconPause, iconInfo, iconExitInfo] = document.querySelectorAll("i");

// Aleatorizar as possiveis questões
const cartas_opcoes = Object.keys(Questoes)
const cartas_images = [];

// embaralhamento em si (GPT)
while (cartas_images.length < OPCOES.QuantidadeDePares) {
  var IndiceAleatorio = Math.floor(Math.random() * (cartas_opcoes.length));
  
  var questaoEscolhida = Questoes[cartas_opcoes[IndiceAleatorio]];

  if (!cartas_images.includes(cartas_opcoes[IndiceAleatorio]) && OPCOES.QuestionLevel.includes(questaoEscolhida.nivel[0])) {
    cartas_images.push(cartas_opcoes[IndiceAleatorio]);
  }
}

let card1 = "";
let card2 = "";
let TimerInterval;
let TimerTime = OPCOES.Timer;
let points = 0;
let AnimatedPoints = 0;

sectionMathProblem.style.display = "none";

function GoToEndGame() {
  window.location.href = "/endgame";
}

function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CheckAllQuestions() {
  let indice = 0;
  checkinterval = setInterval(()=>{
    sectionMathProblem.style.display = "none";
    AparecerProblema(cartas_images[indice]);
    if (cartas_images.length <= indice+1) {
      clearInterval(checkinterval);
    }

    indice++;
  },1000)
}

const WrongAnswer = (nome_carta, c1, c2) => {
  points -= (22 * OPCOES.PointsMultiplier)  + Random(0,10);
  if (points < 0) {
    points = 0
  }

  sectionMathProblem.style.display = "none";

  setTimeout(() => {
    c1.classList.remove("clicked");
    c2.classList.remove("clicked");
  }, OPCOES.TimerToReeHideWrong_ms);
  setTimeout(() => {
    card1 = "";
    card2 = "";
  }, OPCOES.TimerToResetWrong_ms);
}
const CorrectAnswer = (nome_carta, c1, c2) => {
  points += (125 * OPCOES.PointsMultiplier) + TimerTime/30;

  sectionMathProblem.style.display = "none";
  
  c1.firstChild.classList.add("disabled");
  c2.firstChild.classList.add("disabled");
  setTimeout(() => {
    c1.firstChild.classList.add("animation-correct-cards");
    c2.firstChild.classList.add("animation-correct-cards");
    card1 = "";
    card2 = "";
    checkEndGame();
  }, OPCOES.TimerToResetWrong_ms);
}

const AparecerProblema = async (nome_carta, c1, c2) => {
  // evitar ter dois problemas ao mesmo tempo
  if (sectionMathProblem.style.display != "none") return;

  var questao = Questoes[nome_carta];

  sectionMathProblem.style.display = "flex";
  sectionMathProblem.getElementsByClassName("questionText")[0].textContent = questao.questao;
  sectionMathProblem.getElementsByClassName("image")[0].src = `/static/images/questions_images/${nome_carta}.jpg`;

  var alternativas = [...questao.alternativas];
  var alternativas_botoes = sectionMathProblem.querySelectorAll(".question-button");

  // embaralhar as questões (GPT)
  for (let i = alternativas.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = alternativas[i];
    alternativas[i] = alternativas[j];
    alternativas[j] = temp;
  }
  
  // coloca o texto nos botões
  alternativas.map((texto, indice)=>{
    alternativas_botoes[indice].onclick = () => {WrongAnswer(nome_carta, c1, c2)};
    if (texto === questao.resposta) {
      alternativas_botoes[indice].onclick = () => {CorrectAnswer(nome_carta, c1, c2)};
    }

    alternativas_botoes[indice].textContent = texto;
  })
}

// Função que checa se o jogo acabou
const checkEndGame = () => {
  const cards = document.querySelectorAll(".card-container");
  let flag = true;

  for (const card of cards) {
    if (!card.firstChild.className.includes("disabled")) {
      flag = false;
      break;
    }
  }

  if (flag) {
    clearInterval(TimerInterval);
    GoToEndGame();
  }
};

// Função que faz a comparação de duas cartas
const compareCards = (c1, c2) => {
  if (c1.getAttribute("data-info") === c2.getAttribute("data-info")) {
    setTimeout(() => {
      AparecerProblema(c1.getAttribute("data-info"), c1, c2);
    },OPCOES.TimerToReeHideWrong_ms)
  } else {
    setTimeout(() => {
      c1.classList.remove("clicked");
      c2.classList.remove("clicked");
    }, OPCOES.TimerToReeHideWrong_ms);
    setTimeout(() => {
      card1 = "";
      card2 = "";
    }, OPCOES.TimerToResetWrong_ms);
  }
};

// Função que controla a jogada e efeitos
const revealCard = (card) => {
  if (card.className.includes("clicked")) return;

  if (card1 === "") {
    card.classList.add("clicked");
    card1 = card;
  } else if (card2 === "") {
    card.classList.add("clicked");
    card2 = card;
    compareCards(card1, card2);
  }
};

//Função que cria as cartas do jogo
const createCards = (animal, order_num) => {
  const card = document.createElement("div");
  const divFront = document.createElement("div");
  const divBack = document.createElement("div");

  card.style.order = order_num;
  card.className = "card-container clicked";
  divFront.className = "card front";
  divBack.className = "card back";
  card.setAttribute("data-info", animal);

  divFront.style.backgroundImage = `url(static/images/questions_images/${animal}.jpg)`;

  card.appendChild(divFront);
  card.appendChild(divBack);
  sectionCards.appendChild(card);

  card.addEventListener("click", () => revealCard(card));
};

// Função que embaralha o array
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

function DisplayPoints() {
  points = parseInt(points);

  if (AnimatedPoints != points) {
    animationPointsInterval = setInterval(()=>{

      // animação do botão de aparecer
      document.getElementById("points").style.scale = 
        1 + Math.sin((points - AnimatedPoints) / 31.4) * 0.1;

      document.getElementById("points").textContent = "Pontos: "+parseInt(AnimatedPoints);
      if (AnimatedPoints <= points-1) {
        AnimatedPoints += 4;
      } else if (AnimatedPoints > points) {
        AnimatedPoints = points;
      } else {
        clearInterval(animationPointsInterval);
      }
    },50)
  }
}

// Função que inicia o jogo
const initGame = (array) => {
  document.documentElement.style.setProperty("--card-aspect-ratio", OPCOES.CardAspectRatio);
  sectionCards.style.marginTop = OPCOES.MoveDownPixelsPainel+"px";

  const duplicateArray = [...array, ...array];
  const shuffledArray = shuffleArray(duplicateArray);

  document.getElementsByClassName("infos")[0].style.display = "flex";

  shuffledArray.map((element, indice) => createCards(element, indice));

  sectionCards.classList.add("appear-cards");

  setTimeout(()=>{
    document.querySelectorAll(".card-container").forEach((element)=>{
      element.classList.remove("clicked");
    })

    TimerInterval = setInterval(()=>{
      TimerTime -= 1;
      
      let tempoFormatado = Math.floor(TimerTime / 60) + ":" + String(TimerTime % 60).padStart(2, "0");

      document.getElementById("timer").textContent = tempoFormatado;

      if (TimerTime <= 0) {
        GoToEndGame();
      }

      DisplayPoints();
      
      window.localStorage.setItem("Pontos", points);
    },1000)

  },3000)
};

// Evento de inicialização ao carregar o DOM
document.addEventListener("DOMContentLoaded", function () {
  DesaparecerVinheta()

  let tempoFormatado = Math.floor(TimerTime / 60) + ":" + String(TimerTime % 60).padStart(2, "0");
  document.getElementById("timer").textContent = tempoFormatado;

  document.getElementById("points").textContent = "Pontos: 0";

  setTimeout(()=>{
    initGame(cartas_images);
  },600)

});