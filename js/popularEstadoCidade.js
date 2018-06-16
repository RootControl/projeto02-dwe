function buscarEstados() {

    var requisicaoEstados = new XMLHttpRequest();
    var tipo = 'GET';
    var assincrona = true;
    // API do IBGE - retorna arquivo JSON com todos os estados da federação
    requisicaoEstados.open(tipo, 'https://servicodados.ibge.gov.br/api/v1/localidades/estados', assincrona);
    requisicaoEstados.send();

    requisicaoEstados.onreadystatechange = function () {
        if(requisicaoEstados.readyState === XMLHttpRequest.DONE && requisicaoEstados.status === 200) {

            var obj = JSON.parse(requisicaoEstados.responseText);

            // função para ordenar os objetos por ordem alfabética
            obj.sort(function(a,b) {
                if(a.nome < b.nome) return -1;
                if(a.nome > b.nome) return 1;
                return 0;
            });

            // variável que será incremetada com <option>
            var option = "";

            // laço para incrementar
            for(var i=0; i < obj.length; i++){
                option+= '<option value="' + obj[i].id+ '" id="' + obj[i].nome + '">' + obj[i].nome + '</option>';
            }

            // acrescenta em html as tags <option>
            $("#estado").html(option);

            // habilita o select cidades
            $("#estado").removeAttr('disabled');
            $("#cidade").removeAttr('disabled');
        }
    }
}

function buscarCidades(){

    var requisicaoCidades = new XMLHttpRequest();
    var tipo = 'GET';
    var assincrona = true;
    var idEstado = $('#estado').find(':selected').attr('value');

    // API do IBGE que retorna todos os municipios relacionados com o id do estado
    requisicaoCidades.open(tipo, 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + idEstado + '/municipios' ,assincrona);
    requisicaoCidades.send();

    requisicaoCidades.onreadystatechange = function () {
        if(requisicaoCidades.readyState === XMLHttpRequest.DONE && requisicaoCidades.status === 200) {

            var obj = JSON.parse(requisicaoCidades.responseText);

            // função para ordenar os objetos por ordem alfabética
            obj.sort(function(a,b) {
                if(a.nome < b.nome) return -1;
                if(a.nome > b.nome) return 1;
                return 0;
            });

            var option = "";

            for(var i=0; i < obj.length; i++){
                option+= '<option value="' + obj[i].nome+ '" id="' + obj[i].nome + '">' + obj[i].nome + '</option>';
            }

            // acrescenta em html as tags <option>
            $("#cidade").html(option);
        }
    }
}

$(document).ready(function () {
    // desabilita o select cidades e estados enquanto não forem populados
    $("#cidade").attr("disabled", "disable");
    $("#estado").attr("disabled", "disable");

    // efetua a busca de estados da federação
    buscarEstados();

    // quando houver uma mudança no select de estados...
    $('#estado').change(function(event) {
        buscarCidades();
    });

});