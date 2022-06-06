function removeDup(arr){
    let ans = [];
    let strArr = [];
    let check = true;
    let tmpArr = [];
    for(let i = 0; i < arr.length; i++){
        let tmp = arr[i].sort(function(a, b){return a - b});
        strArr.push(String(tmp));
    }
    for(let i = 0; i < strArr.length; i++){
        check = true;
        for(let j = 0; j < ans.length; j++){
            if(strArr[i] == ans[j]){
                check = false;
            }
        }
        if(check){
            tmpArr = strArr[i].split(",").map(x=>Number(x));
            ans.push(tmpArr);
        }
    }
    return ans;
}

function findTriplet(arr){
    let tmp = [];
    let tmpTrip = [];
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(arr[i])){
            tmp.push(arr[i]);
        }
    }
    for(let i = 0; i < tmp.length; i++){
        tmpTrip[0] = tmp[i];
        for(let j = i + 1; j < tmp.length; j++){
            tmpTrip[1] = tmp[j];
            for(let k = j + 1; k < tmp.length; k++){
                tmpTrip[2] = tmp[k];
                if(tmpTrip[0] + tmpTrip[1] + tmpTrip[2] == 0){
                    ans.push([tmp[i], tmp[j], tmp[k]]);
                }
            }
        }
    }
    return removeDup(ans); 
}

console.log(findTriplet([-1, 0, 1, 2, -1, -4]));
console.log(findTriplet([]));
console.log(findTriplet([0]));