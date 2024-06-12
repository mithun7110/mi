document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("address").value;
    var password = document.getElementById("city").value;
    var password = document.getElementById("pin-code").value;
    var password = document.getElementById("phone number").value;
    if (address && city && pin-code && phone number) {
        alert("login successfully!!!!")
        window.location.href = "#";
    } else {
        alert("Please enter both username and password.");
    }
});