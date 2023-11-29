const fsn= require("fs");
const fs= require("fs/promises");

// console.time();
// const fileStream= fs.createWriteStream("demo.txt");


// fileStream.on("finish",()=>{
//     console.log("The file has finished writing.....");
//     console.timeEnd();
// });

// fileStream.on("error",()=>{
//     console.log("The file reading is giving the error....");
// });

// fileStream.write(" Hi ");
// fileStream.write(" How are you? ");
// fileStream.end();

// (async ()=>{

//     const fileStream= fsn.createWriteStream("demo.txt");
    
//     fileStream.on("finish",()=>{
//       console.log("Streams");  
//     });

//     console.log(fileStream.writableHighWaterMark);
//     console.log(fileStream.writableLength);

//     let buff= Buffer.from("HELLO");
    
//     fileStream.write(buff);
//     fileStream.write(buff);
//     fileStream.write(buff);
//     fileStream.write(buff);

//     console.log(fileStream.writableLength);

//     fileStream.end();


// });

(async()=>{

  const fileHandler= await fs.open("./demo3.txt","w");
  
  const writeStream= fileHandler.createWriteStream();

  writeStream.on("drain",()=>{
    console.log("Stream is drained");
    console.log(writeStream.writableLength);
  })
  
  const buff= Buffer.alloc(17000,"a");
  writeStream.write(buff);
  console.log(writeStream.writableLength);

})();
