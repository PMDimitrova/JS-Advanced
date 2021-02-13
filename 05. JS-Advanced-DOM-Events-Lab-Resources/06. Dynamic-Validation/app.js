function validate() {
    //get the input from the user
    let emailField = document.getElementById('email');
    //add event listener for a change in the user's input
    emailField.addEventListener('change', getEmail);


    function getEmail(event) {
        let emailForValidation = event.target.value;

        //if !valid -> apply class 'error', else -> remove class
        if (!(/^[a-z]+@[a-z]+\.[a-z]+$/.test(emailForValidation))) {
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}