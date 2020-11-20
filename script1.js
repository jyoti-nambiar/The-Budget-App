var addButton = document.querySelector("#addMore");
var selectOption = document.querySelector("#chooseOption");
var createUl = document.createElement("ul");
var createLi = document.createElement("li");
createUl.appendChild(createLi);
var EntryList = [];


if (selectOption.value == "+") {
    addButton.addEventListener("click", addIncome);
    var sectionInkomster = document.querySelector("#inkomster");
    sectionInkomster.appendChild(createLi);
    for (var i = 0; i < EntryList.length; i++) {
        createLi.value = EntryList[i].title + ":" + EntryList[i].amount;
    }

}

else if (selectOption.value == "-") {

    addButton.addEventListener("click", addExpense);
    var sectionUtgifter = document.querySelector("#utgifter")
    sectionUtgifter.appendChild(createLi);
    for (var i = 0; i < EntryList.length; i++) {
        createLi.value = EntryList[i].title + ":" + EntryList[i].amount;
    }

}





function addIncome() {
    var incomeDescription = document.querySelector("#description");
    var sumAmount = document.querySelector("#amount");
    var income = {
        type: "income",
        title: incomeDescription.value,
        amount: parseFloat(sumAmount.value),
    }

    EntryList.push(income)



    clearInput([incomeDescription, sumAmount]);

}

function addExpense() {
    var expenseDescription = document.querySelector("#description");
    var sumAmount = document.querySelector("#amount");
    var expense = {
        type: "expense",
        title: expenseDescription.value,
        amount: parseFloat(sumAmount.value),
    }
    EntryList.push(expense);

    clearInput([expenseDescription, sumAmount]);

};



function clearInput(inputsToArray) {

    inputsToArray.forEach(input => {

        input.value = "";
    });
};


console.log(EntryList);


/* function addExpense() {
    var description = document.querySelector("#description");
    var amount = document.querySelector("#amount");
    var object = {
        type: "expense",
        title: description.value,
        amount: parseFloat(amount.value),

    }
    entryList.push(object);

}'/

//console.log(entryList);


solution 2

var addButton = document.querySelector("#addMore");
var clearButton = document.querySelector("#clear");
var selectOption = document.querySelector("#chooseOption");
var opt = selectOption.options[selectOption.selectedIndex];
console.log(opt.value);

addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", removeItem);
var createNewUl = document.createElement("ul");
var createNewLi = document.createElement("li");

if (selectOption.value == "+") {
    addButton.addEventListener("click", addItem);

}
else if (selectOption.value == "-") {
    addButton.addEventListener("click", addToExpense);

}


var entryList = [];
function addItem() {
    addIncome();

    createNewUl.appendChild(createNewLi);
    for (var i = 0; i < entryList.length; i++) {
        createNewLi.textContent = entryList[i].title + ":" + entryList[i].amount;
        var incomeSec = document.querySelector("#inkomster");
        incomeSec.appendChild(createNewUl);
    }

    console.log(entryList);
}


function addIncome() {
    var description = document.querySelector("#description");
    var amount = document.querySelector("#amount");
    var object = {
        type: "income",
        title: description.value,
        amount: parseFloat(amount.value),
    }
    entryList.push(object);

}

function addExpense() {
    var description = document.querySelector("#description");
    var amount = document.querySelector("#amount");
    var objectExpense = {
        type: "expense",
        title: description.value,
        amount: parseFloat(amount.value),
    }
    entryList.push(objectExpense);

}

function addToExpense() {
    addExpense();
    createNewUl.appendChild(createNewLi);
    for (var i = 0; i < entryList.length; i++) {
        createNewLi.textContent = entryList[i].title + ":" + entryList[i].amount;
    }
    var utgifterSec = document.querySelector("#utgifter");
    utgifterSec.appendChild(createNewUl);
    console.log(entryList);


}

function removeItem() {
    var incomeSec = document.querySelector("#inkomster");



}










