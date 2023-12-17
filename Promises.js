const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Second task is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Task is done")
})

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email : "abc@gmail.com"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
})