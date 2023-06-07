// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.\


var btn = document.getElementsByClassName(".btn1");

function validate() {

    var input = document.getElementsByClassName(".form-control");
    var span = document.getElementById("er");
    if (input == "") {
        span.innerHTML="invalid"
    }
}

