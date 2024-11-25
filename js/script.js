function ex1(){
    var valueInput = document.getElementById("num").value;

    alert(valueInput);
}

function ex2(){
    // SURGE UMA TERCEIRA VÁRIAVEL C, onde pode jogar valor de B para C, valor de A para B e depois valor de C para A;
    var valueA = document.getElementById("num-a").value;
    var valueB = document.getElementById("num-b").value;
    var valueC = valueB;
    var valueB = valueA;
    var valueA = valueC;

    alert("Variável A: " + valueA + " e " + "Variável B: " + valueB);
}

function ex3(){
    var crianca1 = parseInt(document.getElementById("crianca-1").value);
    var crianca2 = parseInt(document.getElementById("crianca-2").value);
    // FAZ a SOMA das IDADES
    var soma = crianca1 + crianca2;
    // PEGA O VALOR da SOMA e DIVIDE POR 2 por SER APENAS DUAS CRIANÇAS
    var media = soma/2;

    alert("A soma das idades das duas crianças são de: "  + soma + ";" + " A média delas é de: " + media + ";");
}

function ex4(){
    var num1 = parseInt(document.querySelector("#num-1").value);
    var num2 = parseInt(document.querySelector("#num-2").value);
    var selectOperation = document.querySelector('input[name="operation"]:checked').value;
    var nameOperation, calculo;

    if (selectOperation == "adicao"){
        nameOperation = "Adição";
        calculo = num1 + num2;
    } else if (selectOperation == "subtracao"){
        nameOperation = "Subtração";
        calculo = num1 - num2;
    } else if (selectOperation == "multiplicacao"){
        nameOperation = "Multiplicação";
        calculo = num1 * num2;
    } else if (selectOperation == "divisao"){
        nameOperation = "Divisão";
        calculo = num1/num2;
    }

    alert(nameOperation + ": "  + calculo);
}

function ex5(){
    var temp = document.querySelector("#temperatura").value;
    // Fah=Celsius*1.8+32
    var resultado = (temp*1.8) + 32;

    alert("Temperatura em Fahrenheit: " + resultado);
}

function ex6(){
    var km = document.querySelector("#velocidade").value;
    // m/s = (km/h)/3.6
    
    m = km/3.6;
    alert("Velocidade em m/s: " + m.toFixed(2) + ";");
}

function ex7(){
    var base = document.querySelector("#base").value;
    var altura = document.querySelector("#altura").value;
    // Area=base*altura

    area = base*altura;
    alert("A área deste retângulo é de: " + area + " metros quadrados;");
}

function ex8(){
    var idade = parseInt(document.querySelector("#idade").value);
    // Dias=anos*365

    Dias = idade*365;
    alert("Sua idade de " + idade + " anos é igual a: " + Dias + " dias;")
}

function ex9(){
    var nota1 = parseInt(document.querySelector("#nota-1").value);
    var nota2 = parseInt(document.querySelector("#nota-2").value);
    var nota3 = parseInt(document.querySelector("#nota-3").value);
    // Média = (nota 1 + nota 2 + nota 3)/3

    media = (nota1 + nota2 + nota3)/3;
    alert("Sua média anual é de: " + media.toFixed(1) + " pontos;");
}

function ex10(){
    var valorMetro = parseInt(document.querySelector("#metros").value);
    var selectOperationMetro = document.querySelector('input[name="operation"]:checked').value;
    var nameOperationMetro, convercao;
    // CM = m*100
    // Mm = m*1000

    if (selectOperationMetro == "centimetros"){
        nameOperationMetro = "Centímetros";
        convercao = valorMetro*100;
    } else if(selectOperationMetro == "milimetros"){
        nameOperationMetro = "Milímetros";
        convercao = valorMetro*1000;
    }

    alert("Valor em " + nameOperationMetro + ": "  + convercao + ";");
}

function ex11(){
    var raio = document.querySelector("#raio").value;
    var alturaCilindro = document.querySelector("#alturaCilindro").value;
    // Volume = TT*raio2*altura
    // TT = 3.14

    volumeCilindro = 3.14*(raio*raio)*alturaCilindro;

    alert("O volume deste cilindro é de: " + volumeCilindro.toFixed(2) + " metros cúbicos;");
}
