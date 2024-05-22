import "./index.js";

const petListArr = [
  {
    name: "Dog",
    img: "../../assets/images/pet-dog.png",
  },
  {
    name: "Cat",
    img: "../../assets/images/pet-cat.png",
  },
  {
    name: "Rabiit",
    img: "../../assets/images/pet-rabiit.png",
  },
  {
    name: "Nutria",
    img: "../../assets/images/pet-nutria.png",
  },
  {
    name: "Dutch Pig",
    img: "../../assets/images/pet-dutch-pig.png",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const doms = {
    petListWrap: document.querySelector(".m-main-petsList"),
  };
  function renderPetList() {
    const html = petListArr.map((item, idx) => {
      return `
            <div class="m-main-petsList-pet" data-idx=${idx}>
                <img src="${item.img}" alt="">
                <div class="m-main-petslist-pet-button">${item.name}</div>
              </div>
            `;
    }).join("");
    doms.petListWrap.innerHTML = html
  }
  function bindEvent() {
    doms.petListWrap.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("m-main-petslist-pet-button")) {
        window.location.href = `./ProductPage.html`;
      }
    });
  }

  renderPetList();
  bindEvent()
});
