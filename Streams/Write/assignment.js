const fs= require("fs/promises");



(async()=>{

    const fileHandler= await fs.open("./assignment.txt","w");

    const writeStream= fileHandler.createWriteStream();

    let i=0, numberOfDrained=0;

   function writeFileWithStream()
   { 
    while(i<1000000)
    {
        let isWrite= writeStream.write(" "+i+" ");
        if(isWrite==false) break;
        i++;
    }
 }

 writeFileWithStream();


 writeStream.on("drain",()=>{
    numberOfDrained++;
    console.log("Drained....",numberOfDrained);
    writeFileWithStream();
 })






})();