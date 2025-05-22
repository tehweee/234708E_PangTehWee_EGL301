module.exports = {
    name : "",              //Name is needed to be declare to give it a more personal use for the application
    userIncomes :{},        //Incomes is the tracking of the user earnings per month
    userExpenses:{},        //The expenses will also be tracked to check to compare with the total earnings
    budget:0,               //The budget helps with the cap so that the user don't overspent 

    setName(name){          
        if(name != null){   //Check if user didn't key in any data causing it a nullable data
            if(name.length >= 3 && name.length <= 16){  //Keep the user restricted length acceptable within 3 - 16
                name = String(name) 
                this.name = name    
            }else{
                return `\nThe name have to be in the range of 3-16 characters long!\n`;
            }
        }else{
            return `\nThe name is a nullable data!\n`;
        }
    },

    addIncome(detail,income){   //Let user add their income sources to keep track of the total earnings
        if(detail != null && income != null){   
            income = parseInt(income)
            if(detail.length != 0){  //Make sure that the details is also not an empty string
                if(income > 0){      //Incomes doesn't go 0 or below
                    this.userIncomes[detail]=income //Add the data into the dictionary
                    let key = Object.keys(this.userIncomes)[0]  //This line of code helps to extract out the key, for example "Cleaner"
                    let value = this.userIncomes[detail]        //This line of code helps to extract out the value, for example "400"
                    return `\nUser income have been added!\nAn income of $${value} from ${key}\n`
                }else{
                    return "\nIncome has to be more than 0!\n"
                }
            }else{
                return "\nDetails does not have a value applied!\n"
            }
        }else{
            return "\nEither details or income is a nullable data!\n"
        }
    },

    addExpenses(detail,expenses){   //Let user add their expenses to keep track of the monthly spending
        if(detail != null && expenses != null){
            expenses = parseInt(expenses)
            if(detail.length != 0){  //Make sure that the details is also not an empty string
                if(expenses > 0){    //Expenses doesn't go 0 or below   
                    this.userExpenses[detail]=expenses       //Same process as Income dictionary but with Expenses dictionary   
                    let key = Object.keys(this.userExpenses)[0]
                    let value = this.userExpenses[detail]
                    return `\nUser expenses have been added!\nAn expenses of ${key} from ${value}\n`
                }else{
                    return "\nExpenses has to be more than 0!\n"
                }
            }else{
                return "\nDetail does not have a value applied!\n"
            }
        }else{
            return "\nEither detail or expenses is a nullable data!\n"
        }
    },

    setBudget(money){       //Let user set their budget to keep spending at a minimun and not exceed it by accident
        totalIncome = 0     //totalIncome is needed to check what is the maximun available budget does the person have
                            //as budget cannot be higher than what the maximun has
        for(let key in this.userIncomes){
            totalIncome += this.userIncomes[key]
        }   
        if(money != null){
            money = parseInt(money)
            if(money > 0){
                if(money <= totalIncome){   //Checking that the budget doesn't exceed the total available money
                    this.budget = money
                    return `\nA budget of $${this.budget} has been set into the account of ${this.name}!\n`
                }else{
                    return `\nUnable to set a budget of $${money}, due to insufficient funds ($${totalIncome})\n`
                }
            }else{
                return "\nBudget has to be more than $0!\n"
            }
        }else{
            return "\nBudget is a nullable data!\n"
        }
    },

    deleteIncome(detail){   //Let user delete any incomes that they may not be earning from it anymore
        enterKey = false    //A enterKey has been set to false to allow the code to go into a
                            //true state when the income has been deleted from ,he system
        if(detail != null){
            if(detail.length != 0){
                for(let key in this.userIncomes){
                    if(key == detail){  //check if the input matches with the available list of incomes 
                        enterKey = true //This will unlock the door into a statement that will be allowed 
                                        // to delete the data and escape from this function
                        break
                    }
                }
            }else{
                return "\nDetail does not have a value applied!\n"
            }
        }else{
            return "\nDetail is a nullable data!\n"
        }
        if(enterKey){   //it will enter in here if the code has found the data to delete
            delete this.userIncomes[detail];
            return '\nIncome detected! Proceed to remove the income status!\n'
        }
        return `\nData of ${detail} is not found in the income list\n`
    },

    deleteExpenses(detail){ //Let user delete any expenses that they may not be contributing
        enterKey = false    //A enterKey has been set to false to allow the code to go into a
                            //true state when the expenses has been deleted from the system
        if(detail != null){
            if(detail.length != 0){
                for(let key in this.userExpenses){
                    if(key == detail){
                        enterKey = true
                        break
                    }
                }
            }else{
                return "\nDetail does not have a value applied!\n"
            }
        }else{
            return "\nDetail is a nullable data!\n"
        }
        if(enterKey){   //it will enter in here if the code has found the data to delete
            delete this.userExpenses[detail];
            return '\nExpenses detected! Proceed to remove the expenses status!\n'
        }
        return `\nData of ${detail} is not found in the expenses list\n`
    },

    updateIncome(detail,new_income){    //Let user update any income that has a change overtime
        enterKey = false
        if(detail != null && new_income != null){
            new_income = parseInt(new_income)
            if(detail.length != 0){
                if(new_income > 0){
                    for(let key in this.userIncomes){
                        if(key == detail){
                            enterKey = true
                            break
                        }
                    }
                }else{
                    return "\nIncome has to be more than $0!\n"
                }
            }else{
                return "\nDetail does not have a value applied!\n"
            }
        }else{
            return "\nEither details or income is a nullable data!\n"
        }
        if(enterKey){
            this.userIncomes[detail] = new_income
            return `\nThe income of ${detail} has been updated to $${new_income}\n`
        }
        return `\nData of ${detail} is not found in the income list\n`

    },
    updateExpenses(detail,new_expenses){    //Let user update any expenses that has a change overtime
        enterKey = false                    
        if(detail != null && new_expenses != null){
            new_expenses = parseInt(new_expenses)
            if(detail.length != 0 && new_expenses != 0){
                if(new_expenses > 0){
                    for(let key in this.userExpenses){
                        if(key == detail){
                            enterKey = true
                            break
                        }
                    }
                }else{
                    return "\nExpenses has to be more than $0!\n"
                }
            }else{
                return "Detail does not have a value applied!"
            }
        }else{
            return "Either details or expenses is a nullable data!"
        }
        if(enterKey){
            this.userExpenses[detail] = new_expenses
            return `The expenses of ${detail} has been updated to $${new_expenses}`
        }
        return `\nData of ${detail} is not found in the expenses list\n`
    },

    displayAllInfo(){           //Allow the user to view every single details related to it's 
                                //finance status like displaying all the incomes and expenses
                                //the total balance, total expenses, and budget that was set into it
                                //it also display results like remaining cash after budgeting (budget cap - total expenses)
                                //and the true remaining cash (total income earn - total expenses) 
                                //This allow user to view and get update on their financial updates so they can plan better

        totalIncome = 0                             //Calculating the total cash earn through all the income sources per month
        for(let key in this.userIncomes){
            totalIncome += this.userIncomes[key]
        }

        totalExpenses = 0;                          //Calculating the total cash spend per month on expenses
        for(let key in this.userExpenses){
            totalExpenses += this.userExpenses[key]
        }

        if(this.budget < totalExpenses){                    //Checking if the budget is below the total expenses it will pull 
                                                            //money from the total income instead of using the budget
            budgetBalance = totalIncome - totalExpenses
        }else{
            budgetBalance = this.budget - totalExpenses     //Using the budget and expenses to minus off to check for remaining or exceeding 
        }

        if(this.budget < totalExpenses){
            netBalance = totalIncome - totalExpenses
        }else{
            netBalance = (totalIncome - this.budget) + budgetBalance    //Calculating the total saving balance after every 
                                                                        //incomes is calculated together to minus off the 
                                                                        //total expenses
        }

        console.log("=================================" //These are divider to promote easier reading
            +"=============================\n")  
        console.log(`Account: ${this.name}`)    //Display account name
        console.log("\n=================================" 
            +"=============================\n") 
        console.log("Display all Incomes\n")
        for(let key in this.userIncomes){       //This will display all the incomes sources that the user have set into the account
            console.log(`${key}:\t\t\t\t\t\t$${this.userIncomes[key]}`) 
        }

        console.log("\n=================================" 
            +"=============================\n") 

        console.log("Display all Expenses\n")
        for(let key in this.userExpenses){      //This will display all the expeneses that the user have set into the account
            console.log(`${key}:\t\t\t\t\t\t$${this.userExpenses[key]}`)
        }

        console.log("\n=================================" 
            +"=============================\n") 
        
        console.log(`Total Balance:\t\t\t\t\t\t$${totalIncome}`)             //The display of total cash per month through the incomes sources

        console.log(`Total Expenses:\t\t\t\t\t\t$${totalExpenses}`)          //The display of total expenses for month through what the user have set

        console.log(`Capped Budget:\t\t\t\t\t\t$${this.budget}`)             //The budget that the user have implement to not go over the expected cap

        console.log(`Remaining Net Balance (After Fixed Budget):\t\t$${budgetBalance}`)    //display the result

        console.log(`Total Savings:\t\t\t\t\t\t$${netBalance}`)      //display the result

        console.log("\n=================================" 
            +"=============================") 
    }
}