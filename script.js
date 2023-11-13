let bookNumber = 0;
let totalRead=0;

const list = document.querySelector('ul');
      const inputName = document.querySelector('#name');
      const inputAuthor = document.querySelector('#author');
      const inputPages = document.querySelector('#pages');
      const button = document.querySelector('#addbutton');
      const bookCount = document.querySelector('#library-log-1');
      const bookRead = document.querySelector('#library-log-2');

      button.addEventListener('click', () => {
        const bookName = inputName.value;
        const bookAuthor = inputAuthor.value;
        const bookPages = inputPages.value;
        inputName.value = '';
        inputAuthor.value = '';
        inputPages.value = '';

        const listItem = document.createElement('li');
        const listItemName = document.createElement('div');
        const listItemAuthor = document.createElement('div');
        const listItemPages = document.createElement('div');

        const listDeleteBtn = document.createElement('div');
        const listMarkRead = document.createElement('div');
        const listbtns = document.createElement('div');

        

        listItem.appendChild(listItemName);
        listItem.appendChild(listItemAuthor);
        listItem.appendChild(listItemPages);
        listItem.appendChild(listbtns);
        listbtns.appendChild(listDeleteBtn);
        listbtns.appendChild(listMarkRead);
        
        
        listItemName.textContent = "Book name: "+bookName;
        listItemName.classList.add("bookName");

        listItemAuthor.textContent = "Author: "+bookAuthor;
        listItemAuthor.classList.add("bookAuthor");
        listItemPages.textContent = "Pages: "+bookPages;
        listItemPages.classList.add("bookPages");
        listbtns.classList.add("listbtns");
        listMarkRead.classList.add('markRead');
        listDeleteBtn.classList.add("deletBtn");


        listMarkRead.addEventListener('click', () => {
            listItem.classList.toggle('read');
            if(listItem.classList.contains('read')){
                totalRead++;
                bookRead.textContent = "Books read: "+totalRead;
            }
            else{
                totalRead--;
                bookRead.textContent = "Books read: "+totalRead;
            }
        });
        
        



        listMarkRead.innerHTML= '<ion-icon name="checkmark-done-circle"></ion-icon>';
        

        listDeleteBtn.innerHTML= '<ion-icon name="trash"></ion-icon>';
        listDeleteBtn.classList.add('deleteBtn');


       
        list.appendChild(listItem);
        bookNumber++;
        

        listDeleteBtn.addEventListener('click', () => {
          list.removeChild(listItem);
          bookNumber--;
          bookCount.textContent = "Books in library: "+bookNumber;
        });
        bookCount.textContent = "Books in library: "+bookNumber;

        input.focus();
      });