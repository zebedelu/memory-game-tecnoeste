const Questoes = {
    "trator": {
        "questao": "Um agricultor usa um trator que prepara 15 hectares em 5 horas. Se precisa preparar 9 hectares, quanto tempo levará?",
        "nivel": [2],
        "alternativas": ["2", "3", "4", "5"],
        "resposta": "3"
    },

    "milho": {
        "questao": "Um fazendeiro planta 5 fileiras com 20 espigas cada e depois encontra mais 15 espigas extras. Quantas espigas terá no total?",
        "nivel": [1],
        "alternativas": ["100", "110", "115", "120"],
        "resposta": "115"
    },

    "sementes": {
        "questao": "Um agricultor precisa plantar 1000 m². Cada pacote cobre 250 m², mas só 80% germinam. Quantos pacotes são necessários?",
        "nivel": [3],
        "alternativas": ["4", "5", "6", "7"],
        "resposta": "5"
    },

    "enxada": {
        "questao": "Um trabalhador tem 50 m² para capinar em sua horta e já limpou 20 m². Quantos metros quadrados ainda faltam capinar?",
        "nivel": [1],
        "alternativas": ["20", "25", "30", "35"],
        "resposta": "30"
    },

    "colheitadeira": {
        "questao": "Uma colheitadeira colhe 9000 kg de grãos por dia. Em dia chuvoso perde 15% da produção. Quantos kg são colhidos nesse dia?",
        "nivel": [3],
        "alternativas": ["6000", "6300", "7650", "6700"],
        "resposta": "7650"
    },

    "estufa": {
        "questao": "Uma estufa de 100 m² produz 500 kg de vegetais por ciclo. Uma estufa de 250 m² produzirá na mesma proporção. Quantos kg?",
        "nivel": [2],
        "alternativas": ["1000", "1250", "1500", "1750"],
        "resposta": "1250"
    },

    "pulverizador": {
        "questao": "Um pulverizador cobre 12 fileiras em 3 horas de trabalho. Mantendo o mesmo ritmo, quantas fileiras cobre por hora?",
        "nivel": [1],
        "alternativas": ["3", "4", "5", "6"],
        "resposta": "4"
    },

    "solo": {
        "questao": "De uma área de 500 hectares, 40% precisam de correção com calcário. Quantos hectares permanecem sem necessidade de correção?",
        "nivel": [3],
        "alternativas": ["200", "250", "300", "350"],
        "resposta": "300"
    },

    "caminhao": {
        "questao": "Um caminhão transporta 8 toneladas de grãos por viagem. Em 5 viagens completas, qual é a quantidade total transportada?",
        "nivel": [1],
        "alternativas": ["30", "35", "40", "45"],
        "resposta": "40"
    },

    "regador": {
        "questao": "Foram usados 3 regadores de 10 litros cada para irrigar mudas. Com 20% de evaporação, quantos litros foram absorvidos?",
        "nivel": [2],
        "alternativas": ["20", "22", "24", "26"],
        "resposta": "24"
    },

    "alface": {
        "questao": "Um horticultor planta 10 m² de alface e amplia a horta adicionando mais 5 m². Qual será a área total cultivada?",
        "nivel": [2],
        "alternativas": ["12", "13", "14", "15"],
        "resposta": "15"
    },

    "silos": {
        "questao": "Cada silo armazena 50 toneladas de grãos. Se forem utilizados 4 silos iguais, qual será a capacidade total de armazenamento?",
        "nivel": [1],
        "alternativas": ["150", "200", "250", "300"],
        "resposta": "200"
    },

    "balanca": {
        "questao": "Uma balança suporta 50 kg, mas só pesa 48 kg por vez para segurança. Para 230 kg de sementes, quantas pesagens são necessárias?",
        "nivel": [2],
        "alternativas": ["4", "5", "6", "7"],
        "resposta": "5"
    },

    "cafe": {
        "questao": "Uma safra de café rende 12000 kg. Durante o processamento, 15% é perdido. Qual é o peso utilizável após as perdas?",
        "nivel": [3],
        "alternativas": ["9500", "10200", "10800", "11400"],
        "resposta": "10200"
    },

    // raciocinio lógico
    "terreno": {
        "questao": "Observe a sequência usada por um agricultor para numerar seus terrenos: 2, 5, 10, 17, 26... Qual é a equação que descreve essa sequência numérica?",
        "nivel": [3],
        "alternativas": ["n²+1","n³-1","2n+1","2ⁿ"],
        "resposta": "n²+1"
    },
    "soja":{
        "questao": "Em um depósito agrícola, a quantidade de sacos de sementes de soja dobra a cada semana, formando a sequência: 1, 2, 4, 8, 16... Qual é a equação que descreve essa sequência?",
        "nivel":[2],
        "alternativas":["n²","2ⁿ","2 × n","n³"],
        "resposta":"2ⁿ"
    },
    "trigo": {
        "questao": "Em um silo, o número de sacas de trigo aumenta de 5 em 5: 5, 10, 15, 20… Qual é o próximo número?",
        "nivel": [1],
        "alternativas": ["21", "15", "24", "25"],
        "resposta": "25"
    },
}

const Difficults = {
    easy:{
        Timer: 120,
        QuestionLevel: [1],
        QuantidadeDePares: 6,
        PointsMultiplier: 0.9,

        TimerToResetWrong_ms: 1500,
        TimerToReeHideWrong_ms: 1000,

        MoveDownPixelsPainel: 170,
        CardAspectRatio: 3.5
    },
    normal:{
        Timer: 240,
        QuestionLevel: [1,2],
        QuantidadeDePares: 8,
        PointsMultiplier: 1,

        TimerToResetWrong_ms: 1000,
        TimerToReeHideWrong_ms: 700,

        MoveDownPixelsPainel: 50,
        CardAspectRatio: 3.5
    },
    hard:{
        Timer: 420,
        QuestionLevel: [2,3],
        QuantidadeDePares: 8,
        PointsMultiplier: 1.1,

        TimerToResetWrong_ms: 700,
        TimerToReeHideWrong_ms: 500,

        MoveDownPixelsPainel: 50,
        CardAspectRatio: 3.5
    }
}