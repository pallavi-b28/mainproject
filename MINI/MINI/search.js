// Toggle search bar activation
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('active');
    searchBar.focus();
}

// Filter list items based on search input
function searchFunction() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const listItems = document.querySelectorAll('#search-results li');

    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
