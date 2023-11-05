const MIN_NUMBER = "11098"
const MAX_NUMBER = "98123"

let deSplit = ""
let passwords = []
let count = 0

for (let i = MIN_NUMBER; i <= MAX_NUMBER; i++) {
    let split = `${i}`.split('')
    let repeatNumber = `${i}`.split("5").length - 1;
    if ((split[4] >= split[3]) && (split[3] >= split[2]) && (split[2] >= split[1]) && (split[1] >= split[0]) && (repeatNumber >= 2)) {
        count++
        for (let i = 0; i < split.length; i++) {
            deSplit = deSplit.concat(split[i])
        }
        passwords.push(deSplit)
        deSplit = ""
    }
}

console.log(count, passwords[55])