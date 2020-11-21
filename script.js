var addButton = document.querySelector("#addMore");
addButton.addEventListener("click", addItems);


var entryList = [];
function addItems(e) {
    e.preventDefault();

    var selectOption = document.querySelector("#chooseOption").value;
    if (selectOption === "+") {
        var description = document.querySelector("#description");
        var amount = document.querySelector("#amount");
        var income = {
            type: "income",
            title: description.value,
            sum: Number(amount.value)
        };
        entryList.push(income);
        var totalInkomster = document.querySelector(".inkomsterSpan");
        totalInkomster.textContent = calculateTotal("income", entryList);

        var createNewLi = document.createElement("li");
        createNewLi.textContent = income.title + ":" + income.sum;
        document.querySelector(".inkomstList").appendChild(createNewLi);
        clearText([description, amount]);

    } else if (selectOption === "-") {
        var description = document.querySelector("#description");
        var amount = document.querySelector("#amount");
        var expense = {
            type: "expense",
            title: description.value,
            sum: Number(amount.value)
        };
        entryList.push(expense);
        var totalExpense = document.querySelector(".konstnadSpan")
        totalExpense.textContent = calculateTotal("expense", entryList);

        var createNewLi = document.createElement("li");
        createNewLi.textContent = expense.title + ":" + expense.sum;
        document.querySelector(".kostnadList").appendChild(createNewLi);
        clearText([description, amount]);

    }
    var income = calculateTotal("income", entryList);
    var expense = calculateTotal("expense", entryList);

    document.querySelector(".SparandeSpan").textContent = (income - expense);


}

console.log(entryList);
function clearText(arrayList) {
    arrayList.forEach(entry => {
        entry.value = "";

    });

}

function calculateTotal(type, entryList) {
    var sum = 0;
    entryList.forEach(entry => {
        if (entry.type === type) {
            sum += entry.sum;
        }
    });
    return sum;

};

var clearText = document.querySelector(".clear");
clearText.addEventListener("click", clearFunc);

function clearFunc() {
    location.reload();

};


