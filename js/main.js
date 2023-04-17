$(document).ready(function () {

    $('form').on('submit', function (event) {
        event.preventDefault()
    })


    $("#ordenar").on("click", function () {
        //Solução alternativa para o método descontinuado toggle
        let iteracao = $(this).data('iteracao') || 1;
        switch (iteracao) {
            case 1:
                $(this).addClass("clicado");
                $("#sortable").sortable();
                $("#imgOrdenar").attr("src", "/icons/ordenar2.png");
                break;
            case 2:
                $(this).removeClass("clicado");
                $("#sortable").sortable("disable");
                $("#imgOrdenar").attr("src", "/icons/ordenar1.png");
                break;
        }
        iteracao++;
        if (iteracao > 2) iteracao = 1;
        $(this).data('iteracao', iteracao);
    })


    $("#fundo").on("click", function () {
        let iteracao = $(this).data('iteracao') || 1;
        switch (iteracao) {
            case 1:
                $("body").addClass("tema-fundo");
                $(this).addClass("clicado");
                $("#imgFundo").attr("src", "/icons/sol.png");
                break;

            case 2:
                $("body").removeClass("tema-fundo");
                $(this).removeClass("clicado");
                $("#imgFundo").attr("src", "/icons/lua.png");
                break;
        }
        iteracao++;
        if (iteracao > 2) iteracao = 1;
        $(this).data('iteracao', iteracao);
    })

    $('#telefone').mask("(00) 00000-0000", {
        placeholder: "(12) 12345-1234"
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: "123.123.123-12",
        reverse: true,
    })

    $("#cep").mask("00000-000", {
        placeholder: "12345-123"
    })

    //Validações
    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: false
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Insira o nome Completo",
            email: "O email é obrigatório",
            telefone: "Adicione um telefone, por favor",
            enderecoCompleto: "Seu endereço por favor",
            cep: "Não se esqueça do CEP",
        },
        submitHandler: function (event) {
            let nome = $("#nome").val();
            let primeiroNome = nome.split(' ');
            if (nome) {
                swal({
                    title: "SUCESSO",
                    text: `${primeiroNome[0]}, seu cadastro foi realizado.`,
                    icon: "success",
                    button: "Maravilha"
                })
                $("#nome").val('');
                $("#email").val('');
                $("#telefone").val('');
                $("#cpf").val('');
                $("#enderecoCompleto").val('');
                $("#cep").val('');
            }


        },
        invalidHandler: function (event, validator) {
            let camposInvalidos = validator.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Ainda há ${camposInvalidos} campos invalidos`);
            }
        }
    })
})