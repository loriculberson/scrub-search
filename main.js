//create a worker, pass it a file with instructions
//add eventListener
//worker.postMessage(data to be manipulated in worker.js file)
if(window.Worker) {
  console.log('Worker!');

  let createUserWorker = new Worker("worker.js");
  // let createUserWorker = new Worker("./data/user.js");

  window.onload = function(){
    createUserWorker.postMessage({})
    console.log('window loaded, data posted to worker');
  };

  createUserWorker.onmessage = function(e){
    console.log('returned from worker', e.data);
  }

}



//worker.js
//function does stuff, workerResult variable set for return data
//postMessage(workerResult)


//main.js
// worker.onmessage = function(returnedData){
//   result = returnedData.data
// }