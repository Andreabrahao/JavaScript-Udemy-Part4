function soma(a, b) {
    if(a === undefined || b === undefined) {
        console.log("Esta funcao precisa ter os dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log("Ola " + nome + " falta inserir idade!");
    } else if(nome === undefined) {
        console.log("Ola voce tem " + idade + ", favor inserir nome!");
    } else {
        console.log("Ola " + nome + " voce tem " + idade + " anos");
    }
}

saudacao("Zezin");

saudacao("Andre", 28);

saudacao(undefined , 30);