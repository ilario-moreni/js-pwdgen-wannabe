/* 1 */

let userName;

let userSurname;

let userFavColor;

/* 2 */

userName = prompt('Inserisci il tuo nome:');

/* 3 */

userSurname = prompt('Inserisci il tuo cognome:');

/* 4 */

userFavColor = prompt('Inserisci il tuo colore preferito:');

/* 5 */

const userNickName = userName + userSurname + userFavColor + '21';

/* 6 */

document.getElementById('user_nick').innerHTML = userNickName;