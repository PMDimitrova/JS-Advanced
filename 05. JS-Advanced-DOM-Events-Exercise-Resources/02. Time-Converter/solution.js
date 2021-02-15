function attachEventsListeners() {
    //add click event listener to all 'convert' buttons, func convert
    //function convert -> read the corresponding input field
    //-> convert tho the other 2 units & display it
    document.getElementById('daysBtn').addEventListener('click', calculate);
    document.getElementById('hoursBtn').addEventListener('click', calculate);
    document.getElementById('minutesBtn').addEventListener('click', calculate);
    document.getElementById('secondsBtn').addEventListener('click', calculate);



    function calculate(event) {
        let inputType = event.target.parentNode.childNodes[1].textContent;
        let inputValue = Number(event.target.parentNode.childNodes[3].value);
        let result = calculateResult(inputType, inputValue); //[0] - days; [1] - hours; [2] - minutes; [3] - seconds
        document.getElementById('days').value = result[0];
        document.getElementById('hours').value = result[1];
        document.getElementById('minutes').value = result[2];
        document.getElementById('seconds').value = result[3];
    }
    function calculateResult(type, value) {
        let result = [];
        //[0] - days; [1] - hours; [2] - minutes; [3] - seconds
        switch (type){
            case 'Days: ':
                result.push(value);
                result.push(value * 24);
                result.push(value * 24 *60);
                result.push(value * 24 * 60 * 60);
                break;
            case 'Hours: ':
                result.push(value / 24);
                result.push(value);
                result.push(value * 60);
                result.push(value * 60 * 60);
                break;
            case 'Minutes: ':
                result.push(value / 24 /60);
                result.push(value / 60);
                result.push(value);
                result.push(value * 60);
                break;
            case 'Seconds: ':
                result.push(value / 24 /60 / 60);
                result.push(value / 60 / 60);
                result.push(value / 60);
                result.push(value);
                break;
        }
            return result;
    }
}