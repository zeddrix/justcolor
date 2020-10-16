(function () {
  let delay;
  const longpress = 1300;

  const allColorBtns = document.querySelectorAll("button");
  let colorBtn;

  for (let i = 0, j = allColorBtns.length; i < j; i++) {
    colorBtn = allColorBtns[i];

    colorBtn.addEventListener(
      "mousedown",
      function (e) {
        const showEditColorModal = () => {
          const editColorModal = document.querySelector(".edit-color-modal");
          editColorModal.style.display = "block";
        };
        delay = setTimeout(showEditColorModal, longpress);
      },
      true
    );

    colorBtn.addEventListener("mouseup", function (e) {
      // On mouse up, we know it is no longer a longpress
      clearTimeout(delay);
    });

    colorBtn.addEventListener("mouseout", function (e) {
      clearTimeout(delay);
    });
  }
})();
