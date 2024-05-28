import mockData from "./mockData.js";

const productsArr = [
  {
    img: "../../assets/images/product1.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 32.9,
    count: 0,
    isLove: false,
    id: "product1",
  },
  {
    img: "../../assets/images/product2.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 12.47,
    count: 0,
    isLove: false,
    id: "product2",
  },
  {
    img: "../../assets/images/product3.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 29.99,
    count: 0,
    isLove: true,
    id: "product3",
  },
  {
    img: "../../assets/images/product4.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 13.2,
    count: 0,
    isLove: false,
    id: "product4",
  },
  {
    img: "../../assets/images/product5.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 54.99,
    count: 0,
    isLove: false,
    id: "product5",
  },
  {
    img: "../../assets/images/product6.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 75.99,
    count: 0,
    isLove: false,
    id: "product6",
  },
  {
    img: "../../assets/images/product7.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 89.56,
    count: 0,
    isLove: false,
    id: "product7",
  },
  {
    img: "../../assets/images/product8.png",
    text: "Nothin to Hide Small Twist Stix Beff",
    price: 10.27,
    count: 0,
    isLove: false,
    id: "product8",
  },
];

const { maxCount } = mockData;

window.addEventListener("DOMContentLoaded", () => {
  const doms = {
    productWrap: document.querySelector(".m-product-wrap"),
  };

  function renderPetList() {
    const html = productsArr
      .map((item, idx) => {
        const loveImg = item.isLove
          ? "../../assets/images/love.png"
          : "../../assets/images/nolove.png";
        return `
            <div class="m-product-item" data-id="${item.id}">
              <img src="${loveImg}" class="m-p-item-status" id="status" data-id="${item.id}">
              <div class="m-p-item-img-wrap">
                <img src="${item.img}" id="statusImg" class="m-p-item-img">
              </div>
              <p class="m-p-item-text">${item.text}</p>
              <div class="m-p-item-footer">
                <div class="item-price">
                  <span class="item-price-icon">$</span>
                  <span class="item-price-text" id="j-price">${item.price}</span>
                </div>
                <div class="counter-wrap">
                  <div class="command-btn" id="sub" data-id="${item.id}">-</div>
                  <div class="count-num" id="count">${item.count}</div>
                  <div class="command-btn" id="add" data-id="${item.id}">+</div>
                </div>
              </div>
            </div>
            `;
      })
      .join("");
    doms.productWrap.innerHTML = html;
    PetListBindEvent();
  }
  function PetListBindEvent() {
    const doms = {
      productItems: document.querySelectorAll(".m-product-item") || [],
      subs: document.querySelectorAll("#sub") || [],
      adds: document.querySelectorAll("#add") || [],
      productStatus: document.querySelectorAll("#status"),
      statusImgs: document.querySelectorAll("#statusImg"),
    };
    doms.productItems.forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        window.location.href = `./ProductDetailPage.html?id=${id}`;
      });
    });
    doms.productStatus.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = item.getAttribute("data-id");
        const productIdx = productsArr.findIndex((p) => p.id === id);
        if (productIdx < 0) {
          console.log("未找到产品");
          return;
        }
        const product = productsArr[productIdx];
        product.isLove = !product.isLove;
        const loveImg = product.isLove
          ? "../../assets/images/love.png"
          : "../../assets/images/nolove.png";
        item.src = loveImg;
      });
    });
    doms.subs.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = item.getAttribute("data-id");
        const productIdx = productsArr.findIndex((p) => p.id === id);
        if (productIdx < 0) {
          console.log("未找到产品");
          return;
        }
        const count = Number(item.nextElementSibling.innerText);

        const product = productsArr[productIdx];
        const _newCount = count - 1;
        const newCount = _newCount <= 0 ? 0 : _newCount;
        if (newCount !== product.count) {
          product.count = newCount;
          item.nextElementSibling.innerText = newCount;
        }
      });
    });
    doms.adds.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = item.getAttribute("data-id");
        const productIdx = productsArr.findIndex((p) => p.id === id);
        if (productIdx < 0) {
          console.log("未找到产品");
          return;
        }
        const count = Number(item.previousElementSibling.innerText);

        const product = productsArr[productIdx];
        const _newCount = count + 1;
        const newCount = _newCount > maxCount ? maxCount : _newCount;
        if (newCount !== product.count) {
          product.count = newCount;
          item.previousElementSibling.innerText = newCount;
        }
      });
    });
  }

  renderPetList();
});
