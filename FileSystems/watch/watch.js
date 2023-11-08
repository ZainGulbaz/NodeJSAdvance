const fs = require("fs/promises");


(async()=>{
  
  const files= await fs.watch("./command.txt");

  for (const file of files )
  {
    console.log(file);
  }



})();