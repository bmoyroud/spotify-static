const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { target: element } = entry;
    const childContentRect = element.getBoundingClientRect();
    const parentContentRect = element.parentElement.getBoundingClientRect();
    const { bottom: parentBottom } = parentContentRect;
    const { top: childTop } = childContentRect;
    console.log(element, childTop > parentBottom);
  }
});

const matches = document.querySelectorAll(".card-grid .card");
for (const element of matches) {
  resizeObserver.observe(element);
}
