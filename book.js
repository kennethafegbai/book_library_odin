const showForm = () =>{
    if(document.getElementById('form_section').style.display != 'flex'){
        document.getElementById('form_section').style.display='flex';
    }else{
        document.getElementById('form_section').style.display='none';
    }
};


const hideForm = () =>{
        document.getElementById('form_section').style.display='none';
};

const books = [
    {
        title: 'Lord Bush',
        author: 'King Afegbai',
        pages: 45,
        status:0,
    }
];

function Book(title, author, pages, status = 0){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const addBook = () =>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').checked ? 1:0;

    const book = new Book(title, author, pages, status);
    console.log(book);
    books.push(book);
    const lists = books.map(
        (book, index) => `<div>
        <h5>Title: ${book.title}</h5>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.status == 1 ? 'read':'unread'}</p>
        <div class="icons">
            <span onclick="removeBook(${index})" class="mdi mdi-delete"></span>                    
            ${book.status == 1 ? `<span id="read_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye"></span>`:`<span id="unread_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye-off"></span>`}              
        </div>
    </div>`
    );

    document.getElementById('books').innerHTML=lists.join('');
    document.getElementById('form').reset();
};


const removeBook = (index)=>{

    books.splice(index, 1);

    const lists = books.map(
        (book, index) => `<div>
        <h5>Title: ${book.title}</h5>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.status == 1 ? 'read':'unread'}</p>
        <div class="icons">
            <span onclick="removeBook(${index})" class="mdi mdi-delete"></span>                    
            ${book.status == 1 ? `<span id="read_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye"></span>`:`<span id="unread_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye-off"></span>`}              
        </div>
    </div>`
    );

    document.getElementById('books').innerHTML=lists.join('');
}

const toggleStatus = (index) => {

    books[index].status =  !books[index].status;
    
    const lists = books.map(
        (book, index) => `<div>
        <h5>Title: ${book.title}</h5>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.status == 1 ? 'read':'unread'}</p>
        <div class="icons">
            <span onclick="removeBook(${index})" class="mdi mdi-delete"></span>                    
            ${book.status == 1 ? `<span id="read_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye"></span>`:`<span id="unread_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye-off"></span>`}              
        </div>
    </div>`
    );  

    document.getElementById('books').innerHTML=lists.join('');

}

const lists = books.map(
    (book, index) =>  (`<div>
    <h5>Title: ${book.title}</h5>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Status: ${book.status == 1 ? 'read':'unread'}</p>
    <div class="icons">
        <span onclick="removeBook(${index})" class="mdi mdi-delete"></span>                    
        ${book.status == 1 ? `<span id="read_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye"></span>`:`<span id="unread_icon" onclick="toggleStatus(${index})" class="mdi mdi-eye-off"></span>`}              
        </div>
</div>`)
);

document.getElementById('books').innerHTML=lists.join('');