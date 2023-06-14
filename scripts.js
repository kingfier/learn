//modal menu
const CLASS_LIST = {
    MODAL: 'modal',
    MODAL_ACTIVE: 'modal--active',
    MODAL_HAS_DDIALOG_BODY: 'modal--has-scroll',
    MODAL_DIALOG_BODY: 'modal__dialog-body',
    TRIGGER_OPEN: 'js-modal-open',
    TRIGGER_CLOSE: 'js-modal-close'
};
document.addEventListener('click', (event) => {
    // open
    if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
        console.log('open');
        event.preventDefault();
        const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
        const modalId = target.getAttribute('href').replace('#', '');
        const modal = document.getElementById(modalId);

        document.body.style.paddingRight = `${getScrollbarWidth()}px`;
        document.body.style.overflow = 'hidden';

        modal.classList.add(CLASS_LIST.MODAL_ACTIVE);

    }
    //close
    if (
        event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
        event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
    ) {
        console.log('close');
        event.preventDefault();
        const modal = event.target.closest(`.${CLASS_LIST.MODAL_ACTIVE}`);
        modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    }
});
const getScrollbarWidth = () => {
    const item = document.createElement('div');
    item.style.position = 'absolute';
    item.style.top = '-9999px'
    item.style.width = '50px'
    item.style.height = '50px'
    item.style.overflow = 'scroll'
    item.style.visibility = 'hidden'

    document.body.appendChild(item);
    const scrollBarWidth = item.offsetWidth - item.clientWidth;
    document.body.removeChild(item);

    return scrollBarWidth
}
//filter upper
function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide')
            }
        }
    })
}

app()

//scroll to #
const icons = document.querySelectorAll('.js-modal-open');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};