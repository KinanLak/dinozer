//autosize($('textarea'));
const prompt = require('prompt-sync')();

// Starting big shit just there //

alpha = { 'a': 'ah', 'b': 'bw', 'c': 'sc', 'd': 'hd', 'e': 'ew', 'f': 'zf', 'g': 'gr', 'h': 'jh', 'i': 'yi', 'j': 'jz', 'k': 'qu', 'l': 'pl', 'm': 'mh', 'n': 'nh', 'o': 'ow', 'p': 'pf', 'q': 'ku', 'r': 'rt', 's': 'sw', 't': 'tz', 'u': 'ua', 'v': 'hv', 'w': 'wr', 'x': 'sk', 'y': 'oÃ¯', 'z': 'bz', "à": "ha", "é": "we", "è": "eh", "ç": "cs", "@": "@", "ê": "ee", "ô": "oo", "â": "aa", "î": "ii", "û": "uu", "ÿ": "yy", "ù": "au" }

listAlphaKey = Object.keys(alpha)
listAlphaVal = Object.values(alpha)

// ICI RECUPERER CONTENU DU TEXTAREA //

const tradMot = prompt("Oui ton mot c'est : "); // MOT A TRADUIRE
var nvMot = '' // SA TRADUCTION

//-----------------------


for (const lettre of tradMot) { // Programme de traduction
    if (lettre in alpha) {
        nvMot += alpha[lettre]
    }
    if (lettre.toLowerCase() in alpha) {
        nvMot += (alpha[lettre.toLowerCase()][0].toUpperCase() + alpha[lettre.toLowerCase()][1])
    }
    else {
        nvMot += lettre
    }
}

console.log(nvMot) // Affichage de la traduction