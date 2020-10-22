document.querySelector("#menu-button").addEventListener('click', e => {
    document.querySelector(".menu").classList.toggle('open');
    document.querySelector(".overlay").classList.toggle('open');
    if (document.querySelector("body").style[0] == "overflow-x") {
        document.querySelector("body").style = '';
    } else {
        document.querySelector("body").style.overflow = 'hidden';
    }
});