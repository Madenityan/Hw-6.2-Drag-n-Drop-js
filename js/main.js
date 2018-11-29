let btnRemove = document.getElementById('remove');
let btnAdd = document.getElementById('add');

function addRemoveButton() {
    if (btnRemove.style.display !== 'none') {
        btnRemove.style.display = 'none';
    }
    else {
        btnRemove.style.display = 'inline-block';
    }
}

function removeButton() {
    btnAdd.remove();
    btnRemove.style.display = 'none';
}
