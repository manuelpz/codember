function descifraMensaje(MENSAJE_CIFRADO) {
  const A_MINUSCULA = 97;
  const Z_MINUSCULA = 122;
  let caracteres = "";
  let mensajeFinal = "";
  MENSAJE_CIFRADO =
    "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";
  for (let i = 0; i < MENSAJE_CIFRADO.length; i++) {
    caracteres = caracteres.concat(MENSAJE_CIFRADO[i]);
    if (caracteres >= A_MINUSCULA && caracteres <= Z_MINUSCULA) {
      let caracter = String.fromCharCode(caracteres);
      mensajeFinal = mensajeFinal.concat(caracter);
      caracteres = "";
    }
    if (caracteres == " ") {
      let caracter = " ";
      mensajeFinal = mensajeFinal.concat(caracter);
    }
  }
  return mensajeFinal;
}

console.log(descifraMensaje());
