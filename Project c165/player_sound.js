AFRAME.registerComponent("sound", {
  init: function () {
    this.produceSound();
  },
  produceSound: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowDown"
      ) {
        var entity = document.querySelector("sound1");
        entity.components.sound.playSound();
      }
    });
  },
});
