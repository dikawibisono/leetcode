var romanToInt = function(s) {
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let arr = s.split("")
    let result = 0
    
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]] == obj[arr[i+1]] == obj[arr[i+2]] == obj[arr[i+3]]) return "invalid roman"
        if (obj[arr[i]] < obj[arr[i+1]]){
            let a = obj[arr[i + 1]]
            let b = obj[arr[i]]
            let mod = (a - b)
            if (mod % 4 == 0 || mod%9 == 0) {
                result = result - obj[arr[i]]
                continue
            }
            return "invalid roman"
        } else {
            result = result + obj[arr[i]]
        }
    }
    return result
}

console.log(romanToInt("IIII")) //invalid roman
console.log(romanToInt("LVIII")) //58
console.log(romanToInt("MCMXCIV")) //1994
console.log(romanToInt("VX")) //invalid roman
console.log(romanToInt("IL")) //invalid roman
console.log(romanToInt("LC")) //invalid roman
console.log(romanToInt("MMMDCCXXIV")) //3724
