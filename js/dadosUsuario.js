var listaJson;
var posicao = sessionStorage.getItem('posicao');

$(document).ready(function teste() {
    $.ajax({
        type: "GET",
        url: "http://andrebordignon.esy.es/php/consultacandidatos.php",

        success: function(result){
            listaJson = JSON.parse(result);

            $("#nome").val(listaJson[posicao].nome);
            $("#cpf").val(listaJson[posicao].cpf);
            $("#sexo").val(listaJson[posicao].sexo);
            $("#dataNasc").val(listaJson[posicao].datanasc);
            $("#cadjus").val(listaJson[posicao].cadjus);
            $("#rua").val(listaJson[posicao].rua);
            $("#numero").val(listaJson[posicao].numero);
            $("#estado").val(listaJson[posicao].estado);
            $("#cidade").val(listaJson[posicao].cidade);
            $("#email").val(listaJson[posicao].email);
            $("#senha").val(listaJson[posicao].senha);
        }
    });
});

function remover() {
    $.ajax({
        url: "http://andrebordignon.esy.es/php/deletacandidato.php?idcandidato=" + listaJson[posicao].idcandidato,
        success: function (result) {            
            window.location.href = "index.html";
        }
    });
    alert("Seu usuário foi removido!!!");
}

function validarNome(nome){
    if (nome.length > 255 && nome.length < 1) {
        return false;
    }
    else return true;
}

function validarIdade(dataNasc){
    var year = new Date;
    var anoAtual = parseInt(year.getFullYear());
    var ano = parseInt(dataNasc.substring(0,4));

    if (anoAtual - ano < 18) {
        return false
    }
    else return true;
}

function validarCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    if (strCPF.length > 11) return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function validarData(data) {
    var bissexto = 0;
    var ano = data.substring(0,4);
    var mes = data.substring(5,7);
    var dia = data.substring(8);
    var tam = data.length;
    if (tam == 10)  {
        if ((ano > 1900)||(ano < 2100)){
            switch (mes) {
                case '01':
                case '03':
                case '05':
                case '07':
                case '08':
                case '10':
                case '12':
                    if  (dia <= 31){
                        return true;
                    }
                    break;
                case '04':
                case '06':
                case '09':
                case '11':
                    if  (dia <= 30){
                        return true;
                    }
                    break;
                case '02':
                    /* Validando ano Bissexto / fevereiro / dia */
                    if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)){
                        bissexto = 1;
                    }
                    if ((bissexto == 1) && (dia <= 29)){
                        return true;
                    }
                    if ((bissexto != 1) && (dia <= 28)){
                        return true;
                    }
                    break;
            }
        }
    }
    return false;
}

function validarCadJus(numero) {
    var tmp = parseInt(numero);
    if (tmp < 1 && tmp > 5000){
        return false
    }
    else return true;
}

function atualizar() {

    var nome        = $("#nome").val();
    var cpf         = $("#cpf").val();
    var sexo        = $("#sexo").val();
    var dataNasc    = $("#dataNasc").val();
    var cadjus      = parseInt($("#cadjus").val());
    var rua         = $("#rua").val();
    var numero      = $("#numero").val();
    var estado      = $("#estado").val();
    var cidade      = $("#cidade").val();
    var email       = $("#email").val();
    var senha       = $("#senha").val();

    var count = 5;
    if (!validarNome(nome)){
        alert("Nome inválido.");
        count -= 1;
    }
    if (!validarCPF(cpf)) {
        alert("CPF inválido.");
        count -= 1;
    }
    if (!validarData(dataNasc)) {
        alert("Data de Nascimento inválida.");
        count -= 1;
    }
    if (!validarCadJus(cadjus)){
        alert("Número de cadastro inválido.");
        count -= 1;
    }
    if (!validarIdade(dataNasc)) {
        alert("Para se cadastrar é necessário ser maior de 18 anos.");
        count -= 1;
    }
    if (count == 5) {
        console.log(nome, cpf, sexo, dataNasc, cadjus, rua, numero, estado, cidade, email, senha);
        $.ajax({
            type: "POST",
            data: {
                nome: nome,
                sexo: sexo,
                dataNasc: dataNasc,
                rua: rua,
                numero: numero,
                estado: estado,
                cidade: cidade,
                cpf: cpf,
                cadjus: cadjus,
                email: email,
                senha: senha
            },
            url: "http://andrebordignon.esy.es/php/atualizacandidato.php?idcandidato=" + listaJson[posicao].idcandidato,

            success: function (result) {
                console.log(result);
                alert(result);
                window.location.href = "index.html";
            }
        });
    }
}