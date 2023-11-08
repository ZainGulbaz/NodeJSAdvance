const fs = require("fs/promises");


(async()=>{

  const fileHandler= await fs.open("./command.txt","r");   
  
  const files= fs.watch("./command.txt");

  for await (const file of files )
  {
    if(file.eventType=="change");
    {
        const stats=await fileHandler.stat();
        const size=stats["size"];
        const buffer= Buffer.alloc(size);
        const position=0;
        const offset=0;

        const fileBuffer= await fileHandler.read(buffer,offset,size,position);
        console.log(fileBuffer["buffer"].toString("utf-8"));

    }
  }



})();