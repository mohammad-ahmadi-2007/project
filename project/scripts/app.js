//alert

alert("این پروژه تمرینی و قدیمی من است و صرفا برای نمایش آشنایی با css , html , js ساخته شده و تمرکز آن روی پیاده سازی UI و تعاملات پایه است \n و نه به عنوان نمونه کاری برای تعیین سطح")

//burger menu

const burgerBtn = document.querySelector(".hamburger")
const burgerMenu = document.querySelector(".burger_menu")
const close = document.querySelector(".close_hamburger")
let flag = 0;
function OpenMenu() {
    if (flag === 0) {
        burgerMenu.classList.add("active")
        flag = 1
    } else {
        burgerMenu.classList.remove("active")
        flag = 0
    }
}
burgerBtn.addEventListener("click", OpenMenu)
close.addEventListener("click", function () {
    burgerMenu.classList.remove("active")
    flag = 0
})

