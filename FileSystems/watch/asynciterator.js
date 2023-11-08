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
  