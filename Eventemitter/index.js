//Event emitter is just a design pattern, it works syncronously.

const EventEmitter= require("events");

class Event extends EventEmitter{}

let event1= new Event();

let event2= new Event();

event1.on("foo",()=>console.log("foo1"));
event1.on("foo",()=>console.log("foo2"));
event1.on("foo",()=>console.log("foo2"));

//The event will be listened only one time
event2.once("bar",()=>console.log("bar"));

event1.emit("foo");

event2.emit("bar");
event2.emit("bar");