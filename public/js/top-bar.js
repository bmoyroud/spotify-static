const thresholdArray = (steps) =>
  Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0);

const options = {
  // root: document.querySelector(".top-bar"),
  // rootMargin: "-60px 0px 0px 0px",
  threshold: thresholdArray(50)
};

const topBarBackgrounds = document.querySelectorAll(".top-bar__background");
const topBarButton = document.querySelector(".top-bar__content-button");
const topBarTitle = document.querySelector(".top-bar__title");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  // Note: we only have one target
  // const { isIntersecting } = entries[0];
  // console.log(isIntersecting);

  // topBarBackgrounds.forEach((background) =>
  //   background.classList.toggle("top-bar__background--visible", !isIntersecting)
  // );

  // Note: we only have one target
  const { intersectionRatio } = entries[0];
  const roundedIntersectionRatio = (
    Math.round(intersectionRatio * 100) / 100
  ).toFixed(2);
  console.log(roundedIntersectionRatio);
  topBarBackgrounds.forEach((background) => {
    background.style.cssText = `${background.style.cssText}; opacity: ${
      1 - roundedIntersectionRatio
    }`;
  });

  if (topBarButton) {
    topBarButton.classList.toggle(
      "top-bar__content-button--visible",
      intersectionRatio < 0.5
    );
  }

  if (topBarTitle) {
    topBarTitle.classList.toggle(
      "top-bar__title--visible",
      intersectionRatio < 0.5
    );
  }
}, options);

const target = document.getElementById("sentinel");
console.log(target);

observer.observe(target);
