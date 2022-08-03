let arr = [-1,2,4,-4,100,200,-100]
let data = []
async function mega(){
for (let i = 0;i < arr.length; i++){
for(let  j = 0; j < arr.length; j++){
if(arr[i] > arr[j]){
    data.push(arr[i])
}


}
  
}
console.log(data[1])
if(data){
    Promise.then(function(result){
console.log("nothing")
    }).then(function (result) {

    }).then(function(result){

    }).catch(function(err){
        console.error(err)  
    })
}
}

module.exports = mega;