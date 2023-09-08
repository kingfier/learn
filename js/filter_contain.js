"use strict";
const filterButtons = document.querySelectorAll(".btn")
const items = document.querySelectorAll(".card")

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((button_active) => {
            button_active.classList.remove('button-upper-active')
        })
        button.classList.add('button-upper-active')
        const buttonCategoryId = button.dataset.categoryid

        items.forEach((item) => {
            if(buttonCategoryId == 'all'){
                item.classList.remove('card_hidden')
            }else if(item.dataset.categoryid.indexOf(buttonCategoryId) != -1){
                item.classList.remove('card_hidden')
            } else{
                item.classList.add('card_hidden')
            }

        })
    })

});