let fs = require("fs");
//call back way of doing async tasks
fs.readFile("f1.txt", function cb(error, data){
    if(error){
        console.log("Error" + error);
    }else{
        console.log("Data: " + data);
    }
})
console.log("Before");
let freadPromise = fs.promises.readFile("f1.txt");
console.log("promises", freadPromise);
//promises -> resolve -> data
//function pass -> resolve
freadPromise.then(function cb(data){
    console.log("Data: " + data);
})
//function pass -> reject
freadPromise.catch(function cb(error){
    console.log("error" + error);
})
console.log("After");