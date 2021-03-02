/* script.js in guide-castle-goodroid */

// support css
let onScrollOrResize_ticking = false;
function onScrollOrResize(scroll) {
  console.log(`scroll is ${scroll}`);

  // header
  try {
    const headerImgDiv = document.getElementById("header-background");
    const headerMainDiv = document.getElementById("header-main");
    const headerHeightDifference = headerImgDiv.clientHeight - headerMainDiv.clientHeight;
    if (scroll < headerHeightDifference) {
      headerImgDiv.style.top = `${Math.max(-scroll, -headerHeightDifference)}px`;
      console.log(`headerImgDiv.style.top = "${Math.max(-scroll, -headerHeightDifference)}px";`);
    }
  } catch (e) {
    console.log(e.message);
  }

  onScrollOrResize_ticking = false;
}

// scroll event
let onScroll_lastScrollPos = 0;
window.addEventListener("scroll", e => {
  onScroll_lastScrollPos = window.scrollY;
  if (!onScrollOrResize_ticking) {
    window.requestAnimationFrame(() => {
      onScrollOrResize(onScroll_lastScrollPos);
    });
    onScrollOrResize_ticking = true;
  }
});

// resize event
window.addEventListener("resize", e => {
  if (!onScrollOrResize_ticking) {
    window.requestAnimationFrame(() => {
      onScrollOrResize(onScroll_lastScrollPos);
    });
    onScrollOrResize_ticking = true;
  }
});
