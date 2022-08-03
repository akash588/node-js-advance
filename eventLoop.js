async function eventloop() {
  console.log("hi");

  setTimeout(function () {
    console.log("wait for 1000ms hi2");
  }, 1000);

  console.log("hi3");
}


async function callback(){

  var fs = require("fs");
  fs.readFile('inputfile1.txt', function(err,filedata){
    if(err) return console.error(err)
    console.log(filedata)
  
  })
  console.log("End of Program execution");

}



// In the above example, the first console log statement is pushed to the call stack and “This is the first statement” is
// logged on the console and the task is popped from the stack. Next, the setTimeout is pushed to the queue and the task is 
//sent to the Operating system and the timer is set for the task. This task is then popped from the stack. Next, the third console log statement is pushed to the call stack and “This is the third statement” 
// is logged on the console and the task is popped from the stack.

// When the timer set by setTimeout function (in this case 1000 ms) runs out, the callback is sent 
// to the event queue. The event loop on finding the call stack empty takes the task at the top of the event queue and sends it to the call stack. The callback function for setTimeout function runs the instruction and “This is the second statement”
// is logged on the console and the task is popped from the stack.

module.exports = callback;
