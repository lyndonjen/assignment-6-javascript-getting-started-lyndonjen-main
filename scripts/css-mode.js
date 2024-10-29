/* add your JavaScript code here! */

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is loaded");

    function myFunction() {
        console.log("Button has been clicked");
        // querySelect to get the body
        let element = document.querySelector("body");
        // classList to get the darkmode class
        element.classList.toggle("darkmode");
    }

    // getElementID to get button
    let myButton = document.getElementById("btn-mode");
    // add eventListener to see if clicked
    myButton.addEventListener("click", myFunction);
});
