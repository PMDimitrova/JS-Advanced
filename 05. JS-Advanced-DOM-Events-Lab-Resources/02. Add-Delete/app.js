function addItem() {
   //create <li>
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;//attached the input text to the new li-item as a text content

    //add delete btn-link
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = 'Delete';
    deleteBtn.href = '#'; //makes it an empty link
    deleteBtn.addEventListener('click', ev => {
        ev.target.parentNode.remove(); //with this we remove the parent item (which here is the li-element)
    });
    liElement.appendChild(deleteBtn); //we append the deleteBtn as a child to the li-element

    //add the whole new li-item to the dom
    document.getElementById('items').appendChild(liElement);


    //clear the input field
    input.value = '';
}