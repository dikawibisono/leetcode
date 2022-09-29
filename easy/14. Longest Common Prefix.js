let myArr = ["dida", "didi", "dinosurus", "diamond"]

let benchmark = {}
for(var i = 0; i < myArr[0].length; i++){
    console.log(myArr[0][i]);
    if (benchmark[myArr[0][i]] == undefined){
        benchmark[myArr[0][i]] = 1;
    }
}

for(var i=1; i<myArr.length; i++){
    for(var j=0; j<myArr[i].length; j++){
        if (benchmark[myArr[i][j]] !== undefined && benchmark[myArr[i][j]] !== i+1){
            benchmark[myArr[i][j]] += 1;
        }
    }
}



console.log(benchmark)