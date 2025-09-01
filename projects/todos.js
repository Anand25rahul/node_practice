import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos = [];

const showMenu = ()=>{
    console.log("\n1: Add a Task")
    console.log("2: View Tasks")
    console.log("3: Exits")
    rl.question("Choose an Option: ",handleInput)
}

const handleInput = (Option)=>{
    if (Option==1){
        rl.question("Enter Your Task: ",(task)=>{
            todos.push(task);
            console.log("Task Added: ",task);
            showMenu();
        })
    }
    else if(Option==2){
        console.log("\n Your Todo Lists")
        todos.forEach((task,index)=>{
            console.log(`${index+1}.${ task}`);
        })
        showMenu();
    }
    else if(Option==3){
        console.log("Good Byy")
        rl.close()
    }
    else{
        console.log("Invaild Option choose correct one")
        showMenu();
    }

}

showMenu();