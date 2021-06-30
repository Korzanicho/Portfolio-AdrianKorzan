const openCollapse = (id) => {
    const elemetToOpen = document.getElementById(id);
    elemetToOpen.classList.add("collapse--open");
}

const closeCollapse = () => {
    const openElements = document.querySelectorAll('.collapse--open');
    if (openElements) {
        openElements.forEach((element) => {
            element.classList.remove('collapse--open');
        });
    }
}

const collapseOnClick = () => {
    const elementsToCollapse = document.querySelectorAll('[data-collapse]');
    elementsToCollapse.forEach((element) => {
        element.addEventListener('click', () => {
            console.log('elo');
            closeCollapse();
            openCollapse(element.dataset.collapse);
        });
    });
}

const collapseCloseButton = () => {
    const collapseCloseButtons = document.querySelectorAll('.collapse__close');
    console.log(collapseCloseButtons);
    collapseCloseButtons.forEach((element) => {
        element.addEventListener('click', () => {
            closeCollapse();
        });
    });
}

const collapse = () => {
    console.log('joł');
    collapseOnClick();
    collapseCloseButton();
}

collapse();