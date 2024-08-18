function generatePassword(length){
    if (length < 4) {
        throw new Error('El número debe ser mayor a 4');
    }
    else{
        const minus="abcdefghijklmnñopqrstuvwxyz";
        const mayus="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/";
        const nums = "1234567890";
        const all = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?/1234567890";
        let passwordArray = new Array(length).fill(null);
        passwordArray[0]=minus.charAt(Math.floor(Math.random()*minus.length));
        passwordArray[1]=mayus.charAt(Math.floor(Math.random()*mayus.length));    
        passwordArray[2]=symbols.charAt(Math.floor(Math.random()*nums.length));    
        passwordArray[3]=nums.charAt(Math.floor(Math.random()*nums.length));    
        for(let i=4; i<length; i++){
            passwordArray[i]=all.charAt(Math.floor(Math.random()*all.length));
        }
        passwordArray = mezclarArray(passwordArray);
        const password = passwordArray.join("");
        return password;
    }
    
}
function mezclarArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

console.log(generatePassword(8));
console.log(generatePassword(8));