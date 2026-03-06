// ATM Project(Check Balance, Deposit, Withdraw)
function startATM(){
    let balance = 10000;
    let running = true;
    let output = "Welcome to ATM! \n";
    while(running){
        let choice = prompt("ATM Menu: \n1. Check Balance   \n2. Deposit   \n3. Withdraw \n4. Exit \nEnter Choice:");
        
        if(choice === "1"){
            output += "Your Balance" + balance +"\n\n";
            document.write(balance);
            alert("New Balance: " + balance);
        }else if(choice === "2"){
            let amount = parseFloat(prompt("Enter Deposit Amount"));
            balance += amount;
            output += " " + amount + " deposited. New Balance: " + balance + "\n";
            alert("New Balance: " + balance);
        }else if(choice === "3"){
            let amount = parseFloat(prompt("Enter Withdraw Amount"));
            
            
            if(amount <= balance){
                balance -= amount;
                output +=  amount + " Withdrawn. New Balance: " + balance + "\n\n";
                alert("New Balance: " + balance);
            }
            else{
                output += "Not enough amount";
            }
        }else if(choice === "4"){
            running = false;
            output += "Thank you for using ATM! ";
        }else{
            output += "Invalid Option!";
        }
    }
    document.getElementById("result").innerText = output;
}