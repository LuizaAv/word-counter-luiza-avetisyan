const userInput = document.getElementById("userInput");
const letters = document.getElementById("letters");
const words = document.getElementById("words");
const sentences = document.getElementById("sentences");
const result = document.getElementById("result");
const inputValue = document.getElementById("inputValue")

let userText = ""
userInput.onchange = function(){
    userText = ""
    userText = userInput.value
}

letters.onclick  = function(){
    let lettersQuantity = 0;
    if(userText){
        let newArr = userText.toLowerCase().split(/\s/);
            for(let i=0; i<newArr.length; i++){
                if( /[a-z]/gi.test(newArr[i])){
                    lettersQuantity += 1
                }else{
                    return null
                }
            }
        result.innerText = lettersQuantity
        inputValue.innerText = userInput.value
        userInput.value=""
    }
}

words.onclick = function() {
    let wordsQuantity = 1;
        if(userText){
            let newArr = userText.split(/[, ]+/)
            wordsQuantity = newArr.length
        }
        result.innerText = wordsQuantity
        inputValue.innerText = userInput.value
        userInput.value=""
    }


sentences.onclick = function() {
    let sentencesQuantity = 0
    if(userText){
        let newArr = userText.split(/\s/);
            for(let i=0; i<newArr.length; i++){
                if(newArr[i] === "." || newArr[i] === "!" || newArr[i] === "?"){
                    sentencesQuantity +=1
                }
            }
        result.innerText = sentencesQuantity
        inputValue.innerText = userInput.value
        userInput.value=""
    }
}
