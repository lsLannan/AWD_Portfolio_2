/*
 * Write a program that loops through the text fields 
 * (text1, text2, etc) and concatenates the text in each field together. 
 * This should then be displayed in text Result
 */
function concatFunction() {
    console.log("concatenate function");

    const fieldIds = ["text1", "text2","text3", "text4","text5", "text6","text7"];
    let textResult = "";

    //const form = document.querySelector('form');

    // need this to only select input elements 
    for (let i = 0; i < fieldIds.length; i++) {
        const textField = document.getElementById(fieldIds[i]);

        textResult += " " + textField.value;
    }

    // show full message in HTML element
    document.getElementById('textResult').value = textResult;
    //return textResult;
}

/**
 * Create code to add an extra text field (text7) on the press of a button. 
 * If necessary modify your code so that the exercise completed in 1 still works
 */


// Hide and make textbox and its label visible on click
function showFunction() {
    console.log("show function");

    var x = document.getElementById("text7");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }

    var y = document.getElementById("text7-label");

    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}