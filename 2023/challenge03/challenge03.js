import { passwords } from './list.js'

function contar(list) {
  let palabraErroneas = []

  for (let password of list) {
    let [rule, passwordText] = password.split(':')
    let [range, letter] = rule.split(' ')
    let [min, max] = range.split('-')

    let count = 0
    for (let char of passwordText) {
      if (char === letter) {
        count++
      }
    }

    if (!(count >= min && count <= max)) {
      palabraErroneas.push(passwordText)
    }
  }

  console.log(palabraErroneas[41])
}

contar(passwords)
