let background = () => {
    let corPrimaria = document.querySelector('#cor-primaria');
    let corSecundaria = document.querySelector('#cor-secundaria');
    let body = document.querySelector('body');

    body.style.backgroundImage = `linear-gradient( to right, ${corPrimaria.value} , ${corSecundaria.value})`;

    let titulo = document.querySelector('#titulo');;
    let formText = document.querySelector('.form-text');
    let btn = document.querySelector('.btn');

    titulo.classList.add('text-light');
    formText.classList.add('text-light');
    btn.classList.add('btn-outline-light');

    let labels = document.querySelectorAll('.form-label');
    for (let i = 0; i < labels.length; i++) {
        labels[i].classList.add('text-light');
    }
};

let alerta = document.querySelector('#alerta');
let nome = document.querySelector("#nome");

function fechar(evento) {
    let form = document.querySelector('form');
    form.submit();
    alerta.style.display = "none";
};

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                event.preventDefault();
                let conteudoAlerta = document.createElement('div');
                conteudoAlerta.innerHTML = [
                    `<div  class="alert alert-success alert-dismissible text-center border-dark m-2  w-100 py-0 px-0" role="alert">`,
                    '<button type="button" class="btn btn-close btn-sm p-1 me-2 mt-2" data-bs-dismiss="alert" aria-label="Close" onclick="fechar()"></button>',
                    '<div class="d-flex flex-column justify-content-center p-2">',
                    '<h4 class="alert-heading text-light text-center">Sucesso!</h4>',
                    `<div class="text-light">${nome.value}, seu cadastro foi recebido e registrado. </div>`,
                    '</div>',
                    '</div>'
                ].join('');

                let containerAlerta = document.querySelector('.containerAlerta');
                containerAlerta.classList.add('container-alerta');

                alerta.append(conteudoAlerta);
                alerta.classList.add('estiloAlerta');
            }
            form.classList.add('was-validated');
        }, false)
    })
})();
