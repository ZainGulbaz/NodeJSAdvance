let fs =require("fs/promises");

(async()=>{
    try{
        let res=await fs.readFile("./demo.txt",{
            encoding:"utf8"
        });
        console.log(res);
    }
    catch(error)
    {
        console.log(error);    
    }

})();

fs=require("fs");

fs.readFile("./demo.txt",{encoding:"utf8"},(err,res)=>{
    if(err) console.log(err);
    else console.log(res);

});
