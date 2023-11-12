const fs = require("fs/promises");

const CREATE_FILE="create the file";
const APPEND_FILE="append the file";
const DELETE_FILE="delete the file";
const RENAME_FILE="rename the file";
(async()=>{

  const createFile=async(path)=>{
    let fileHandler;
    try{
      fileHandler=await fs.open(path,"r");
      return console.log(`The file with path ${path} already exists`);

    }
    catch(error)
    { 
      const newFileHandler= await fs.open(path,"w");
      newFileHandler.close();
    }
    finally{
      fileHandler?.close();
    }

  }

  const appendFile=async(path,content)=>{
    let fileHandler;
    try{
      fileHandler=await fs.open(path,"a");
      await fileHandler.write(content);
    }
    catch(error)
    {
      console.log("Unable to append the file");
    }
    finally{
      fileHandler?.close();
    }
  }

  const deleteFile=async(path)=>{
    let fileHandler;
    try{
      fileHandler= await fs.unlink(path);
    }
    catch(error)
    {
      console.log("Unable to delete the file");
      console.log(error?.message);
    }
    finally{
     fileHandler?.close();
    }
  }

  const renameFile=async(oldPath,newPath)=>{
    try{
      await fs.rename(oldPath,newPath);        
    }
    catch(error)
    {
         console.log("Error in renaming the file...");
         console.log(error.message);
    }
  }

  const fileHandler= await fs.open("./command.txt","r");   

  fileHandler.on("change",async(files)=>{

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
        let command=fileBuffer["buffer"].toString("utf-8");

        //create a file <path>
        if(command.toLocaleLowerCase().includes(CREATE_FILE))
        {
          const path= command.split(" ")[command.split(" ").length-1];
          await createFile(path);
        }
        //append the file <path> <content>
        else if(command.toLocaleLowerCase().includes(APPEND_FILE))
        {
          const path= command.split(" ")[command.split(" ").length-2];
          const content= command.split(" ")[command.split(" ").length-1];
          await appendFile(path,content);
        }
        //delete the file <path>
        else if(command.toLocaleLowerCase().includes(DELETE_FILE)){
          const path=command.split(" ")[command.split(" ").length-1];
          await deleteFile(path);
        } 
        //rename the file <path> to <path>
        else if(command.toLocaleLowerCase().includes(RENAME_FILE)){
          const newPath=command.split(" ")[command.split(" ").length-1];
          const oldPath=command.split(" ")[command.split(" ").length-3];
          await renameFile(oldPath,newPath);

        }
    }
  }
  });
  
  const files= fs.watch("./command.txt");
  
  fileHandler.emit("change",files);

})();