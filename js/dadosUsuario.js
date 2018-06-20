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
            $("#bairro").val(listaJson[posicao].bairro);
            $("#email").val(listaJson[posicao].email);
            $("#senha").val(listaJson[posicao].senha);
        }
    });
});


function remover() {
    $.ajax({
        url: "http://andrebordignon.esy.es/php/deletacandidato.php?idcandidato=" + listaJson[posicao].idcandidato,
    });
    alert("Seu usuário foi removido!!!");

    $("#nome").val("");
    $("#cpf").val("");
    $("#sexo").val("");
    $("#dataNasc").val("");
    $("#cadjus").val("");
    $("#rua").val("");
    $("#numero").val("");
    $("#estado").val("");
    $("#cidade").val("");
    $("#bairro").val("");
    $("#email").val("");
    $("#senha").val("");
}