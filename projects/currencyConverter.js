import https from "https"
import chalk from "chalk"
import readline from "readline"

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const apiKey = '5d4472e4fa8257e6eccc5dce';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const currentCurrency = (amount,rate)=>{
    return (amount*rate).toFixed(2);
}
https.get(url,(res)=>{
    let data = "";
    res.on('data',(chunk)=>{
        data += chunk;
    })

res.on('end',()=>{
    const rates = JSON.parse(data).conversion_rates;

    rl.question('Enter Your Amount In USD: ',(amount)=>{
        rl.question('Enter the Target Currency (INR, NPR, EUR): ',(currency)=>{
            const rate = rates[currency.toUpperCase()];
            if(rate){
                console.log(`${amount} USD = ${currentCurrency(amount,rate)} ${currency}`)
            }
            else{
                console.log("Invalid Currency")
            }
            rl.close();
        })
    })
  })
})