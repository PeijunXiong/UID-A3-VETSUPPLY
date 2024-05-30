window.addEventListener("DOMContentLoaded", () => {
    function bindEvent() {
      const doms = {
        continueBtn: document.querySelector(".continue-btn"),
        checkBtn: document.querySelector(".Checkout-btn"),
      };

      doms.continueBtn.addEventListener("click", () => {
          window.location.href = "./HomePage.html"
      })
      doms.checkBtn.addEventListener("click", () => {
          window.location.href = "./PayAndPersonalPage.html"
      })
    }
  
    bindEvent();
  });