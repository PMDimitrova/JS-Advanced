function attachGradientEvents() {
    //get the target element
    let element = document.getElementById('gradient');

    //put an event listener on the target
    element.addEventListener('mousemove', onmove);

    function onmove(event){
            //when the event is triggered get the exact location of the event
            //event.pageX -> current mouse
            //offsetLeft -> target
        const offsetX = target.offsetX;
             //calculate the percentage by the whole target size & the location
        const percent = Math.floor(offsetX / event.target.clientWidth * 100);
              //push the result to the designated div
        document.getElementById('result').textContent = `${percent}%`;
    }
}