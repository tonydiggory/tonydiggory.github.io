function convertRoman(s){
    let romanChar = {
        "I" : 1,
        "V" : 5, 
        "X" : 10, 
        "L" : 50, 
        "C" : 100, 
        "D" : 500, 
        "M" : 1000
    };
    let ans = 0;
    if(s.length > 15 || s.length < 1){
        return 0;
    }else{
        for(i = 0; i < s.length; i++){
            if(!(s[i] in romanChar)){
                return false;
            }
        }
    }
    for(let i = 0; i < s.length; i++){
        let curChar = romanChar[s[i]];
        let nextChar = romanChar[s[i]];
        if(!(s[i + 1] == undefined)){
            nextChar = romanChar[s[i + 1]];
        }
        if(curChar < nextChar){
            ans += nextChar - curChar;
            i++;  
        }else{
            ans += curChar;
        }
    }
    if(ans < 1 || ans > 3999){
        return false;
    }
    return ans;
}

console.log(convertRoman("III"));
console.log(convertRoman("LVIII"));
console.log(convertRoman("MCMXCIV"));