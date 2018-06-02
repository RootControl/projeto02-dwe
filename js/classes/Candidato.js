class Endereco {
    constructor(rua, numero, estado, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.estado = estado;
        this.cidade = cidade;
    }
}

class Candidato{
    constructor(nome, cpf, sexo, dataNascimento, cadastroJusticaEleitoral, rua, numero, estado, cidade, email, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.cadastroJusticaEleitoral = cadastroJusticaEleitoral;
        this.email = email;
        this.senha = senha;
        this.endereco = new Endereco(rua, numero, estado, cidade);
    }
}

var candidato01 = new Candidato('luiz', '1234', 'masculino', '12/28/1994', '12345', "Doutor Sales de Oliveira", '120', 'São Paulo', 'Campinas', 'candidato01@cad.com', '1234');

console.log(candidato01);