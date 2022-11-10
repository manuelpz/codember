import fs from 'node:fs';

REQUIRED = ['usr','eme','psw','age','loc','fll']
const USERS = fs.readFileSync('challenge01/users.txt', 'utf8');

let cont = 0
let usuariosValidos = []
let usuariosFilt = USERS.split("\n\n").map((user) =>
  user.replace("\n","")
  )
  
for (const[key, value] of Object.entries(usuariosFilt)){
  if(REQUIRED.every(v =>value.includes(v))){
    cont++
    usuariosValidos.push(value)}
}

usuariosValidos[usuariosValidos.length-1]
console.log(cont)