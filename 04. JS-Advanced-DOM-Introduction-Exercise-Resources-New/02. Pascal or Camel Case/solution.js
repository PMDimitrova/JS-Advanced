function solve() {
    function camelCase(str) {
        return str[0].toUpperCase() +  str.slice(1).toLowerCase();
    }
    let input = document.querySelector('#text').value.toLowerCase(); //make all of the input in LowerCase
    let desiredCase = document.getElementById('naming-convention').value;

    let inputWords = input.split(' ');

    let result = [];

    for (const word of inputWords) {
        let current = camelCase(word);
        result.push(current);
    }
    console.log(result.join(', '))

    if (desiredCase === 'Camel Case'){ //camelCase
        result[0] = result[0].toLowerCase();
    }else if (desiredCase !== 'Pascal Case'){//PascalCase
        result = [];
        result.push('Error!');
    }

    document.getElementById('result').textContent = result.join('');
}
