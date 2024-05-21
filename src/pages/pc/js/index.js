import { flexible } from "../../../common/js/fixRem.js";
// 设置设计稿宽度1440
flexible(1440);

window.addEventListener("DOMContentLoaded", () => {
  const doms = {
    header: document.querySelector("#global-header-wrap"),
    footer: document.querySelector("#global-footer-wrap"),
  };
  // 渲染头部和底部
  function renderHeaderAndFooter() {
    // 渲染头部
    function _renderHeader() {
      if (!doms.header) return;
      doms.header.innerHTML = ` <div id="global-header">
        <div class="g-header-left">
          <img src="../../assets/images/icon-more.png" class="g-header-more" alt="">
          <img src="../../assets/images/logo.png" class="g-header-logo" alt="">
        </div>
        <div class="g-header-right">
          <div class="g-header-search">
            <img src="../../assets/images/icon-search.png" class="g-header-icon-search" alt="">
            <input type="text" class="g-header-input">
          </div>
          <div class="g-header-car">
            Shopping cart
          </div>
          <img src="../../assets/images/avatar.png" class="g-header-avatar" alt="">
        </div>
      </div>`;
    }
    // 渲染底部
    function _renderFooter() {
      if (!doms.footer) return;
      doms.footer.innerHTML = `<div id="global-footer-top">
        <div class="g-footer-top-left">
        <div class="g-f-t-l-top">
            <img src="../../assets/images/app-store.png" alt="">
            <img src="../../assets/images/google-play.png" style="margin-top: 4rem;" alt="">
        </div>
        <div class="g-f-t-l-main">
            <p>Support@vetsupply.com.au</p>
            <p>1300-838-787</p>
        </div>
        <div class="g-f-t-l-footer">
            <img src="../../assets/images/visa.png" alt="">
            <img src="../../assets/images/m-card.png" alt="">
            <img src="../../assets/images/american-express.png" alt="">
            <img src="../../assets/images/pay-pal.png" alt="">
        </div>
        </div>
        <ul class="g-footer-top-right">
        <li class="g-f-t-right-li">
            <span>Top Categories</span>
            <span>+</span>
        </li>
        <li class="g-f-t-right-li">
            <span>Infomation</span>
            <span>+</span>
        </li>
        <li class="g-f-t-right-li">
            <span>Useful Links</span>
            <span>+</span>
        </li>
        </ul>
    </div>
    <div id="global-footer-bottom">2024 VETSUPPLY.com.au - All Rights Reserved</div>`;
    }
    _renderHeader();
    _renderFooter();
  }
  // 绑定事件
  function bindEvent() {
    // 购物车按钮
    const cartDom = document.querySelector(".g-header-car");
    cartDom.addEventListener("click", () => {
        // TODO: 跳转到购物车页面
        console.log("去购物车页面");
    })
  }


  // 初始化头部和底部
  renderHeaderAndFooter()
  bindEvent()
});
