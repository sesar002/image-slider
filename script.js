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
    `<img class="slider-image" src="/images/slider-image-${i}.jpg">`,
  ];
  imagesArrayBottom = [
    ...imagesArrayBottom,
    `<img class="slider-image" src="/images/slider-image-${
      imageNum - i + 1
    }.jpg">`,
  ];
}

console.log(imagesArrayBottom);
console.log(imagesArrayTop);

for (let i = 0; i < imageNum; i++) {
  const divTop = document.createElement("div");
  divTop.innerHTML = imagesArrayTop[i];
  topRow.appendChild(divTop);

  const divBottom = document.createElement("div");
  divBottom.innerHTML = imagesArrayBottom[i];
  bottomRow.appendChild(divBottom);
}

const handleLeftClick = () => {
  imagesArrayTop.unshift(imagesArrayTop[imageNum - 1]);
  imagesArrayTop.pop();

  imagesArrayBottom.shift();
  imagesArrayBottom.push(imagesArrayTop[0]);

  topRow.innerHTML = "";
  bottomRow.innerHTML = "";

  for (let i = 0; i < imageNum; i++) {
    const divTop = document.createElement("div");
    divTop.innerHTML = imagesArrayTop[i];
    topRow.appendChild(divTop);

    const divBottom = document.createElement("div");
    divBottom.innerHTML = imagesArrayBottom[i];
    bottomRow.appendChild(divBottom);
  }

  console.log(imagesArrayTop);
};

const handleRightClick = () => {
  imagesArrayTop.push(imagesArrayTop[0]);
  imagesArrayTop.shift();

  imagesArrayBottom.unshift(imagesArrayTop[imageNum - 1]);
  imagesArrayBottom.pop();

  topRow.innerHTML = "";
  bottomRow.innerHTML = "";

  for (let i = 0; i < imageNum; i++) {
    const divTop = document.createElement("div");
    divTop.innerHTML = imagesArrayTop[i];
    topRow.appendChild(divTop);

    const divBottom = document.createElement("div");
    divBottom.innerHTML = imagesArrayBottom[i];
    bottomRow.appendChild(divBottom);
  }

  console.log(imagesArrayTop);
};

leftArrow.addEventListener("click", handleLeftClick);
rightArrow.addEventListener("click", handleRightClick);
