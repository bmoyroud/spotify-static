class CustomProgressBar {
  constructor(element) {
    if (!element instanceof HTMLElement) throw Error("Please provide an HTML element");
    this.el = element;
    this.rect = element.getBoundingClientRect();
  }

  _getProgress = (clientX) =>
    ((clientX - this.rect.left) / this.rect.width) * 100;

  _downListener = (e) => {
    console.log("Down");
    const pctComplete = this._getProgress(e.clientX);
    this.el.style.setProperty("--progress", `${pctComplete}%`);
    this.el.classList.add("progress-bar--active");

    // important: add listener to body to detect if mouse leaves progress bar box
    window.addEventListener("mousemove", this._moveListener);
    window.addEventListener("mouseup", this._upListener);
  };

  _moveListener = (e) => {
    console.log("Move");
    const { left, right } = this.rect;
    if (e.clientX < left || e.clientX > right) return;
    const pctComplete = this._getProgress(e.clientX);
    this.el.style.setProperty("--progress", `${pctComplete}%`);
  };

  _upListener = (e) => {
    console.log("Up");
    this.el.classList.remove("progress-bar--active");
    window.removeEventListener("mousemove", this._moveListener);
    window.removeEventListener("mouseup", this._upListener);
  };

  initialize = () => this.el.addEventListener("mousedown", this._downListener);
}

const progressBars = document.getElementsByClassName("progress-bar");
for (const progressBar of progressBars) {
  const pb = new CustomProgressBar(progressBar);
  pb.initialize();
}
