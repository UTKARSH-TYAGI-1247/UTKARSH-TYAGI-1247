const myPromise =  new Promise((resolve, reject) => {
    let success=false;
    setTimeout(() => {
    if(success){
        resolve("data send succesfully");
    } else {
        reject("data not send");
    }
},5000);
});

myPromise 
.then((message) => {console.log("Data: "+message);
})
.catch((error) => {
    console.log(error);
});