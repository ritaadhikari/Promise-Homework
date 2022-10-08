const fs = require('fs');
function callbackFunc(myResolve, myReject) {
    const status = "string";
    fs.writeFile('abc.txt', status, (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })
}


let myPromise = new Promise(callbackFunc);



myPromise
    .then(function (value) {
        console.log("The promise fullfilled: ", value);
    })
    .catch(function (err) {
        console.log("There was an error");
    });