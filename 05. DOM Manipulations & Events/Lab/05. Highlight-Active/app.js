function focused() {

    let sectionElements = document.querySelectorAll('input');


    for (const el of sectionElements) {
        el.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused')
        });
        el.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        });
    }
}