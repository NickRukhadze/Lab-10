 // Q1: Greet User
 function greetUser() {
    const name = "Nick";
    document.getElementById("output").innerHTML = `Hello, ${name}!`;
}

// Q2: Change Text
function changeText() {
    document.getElementById("message").innerHTML = "Hello, World!";
}

// Q3: Add Numbers
function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById("result").innerHTML = `Result: ${sum}`;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
    }
}

// Q4: Update Title
function updateTitle() {
    const newTitle = document.getElementById("titleInput").value;
    document.getElementById("title").innerText = newTitle;
}

// Q5: Concatenate Strings
function concatenateStrings() {
    const str1 = document.getElementById("string1").value;
    const str2 = document.getElementById("string2").value;
    document.getElementById("combinedText").innerText = str1 + " " + str2;
}

// Q6: Change Background Color
// document.getElementById("changeBgButton").addEventListener("click", function () {
//     document.getElementById("colorBox").style.backgroundColor = "blue";
// })
greetUser()
