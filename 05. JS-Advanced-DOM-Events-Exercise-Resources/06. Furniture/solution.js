function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', addFurniture);
    document.getElementsByTagName('button')[1].addEventListener('click', buyFurniture);

    let furnitureTable = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];

    function addFurniture(event){
        let input = document.getElementById('exercise')
            .getElementsByTagName('textarea')[0];
        let object = JSON.parse(input.value)[0];

        const { name } = object;
        const { img  } = object;
        const { price } = object;
        const { decFactor } = object;

        let furnitureQualities = [img, name, price, decFactor];
        let newFurnitureRow = document.createElement('tr');
        let imageSection = document.createElement('img');
        imageSection.src = furnitureQualities[0];
        newFurnitureRow.append(imageSection);

        for (let i = 1; i <4; i++){
            let newRow = document.createElement('td');
            newRow.textContent = furnitureQualities[i];
            newFurnitureRow.append(newRow);
        }
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.disabled = false;

        newFurnitureRow.append(checkBox);

       furnitureTable.append(newFurnitureRow);
       //should i clear the input field?
    }

    function buyFurniture(event){
        let boughtFurnitureNames = [];
        let totalPrice = 0;
        let totalDecorFactor = 0;

        let buttons = Array.from(document.getElementsByTagName('input'));
        buttons.forEach(btn =>{
            if (btn.checked){
                boughtFurnitureNames.push(btn.parentElement.getElementsByTagName('td')[0].textContent);
                totalPrice += Number(btn.previousElementSibling.previousElementSibling.textContent);
                totalDecorFactor += Number(btn.previousElementSibling.textContent);
            }
        });
        let output = `Bought furniture: ${boughtFurnitureNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(totalDecorFactor/boughtFurnitureNames.length)}`;

        document.getElementsByTagName('textarea')[1].textContent = output;
    }


}