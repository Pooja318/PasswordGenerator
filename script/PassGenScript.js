
function randomPassword(len){
    var keyLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#*@!^"
    var temp =0;
    
    for(i=0; i<len-1; i++){
        temp += keyLetters.charAt(Math.floor(Math.random() * keyLetters.length));
    }
    return temp;
} 

function generatePassword(inputLen){
    document.passGenForm.output.value = randomPassword(inputLen);

}


//document.getElementById("sample").innerHTML = "Hello";

