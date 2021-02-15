function encodeAndDecodeMessages() {
    //add event listeners for the following buttons:
    //button[0] - on click, encodeAndSend
            //encode -> change every char's Ascii +1; clear the send area;
            //append the result text tp the result area
    //button[1] - on click decodeAndRead
            //decode the text; replace the text in the receiver's text area

    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', encodeAndSendMsg);
    buttons[1].addEventListener('click', decodeAndReadMsg);

    function encodeAndSendMsg(event){
        let inputField = event.target.parentNode.childNodes[3]
        let input = inputField.value;
        input = transformMessage(input, 'encode');
        inputField.value = '';
        document.getElementsByTagName('textarea')[1].value = input;
    }

    function decodeAndReadMsg(event){
        let decodedMsgField = document.getElementsByTagName('textarea')[1];
        let result = transformMessage(decodedMsgField.value, 'decode');
        decodedMsgField.value = result;
        console.log('decode');
    }

    function transformMessage(input, action){
        let result = '';
        for (let i = 0; i < input.length; i++) {
            if (action === 'encode'){
                result += String.fromCharCode(input.charCodeAt(i) + 1);
            }else if(action === 'decode'){
                result += String.fromCharCode(input.charCodeAt(i)- 1);
            }
        }
        return result;
    }
}