const EventEmitter = require ("events");

const emitter = new EventEmitter();

// emitter.on("greet",()=>{
//     console.log("hello world")
// });
// emitter.emit("greet");

// emitter.on("greet",(argu)=>{
//     console.log(`hello ${argu.username}, you are a good ${argu.prof}, ri8`)
// });
// emitter.emit("greet",{username:"Anand", prof:"full stack developer"});

const eventCounts = {
    "user-login" : 0,
    "user-purchase" : 0,
    "profile-update" : 0,
    "user-logout" : 0,

}

emitter.on("user-login",(username)=>{
    eventCounts["user-login"]++;
    console.log(`${username} logged in!`);
});

emitter.on("user-purchase",(username,item)=>{
    eventCounts["user-purchase"]++;
    console.log(`${username} purchase ${item}!`);
});

emitter.on("profile-update",(username,field)=>{
    eventCounts["profile-update"]++;
    console.log(`${username} update their ${field}!`);
});

emitter.on("user-logout",(username)=>{
    eventCounts["user-logout"]++;
    console.log(`${username} logged out!`);
});

emitter.on("summary",()=>{
    console.log("\nEvent Summary")
for(const [event,count] of Object.entries(eventCounts)){
    console.log(`${event}: ${count}`);
}
})

emitter.emit("user-login","Anand");
emitter.emit("user-purchase","Anand","laptop");
emitter.emit("profile-update","Anand","email");
emitter.emit("user-logout","Anand");
emitter.emit("summary");