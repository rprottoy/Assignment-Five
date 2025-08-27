const loveIcons = document.querySelectorAll(".love-icon");
loveIcons.forEach((loveIcon) => {
  loveIcon.addEventListener("click", function () {
    // console.log("Clicked");
    const loveCounter = parseInt(
      document.getElementById("love-counter").innerText
    );
    // console.log(loveCounter);
    const totalLoveCount = loveCounter + 1;
    document.getElementById("love-counter").innerText = totalLoveCount;
  });
});
