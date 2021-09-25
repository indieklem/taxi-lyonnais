window.addEventListener("load", function(){
    const mySiema = new Siema({
    perPage: {
        576: 1,
        768: 2,
        1024: 3,
        1200: 4,
    },
    loop: true,
    });
    document.querySelector('#js-service__prev').addEventListener('click', () => mySiema.prev());
    document.querySelector('#js-service__next').addEventListener('click', () => mySiema.next());
});
