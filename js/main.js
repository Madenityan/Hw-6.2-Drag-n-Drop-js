
function addItem(event) {
    let removeButton = event.target.parentElement.getElementsByClassName('btn-remove')[0];

    if (removeButton.style.display !== 'none') {
        removeButton.style.display = 'none';
    }
    else {
        removeButton.style.display = 'inline-block';
    }
}

function removeItem(event) {
    let removeButton = event.target.parentElement.getElementsByClassName('btn-remove')[0];
    let removeAll = event.target.parentElement.getElementsByClassName('btn-add')[0];
    removeAll.remove();
    removeButton.style.display = 'none';
}