






function  promises(){
let p  = new Promise((resolve,reject) =>{

let a =  1+1
if(a == 5 ){
    resolve("sucesssss")
}
else{
    reject("failed")
}
})



p.then((results) => {
console.log(`finally ${results}`)
}).catch((err) => { 
console.log(`finally ${err}`)
})
console.log("after promise")

}

module.exports = promises;