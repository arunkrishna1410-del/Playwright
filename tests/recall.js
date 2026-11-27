let input = "programming"

let result = {}

for (let o of input){
    if(result[o]){
        result[o]++
    }else{
        result[o]=1
    }
}

for (let q of input){
    if(result[q]>1){
        console.log(q,result[q])
    }
}