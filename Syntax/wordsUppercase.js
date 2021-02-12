function wordUppercase(textInput) {
    let output = '';
    let currentWord = '';
    let wordToAdd = '';

    for (let i = 0; i < textInput.length; i++) {
        let currentChar = textInput[i];

        if ((/[a-zA-Z]/).test(textInput[i]) && textInput[i] != ' ' && i < (textInput.length - 1)) {
            currentWord += currentChar;
        } else if ((/[a-zA-Z]/).test(textInput[i]) && textInput[i] != ' ' && i == (textInput.length - 1)) {
            currentWord += currentChar;
            wordToAdd = currentWord.toUpperCase();
            output = output + wordToAdd;
            currentWord = '';
            wordToAdd = '';
        } else {
            if (currentWord.length > 0) {
                wordToAdd = currentWord.toUpperCase();
                output = output + wordToAdd + ', ';
                currentWord = '';
                wordToAdd = '';
            }
        }
    }
    if (output[output.length - 2] == ',') {
        output = output.substring(0, output.length - 2);
    }
    console.log(output);

}
wordUppercase('Hi, how?');
wordUppercase('?.,');
wordUppercase('Functions in JS can be nested, i.e. hold other functions');
wordUppercase('Hi, how are you?');

