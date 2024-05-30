import "./index.js";
import mockData from "../../../common/js/mockData.js";
const { maxCount, detailProduct1, detailProduct2 } = mockData;
const detailData =
  window.location.search === "?id=product1" ? detailProduct1 : detailProduct2;

window.addEventListener("DOMContentLoaded", () => {
  const doms = {
    main: document.querySelector("#global-main"),
  };
  function renderBigImg(id = 1) {
    const bigImg = doms.main.querySelector("#mtpb-big-img");
    const detailItem = detailData.detailArr.find((item) => +item.id === +id);
    bigImg.src = detailItem.img;
  }
  function bindEvent() {
    const innerDoms = {
      smallImg: document.querySelectorAll(".m-t-p-small img"),
      subBtn: document.querySelector("#sub"),
      addBtn: document.querySelector("#add"),
      countNum: document.querySelector("#count"),
      status: document.querySelector("#status"),
      addToCart: document.querySelector(".add-to-cart"),
    };
    innerDoms.smallImg.forEach((img) => {
      img.addEventListener("click", function () {
        const id = img.getAttribute("data-id");
        renderBigImg(id);
      });
    });
    innerDoms.subBtn.addEventListener("click", function () {
      const num = detailData.detailInfo.count;
      let count = num - 1;
      if (count < 0) {
        count = 0;
      }
      detailData.detailInfo.count = count;
      innerDoms.countNum.innerText = count;
    });
    innerDoms.addBtn.addEventListener("click", function () {
      const num = detailData.detailInfo.count;
      let count = num + 1;
      if (count > maxCount) {
        count = maxCount;
      }
      detailData.detailInfo.count = count;
      innerDoms.countNum.innerText = count;
    });
    innerDoms.status.addEventListener("click", function () {
      detailData.detailInfo.isLove = !detailData.detailInfo.isLove;
      innerDoms.status.src = detailData.detailInfo.isLove
        ? "../../assets/images/love.png"
        : "../../assets/images/nolove.png";
    });
    innerDoms.addToCart.addEventListener("click", function () {
      alert("Add to cart success");
    });
  }
  function renderMain() {
    function renderSmallImg() {
      return detailData.detailArr
        .map((detail) => {
          return `<img src="${detail.img}" data-id=${detail.id} />`;
        })
        .join("");
    }
    function renderTextInfo() {
      return detailData.detailInfo.infos
        .map((info) => {
          return `<p class="m-info-info">
              ${info}
            </p>`;
        })
        .join("");
    }
    function renderScoreStar() {
      const scroe = detailData.detailInfo.score;
      const scoreInt = parseInt(scroe);
      return Array.from({ length: 5 })
        .map((_, idx) => {
          if (idx + 1 <= scoreInt) {
            return `<li><img src="../../assets/images/star-active.png" alt="" /></li>`;
          }
          return `<li><img src="../../assets/images/star-def.png" alt="" /></li>`;
        })
        .join("");
    }
    function renderScoreLevel() {
      return detailData.detailInfo.scoreLevel
        .sort((a, b) => a.level - b.level)
        .map((level) => {
          return `<li class="m-star-progress-item">
                  <span class="progress-item-idx">${level.level}</span>
                  <span class="progress-item-star">Star</span>
                  <div class="progress-main" style="--progress: ${level.percent}"></div>
              </li>`;
        })
        .join("");
    }
    const html = `
      <div class="pic-wrap">
      <img src="${detailData.detailArr[0].img}" alt="" />
      <div class="pic-num-wrap">1/4</div>
    </div>
    <div class="m-top">
      <div class="m-top-det-pirce">
        <span class="price-icon">$</span>
        <span class="price-text">${detailData.detailInfo.price}</span>
      </div>
      <h2 class="m-top-det-title">
        ${detailData.detailInfo.title}
      </h2>
      <p class="m-top-det-title2">
        ${detailData.detailInfo.desc}
      </p>
      <img
        src="../../assets/images/app-detail3.png"
        class="m-top-det-pic"
        alt=""
      />
      <ul class="pack-list">
        <li class="pack-li-item active">Big</li>
        <li class="pack-li-item">Small</li>
        <li class="pack-li-item">mini</li>
      </ul>
    </div>
    <div class="m-info">
      <h2 class="m-info-title">
        ${detailData.detailInfo.title2}
      </h2>
      <div>
      ${renderTextInfo()}
      </div>
    </div>
    <div class="m-star-wrap">
      <h2 class="m-star-title">Product Reviews</h2>
      <div class="m-star-main">
        <h2 class="m-star-score">${detailData.detailInfo.score}</h2>
        <ul class="m-star-ul">
        ${renderScoreStar()}
        </ul>
      </div>
      <ul class="m-star-progress-wrap">
      ${renderScoreLevel()}
      </ul>
    </div>
        `;
    doms.main.innerHTML = html;
    bindEvent();
  }

  renderMain();
});
