// PROMPT E VARIABILI



// Chiedere nome

const first_name = prompt ("Qual'è il tuo nome?")
console.log (first_name)

// Mostrare risposta

document.getElementById("name").innerHTML=first_name;


// Chiedere cognome

const second_name = prompt ("Qual'è il tuo cognome?")
console.log (second_name)

// Mostrare risposta

document.getElementById("surname").innerHTML=second_name;


// Chiedere colore preferito

const favorite_color = prompt ("Qual'è il tuo colore preferito?")
console.log (favorite_color)

// Mostrare risposta

document.getElementById("color").innerHTML=favorite_color;


// Generare password personalizzata

document.getElementById("password_for_you").innerHTML=`${first_name + second_name + favorite_color}21`
