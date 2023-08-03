function validateForm(event) {
    event.preventDefault()

    var emailInput = document.getElementById("email")
    var emailValue = emailInput.value

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailValue)) {
        alert("Please enter a valid email!")
        emailInput.value = ""; // clear email field from text box
        return false
    }

    window.location.href = "success-page.html" // redirect to success page
    return true
}

