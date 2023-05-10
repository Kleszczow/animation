const imagine = document.querySelector("#imagine");

const rotateElement = () => {
  isScrole = true;
  const windowScroll = Math.floor(window.scrollY * 0.15);
  imagine.style.transform = `rotate(-${windowScroll}deg)`;
  console.log(windowScroll);
};
addEventListener("scroll", rotateElement);
