let datos = await fetch('https://codember.dev/data/files_quarantine.txt').then(
  (response) => response.text()
)
function obtenerDatosReales(datos) {
  let encontrados = []
  datos = datos.split('\n')
  for (let dato of datos) {
    let [password, checksum] = dato.split('-')
    let palabraCortada = password.split('')
    let letraUnica = palabraCortada.filter((letra, index, self) => {
      return self.indexOf(letra) === index && self.lastIndexOf(letra) === index
    })
    if (letraUnica.join('') === checksum) {
      console.log(letraUnica.join(''))
      console.log(checksum)
      encontrados.push(checksum)
    }
  }
}
obtenerDatosReales(datos)
