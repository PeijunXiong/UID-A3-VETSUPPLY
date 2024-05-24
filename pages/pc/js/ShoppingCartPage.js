import "./index.js";
const maxCount = 9999;

const shopItems = [
  {
    img: "../../assets/images/product1.png",
    shopName: "Nothin to Hide Small Twist Stix Beff",
    shopPack: "Big",
    shopPirce: 32.9,
    shopNum: 1,
  },
  {
    img: "../../assets/images/product2.png",
    shopName: "Hill's Prescription Diet T/D Dental Care With Chicken Dr…",
    shopPack: "Big",
    shopPirce: 12.47,
    shopNum: 1,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const doms = {
    shopListWrap: document.querySelector(".shop-list"),
    subTotal: document.querySelector("#subTotal"),
    crandTotal: document.querySelector("#crandTotal"),
   
  };
  function updateSum() {
    const sum = shopItems.reduce((prev, acc) => {
        return Number(prev + acc.shopNum * acc.shopPirce);
    }, 0).toFixed(2)
    doms.subTotal.innerText = sum;
    // crandTotal = sum + Delivery(10)
    doms.crandTotal.innerHTML = sum + 10;
  }
  function renderShopList() {
    const html = shopItems
      .map((item, idx) => {
        return `
        <div class="shop-item">
            <img src="${item.img}" class="item-pic">
            <div class="shop-item-info">
            <div class="item-name">${item.shopName}</div>
            <div class="item-pack">${item.shopPack}</div>
            <div class="item-price">
                <span class="price-icon">$</span>
                <span class="price-num">${item.shopPirce}</span>
                <div class="item-num">
                <span>x</span>
                <span class="item-count" data-id=${idx} >${item.shopNum}</span>
                </div>
            </div>
            </div>
            <div class="shop-item-right">
            <div class="counter-wrap">
                <div class="command-btn" id="sub" data-id=${idx}>-</div>
                <div class="count-num" id="count" data-id=${idx}>${item.shopNum}</div>
                <div class="command-btn" id="add" data-id=${idx}>+</div>
            </div>
            </div>
        </div>
        `;
      })
      .join("");
    doms.shopListWrap.innerHTML = html;
    updateSum()
  }
  function bindEvent() {
    const doms = {
      shopItems: document.querySelectorAll(".shop-item"),
      continueBtn: document.querySelector(".continue-btn"),
      checkBtn: document.querySelector(".Checkout-btn"),
    };
    function _numHandle(index, itemDom, type = "add") {
      const item = shopItems[index];
      let newNum = type === "add" ? item.shopNum + 1 : item.shopNum - 1;
      if (newNum > maxCount) {
        newNum = maxCount;
      } else if (newNum < 0) {
        newNum = 0;
      }
      const doms = {
        itemCount: itemDom.querySelector(".item-count"),
        countNum: itemDom.querySelector("#count"),
      };
      doms.itemCount.innerText = newNum;
      doms.countNum.innerText = newNum;
      item.shopNum = newNum;
      updateSum()
    }
    doms.shopItems.forEach((shopItem) => {
      shopItem.addEventListener("click", (e) => {
        const target = e.target;
        const itemDom = e.currentTarget;
        if (e.target.id === "add" || e.target.id === "sub") {
          const id = target.getAttribute("data-id");
          _numHandle(id, itemDom, e.target.id);
        }
      });
    });
    doms.continueBtn.addEventListener("click", () => {
        window.location.href = "./HomePage.html"
    })
    doms.checkBtn.addEventListener("click", () => {
        window.location.href = "./PayAndPersonalPage.html"
    })
  }

  renderShopList();
  bindEvent();
});
