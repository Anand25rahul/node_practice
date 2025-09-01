import readline from 'readline';
import fs from 'fs';
import { error } from 'console';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
})

const fileCreation = ()=>{
    rl.question('Enter Your File Name: ' , (fileName)=>{
        rl.question('Enter Your Content For Your file: ', (content)=>{
            fs.writeFile(`${fileName}.txt` , content, (error)=>{
                if (error){
                    console.error(`Error writing the file: ,${error.message}`);
                }
                else{
                    console.log(`file "${fileName}.txt" is created successfully !!!`);
                }
                rl.close();
            })
        })
    })
}
fileCreation();