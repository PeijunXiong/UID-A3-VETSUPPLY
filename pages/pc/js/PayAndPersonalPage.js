import "./index.js"

window.addEventListener("DOMContentLoaded", () => {
    const doms = {
        payBtn: document.querySelector(".p-main-btn"),
        dialog: document.querySelector(".dialog"),
        dialogOk: document.querySelector(".dialog-ok"),
    }
    doms.payBtn.addEventListener("click", () => {
        doms.dialog.style.display = "block"
    })
    doms.dialogOk.addEventListener("click", () => {
        doms.dialog.style.display = "none"
    })
})