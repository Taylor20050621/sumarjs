function sumar(e){
    //OBTENER EL NUMERO 1 DESDE EL FORMULARIO
    let numero1 = parseInt(document.getElementById("numero1").value);
    //OBTENER EL NUMERO 2 DESDE EL FORMULARIO
    let numero2 = parseInt(document.getElementById("numero2").value);
    //IMPRIMIMOS LOS VALORES INGRESADOS
    document.writeln("<h1>El valor de la suma de los dos numeros</h1>");
    document.writeln("<br>El valor del numero 1 es: " + numero1);
    document.writeln("<br>El valor del numero 2 es: " + numero2);
    //REALIZAMOS LA OPERACION
    let suma = numero1 + numero2;
    let raiz = parseFloat(Math.sqrt(suma));
    //IMPRIMIMOS EL RESULTADO
    document.writeln("<br>La suma de " + numero1 + " + " + numero2 + " es: " + suma);
    document.writeln("<br>La raiz cuadrada de la suma de los dos numero es: " + raiz);
}