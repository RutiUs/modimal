function accordion() {
    const btn = document.querySelectorAll(".mobile-nav__btn");
    btn.forEach(function(btn) {
        btn.addEventListener('click', () => {
            const content =  btn.nextElementSibling;
            console.log(content);

            const isOpen = btn.classList.toggle('active');

            if(isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';

            } else {
                content.style.maxHeight = '0px';
            }

            // content.style.maxHeight = '200px';
        })
    })
}

export default accordion;