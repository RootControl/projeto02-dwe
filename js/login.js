var listaJson;

$(document).ready(function teste() {
    $.ajax({
        type: "GET",
        url: "http://andrebordignon.esy.es/php/consultacandidatos.php",

        success: function(result){
            console.log(result);
            listaJson = JSON.parse(result);          
        }
    });
});

$(document).submit(function teste(event) {
    event.preventDefault();

    idcandidato = $("#idcandidato").val();    
    var senha = $("#senha").val();
    for (var i = 0; i < listaJson.length; i++) {        
        if (listaJson[i].idcandidato == idcandidato && listaJson[i].senha == senha) {
            console.log(listaJson[i].idcandidato + "\n" + listaJson[i].nome);
            sessionStorage.setItem('posicao', i);
            window.location.assign("dadosUsuario.html?");
        }
        else if (listaJson[i].idcandidato == idcandidato && listaJson[i].senha != senha) {
            alert("Usuário ou senha inválido.");
        }
    }
});

function popularDados(listaJson, posicao) {
    document.getElementById("#nome").innerHTML = listaJson[posicao].nome;
}