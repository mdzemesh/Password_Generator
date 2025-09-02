const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let b1 = document.getElementById("box-1")
let b2 = document.getElementById("box-2")

function generateRandIndex() {
    let randIndex = Math.floor(Math.random() * characters.length)
    return randIndex
}

function generateRandPassword() {
    let randPass = ""
    for (let i = 0; i <= 15; i++) {
        let index = generateRandIndex()
        randPass += characters[index]
    }
    return randPass
}

function generate() {
    let pass1 = generateRandPassword()
    let pass2 = generateRandPassword()
    
    b1.textContent = pass1
    b2.textContent = pass2
}