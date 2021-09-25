window.addEventListener("load", function(){
    document.getElementById("js-header__toggleMenu").onclick = function(){
        var mobileHeader = document.getElementById('js-header__mobile');
        mobileHeader.classList.toggle('c-header__mobile--visible');

        var buttonToggle = document.getElementById('js-header__toggleMenu');
        buttonToggle.classList.toggle('c-header__toggleButton--switch');
    };
});