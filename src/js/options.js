//(function() {

function init() {
    document.querySelector('#name').value = window.localStorage.name || "";
}

function save_name() {
    window.localStorage.name = document.querySelector('#name').value;
}

document.addEventListener('DOMContentLoaded', function () {
    init();
    document.querySelector('#name').addEventListener('keyup', save_name);
});

//})();
