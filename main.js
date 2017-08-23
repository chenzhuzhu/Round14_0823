/**
 * Created by cyz on 2017/8/23.
 */
"use strict";
let arr = [1,2,[1,2],[3,4]]
console.log(arr)
let result = [];
main(arr)
function main(arr){
    for(var i=0;i<arr.length;i++){
        //
        if((arr[i]) instanceof Array){
            main(arr[i]);
        }else{
            result.push(arr[i]);
        }
    }
}

console.log(result);