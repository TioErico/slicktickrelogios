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

/* function searchProducts() {
    var input, filter, gallery, content, i, title;
    input = document.querySelector('.searchbar');
    filter = input.value.toUpperCase();
    gallery = document.querySelector('.gallery');
    content = gallery.getElementsByClassName('content');

    for (i = 0; i < content.length; i++) {
        title = content[i].querySelector('.product-title');
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            content[i].style.display = "";
        } else {
            content[i].style.display = "none";
        }
    }
}
*/