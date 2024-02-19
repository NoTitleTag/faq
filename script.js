const btn = document.querySelectorAll(".plus-btn")
const texte = document.querySelectorAll(".texte")


btn.forEach(btn => {
    btn.addEventListener("click", () => {
        handleActive(btn)
    })

})

function handleActive (clickedBtn) {
    const closestText = clickedBtn.nextElementSibling
    closestText.classList.toggle("active")
    clickedBtn.classList.toggle("active")
}


