const EventEmitter= require("./EventEmitter");

class Event extends EventEmitter{}

let event= new Event();

event.on("foo",()=>console.log("foo1"));
event.on("foo",()=>console.log("foo2"));
event.on("foo",()=>console.log("foo3"));

event.once("bar",()=>console.log("bar1"));


event.emit("foo");
event.emit("bar");