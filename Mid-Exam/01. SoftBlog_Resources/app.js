function solve(){
   /*
     + attach event listener to the create-button
     + first get all of the input fields: author, title, category & Content
     +compose an html-element which is the new article and append it in the body>main> create new section
     +attached 'delete' & 'archive' buttons to the article; btns are div-elements & correct classes
     -attach event.list to these buttons & onclick perform what they want:
     1. archive - move the article to the ol-element in archive section; dont move the entire article, but only the article title
     2. delete -  delete the entire article from the main-element
  */

    document.getElementsByClassName('btn create')[0]
        .addEventListener('click', createArticle);

    let authorEl = document.getElementById('creator');
    let titleEl = document.getElementById('title');
    let categoryEl = document.getElementById('category');
    let contentEl = document.getElementById('content');
    let articleElement = document.createElement('article');

    function createArticle(event){
      event.preventDefault();
      let author = authorEl.value;
      let title = titleEl.value;
      let category = categoryEl.value;
      let content = contentEl.value;

      articleElement.id = 'currentArticle';

      let titleElement = document.createElement('h1');
      titleElement.textContent = title;
      articleElement.append(titleElement);

      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = 'Category:';
      let strongElement = document.createElement('strong');
      strongElement.textContent = category;
      categoryParagraph.append(strongElement);
      articleElement.append(categoryParagraph);

      let creatorParagraph = document.createElement('p');
      creatorParagraph.textContent = 'Creator:';
      let strongElement2 = document.createElement('strong');
      strongElement2.textContent = author;
      creatorParagraph.append(strongElement2);
      articleElement.append(creatorParagraph);

      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = content;
      articleElement.append(contentParagraph);

      let buttons = document.createElement('div');
      buttons.className = 'buttons';

      let btnDelete = document.createElement('button');
      btnDelete.className = 'btn delete';
      btnDelete.textContent = 'Delete';
      btnDelete.addEventListener('click', deleteArticle);
      buttons.append(btnDelete);

      let btnArchive = document.createElement('button');
      btnArchive.className = 'btn archive';
      btnArchive.textContent = 'Archive';
      btnArchive.addEventListener('click', archiveArticle);
      buttons.append(btnArchive);


      articleElement.append(buttons);

      function deleteArticle(event){
        document.getElementById('currentArticle').remove();
      }

      function archiveArticle(event){
        document.getElementById('currentArticle').remove();
        let newOlItem = document.createElement('li');
        newOlItem.textContent = title;
        document.getElementsByClassName('archive-section')[0]
            .getElementsByTagName('ol')[0]
            .appendChild(newOlItem);
      }
    }

    document.getElementsByClassName('site-content')[0]
       .getElementsByTagName('main')[0]
        .append(articleElement);

    // let newElement = document.createElement('p');
    // newElement.textContent  = 'test';
    //
    // document.getElementsByClassName('site-content')[0]
    //   .getElementsByTagName('main')[0]
    //   .append(newElement);

  }
