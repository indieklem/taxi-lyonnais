function radioLabel(elem) {
    var everyLabel = document.querySelectorAll(".js-labelForm");
    [].forEach.call(everyLabel, function(el) {
        el.classList.remove("c-form__radioLabel--active");
    });

    let selector = 'label[for=' + elem.id + ']';
    let theLabel = document.querySelector(selector);
    theLabel.classList.toggle('c-form__radioLabel--active');
}
