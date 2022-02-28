var changeHTML = document.getElementById('joe');
var button = document.getElementById('button');

button.onclick = () => {
    changeHTML.innerHTML = changeHTML.innerHTML + 'Mama';
    button.innerHTML = 'HAHA';
}