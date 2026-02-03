const Questoes = {
    trator:{
        alternativas:["50","60","65","70"],
        resposta:"60",
        questao:"Um trator percorre 12 km por hora. Quantos quilômetros ele percorre em 5 horas de trabalho?",
        nivel:1
    },
    milho:{
        alternativas:["150","180","200","220"],
        resposta:"200",
        questao:"Uma lavoura tem 8 fileiras de milho, cada uma com 25 plantas. Quantas plantas há no total?",
        nivel:1
    },
    sementes:{
        alternativas:["200","220","240","260"],
        resposta:"240",
        questao:"Um agricultor planta 40 sementes por canteiro. Quantas sementes ele usará em 6 canteiros?",
        nivel:1
    },
    fertilizante:{
        alternativas:["120","130","140","150"],
        resposta:"140",
        questao:"Cada saco de fertilizante pesa 20 kg. Qual o peso total de 7 sacos?",
        nivel:1
    },
    enxada:{
        alternativas:["100","110","120","130"],
        resposta:"120",
        questao:"Um trabalhador prepara 15 canteiros por dia. Quantos canteiros ele prepara em 8 dias?",
        nivel:1
    },
    colheitadeira:{
        alternativas:["48","50","52","54"],
        resposta:"54",
        questao:"Uma colheitadeira colhe 9 hectares por dia. Quantos hectares ela colhe em 6 dias?",
        nivel:1
    },
    estufa:{
        alternativas:["196","204","216","224"],
        resposta:"216",
        questao:"Em uma estufa há 12 linhas de cultivo com 18 plantas cada. Quantas plantas há no total?",
        nivel:1
    },
    pulverizador:{
        alternativas:["40","45","50","55"],
        resposta:"45",
        questao:"Um pulverizador usa 5 litros de defensivo por hectare. Quantos litros serão usados em 9 hectares?",
        nivel:1
    },
    solo:{
        alternativas:["600","700","800","900"],
        resposta:"800",
        questao:"Um campo tem formato retangular, com 40 m de comprimento e 20 m de largura. Qual é a área?",
        nivel:1
    },
    soja:{
        alternativas:["18","19","20","21"],
        resposta:"21",
        questao:"Cada hectare produz 3 toneladas de soja. Quantas toneladas são produzidas em 7 hectares?",
        nivel:1
    },
    caminhao:{
        alternativas:["16","17","18","19"],
        resposta:"18",
        questao:"Um caminhão transporta 2 toneladas por viagem. Quantas toneladas ele transporta em 9 viagens?",
        nivel:1
    },
    regador:{
        alternativas:["50","55","60","65"],
        resposta:"60",
        questao:"Um regador contém 10 litros de água. Quantos litros são usados ao encher o regador 6 vezes?",
        nivel:1
    },
    alface:{
        alternativas:["110","120","130","140"],
        resposta:"120",
        questao:"Em um canteiro há 24 pés de alface. Quantos pés há em 5 canteiros iguais?",
        nivel:1
    },
    silos:{
        alternativas:["4000","4200","4600","4800"],
        resposta:"4800",
        questao:"Cada silo armazena 800 kg de grãos. Quantos quilos há em 6 silos?",
        nivel:1
    },
    linhas:{
        alternativas:["400","410","420","430"],
        resposta:"420",
        questao:"Um campo tem 14 linhas de plantio, cada uma com 30 plantas. Quantas plantas há no campo?",
        nivel:1
    },
    balanca:{
        alternativas:["250","275","300","325"],
        resposta:"300",
        questao:"Um saco pesa 25 kg. Qual o peso de 12 sacos?",
        nivel:1
    },
    trigo:{
        alternativas:["25","28","30","32"],
        resposta:"30",
        questao:"Um agricultor colheu 180 sacas de trigo em 6 dias. Quantas sacas ele colheu por dia?",
        nivel:1
    },
    cafe:{
        alternativas:["80","85","90","95"],
        resposta:"90",
        questao:"Cada pé de café produz 2 kg. Quantos kg são produzidos por 45 pés?",
        nivel:1
    }
    // carrinho:{
    //     alternativas:["400","410","420","430"],
    //     resposta:"420",
    //     questao:"Um carrinho transporta 60 kg por viagem. Quantos kg são transportados em 7 viagens?"
    // },
    // tomate:{
    //     alternativas:["160","170","180","190"],
    //     resposta:"180",
    //     questao:"Cada caixa comporta 18 kg de tomate. Quantos kg há em 10 caixas?"
    // },
    // estacas:{
    //     alternativas:["120","130","140","150"],
    //     resposta:"140",
    //     questao:"Um agricultor usa 4 estacas por planta. Quantas estacas são usadas em 35 plantas?"
    // },
    // terreno:{
    //     alternativas:["25","30","35","40"],
    //     resposta:"30",
    //     questao:"Um terreno tem 90 metros de comprimento. Se for dividido em 3 partes iguais, qual o tamanho de cada parte?"
    // },
    // arroz:{
    //     alternativas:["25","28","30","32"],
    //     resposta:"30",
    //     questao:"Cada hectare produz 6 toneladas. Quantas toneladas são produzidas em 5 hectares?"
    // },
    // carregamento:{
    //     alternativas:["4000","4400","4800","5200"],
    //     resposta:"4800",
    //     questao:"Um caminhão leva 1.200 kg por viagem. Quantos kg ele transporta em 4 viagens?"
    // },
    // mudas:{
    //     alternativas:["400","420","450","480"],
    //     resposta:"450",
    //     questao:"Cada bandeja tem 50 mudas. Quantas mudas há em 9 bandejas?"
    // },
    // agricultor:{
    //     alternativas:["36","40","42","48"],
    //     resposta:"42",
    //     questao:"Um agricultor trabalha 6 horas por dia. Quantas horas ele trabalha em 7 dias?"
    // }
}

const Difficults = {
    easy:{
        Timer: 100,
        QuestionLevel: [1],
        QuantidadeDePares: 6,
        PointsMultiplier: 0.8,

        TimerToResetWrong_ms: 1500,
        TimerToReeHideWrong_ms: 1000,

        MoveDownPixelsPainel: 70
    },
    normal:{
        Timer: 180,
        QuestionLevel: [1,2],
        QuantidadeDePares: 8,
        PointsMultiplier: 1.4,

        TimerToResetWrong_ms: 1000,
        TimerToReeHideWrong_ms: 700,

        MoveDownPixelsPainel: 50
    },
    hard:{
        Timer: 300,
        QuestionLevel: [2,3],
        QuantidadeDePares: 10,
        PointsMultiplier: 2.5,

        TimerToResetWrong_ms: 700,
        TimerToReeHideWrong_ms: 500,
        MoveDownPixelsPainel: 0
    }
}