import "./index.js";

window.addEventListener("DOMContentLoaded", () => {
  function bindEvent() {
    const doms = {
      downBtn: document.querySelector(".icon-down.down"),
      upBtn: document.querySelector(".icon-down.up"),
      contentDown: document.querySelector(".contentDown"),
      contentUp: document.querySelector(".contentUp"),
      payBtn: document.querySelector(".pay-btn"),
      dialog: document.querySelector(".dialog"),
      dialogOk: document.querySelector(".dialog-ok"),
    };

    doms.downBtn.addEventListener("click", () => {
      doms.contentUp.style.display = "none";
      doms.contentDown.style.display = "block";
      doms.downBtn.style.display = "none";
    });
    doms.upBtn.addEventListener("click", () => {
      doms.contentUp.style.display = "block";
      doms.contentDown.style.display = "none";
      doms.downBtn.style.display = "block";
    });
    doms.payBtn.addEventListener("click", () => {
      doms.dialog.style.display = "block";
    });
    doms.dialogOk.addEventListener("click", () => {
      doms.dialog.style.display = "none";
      window.location.href = "./FinishedPage.html";
    });
  }

  bindEvent();
});
