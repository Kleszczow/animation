for (const link of document.getElementsByClassName("listHover")) {
  link.onmousemove = (e) => {
    const percent = e.clientX / link.offsetWidth;

    const basePercent = 50,
      percentRange = 25,
      adjustablePercent = percentRange * percent;

    const blue = basePercent + adjustablePercent;

    link.style.setProperty("--percent", `${blue}%`);
  };
}
