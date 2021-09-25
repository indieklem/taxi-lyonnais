function footerVisibility(elem,id) {
    var e = document.getElementById(id);
    e.classList.toggle('c-footer__items--visible');
    elem.style.visibility = 'hidden';
}
