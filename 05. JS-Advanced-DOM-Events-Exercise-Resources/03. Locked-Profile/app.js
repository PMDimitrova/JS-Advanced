function lockedProfile() {
    //add event listener for click to the 'show more' button
    // generate function
    // in the function check if the profile is locked or not
    //if unlocked -> reveal the div hidden info
    //if we lock the profile, when the div info is shown, the 'hide it' btn should be disabled

    Array.from(document.getElementsByTagName('button')).forEach(btn =>{
        btn.addEventListener('click', manageInfo);
    });

    function manageInfo(event){
        let buttonIsLocked = event.target.parentElement.getElementsByTagName('input')[0].checked;
        let buttonFunc = event.target.textContent;

        if (!buttonIsLocked && (buttonFunc === 'Show more')){
            event.target.parentElement.getElementsByTagName('div')[0]
                        .style.display = 'block';
            event.target.textContent = 'Hide it';

        }else if(!buttonIsLocked && (buttonFunc === 'Hide it')){
            event.target.parentElement.getElementsByTagName('div')[0]
                .style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }


}