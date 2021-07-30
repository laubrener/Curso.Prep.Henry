// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];
  // for (var i = 0; i < objeto.length; i++){
  //   matriz.push([i, objeto[i]]);
  // }
  // return matriz;
  for (var propiedad in objeto){
    matriz.push([propiedad, objeto[propiedad]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de 
  // veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, 
  //f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (var letra in string){
    objeto[string[letra]] = (objeto[ string[letra]]||0)+1;
  }
  return objeto;
  // for (let i = 0; i < string.length; i++) {
  //   var cantVeces = 0;
  //   if (!objeto[string[i]]) {
  //     for (let j = 0; j < string.length; j++) {
  //       if (string[i] === string[j]) {
  //         cantVeces ++
  //       }
  //     }
  //     objeto[string[i]] = cantVeces;
  //   }
  // }
  // return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  //   for (var i = 0; i < s.length; i++){
  //     if (s[i] !== s[i].toLowercase()){
  //       s.push(i);
  //     }
  //   }
    
  // return s;
  
  var mayuscula = '';
  var minuscula = '';
  for (let i = 0; i < s.length; i++){
    if(s.charAt(i) === s.charAt(i).toUpperCase()){
      mayuscula = mayuscula + s.charAt(i);
    }else minuscula = minuscula + s.charAt(i);
  }
  return (mayuscula + minuscula);
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda 
  // leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = '';
  var fraseEspejo = '';
  for (var i =0; i <= str.length; i++){  //recorro la frase caracter por caracter
    if (str[1] === " " || i === str.length) {  //verifico final de palabra o frase
      palabraEspejo = '';
      for (var j = palabra.length-1;j>= 0; j--) {  //recorro la palabra y guardo en espejo
        palabraEspejo += palabra[j];
      }
      palabra = '';
      if (i === str.length) {  //incorporo la palabra espejada a la nueva frase (sin o con espacio si corresponde)
        fraseEspejo += palabraEspejo;
      } else {
        fraseEspejo += palabraEspejo + ' ';
      }
    } else {
      palabra += str[i];  //guardo la ultima palabra caracter por caracter
    }
    }
  return fraseEspejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // var array = [];
  // for (var i = 0; i < numero.length; i++){
  //   array.push(i);
  //   if (array.reverse() === array){
  //     return "Es capicua";
  //   } else {
  //     return "No es capicua"
  //   }
  // }
  var numeroString = numero.toString();
  var numeroCapicua = '';
  for (let i = numeroString.length - 1; i >= 0; i--) {
    numeroCapicua += numeroString[i];
  }
  if (numeroString === numeroCapicua) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = '';
   for (var i = 0; i < cadena.length; i++){
     if (!(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c')){
       nuevaCadena += cadena[i];
     }
   }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  // for (var i = 0; i < arr.length -1; i++){
  //   if (arr[i].length > palabra.length){
  //     palabra = arr[i];
  //     arr.push(palabra);
  //   }
  // }
  // return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        var palabra = arr[i];
        arr[i] = arr[j];
        arr[j] = palabra;
      }
      
    }
    
  } return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arreglo3 = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arreglo3.push(arreglo1[i]);
      }
      
    }
    
  }
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

