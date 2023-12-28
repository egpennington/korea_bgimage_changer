const changeBtn = document.getElementById("change-btn")
const reverseBtn = document.getElementById("reverse-btn")
const resetBtn = document.getElementById("reset-btn")

changeBtn.addEventListener("click", function() {
    document.body.className = "color"
})

reverseBtn.addEventListener("click", function() {
    document.body.className = "blank"
})

resetBtn.addEventListener("click", function() {
   document.body.className = "reset"
})

