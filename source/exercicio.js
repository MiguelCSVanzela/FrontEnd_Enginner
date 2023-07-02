"use strict";
let comand = require('prompt-sync')();
const multiplica = (multiplicador, multiplicando) => {
    const produto = multiplicador * multiplicando;
    return produto;
};
// console.log(multiplica(398, 299));
const finonacci = (termo) => {
    let resultado = [0, 1];
    for (let i = 2; i < termo; i++) {
        resultado[i] = resultado[i - 2] + resultado[i - 1];
    }
    return resultado;
};
// console.log(finonacci(5)); 
function saudacao() {
    const data = new Date();
    const hora = data.getHours();
    let mensagem = "";
    if (hora > 6 && hora < 12) {
        mensagem = "bom Dia";
    }
    else if (hora >= 12 && hora < 18) {
        mensagem = "boa Tarde";
    }
    else if (hora >= 18 && hora <= 23) {
        mensagem = "boa Noite";
    }
    else {
        mensagem = "vai dormir, tu também é filho de Deus!";
    }
    return mensagem;
}
let casos = ["Dormir", "Exercitar", "Comunicar"];
let nome = comand(`Olá, Sou Jarvis seu assistente. Como você se chama?  `);
let saudar = `Olá ${nome}, ${saudacao()}`;
console.log(saudar);
let option = "";
const chat = (option) => {
    let mensagem = "";
    switch (option.toLowerCase()) {
        case "dormir":
            mensagem = "Fazer uma refeição leve no início da noite tais como banana, aveia, oleaginosas, ameixa seca nos ajudam a produzir hormônios o que induz ao sono e o equilibra";
            break;
        case "exercitar":
            mensagem = "Procure alongar-se antes do treino para desenvolver flexibilidade e evitar lesões. Após o treino o alongamento evita o encurtamento muscular e previne dores musculares alem de corrigir a postura e promover a autoconfiança";
            break;
        case "comunicar":
            mensagem = "Quando for se comunicar com uma pessoa ou um grupo, mostre-se animado, interessado no assunto e seja receptivo ao debate e a discussão. Isso vai fazer com que as pessoas sintam-se mais confortáveis ao conversar com você";
            break;
        case "nao" || "não":
            mensagem = `Tudo Bem ${nome}, nos falamos mais tarde então. Au revoir!`;
            break;
        default:
            mensagem = "Não entendi o que quiz dizer. Poderia digitar novamente. Por favor.";
    }
    return mensagem;
};
option = comand(`Neste momento posso ajudar-lhe neste tópicos ${casos}, escolha um:  `);
while (option !== "nao") {
    console.log(chat(option));
    option = comand(`Caso deseje ser ajudado em outro tópico, [${casos}], o digite por favor:  `);
}
