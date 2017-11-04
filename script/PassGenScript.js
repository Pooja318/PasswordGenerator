


//function randomPassword(len){
//    var keyLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#*@!^"
//    var temp =0;
//    
//    for(i=0; i<len-1; i++){
//        temp += keyLetters.charAt(Math.floor(Math.random() * keyLetters.length));
//    }
//    return temp;
//} 

function randomPassword(len){
    var keySmallLetters = "abcdefghijklmnopqrstuvwxyz"
    var keyCapLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var keyNum = "123456789"
    var keySpecialChar = "#*@!^"
    
    var temp ='';
    var key = '';
    
    if (document.getElementById('capletters').checked){
        key += keyCapLetters;
    }
    if (document.getElementById('smletters').checked){
        key += keySmallLetters;
    }
    if (document.getElementById('num').checked){
        key += keyNum;
    }
    if (document.getElementById('specChar').checked){
        key += keySpecialChar;
    }
    if (document.getElementById('capletters').checked ==false && document.getElementById('smletters').checked ==false && document.getElementById('num').checked ==false && document.getElementById('specChar').checked ==false) {
            key = keySmallLetters + keyCapLetters + keyNum + keySpecialChar;
    }
        
    for(i=0; i<len; i++){
        temp += key.charAt(Math.floor(Math.random() * key.length));
    }
    return temp;
} 


function generatePassword(inputLen){
    document.passGenForm.output.value = randomPassword(inputLen);
}




//document.getElementById("sample").innerHTML = "Hello";

