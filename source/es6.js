const alunos = [
    {
        nome: "Maria",
        nota: "7.8"
    },
    {
        nome: "João",
        nota: "5.2"
    },
    {
        nome: "Miguel",
        nota: "6"
    },
    {
        nome: "Miguel",
        nota: "6"
    },
    {
        nome: "Junior",
        nota: "8.9"
    },
    {
        nome: "Adrean",
        nota: "6.5"
    },
    {
        nome: "Giovanni",
        nota: "3.4"
    },
    {
        nome: "Marcos",
        nota: "3.3"
    },
    {
        nome: "Marcos",
        nota: "3.3"
    }
]

const map = new Map();
/////////////
const FiltrarNotas = alunos.filter(item => {
    return item.nota >= 6;
})
////////////
const OrdenarNotas = FiltrarNotas.sort((a, b) => {
    if (a.nome < b.nome) {
        return -1;
    } else {
        return true;
    }
});
// console.log(OrdenarNotas);
////////////Tratativa para duplicado com set
const ArrayAlunos = OrdenarNotas.map(item => {
    return [item.nome];
}).flat();

const RetiraDuplicados = array => {
    const set = new Set([...array]);
    const novoArraySemDuplicados = [...set];
    return novoArraySemDuplicados;
}

const AlunosAprovados = RetiraDuplicados(ArrayAlunos)
    .reduce((acumulador, alunoAtual) => {
        acumulador += `${alunoAtual} `;
        return acumulador;
    }, '');


////////////Tratativa para duplicado com map
const MapAlunos = new Map();
const AdicionarAlunosAoMap = OrdenarNotas.map(item => {
    MapAlunos.set(item.nome, item.nota);
    return MapAlunos;
});

//////////Nota Media da Sala
let Notas = [];
const getNotas = alunos.forEach(item => {
    Notas.push(Number(item.nota));
})

const Total = Notas.reduce((acumulador, valorAtual) => {
    acumulador += valorAtual;
    return acumulador;
}, 0);

const ValorMedio = Math.round(Total / Notas.length);
//////Resultados//////
console.log(AlunosAprovados);
console.log(MapAlunos);
console.log(`O valor médio de notas da sala foi ${ValorMedio}`);



