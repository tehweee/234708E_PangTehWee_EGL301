# Welcome to Pang Teh Wee Personal Finance Management Application

There are in total of **9 FUNCTIONS**

* **setName(name)** - The function setName requires a parameter of String name. This function is use to set the user's name into the application

* **addIncome(detail,income)** - The function addIncome requires two parameter of String detail and Int Income. This function is use to add in income that the user have earn with the income source details and the money earned

* **addExpenses(detail,expenses)** - The function addExpenses requires two parameter of String detail and Int expenses. This function is use to add in expenses that the user have with the expenses details and the money required

* **setBudget(money)** - The function setBudget requires a parameter of Int money. This function is use to set a limit to the person's budget in order to promote saving. 

* **deleteIncome(detail)** - The function deleteIncome requires a parameter of String detail. This function helps the user to remove income sources.

* **deleteExpenses(detail)** - The function deleteExpenses requires a parameter of String detail. This function helps the user to remove expenses.

* **updateIncome(detail,new_income)** - The function updateIncome requires two parameter of String detail and Int new_income. This function helps the user to update their income. 

* **updateExpenses(detail,new_expenses)** - The function updateExpenses requires two parameter of String detail and Int new_expenses. This function helps the user to update their expenses. 

* **displayAllInfo()** - The function displayAllInfo does not require any parameter. This function is used to display a summary of all the infomation including all the income sources, all the expenses, total income, total expenses, the budget cap, remaining balance after budget minus total expenses, and the total amount saved

# Steps on setting up the app
* Create a app.js file

* Initialized connection using the code 
**const finance = require("./PangTehWee_PersonalFinanaceManagement.js")**

* Declare the name you want ( **setName(name)** )

* All the the necessary income and expenses ( **addIncome(detail,income) & addExpenses(detail,expenses)** )

* Set a budget ( **setBudget(money)** )

* You are free to add any deleted or update function to test the functionality ( **deleteIncome(detail) , deleteExpenses(detail) , updateIncome(detail,new_income) , updateExpenses(detail,new_expenses)** )

* Finally display all the information ( **displayAllInfo()** )

# Run the App

* Click on Terminal at the top left bar

* Click on New Terminal

* A new Terminal will open up

* Type in **node app.js**

* The information and data will be displayed on the Terminal and you are done!