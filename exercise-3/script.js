let numbers = [];

function insertNumber() {
    let number = Number(document.getElementById("number").value);

    numbers.push(number);

    displayNumbers();

    document.getElementById("number").value = "";
}

function displayNumbers() {
    let output = "";

    for (let i = 0; i < numbers.length; i++) {
        output += numbers[i] + "<br>";
    }

    document.getElementById("numbers").innerHTML = output;

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    document.getElementById("sum").innerHTML = sum;

    if (numbers.length > 0) {
        let highest = numbers[0];
        let lowest = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > highest) {
                highest = numbers[i];
            }

            if (numbers[i] < lowest) {
                lowest = numbers[i];
            }
        }

        document.getElementById("highest").innerHTML = highest;
        document.getElementById("lowest").innerHTML = lowest;
    }
}

function deleteAll() {
    numbers = [];

    document.getElementById("numbers").innerHTML = "";
    document.getElementById("sum").innerHTML = "";
    document.getElementById("highest").innerHTML = "";
    document.getElementById("lowest").innerHTML = "";
}