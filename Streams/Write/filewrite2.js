const fs = require("fs");

(async () => {
    const fileStream = fs.createWriteStream("demo.txt");

    fileStream.on("drain", () => {
        console.log("File is drained");
        fileStream.write("saddssaddasdsa");
    });


    console.log(fileStream.write(Buffer.alloc(17000,"a")));

})();
