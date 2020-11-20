var entryList = [];
function list(e) {
    e.preventDefault();

    var selectOption = document.querySelector("#chooseOption").value;
    if (selectOption === "+") {
        var description = document.querySelector("#description").value;
        var amount = document.querySelector("#amount").value;

        var sum = Number(amount);
        entryList.push(sum);
        var createDiv = document.createElement("div");
        createDiv.textContent = description + ":" + amount;
        document.querySelector("#inkomster").appendChild(createDiv);

    } else if (selectOption === "-") {
        var description = document.querySelector("#description").value;
        var amount = document.querySelector("#amount").value;

        var sum = Number(-amount);
        entryList.push(sum);
        var createDiv = document.createElement("div");
        createDiv.textContent = description + ":" + amount;
        document.querySelector("#utgifter").appendChild(createDiv);


    }

    var total = 0;
    for (var i = 0; i < entryList.length; i++) {
        total += entryList[i];

    }
    document.querySelector("#balance").textContent = total;
}

var addButton = document.querySelector("#addMore");
addButton.addEventListener("click", list);


