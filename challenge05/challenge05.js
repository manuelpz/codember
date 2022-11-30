import fs from 'node:fs';

const participantes = JSON.parse(fs.readFileSync("challenge05/participantes.txt", "utf8"));
let participantesVivos = []
let finalistas = []
let enJuego = true

for(let i =0; i < participantes.length; i++){
    let participante = {
        nombre : participantes[i],
        id : i
      }
      participantesVivos.push(participante)
}

while (enJuego) {
    for (let i = 0; i < participantesVivos.length; i = i + 2) {
        finalistas.push(participantesVivos[i])
    }
    if (participantesVivos.length % 2 != 0) {
        finalistas.shift()
    }
    participantesVivos = finalistas
    finalistas = []
    if (participantesVivos.length == 1) {
        enJuego = false
    }
}

console.log(participantesVivos)