function addItem() {
    //get the input from the user
    let inputElement = document.getElementById('newItemText');
    //create a li-element
    let newLiElem = document.createElement('li');
    newLiElem.innerText = inputElement.value;
    //attach the li to the dom
    let parentNode = document.getElementById('items');
    parentNode.appendChild(newLiElem);
    //clear the input field for the user
    inputElement.value = '';
}