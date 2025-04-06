// ... Firebase Config (above) ...

// Books Logic
let books = [];
let currentPageBooks = 1;
const booksPerPage = 5;

// ... (Book CRUD, Filtering, Sorting, Pagination functions - add, update, delete, get, filter, sort, paginate)

// Members Logic
let members = [];
let currentPageMembers = 1;
const membersPerPage = 5;

// ... (Member CRUD, Filtering, Sorting, Pagination functions - add, update, delete, get, filter, sort, paginate)

// Persisting State Logic
function saveState() {
    localStorage.setItem('bookFilters', JSON.stringify({ /* ... */ }));
    localStorage.setItem('memberFilters', JSON.stringify({ /* ... */ }));
    localStorage.setItem('bookPage', currentPageBooks);
    localStorage.setItem('memberPage', currentPageMembers);
}

function loadState() {
    // ... load from localStorage ...
}

loadState(); // Load state on page load

// Event Listeners
document.getElementById('addBook').addEventListener('click', () => { /* ... */ });
document.getElementById('addMember').addEventListener('click', () => { /* ... */ });
document.getElementById('applyBookFilters').addEventListener('click', () => { /* ... */ });
document.getElementById('applyMemberFilters').addEventListener('click', () => { /* ... */ });

// Example Book CRUD Function (adapt for all CRUD operations, filtering, sorting, pagination)
function addBookToDatabase(book) {
    database.ref('books').push(book);
}

// Example Get Books
function getBooksFromDatabase() {
    database.ref('books').on('value', (snapshot) => {
        books = [];
        snapshot.forEach((childSnapshot) => {
            books.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        displayBooks(books);
    });
}
getBooksFromDatabase();