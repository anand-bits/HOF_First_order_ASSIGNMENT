function createPromise(){
  return new Promise(function exec(resolve ,reject)
  {
    //Your code goes here.
    setTimeout(function f(){
      console.log("Timer done");
      resolve("done");
    },5)

  })

}
console.log("Start");
let x= createPromise();
console.log("got a new promise")

x.then(function fun(){

  console.log("promise done")
});
console.log("End")