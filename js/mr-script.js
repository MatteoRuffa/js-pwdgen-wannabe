/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

// userName
// userSurname
// favoriteColor
// message

let userName = prompt('qual è il tuo nome?');
console.log(userName);

let userSurname = prompt('qual è il tuo cognome?');
console.log(userSurname);

let favoriteColor = prompt('qual è il tuo colore preferito?');
console.log(favoriteColor);

document.getElementById('text1').innerHTML = `${userName}${userSurname}${favoriteColor}23`;

document.getElementById('text2').innerHTML =  ` il tuo nome è: ${userName}, il tuo cognome è: ${userSurname} e
 il tuo colore preferito è: ${favoriteColor}, 23`;