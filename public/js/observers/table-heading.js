(function () {
  const tableHeading = document.getElementById("table-heading");

  const options = {
    rootMargin: "-97px 0px 0px 0px",
    threshold: [0]
  };

  const observer = new IntersectionObserver((entries) => {
    const { isIntersecting } = entries[0];
    tableHeading.classList.toggle("table-heading--sticky", !isIntersecting);
  }, options);

  observer.observe(tableHeading);
})();
