function searchProducts() {
    var input, filter, gallery, contents, i, title;
    input = document.querySelector('.searchbar');
    filter = input.value.toUpperCase();
    gallery = document.querySelector('.gallery');
    contents = gallery.querySelectorAll('.content');

    for (i = 0; i < contents.length; i++) {
        title = contents[i].querySelector('.product-title');
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            contents[i].style.display = "";
        } else {
            contents[i].style.display = "none";
        }
    }
}
