function multiplicaTresNumeros(x, y, z){
    return x * y * z;
}

console.log(multiplicaTresNumeros(2, 3, 4));

const mult = multiplicaTresNumeros(5, 4, 8);

console.log("O valor de mult e " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true){
        console.log("Pode Dirigir");
    } else {
        console.log("Nao pode Dirigir!");
    }
}

podeDirigir(19, true);
podeDirigir(17, true);
podeDirigir(20, false);
podeDirigir(15, false);

//podeDirigir(19, 0); "0" = true neste caso!
//podeDirigir(19, 1); "1" = false neste caso!
