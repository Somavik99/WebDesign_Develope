let MacBookMagnified = document.querySelector(".MacBook");
let MacBook = document.querySelector(".MacBook__image");
let MacBookDetails = document.querySelector(".cursor__mag");

MacBookMagnified.addEventListener("mousemove", MagnifyImage, false);

function MagnifyImage(e) {
  style = MacBookDetails.style;
  X = e.pageX - this.offsetLeft;
  Y = e.pageY - this.offsetTop;
  innerImageWidth = MacBook.offsetWidth;
  innerImageHeight = MacBook.offsetHeight;
  ImagX = (X / innerImageWidth) * 100;
  ImgY = (Y / innerImageHeight) * 100;
  if (X > 0.01 * innerImageWidth) {
    ImagX += 0.15 * ImagX;
  }
  if (Y >= 0.1 * innerImageHeight) {
    ImgY += 0.15 * ImgY;
  }

  style.backgroundPositionX = `${ImagX - 9}%`;
  style.backgroundPositionY = `${ImgY - 9}%`;
  setTimeout(() => {
    style.left = X - 380 + "px";
    style.top = Y - 200 + "px";
  }, 100);
}
