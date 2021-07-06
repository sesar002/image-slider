const topRow = document.querySelector(".top-row");
const bottomRow = document.querySelector(".bottom-row");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const imageNum = 12;
let imagesArrayTop = [];
let imagesArrayBottom = [];

for (let i = 1; i <= imageNum; i++) {
  imagesArrayTop = [
    ...imagesArrayTop,
    `<div id="imgdiv"><img class="slider-image" src="/images/slider-image-${i}.jpg"></div>`,
  ];
  imagesArrayBottom = [
    ...imagesArrayBottom,
    `<div id="imgdiv"><img class="slider-image" src="/images/slider-image-${
      imageNum - i + 1
    }.jpg"></div>`,
  ];
}

topRow.innerHTML = imagesArrayTop.map((imgDiv) => imgDiv).join("");

bottomRow.innerHTML = imagesArrayBottom.map((imgDiv) => imgDiv).join("");

const handleLeftClick = () => {
  imagesArrayTop.unshift(imagesArrayTop[imageNum - 1]);
  imagesArrayTop.pop();

  imagesArrayBottom.shift();
  imagesArrayBottom.push(imagesArrayTop[0]);

  topRow.innerHTML = "";
  bottomRow.innerHTML = "";

  topRow.innerHTML = imagesArrayTop.map((imgDiv) => imgDiv);
  bottomRow.innerHTML = imagesArrayBottom.map((imgDiv) => imgDiv);

  const imgDiv = document.getElementById("imgdiv");
  imgDiv.setAttribute(
    "style",
    `translateX=${bottomRow.lastElementChild.offsetWidth}`
  );
  imgDiv.innerText = "1";
};

const handleRightClick = () => {
  imagesArrayTop.push(imagesArrayTop[0]);
  imagesArrayTop.shift();

  imagesArrayBottom.unshift(imagesArrayTop[imageNum - 1]);
  imagesArrayBottom.pop();

  topRow.innerHTML = "";
  bottomRow.innerHTML = "";

  topRow.innerHTML = imagesArrayTop.map((imgDiv) => imgDiv).join("");
  bottomRow.innerHTML = imagesArrayBottom.map((imgDiv) => imgDiv).join("");
};

leftArrow.addEventListener("click", handleLeftClick);
rightArrow.addEventListener("click", handleRightClick);
