//Expressions


export const rectPerimeter = (x, y) => 2 * (x + y)

export const rectArea = (x, y) => (x * y)

export const triArea = (x, y) => (x * y) / 2

export const ringArea = (x, y) => (y * y * Math.PI) - (x * x * Math.PI)

export const f2c = (x) => (5 / 9) * (x - 32)

export const c2f = (x) => (x * 9) / 5 + 32

//Strings

export const makeName = (firstName, lastName) => (lastName + ", " + firstName)


export function ellide(string, number) {
    if (number % 1 === 0 && Math.sign(number) === 1)
        return string.substring(0, number) + "..."
}

//Conditionals

export function longer(string1, string2) {
    if (string1.length >= string2.length)
        return string1
    else { return string2 }
}

export function mid3(a, b, c) {
    if (Math.max(a, b, c) === a) {
        if (b > c) return b
        else return c
    }
    if (Math.max(a, b, c) === b) {
        if (a > c) return a
        else return c
    }
    if (Math.max(a, b, c) === c) {
        if (a > b) return a
        else return b
    }
}

//Arrays

export function lastFirst(basededatos) {
    if ((basededatos.last && basededatos.first)) {
        return basededatos.last + ", " + basededatos.first

    } else if (basededatos.last) {
        return basededatos.last

    } else if (basededatos.first) {
        return basededatos.first

    } else return ""
}


export function subArray(array1, array2) {
    let array3 = []
    array2.forEach(element => {
        array3.push(array1[element])
    })
    return array3
}

//cambiar a filter()
export function over21(array) {
    return array.filter(element => element.age > 20)
}

export function product(array) {
    let result = 1
    array.forEach(element => {
        result *= element
    });
    return result
}



export function getRepeats(array) {

    let resultado = []

    for (let y = 0; y < array.length; y++) {

        let duplicado = false

        for (let i = y + 1; i < array.length; i++) {

            if (array[y] === array[i]) {
                duplicado = true
            }
        }
        if (duplicado) {
            resultado.push(array[y])

        }
    }
    let duplicados = [...new Set(resultado)]
    return duplicados
}


export function aboveAverage(array) {
    let total = 0
    array.forEach(element => {
        if (element.score) {
            total += element.score
        }
    });

    let media = total / array.length

    return array.filter(x => x.score > media)
}


export function reverseNumber(n) {

    return Number(n.toString().split("").reverse().join(""))
}

export function isWordAnagram(word1, word2) {
    if (word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("")) return true
    else return false
}

export function isPhraseAnagram(palabra, posibleAnagrama) {

    // Cambiar a minúsculas ambas cadenas
    palabra = palabra.toLowerCase();
    posibleAnagrama = posibleAnagrama.toLowerCase();

    // Convertir ambas cadenas en un arreglo
    palabra = palabra.split("");
    posibleAnagrama = posibleAnagrama.split("");

    // Ordenar ese arreglo
    palabra = palabra.sort();
    posibleAnagrama = posibleAnagrama.sort();

    // Una vez ordenados, los convertimos a cadena nuevamente
    palabra = palabra.join("");
    posibleAnagrama = posibleAnagrama.join("");

    // Quitar espacios del principio
    palabra = palabra.trim();
    posibleAnagrama = posibleAnagrama.trim();

    // Finalmente comparamos

    if (palabra === posibleAnagrama) {
        return true;
    } else {
        return false;
    }
}


export function longestWords(frase) {

    let separacion = frase.split(' ')
    let valor = 0.1
    let mayor = []

    separacion.forEach(element => {
        if (element.length === valor) {
            mayor.push(element)
        }

        else if (element.length > valor) {
            valor = element.length
            mayor = [element]
        }
    })
    return mayor
}

export function moduleTitles() {
    return Array.from(document.getElementsByClassName("module-title")).map((x) => { return x.innerHTML })
}

export function goPurple() {
    /*FOR
    let n = document.getElementsByClassName("passed").length 
    for (let index = 0; index < n; index++) {
        document.getElementsByClassName("passed")[index].style.cssText = "background-color: purple; color: white";
    }  */

    /*FOR EACH*/
    let passed = Array.from(document.getElementsByClassName("passed"))

    passed.forEach(element => {
        element.style.cssText = "background-color: purple; color: white";
    });

    return 'Go Purple!'
}

export function copycat(n) {
    if (n === 1)
        return 100
    if (n === 2)
        return 'hello!'
    if (n === 3)
        return [1, 2, 3]
}











