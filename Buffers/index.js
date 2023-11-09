const {Buffer}= require("buffer");

// let buffer= Buffer.alloc(8);

// buffer.write("123456,.,","utf-8");

// console.log(buffer[2]);
// console.log(String.fromCharCode(51));

let buffer= Buffer.from([65,66,67,68],"latin1");
console.log(buffer.toJSON());

console.log("---------------------------");

let buffer2=Buffer.from([1,11,3,4],"binary");
console.log(buffer2);
console.log(buffer2.toString("hex"));