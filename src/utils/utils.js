const html = document.querySelector('html');
const body = document.querySelector('body');

export const UTILS = {
    setNoScroll: function(isScrollDisable) {
        html.classList.toggle('no-scroll', isScrollDisable);
        body.classList.toggle('no-scroll', isScrollDisable);
    }
}
