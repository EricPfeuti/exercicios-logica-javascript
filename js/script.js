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