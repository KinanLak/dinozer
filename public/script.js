autosize($('textarea'));

// Starting big shit just there //

var alpha = { 'a': 'ah', 'b': 'bw', 'c': 'sc', 'd': 'hd', 'e': 'ew', 'f': 'zf', 'g': 'gr', 'h': 'jh', 'i': 'yi', 'j': 'jz', 'k': 'qu', 'l': 'pl', 'm': 'mh', 'n': 'nh', 'o': 'ow', 'p': 'pf', 'q': 'ku', 'r': 'rt', 's': 'sw', 't': 'tz', 'u': 'ua', 'v': 'hv', 'w': 'wr', 'x': 'sk', 'y': 'oÃ¯', 'z': 'bz', "à": "ha", "é": "we", "è": "eh", "ç": "cs", "@": "@", "ê": "ee", "ô": "oo", "â": "aa", "î": "ii", "û": "uu", "ÿ": "yy", "ù": "au" }
var carac = [" ", "'", ",", ".", "-", "(", ")", '‘', '"', "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "0", "_", "/", "|", "?", "!", ";", ":", "+", "=", "€", "$", "%", "’", "\n"]

var listAlphaKey = Object.keys(alpha)
var listAlphaVal = Object.values(alpha)

// ICI RECUPERER CONTENU DU TEXTAREA //
$("#taDino").on('change keyup paste', function () {
    if (document.location.href.match(/[^\/]+$/)[0] == "dinozer2text.html") {
        var taDino = $("#taDino").val() + ''
        console.log(taDino)
        console.log(toText(taDino))
        $("#taText").val(toText(taDino))
    }
});

$("#taText").on('change keyup paste', function () {
    if (document.location.href.match(/[^\/]+$/)[0] == "text2dinozer.html") {
        var taText = $("#taText").val() + ''
        $("#taDino").val(toDino(taText))
    }
});






//-----------------------

function toDino(tradMot) {
    var nvMot = ''
    for (var lettre of tradMot) { // Programme de traduction
        if (listAlphaKey.includes(lettre)) {
            nvMot += alpha[lettre]
        }
        else if (listAlphaKey.includes(lettre.toLowerCase())) {
            nvMot += (alpha[lettre.toLowerCase()][0].toUpperCase() + alpha[lettre.toLowerCase()][1])
        }
        else {
            nvMot += lettre
        }
    }

    return (nvMot)
}

function toText(tradInverse) {
    var nvMot2 = ''
    var listTI = tradInverse.split('')
    var indice = 0;
    for (var i = 0; i < listTI.length; i++) { // Programme de traduction
        if (indice + 1 >= listTI.length) {
            break;
        }
        lettre = listTI[indice] + listTI[indice + 1]
        if (carac.includes(lettre[0])) {
            nvMot2 += lettre[0]
            if (indice + 2 >= listTI.length) {
                nvMot2 += lettre[1]
            }
        }
        else if (carac.includes(lettre[1])) {
            nvMot2 += lettre[1]
        }
        else if (listAlphaVal.includes(lettre)) {
            nvMot2 += listAlphaKey[listAlphaVal.indexOf(lettre)]
            indice += 1
        }
        else if (listAlphaVal.includes(lettre.toLowerCase())) {
            nvMot2 += listAlphaKey[listAlphaVal.indexOf(lettre.toLowerCase())].toUpperCase()
            indice += 1
        }
        indice += 1
    }

    return (nvMot2)
}
//const tradMot = prompt("Oui ton mot c'est : "); // MOT A TRADUIRE EN DINO
//console.log("Ton premier mot traduit en DINO est : " + toDino(tradMot)) // Affichage de la traduction en DINO

//const tradInverse = prompt("Oui ton mot inverse c'est : ") + ' '; // MOT A TRADUIRE EN FR
//console.log("Ton premier mot traduit en Texte est : " + toText(tradInverse)) // Affichage de la traduction en Texte
