// async function* generateAsyncNumbers(start, end, delay) {
//     for (let i = start; i <= end; i++) {
//       yield await new Promise((resolve) => setTimeout(() => resolve(i), delay));
//     }
//   }
  
//   // Example usage
//   (async () => {
//     const asyncNumberGenerator = generateAsyncNumbers(1, 5, 1000); // Generates numbers 1 to 5 with a 1-second delay between each number.
  
//     for await (const number of asyncNumberGenerator) {
//       console.log(number);
//     }
//   })();


async function* iteratorAsync(){
    for(let i=0; i<10;i++)
    {
        yield await new Promise((res,reject)=>{
            setTimeout(()=>res(i),1000);
        })
    }
}

(async()=>{
   
    const response= iteratorAsync();

    for await (const res of response){
          console.log(res);  
    }

})();
  