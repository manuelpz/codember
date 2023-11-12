const mensajeEncriptado = `&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&`
function miniCompiler(mensajeEncriptado) {
  let valorInicial = 0
  const mensajeInArray = mensajeEncriptado.split('')
  for (let element of mensajeInArray) {
    if (element == `#`) valorInicial += 1
    else if (element == `@`) valorInicial -= 1
    else if (element == `*`) valorInicial *= valorInicial
    else console.log(valorInicial)
  }
}
miniCompiler(mensajeEncriptado)
