// alert('Hello World'); // 1

// document.write("Hello World"); // 2

// var resultado = 3 + 5 // 3
//  console.log(resultado)

// let nombre = prompt ("nombre:", "ingrese su nombre") // 4
//  document.write("Hola:" + nombre)

// var numero1 = Number (prompt ("ingrese numero 1:"))  // 5
//   var numero2 = Number (prompt ("ingrese numero 2:"))
  
//    document.write( "el resultado de la suma  es:"+ (numero1 + numero2) )

// var num1 = (prompt("ingrese el primer  número :")); // 6
//  var num2 = (prompt("ingrese el segundo número:"));
//  document.write("El mayor es: " + (num1 > num2 ? num1:num2 ));

// var num1= Number.parseInt(prompt("ingrese un numero: ")) // 7
//  var num2= Number.parseInt(prompt("ingrese el segundo numero: "))
//  var num3= Number.parseInt(prompt("ingrese el tercer numero: ") )
//  if (num1 > num2  && num1> num3)
//      document.write("el mayor es: " , num1)
//  else if ( num2 > num1 && num2 > nume)
//      document.write("el mayor es: ", num2)
//  else {
//      document.write("el mayor es: ", num3)
//  }

// var numero = parseInt(prompt("ingrese un numero"))  //8

//  if (numero % 2 === 0) {
//      console.log("el numero ingresado " , numero, "es divisible por 2")

//  } else {}

// var num = prompt("ingrese un numero para determinar si es par o impar")  // 9
//  document.write( num % 2 === 0 ? "el numero ingresado es par" : "el numero que ingreso es impar")


// var nota = 0   //10
// var nota = parseInt(prompt("ingrese su nota "))
// if (nota>= 5 ){
//     console.log("Su nota es mayor a 5:" , nota)
// } else{
//     console.log("su nota es menor a 5 :" , nota)
// }


// var numero = prompt("ingrese un numero del 1 al 12: ")   //11
// if (numero == 1 ) {
//     document.write("el mes correspondido fue Enero: ", numero)
// } else if (numero == 2 ) {
//     document.write("mes correspondido fue Febrero:" , numero)
// } else if (numero == 3 ){
//     document.write("mes correspondido fue Marzo:" , numero)
// } else if (numero == 4 ) {
//     document.write("mes correspondido fue Abril:" , numero)
// } else if (numero == 5 ) {
//     document.write("mes correspondido fue Mayo:" , numero)
// } else if (numero == 6){
//     document.write("mes correspondido fue Junio:" , numero)
// } else if (numero == 7){
//     document.write("mes correspondido fue Julio:" , numero)
// } else if (numero == 8){
//     document.write("mes correspondido fue Agosto :" , numero)
// } else if (numero== 9){
//     document.write("mes correspondido fue Septiembre:" , numero)
// } else if (numero== 10){
//     document.write("mes correspondido fue Octubre:" , numero)
// } else if (numero== 11){
//     document.write("mes correspondido fue Noviembre:" , numero)
// } else if (numero== 12){
//     document.write("mes correspondido fue Diciembre:" , numero)
// } else{
//     document.write("NO CORRESPONDE A NINGUN MES ")
// }

var numero = prompt("ingrese un numero del 1 al 7: ")
if (numero == 1){
    document.write("Domingo:" , numero)
} else if (numero== 2){
    document.write("Lunes:" , numero)
} else if (numero == 3){
    document.write("Martes:" , numero)
}else if (numero== 4){
    document.write("Miercoles:" , numero)
}else if (numero == 5){
    document.write("Jueves")
} else if (numero== 6){
    document.write("Viernes")
} else if (numero== 7){
    document.write("Sabado")
} else {
    document.write("NO CORRESPONDE A NINGUNA SEMANA")
}
