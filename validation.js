const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorDiv = document.getElementById("error");

form.addEventListener('submit',(e) => {
    //we need some place to store error messages
    // we need some checks against the content of the form
    //that might generate error messages
    //we need a way of preventing form submission if there are any error messages to display
    //we need to display our error messages if we have any

    let messages = [];

    if(name.value === "" || name.value === null)
        messages.push("Name is required");
    }
    
    if(messages.length > 0) {
        e.preventDefault();
        errorDiv.innerText = messages;
    }



)
