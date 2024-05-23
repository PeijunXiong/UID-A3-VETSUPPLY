import "./index.js";

const maxCount = 1;
const detailArr = [
  {
    id: 1,
    img: "../../assets/images/detail1-img1.png",
  },
  {
    id: 2,
    img: "../../assets/images/detail1-img2.png",
  },
  {
    id: 3,
    img: "../../assets/images/detail1-img3.png",
  },
  {
    id: 4,
    img: "../../assets/images/detail1-img4.png",
  },
];
const detailInfo = {
  title: "Nothin to Hide Small Twist Stix Beff",
  desc: "FieldCrest Farms Nothin to Hide Small Twist Stix: Delicious, healthy chew for dogs.",
  price: 32.9,
  count: 1,
  isLove: false,
  title2: "Hills Prescription Diet t/d Dental Care Chicken Dry Dog Food",
  infos: [
    `Hills Prescription Diet t/d Dental Care Chicken Dry Dog
 FoodHil's t/d Canine Dental Health Dog Food is a unique kibble
 form food for dog's for your dog's dental health.The key
 ingredients help te reduce plaque and tartar buildup. it
 prevents teeth staining and eliminates bad breath.This
 scientifically proven dental formula is also loaded with
 antioxidants to improve immune health and help dogs stay
 healthyThis kibble formulation prevents the buildup of plague
 and tartar, and hence, controls periodontal diseases in canines.`,
    `Feed Hill's t/d Dental Dog Food only after vet's consent for
 complete dental care for dogs.`,
  ],
  score: 4.3,
  scoreLevel: [
    {
      level: 5,
      percent: 70,
    },
    {
      level: 4,
      percent: 90,
    },
    {
      level: 3,
      percent: 60,
    },
    {
      level: 2,
      percent: 40,
    },
    {
      level: 1,
      percent: 20,
    },
  ],
};
const detailData = {
  detailArr,
  detailInfo,
};

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
          return `<p class="m-star-info">
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
          return `<li><img src="../../assets/images/star.png" alt="" /></li>`;
        })
        .join("");
    }
    function renderScoreLevel() {
      return detailData.detailInfo.scoreLevel.sort((a, b) => a.level - b.level)
        .map((level) => {
          return `<li class="msr-right-progress-item">
                <span class="progress-item-idx">${level.level}</span>
                <span class="progress-item-star">Star</span>
                <div class="progress-main" style="--progress: ${level.percent}"></div>
            </li>`;
        })
        .join("");
    }
    const html = `
      <div class="m-top">
      <div class="m-top-pic-wrap">
        <div class="m-t-p-big">
          <img src="${detailData.detailArr[0].img}" id="mtpb-big-img" alt="" />
        </div>
        <div class="m-t-p-small">
         ${renderSmallImg()}
        </div>
      </div>
      <div class="m-top-det">
        <h2 class="m-top-det-title">
         ${detailData.detailInfo.title}
        </h2>
        <p class="m-top-det-title2">
         ${detailData.detailInfo.desc}
        </p>
        <div class="m-top-det-pirce">
          <span class="price-icon">$</span>
          <span class="price-text">${detailData.detailInfo.price}</span>
        </div>
        <img
          src="../../assets/images/detail1-img5.png"
          class="m-top-det-pic"
          alt=""
        />
        <div class="m-top-det-select">
          <p class="m-t-d-s-text">Select Pack:</p>
          <ul class="pack-list">
            <li class="pack-li-item active">Big</li>
            <li class="pack-li-item">Small</li>
            <li class="pack-li-item">mini</li>
          </ul>
        </div>
        <div class="m-top-det-footer">
          <div class="m-t-d-f-left">
            <div class="counter-wrap">
              <div class="command-btn" id="sub">-</div>
              <div class="count-num" id="count">${
                detailData.detailInfo.count
              }</div>
              <div class="command-btn" id="add">+</div>
            </div>
            <img
              src="../../assets/images/nolove.png"
              class="m-top-det-status"
              id="status"
              alt=""
            />
          </div>

          <button class="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
    <div class="m-star">
      <h2 class="m-star-title">
        Hills Prescription Diet t/d Dental Care Chicken Dry Dog Food
      </h2>
      <div>
       ${renderTextInfo()}
      </div>
      <div class="m-star-reviews">
        <h2 class="m-s-r-title">Product Reviews</h2>
        <div class="msr-wrap">
          <div class="m-s-r-left">
            <h2 class="msr-left-title">${detailData.detailInfo.score}</h2>
            <ul class="msr-left-star-wrap">
            ${renderScoreStar()}
            </ul>
          </div>
          <div class="m-s-r-line"></div>
            <ul class="msr-right-progress-wrap">
            ${renderScoreLevel()}
            </ul>
        </div>
      </div>
    </div>
      `;
    doms.main.innerHTML = html;
    bindEvent();
  }

  renderMain();
});
