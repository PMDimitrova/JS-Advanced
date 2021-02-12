function solve() {
  let inputText = document.getElementById('input').value;
    let output = document.getElementById('output');
  let inputSentences = inputText.split('.').filter(p => p.length>0);

    for (let sentence of inputSentences) {
        sentence.trim();
        if(sentence === ''){
            inputSentences.pop(sentence);
        }
    }

    for (let i = 0; i < inputSentences.length; i += 3) {
        let arr = [];
        for (let y = 0; y < 3; y++) {
            if (inputSentences[i + y]) {
                arr.push(inputSentences[i + y]);
            }
        }
        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
}