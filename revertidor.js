let showFixedWord = document.getElementById('show_fixed_word');

function fixWords(wordToFix){
    const RegularExpression = /\(.+?\)/g;
    let verifyBrackets = RegularExpression.test(wordToFix);
    if (verifyBrackets === true){
        let bracketsWord = wordToFix.match(RegularExpression);
        bracketsWord = bracketsWord[0].split("").slice(1, -1).reverse().join("");
        let fixedWord = wordToFix.replace(RegularExpression, bracketsWord);
        return showFixedWord.innerHTML = `Palabra original: ${wordToFix}, Palabra arreglada: ${fixedWord}`;
    } else{
        showFixedWord.innerHTML = '';
        return alert('La palabra no contiene parentesís, ingrese una con parentesís.');
    }
}

//hasta ahora funciona unicamente si hay una sola palabra entre parentesis, hay que arreglarlo para que funcione con parentesis anidados y con más de un parentesis.

//Problema de legibilidad y muchas variables arreglado, todo funciona con practicamente 1 variable y se ve mejor, ahora solo falta solucionar que la función funcione con parentesis anidados y más de una palabra dentro de parentesis.