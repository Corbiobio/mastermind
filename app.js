// class Pion {
//     colors = ["blue", "red", "green"]
//     color = "red";
//     constructor(color) {
//         this.color = color
//     }
//     checkColor() {
//         return this.colors.some((item) => { return item === this.color })
//     }
// }

// let p1 = new Pion("blue");

// console.log(p1.color)
// console.log(p1.checkColor())
const piongris = document.getElementsByClassName("get")
const dot = document.getElementsByClassName("dot")
const coloredbtn = document.getElementById("coloredbtn")
const board = document.getElementById("board")
const togest = document.getElementById("togest")
const firstbtn = document.getElementById("firstbtn")
const secondbtn = document.getElementById("secondbtn")
const thirdbtn = document.getElementById("thirdbtn")
const lastbtn = document.getElementById("lastbtn")
const valid = document.getElementById("valid")
let nmbdecoup = 0


let elementclicked

for (let i = 0; i < togest.children.length; i++) {
    const tabcolor = ["pionbleu", "pionrouge", "pionjaune", "pionvert"]
    let random = Math.floor(Math.random() * 4)
    togest.children[i].classList = tabcolor[random]
}

function afficher(el) {
    const rect = el.getBoundingClientRect()
    coloredbtn.style.left = rect.x - 93 + "px"
    coloredbtn.style.top = rect.y + 70 + "px"
    coloredbtn.style.display = "flex"
    elementclicked = el
}

function displaybnt() {
    const btnContainer = document.getElementsByClassName("dot")
    for (let index = 0; index < btnContainer.length; index++) {
        const btn = btnContainer[index];
        for (let i = 0; i < btn.children.length; i++) {
            const element = btn.children[i];
            element.addEventListener("click", () => afficher(element), true, true)
        }
    }
}

firstbtn.addEventListener("click", function () {
    elementclicked.className = ""
    elementclicked.classList.add("get", "pionbleu")
    coloredbtn.style.display = "none"
})
secondbtn.addEventListener("click", function () {
    elementclicked.className = ""
    elementclicked.classList.add("get", "pionrouge")
    coloredbtn.style.display = "none"
})
thirdbtn.addEventListener("click", function () {
    elementclicked.className = ""
    elementclicked.classList.add("get", "pionjaune")
    coloredbtn.style.display = "none"
})
lastbtn.addEventListener("click", function () {
    elementclicked.className = ""
    elementclicked.classList.add("get", "pionvert")
    coloredbtn.style.display = "none"
})

function create() {
    const btn1 = document.getElementById("1")
    const btn2 = document.getElementById("2")
    const btn3 = document.getElementById("3")
    const btn4 = document.getElementById("4")
    const dotreplace = document.getElementsByClassName("dot")

    if (btn1.classList.contains("pionbleu") || btn1.classList.contains("pionrouge") || btn1.classList.contains("pionjaune") || btn1.classList.contains("pionvert")) {
        if (btn2.classList.contains("pionbleu") || btn2.classList.contains("pionrouge") || btn2.classList.contains("pionjaune") || btn2.classList.contains("pionvert")) {
            if (btn3.classList.contains("pionbleu") || btn3.classList.contains("pionrouge") || btn3.classList.contains("pionjaune") || btn3.classList.contains("pionvert")) {
                if (btn4.classList.contains("pionbleu") || btn4.classList.contains("pionrouge") || btn4.classList.contains("pionjaune") || btn4.classList.contains("pionvert")) {

                    console.log(nmbdecoup);
                    if (nmbdecoup === 6) {
                        return alert("vous avez perdu !")
                    }

                    let togchild = togest.children
                    let soluce = []
                    for (let i = 0; i < togchild.length; i++) {
                        soluce.push(togchild[i].classList.value)
                    }
                    let dotchild = dot[0].children;
                    let reponse = []
                    for (let i = 0; i < dotchild.length; i++) {
                        reponse.push(dotchild[i].classList[1]);
                    }

                    let bon = 0
                    let mal = 0
                    let mauvais = 0

                    for (let i = 3; i >= 0; i--) {
                        if (reponse[i] === soluce[i]) {
                            bon++
                            reponse.splice(i, 1)
                            soluce.splice(i, 1)
                        }
                        if (reponse.length === 0) {
                            return alert("gg")
                        }
                    }
                    console.log(soluce);
                    console.log(reponse);
                    for (let i = 0; i < soluce.length; i++) {
                        for (let j = 0; j < soluce.length; j++) {
                            if (reponse[i] === soluce[j]) {
                                mal++
                                soluce[j] = "est bon mais mal placer"
                            } else {
                                mauvais++
                            }
                        }
                    }
                    nmbdecoup++

                    console.log("bon :" + bon, "mal :" + mal, "mauvais :" + mauvais);


                    const actuelscore = document.getElementsByClassName("scores")
                    let modifscore = actuelscore[0].children
                    modifscore[0].textContent = bon
                    modifscore[1].textContent = mal
                    actuelscore[0].classList = "oldscores"



                    btn1.removeAttribute("id")
                    btn2.removeAttribute("id")
                    btn3.removeAttribute("id")
                    btn4.removeAttribute("id")
                    dotreplace[0].classList = "olddot"

                    coloredbtn.style.display = "none"
                    let line = document.createElement("div")
                    let dotcreat = document.createElement("div")
                    let scores = document.createElement("div")
                    line.className = "line"
                    dotcreat.className = "dot"
                    scores.className = "scores"
                    board.appendChild(line)
                    line.appendChild(dotcreat)
                    line.appendChild(scores)
                    for (let i = 1; i <= 4; i++) {
                        let button = document.createElement("button")
                        button.className = "get"
                        dotcreat.appendChild(button)
                        button.id = i
                        button.textContent = i
                    }
                    scores.appendChild(document.createElement("div"))
                    scores.appendChild(document.createElement("div"))

                    displaybnt()

                } else {
                    alert("Tout les pions n'ont pas de couleurs")
                    coloredbtn.style.display = "none"
                }
            } else {
                alert("Tout les pions n'ont pas de couleurs")
                coloredbtn.style.display = "none"
            }
        } else {
            alert("Tout les pions n'ont pas de couleurs")
            coloredbtn.style.display = "none"
        }
    } else {
        alert("Tout les pions n'ont pas de couleurs")
        coloredbtn.style.display = "none"
    }
}

valid.addEventListener("click", () => {
    create()
})

displaybnt()
