function escrevaMeuNome (nome) {
    return 'Meu nome è ' + nome;
};

console.log(escrevaMeuNome('Thiago'));

function verificarIdade (idade) {
    if (idade < 18) {
        return 'Menor de idade';
    } else {
        return 'Maior de idade';
    }
}

console.log(verificarIdade(31));