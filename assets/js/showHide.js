function show(element = Array()) {
    element.forEach(item => {
        console.log(item);
        document.querySelector(item).classList.add('open');
        document.querySelector(item).classList.remove('close');
    });
}
function hide(element = Array()) {
    element.forEach(item => {
        console.log(item);
        document.querySelector(item).classList.add('close');
        document.querySelector(item).classList.remove('open');
    });
}