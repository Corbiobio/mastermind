const btnbleu = document.getElementsByClassName("pbleu")
const btnjaune = document.getElementsByClassName("pjaune")
const btnrouge = document.getElementsByClassName("prouge")
const btnvert = document.getElementsByClassName("pvert")
const nav = document.getElementsByTagName("nav")

const firstbtn = document.getElementById("firstbtn")
const secondbtn = document.getElementById("secondbtn")
const thirdbtn = document.getElementById("thirdbtn")
const lastbtn = document.getElementById("lastbtn")



function displaybnt(btn) {
    for (let i = 0; i < btn.length; i++) {

        btn[i].addEventListener("click", function () {
            const rect = btn[i].getBoundingClientRect()

            nav[0].style.left = rect.x - 93 + "px"
            nav[0].style.top = rect.y + 70 + "px"

            nav[0].style.display = "flex"
            return color = btn[i]
        })
    }
}
let color;
displaybnt(btnbleu)
displaybnt(btnjaune)
displaybnt(btnrouge)
displaybnt(btnvert)

firstbtn.addEventListener("click", function () {
    color.classList = ""
    color.classList.add("pbleu")
    nav[0].style.display = "none"

})
secondbtn.addEventListener("click", function () {
    color.classList = ""
    color.classList.add("prouge")
    nav[0].style.display = "none"

})
thirdbtn.addEventListener("click", function () {
    color.classList = ""
    color.classList.add("pjaune")
    nav[0].style.display = "none"

})
lastbtn.addEventListener("click", function () {
    color.classList = ""
    color.classList.add("pvert")
    nav[0].style.display = "none"

})



