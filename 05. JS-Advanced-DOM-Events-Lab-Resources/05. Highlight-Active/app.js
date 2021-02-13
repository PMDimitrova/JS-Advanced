function focused() {

    //get every div element & add eventListener for both onFocus and onBlur
    let nodes = Array.from(document.querySelectorAll('input'));
    for (let node of nodes) {
        node.addEventListener('focus', addClassFocused);
        node.addEventListener('blur', addClassBlurred);
    };


    function addClassFocused(event){
        event.target.parentNode.className = 'focus';
    }
    function addClassBlurred(event){
        event.target.parentNode.className = '';
    }
}