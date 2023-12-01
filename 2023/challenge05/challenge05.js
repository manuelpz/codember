const data = await fetch(
    'https://codember.dev/data/database_attacked.txt'
).then((response) => response.text())

async function obtenerDatosReales(data) {
    let usuariosReales = []
    const dataParsed = data.split('\n')
    let regex = /^[a-z0-9]+$/i
    let regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    for (let usuario of dataParsed) {
        let [id, username, email, age, location] = usuario.split(',')
        if (
            !id ||
            !regex.test(id) ||
            !username ||
            !regex.test(username) ||
            !email ||
            !regexEmail.test(email)
        ) {
            usuariosReales.push(usuario)
            if (!usuariosReales.includes(usuario)) {
                ageAndLocationValidations(age, location, usuario)
            }
        }
    }
    let palabraCompleta = []
    completeTheWord(usuariosReales, palabraCompleta)
    console.log(palabraCompleta.join(''))
}

function ageAndLocationValidations(age, location, usuario) {
    let regexLocation = /^[a-z]+$/i
    if (!age && location) {
        validaLocation(location, usuario, regexLocation)
    } else if (age && !location) {
        validateAge(age, usuario)
    } else if (age.trim() !== '' && location.trim() !== '') {
        validateAgeAndLocation(age, location, usuario, regexLocation)
    }
}

function validaLocation(location, usuario, regexLocation) {
    if (!regexLocation.test(location)) {
        usuariosReales.push(usuario)
    }
}

function validateAge(age, usuario) {
    if (isNaN(age)) {
        usuariosReales.push(usuario)
    }
}

function validateAgeAndLocation(age, location, usuario, regexLocation) {
    if (isNaN(age) || !regexLocation.test(location)) {
        usuariosReales.push(usuario)
    }
}

function completeTheWord(usuariosReales, palabraCompleta) {
    for (let usuario of usuariosReales) {
        palabraCompleta.push(usuario.split(',')[1].substr(0, 1))
    }
}

await obtenerDatosReales(data)
