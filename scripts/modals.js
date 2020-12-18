const showNewColorModal = () => {
  newColorModal.style.display = "block";
  backdrop.style.display = "block";
  newColorInput.focus();
  newColorInput.value = "";
};

const closeNewColorModal = () => {
  newColorModal.style.display = "none";
  backdrop.style.display = "none";
};

const showEditColorModal = () => {
  editColorModal.style.display = "block";
  backdrop.style.display = "block";
  editColorInput.focus();
};

const closeEditColorModal = () => {
  editColorModal.style.display = "none";
  backdrop.style.display = "none";
};

const openSettings = () => {
  invisibleBackdrop.style.display = "block";
  settingsDiv.style.opacity = 1;
  settingsDiv.style.visibility = "visible";
  settingsDiv.style.transform = "scale(1)";

  for (let i = 0; i < toggleButtonCircles.length; i++) {
    const background = toggleButtonCircles[i];
    background.classList.remove("colored");
    background.classList.add("transparent");
  }
};

const closeSettings = () => {
  invisibleBackdrop.style.display = "none";
  settingsDiv.style.opacity = 0;
  settingsDiv.style.visibility = "hidden";
  settingsDiv.style.transform = "scale(.9)";

  for (let i = 0; i < toggleButtonCircles.length; i++) {
    const background = toggleButtonCircles[i];
    background.classList.remove("transparent");
    background.classList.add("colored");
  }
};