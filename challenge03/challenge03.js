import fs from 'node:fs';


const COLORS = JSON.parse(fs.readFileSync("challenge03/colors.txt", "utf8"));
let count = 0
let finalCount = 0
let finalColor = ""

for (let i = 2; i < COLORS.length; i++) {
    if (COLORS[i] == COLORS[i - 2]) {
        if (count == 0) {
            count = 3
        } else count++
    } else {
        if (count > finalCount) {
            finalCount = count
            finalColor = COLORS[i - 1]
        }
        count = 0
    }

}
console.log(finalCount, finalColor)