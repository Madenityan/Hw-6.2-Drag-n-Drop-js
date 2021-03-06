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

function transfer(event) {
    let wrapper = event.currentTarget.children[0];
    let leftOffset = event.currentTarget.offsetLeft;
    let topOffset = event.currentTarget.offsetTop;
    if (wrapper.getAttribute('btn_clicked')) {
        wrapper.style.left = event.pageX - (wrapper.offsetWidth / 2) - leftOffset + 'px';
        wrapper.style.top = event.pageY - (wrapper.offsetHeight/ 2) - topOffset + 'px';
    }
}

// onmousemove
function onMouseMove(event) {
    transfer(event);
}

// onmousedown
function moving(event) {
    let wrapper = event.target.parentElement;
    wrapper.setAttribute('btn_clicked', 'true');
}

// onmouseup
function stopMove(event) {
    let wrapper = event.currentTarget.children[0];
    wrapper.removeAttribute('btn_clicked');
}
