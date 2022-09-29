var isPalindrome = function(x) {
    
    let strNum = x.toString()
    
    for (let i = 0; i < strNum.length/2; i++){
        if (strNum[i] != strNum[strNum.length - 1 - i]) return false
    }
    return true
};