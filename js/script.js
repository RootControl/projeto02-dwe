class Endereco {
    constructor(rua, numero, estado, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.estado = estado;
        this.cidade = cidade;
    }

    getRua() { return this.rua}
    getNumero() { return this.numero}
    getEstado() { return this.estado}
    getCidade() { return this.cidade}

    setRua(rua) { this.rua = rua}
    setNumero(numero) { this.numero = numero}
    setEstado(estado) { this.estado = estado}
    setCidade(cidade) { this.cidade = cidade}
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

    getNome() { return this.nome}
    getCPF() { return this.cpf}
    getSexo() { return this.sexo}
    getDataNascimento() { return this.dataNascimento}
    getCadastroJusticaEleitoral() { return this.cadastroJusticaEleitoral}
    getEmail() { return this.email}
    getSenha() { return this.senha}
    getEndereco() { return this.endereco}

    setNome(nome) { this.nome = nome}
    setCPF(cpf) { this.cpf = cpf}
    setsexo(sexo) { this.sexo = sexo}
    setDataNascimento(dataNascimento) { this.dataNascimento = dataNascimento}
    setCadastroJusticaEleitoral(cadastroJusticaEleitoral) { this.cadastroJusticaEleitoral = cadastroJusticaEleitoral}
    setEmail(email) { this.email = email}
    setSenha(senha) { this.senha = senha}
    setEndereco(rua, numero, estado, cidade) { this.endereco.setRua(rua), this.endereco.setNumero(numero), this.endereco.setEstado(estado), this.endereco.setCidade(cidade)}
}

var listaDeCandidatos = [];

function cadastrarCandidato() {
    listaDeCandidatos = new Candidato(
        document.getElementById("nome").value,
        document.getElementById("cpf").value,
        document.getElementById("sexo").value,
        document.getElementById("dataNascimento").value,
        document.getElementById("cadastroJusticaEleitoral").value,
        document.getElementById("rua").value,
        document.getElementById("numero").value,
        document.getElementById("estado").value,
        document.getElementById("cidade").value,
        document.getElementById("email").value,
        document.getElementById("senha").value
    );
}