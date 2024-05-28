import { flexible } from "../../../common/js/fixRem.js";
// 设置设计稿宽度375
flexible(375);

window.addEventListener("DOMContentLoaded", () => {
  const doms = {
    header: document.querySelector("#global-header-wrap"),
    footer: document.querySelector("#global-footer-wrap"),
    aside: document.querySelector("#global-aside"),
  };
  // 渲染头部和底部
  function renderHeaderAndFooter() {
    // 渲染头部
    function _renderHeader() {
      if (!doms.header) return;
      doms.header.innerHTML = `<div id="global-header">
        <div class="g-header-left">
          <img
            src="../../assets/images/logo.png"
            class="g-header-logo"
            alt=""
          />
        </div>
        <div class="g-header-right">
          <div class="g-header-search">
            <img
              src="../../assets/images/icon-search.png"
              class="g-header-icon-search"
              alt=""
            />
            <input type="text" class="g-header-input" />
          </div>
          <img
            src="../../assets/images/icon-more.png"
            class="g-header-more"
            alt=""
          />
        </div>
      </div>`;
    }
    // 渲染底部
    function _renderFooter() {
      if (!doms.footer) return;
      doms.footer.innerHTML = `<div id="global-footer-top">
      <ul class="g-footer-top-ul">
        <li class="g-f-t-right-li">
          <span>Top Categories</span>
          <span class="li-icon">+</span>
        </li>
        <li class="g-f-t-right-li">
          <span>Infomation</span>
          <span class="li-icon">+</span>
        </li>
        <li class="g-f-t-right-li">
          <span>Useful Links</span>
          <span class="li-icon">+</span>
        </li>
      </ul>
      <div class="g-f-t-l-top">
        <img src="../../assets/images/app-store.png" alt="" />
        <img
          src="../../assets/images/google-play.png"
          style="margin-top: 2rem"
          alt=""
        />
      </div>
      <div class="g-f-t-l-main">
        <p>Support@vetsupply.com.au</p>
        <p>1300-838-787</p>
      </div>
      <div class="g-f-t-l-footer">
        <img src="../../assets/images/visa.png" alt="" />
        <img src="../../assets/images/m-card.png" alt="" />
        <img src="../../assets/images/american-express.png" alt="" />
        <img src="../../assets/images/pay-pal.png" alt="" />
      </div>
    </div>
    <div id="global-footer-bottom">
      2024 VETSUPPLY.com.au - All Rights Reserved
    </div>`;
    }
    // 渲染aside
    function _renderAside() {
      if (!doms.aside) return;
      doms.aside.innerHTML = `<img src="../../assets/images/shop-cart.png" id="shopcart" alt="">
        <img src="../../assets/images/avatar.png" id="personal" alt="">`;
    }
    _renderHeader();
    _renderFooter();
    _renderAside();
  }
  // 绑定事件
  function bindEvent() {
    // shoppingCar btn
    const cartDom = document.querySelector("#shopcart");
    cartDom.addEventListener("click", () => {
      window.location.href = "./ShoppingCartPage.html";
    });
    // avatar
    const personalDom = document.querySelector("#personal");
    personalDom.addEventListener("click", () => {
      window.location.href = "./PayAndPersonalPage.html";
    });

    // logo
    const logoDom = document.querySelector(".g-header-logo");
    logoDom.addEventListener("click", () => {
      window.location.href = "./HomePage.html";
    });
  }

  // 初始化头部和底部
  renderHeaderAndFooter();
  bindEvent();
});
