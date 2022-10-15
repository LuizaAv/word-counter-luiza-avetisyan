const  userInput = document.getElementById("userInput");
const  letters = document.getElementById("letters");
const  words = document.getElementById("words");
const  sentences = document.getElementById("sentences");
const  result = document.getElementById("result");
const  inputValue = document.getElementById("inputValue");
const  backgroundColor = document.getElementById("bgColor");

let  userText = ""
userInput.onchange  = function(){
    userText  = ""
    userText  = userInput.value
}

letters.onclick = function(){
    let lettersQuantity  = 0;
    if(userText){
        let newArr  = userText.toLowerCase().split("");
            for(let i=0; i<newArr.length; i++){
                if(/[a-z]/gi.test(newArr[i])){
                     lettersQuantity += 1
                }else{
                    return null
                }
            }
        result.innerText  = `Result: ${lettersQuantity}`
        inputValue.innerText  = `Input Value: ${userInput.value}`
        userInput.value= ""
    }
    let num  = Math.random()*1000000
    let roundedNum  = Math.trunc(num)
    letters.style.backgroundColor  = `#${roundedNum}`
}

words.onclick  = function() {
    let wordsQuantity  = 1;
        if(userText){
            let newArr  = userText.split(/[, ]+/)
            wordsQuantity  = newArr.length
        }
        result.innerText  = userText ? `Result: ${wordsQuantity}` : `Result: ${""}`
        inputValue.innerText  = `Input Value: ${userInput.value}`
        userInput.value  =""

    let num  = Math.random()*1000000
    let roundedNum  = Math.trunc(num)
    words.style.backgroundColor  = `#${roundedNum}`
}


sentences.onclick  = function() {
    let sentencesQuantity  = 0
    if(userText){
        let newArr  = userText.split("");
            for(let i=0; i<newArr.length; i++){
                if(newArr[i] === "." || newArr[i] === "!" || newArr[i] === "?"){
                    sentencesQuantity  +=1
                }
            }
        result.innerText  = `Result: ${sentencesQuantity}`
        inputValue.innerText  = `Input Value:: ${userInput.value}`
        userInput.value  =""
    }
    let num  = Math.random()*1000000
    let roundedNum  = Math.trunc(num)
    sentences.style.backgroundColor  = `#${roundedNum}`
}


backgroundColor.onclick  = function(){
    let num  = Math.random()*1000000
    let roundedNum  = Math.trunc(num)
    backgroundColor.style.backgroundColor  = `#${roundedNum}`
}
