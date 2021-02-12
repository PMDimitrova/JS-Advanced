function toggle() {
    let currentButton = document.getElementsByClassName('button')[0].textContent;
    let divExtra = document.querySelector('#extra');

    if (currentButton === 'More'){
        divExtra.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }else if(currentButton === 'Less'){
        divExtra.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}