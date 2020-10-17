(function () {
  let delay;
  const longpress = 1300;

  const allColorBtns = document.querySelectorAll("button");
  let colorBtn;

  for (let i = 0, j = allColorBtns.length; i < j; i++) {
    colorBtn = allColorBtns[i];

    // FOR DESKTOP
    colorBtn.addEventListener(
      "mousedown",
      function () {
        delay = setTimeout(showEditColorModal, longpress);
      },
      true
    );

    // FOR MOBILE DEVICES
    colorBtn.addEventListener(
      "touchstart",
      function () {
        delay = setTimeout(showEditColorModal, longpress);
      },
      true
    );

    // FOR DESKTOP
    colorBtn.addEventListener("mouseup", function (e) {
      clearTimeout(delay);
    });

    colorBtn.addEventListener("mouseout", function (e) {
      clearTimeout(delay);
    });

    // FOR MOBILE DEVICES
    colorBtn.addEventListener("touchend", function (e) {
      clearTimeout(delay);
    });
  }
})();
