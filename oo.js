const assuntos = ["FrontEnd", "BackEnd", "UX-UI", "DataScience"];

const lowerAssuntos = [];
for (assunto in assuntos) {
    lowerAssuntos.push(assuntos[assunto].toLowerCase());
}


function Formacao(nome) {
    this.nome = nome;
}

function Curso(nome, pisoSalarial, assunto, professor) {

    Formacao.call(this, nome, pisoSalarial);

    this.assunto = assunto;
    this.professor = professor;

    let _assunto = assunto;
    let _pisoSalarial = pisoSalarial;

    this.getAssunto = function () {
        return _assunto;
    }

    this.setAssunto = function (nomeAssunto) {
        if (lowerAssuntos.includes(nomeAssunto.toLowerCase())) {
            _assunto = nomeAssunto;
        }
    }


    this.getPisoSalarial = function () {
        return _pisoSalarial;
    }

    this.setPisoSalarial = function (novoSalario) {
        if (typeof novoSalario == "number") {
            _pisoSalarial = novoSalario;
        }
    }

    this.mudaAssunto = function (novoAssunto) {
        _assunto = novoAssunto;
    }

    this.reajusteSalario = function () {
        const novoSalario = this.getPisoSalarial() * 1.20;
        this.setPisoSalarial(Math.floor(novoSalario));
    }

    this.reajusteSalario2 = function (_assunto) {
        let novoSalario;
        switch (_assunto.toLowerCase()) {
            case "frontend":
                novoSalario = _pisoSalarial * 1.5;
                break;
            case "backend":
                novoSalario = _pisoSalarial * 1.6;
                break;
            case "datascience":
                novoSalario = _pisoSalarial * 1.8;
                break;
            case "ux-ui":
                novoSalario = _pisoSalarial * 1.3;
                break;
            default:
                novoSalario = _pisoSalarial * 1.1;
        }
        _pisoSalarial = novoSalario;
    }
}

function AlunoA(nome) {
    Curso.call(this, nome, 5000, "Engenharia", "Gian");


    this.mudaAssunto = function (novoAssunto) {
        this.setAssunto(novoAssunto);
    }

    this.reajusteSalario = function () {
        const novoSalario = this.getPisoSalarial() * 1.20;
        this.setPisoSalarial(Math.floor(novoSalario));
    }
}

function AlunoB(nome) {
    Curso.call(this, nome, 3000, "Desenvolvedor", "Jonathan");


    this.mudaAssunto = function (novoAssunto) {
        this.setAssunto(novoAssunto);
    }

    this.reajusteSalario = function () {
        this.reajusteSalario2(this.getAssunto());
    }
}

function AlunoC(nome) {
    Curso.call(this, nome, 2000, "Analista de Ti", "Marcos");


    this.mudaAssunto = function (novoAssunto) {
        this.setAssunto(novoAssunto);
    }

    this.reajusteSalario = function () {
        const novoSalario = this.getPisoSalarial() * 1.6;
        this.setPisoSalarial(Math.floor(novoSalario));
    }
}

const AlunaMaria = new AlunoA("Maria");
const AlunoMiguel = new AlunoB("Miguel");
const AlunaGabriela = new AlunoC("Gabriela");

AlunaMaria.mudaAssunto("UX-ui");
console.log(AlunoMaria.getAssunto());
console.log(AlunaMaria.getPisoSalarial());
AlunaMaria.reajusteSalario();
console.log(AlunaMaria.getPisoSalarial());

AlunoMiguel.mudaAssunto("FRONtEnd")
console.log(AlunoMiguel.getAssunto());
console.log(AlunoMiguel.getPisoSalarial());
AlunoMiguel.reajusteSalario();
console.log(AlunoMiguel.getPisoSalarial());
console.log(AlunoMiguel.getAssunto());

AlunoGabriela.mudaAssunto("BackEnd")
console.log(AlunoGabriela.getAssunto());
console.log(AlunoGabriela.getPisoSalarial());
AlunoGabriela.reajusteSalario();
console.log(AlunoGabriela.getPisoSalarial());





