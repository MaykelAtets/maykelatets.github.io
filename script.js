var links = document.querySelectorAll('a[href*="#"]');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();
        var hash = this.hash;

        document.querySelector(hash).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

var buttons = document.querySelectorAll('.myButton');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var img = this.previousElementSibling;
        if (img.style.display === 'none') {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

