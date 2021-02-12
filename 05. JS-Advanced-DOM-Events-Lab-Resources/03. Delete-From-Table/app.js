function deleteByEmail() {
    //get the input
    let userInput = document.getElementsByName('email')[0].value;

    let tableItems = Array.from(document.querySelectorAll('tbody tr'));

    let deleted  = false; //boolean for when/if we find a match
    //search if there's a matching mail in the table
    //iterate over cells; each cell represents a row
    for (let row of tableItems) {
        //if we find a match - delete the tr (children[1] gives the second item in the row, which is the email
        if (row.children[1].textContent == userInput){
            row.parentNode.removeChild(row); // the parent is the whole tr
            deleted = true;
            document.getElementById('result').textContent = 'Deleted.';
        }
    }

   //change the result message if there's no match
    if(!deleted){
        document.getElementById('result').textContent = 'Not found.';
    }

}