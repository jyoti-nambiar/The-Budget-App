var addButton = document.querySelector("#addMore");
addButton.addEventListener("click", addItems);


var entryList = [];
function addItems(e) {
    e.preventDefault();

    var selectOption = document.querySelector("#chooseOption").value;

    /*the select tab's value is evaluated to see if it has a value of "+ "or "- "
    based on the selection the value is added to the income's tab or to the 
    
    */
    if (selectOption === "+") {
        var description = document.querySelector("#description");
        var amount = document.querySelector("#amount");

        if (!description.value || !amount.value) return; //check for null value 
        var income = {
            type: "income",
            title: description.value,
            sum: Number(amount.value)
        };
        entryList.push(income);  //pushing the object to the array
        var totalInkomster = document.querySelector(".inkomsterSpan");
        totalInkomster.textContent = calculateTotal("income", entryList); //calling function to display the total for inkomster

        var createNewLi = document.createElement("li");
        createNewLi.textContent = income.title + ":" + income.sum;  // arrayList display
        document.querySelector(".inkomstList").appendChild(createNewLi);
        clearText([description, amount]);

    } else if (selectOption === "-") {
        var description = document.querySelector("#description");
        var amount = document.querySelector("#amount");
        if (!description.value || !amount.value) return; // checking for null values
        var expense = {
            type: "expense",
            title: description.value,
            sum: Number(amount.value)
        };
        entryList.push(expense);
        var totalExpense = document.querySelector(".konstnadSpan")
        totalExpense.textContent = calculateTotal("expense", entryList);//calling function to display the total for kostnad 

        var createNewLi = document.createElement("li");
        createNewLi.textContent = expense.title + ":" + expense.sum;
        document.querySelector(".kostnadList").appendChild(createNewLi);
        clearText([description, amount]);

    }
    var income = calculateTotal("income", entryList);
    var expense = calculateTotal("expense", entryList);

    document.querySelector(".SparandeSpan").textContent = (income - expense); // display the sparande after subtracting the total inkomster from total kostnad


}
// function declaration for clearing the input values after the button "Lägg till" is clicked
function clearText(arrayList) {
    arrayList.forEach(entry => {
        entry.value = "";

    });

}

//function for calculating the total of inkomster, kostnad and sparande
function calculateTotal(type, entryList) {
    var sum = 0;
    entryList.forEach(entry => {
        if (entry.type === type) {
            sum += entry.sum;
        }
    });
    return sum;

};
// adding event listner for clear function
document.querySelector("#clear").addEventListener("click", clearFunction)


function clearFunction(e) {
    e.preventDefault();
    location.reload();
}


