const proov = '(olleh) world';

function fixWords(wordToFix){
    const RegularExpression = /\(.+?\)/g;
    let parentesisWord = wordToFix.match(RegularExpression);
    parentesisWord = parentesisWord[0].split("");
    parentesisWord = parentesisWord.slice(1, -1);
    parentesisWord = parentesisWord.reverse().join("");
    return wordToFix.replace(RegularExpression, parentesisWord);
}
console.log(`Palabra original: ${proov}, Palabra arreglada: ${fixWords(proov)}`);

//hasta ahora funciona unicamente si hay una sola palabra entre parentesis, hay que arreglarlo para que funcione con parentesis anidados y con más de un parentesis.

//Problema de legibilidad y muchas variables arreglado, todo funciona con practicamente 1 variable y se ve mejor, ahora solo falta solucionar que la función funcione con parentesis anidados y más de una palabra dentro de parentesis.