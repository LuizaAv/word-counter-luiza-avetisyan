const userInput = document.getElementById("userInput");
const letters = document.getElementById("letters");
const words = document.getElementById("words");
const sentences = document.getElementById("sentences");
const result = document.getElementById("result");


userInput.onchange = function(){
    result.innerText = userInput.value
}

letters.onclick  = function(){
    let lettersQuantity = 0;
    if(result.innerText){
        let newArr = result.innerText.toLowerCase().split("");
            for(let i=0; i<newArr.length; i++){
                if( /[a-z]/gi.test(newArr[i])){
                    lettersQuantity += 1
                }else{
                    return null
                }
            }
        result.innerText = lettersQuantity
    }
}