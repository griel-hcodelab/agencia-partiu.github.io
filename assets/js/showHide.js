function show(element = Array()) {
    element.forEach(item => {
        console.log(item);
        document.querySelector(item).classList.toggle('open');
    });
}
function hide(element = Array()) {
    element.forEach(item => {
        console.log(item);
        document.querySelector(item).classList.toggle('hide');
    });
}