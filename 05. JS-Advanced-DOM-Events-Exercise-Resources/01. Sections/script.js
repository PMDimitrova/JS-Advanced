function create(words) {
   //create a div element w/ paragraph in it
   //make each paragraph initially hidden style.display:none
   //add click event listener to the divs, which unhidden the paragraph
   //attach the divs to dom element 'id'
   let divElements = [];
   words.forEach(word =>{
      let newDivEl = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      newDivEl.appendChild(paragraph);
      newDivEl.addEventListener('click', revealParagraph)
      document.getElementById('content').appendChild(newDivEl);
   });

   function revealParagraph(event){
    event.currentTarget.childNodes[0].style.display = 'block';
   }
}