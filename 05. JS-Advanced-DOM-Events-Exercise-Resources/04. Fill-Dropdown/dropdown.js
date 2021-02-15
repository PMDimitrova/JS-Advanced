function addItem() {
    //get the text & the value
    //with them create and add an <option> child-item to the 'menu'
    //clear the input fields values

    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');

    let newOptionItem = document.createElement('option');
    newOptionItem.value = itemValue.value;
    newOptionItem.textContent = itemText.value;
    document.getElementById('menu').appendChild(newOptionItem);

    itemValue.value = '';
    itemText.value = '';
}