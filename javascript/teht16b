const prompt = require('prompt-sync')();

function Palindromi(sana) {
    sana = sana.replace(/\s/g,'');
    return sana === sana.split('').reverse().join('');
}

const syote = prompt("Anna sana: ");
if (Palindromi(syote)) {
    console.log(syote + " on palindromi.");
} else {
    console.log(syote + " ei ole palindromi.");
}