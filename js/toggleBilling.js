var billing = false;
function toggleBilling(e) {
    var imageBilling = document.getElementById('js-imgBilling');
    var blockBilling = document.getElementById('js-blockBilling');
    var txtBilling = document.getElementById('js-textBilling');

    if (billing) {
        billing = false;
        blockBilling.style.display = "none";
        txtBilling.innerHTML = "Ajouter une adresse de facturation";
        imageBilling.src = 'images/icon/plus.svg';
    } else {
        billing = true;
        blockBilling.style.display = "block";
        txtBilling.innerHTML = "Supprimer l’adresse de facturation";
        imageBilling.src = 'images/icon/Minus.svg';
    }
}
