// Love handle
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

// // Copy Button
// function copyToClipboard(text) {
//   if (navigator.clipboard && window.isSecureContext) {
//     navigator.clipboard.writeText(text);
//   } else {
//     const textarea = document.createElement("textarea");
//     textarea.value = text;
//     textarea.style.position = "fixed";
//     textarea.style.opacity = "0";
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textarea);
//   }
// }

// const copyBtns = document.querySelectorAll(".copy-btn");
// copyBtns.forEach((copyBtn) => {
//   copyBtn.addEventListener("click", function () {
//     // console.log("clicked");
//     const phoneNumber = document.querySelector(".phone-number");
//     // console.log(phoneNumber);
//     const card1 = copyBtn.closest(".card1");
//     const card4 = copyBtn.closest(".card4");
//     if (phoneNumber) {
//       copyToClipboard(phoneNumber.innerText.trim());
//       console.log("copied:", phoneNumber.innerText.trim());
//     }
//   });
// });

// Traverse way
const callBtns = document.getElementsByClassName("call-btn");
// console.log(callBtns);

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const coinBox = parseInt(document.getElementById("coin-box").innerText);

    finalCoin = coinBox - 20;
    document.getElementById("coin-box").innerText = finalCoin;
    if (finalCoin < 20) {
      alert(
        "❌ You do no have sufficient coins, you need at least 20 coins to call"
      );
      return;
    }
    const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
    // console.log(cardTitle);
    const phoneNumber = callBtn.parentNode.parentNode.children[3].innerText;
    // console.log(phoneNumber);
    const historyContainer = document.getElementById("history-container");
    // creating Div
    const newCard = document.createElement("div");

    newCard.innerHTML = `<div class="px-3.5 py-2 bg-[##FAFAFA] shadow-md">
      <h3 class="font-inter font-semibold text-[18px] pt-4 pl-4 mb-1 text-[#111111]">
        ${cardTitle}
      </h3>
      <div>
      <p class="madurai-font text-[18px] text-[#5C5C5C] pl-4">${phoneNumber}</p>
      
      </div>
    </div>`;

    //   append in history container
    historyContainer.append(newCard);
    alert("📞" + "Calling " + cardTitle + " " + phoneNumber + "...");
  });
}

// Call history Traditional Way

// function getElement(id) {
//   const element = document.getElementById(id);
//   return element;
// }
// document.getElementById("card-btn1").addEventListener("click", function () {
//   const title = document.getElementById("card-title1").innerText;
//   const cardNumber = document.getElementById("card-number1").innerText;
//   //   console.log(title, cardNumber);
//   const historyContainer = document.getElementById("history-container");
//   // creating Div
//   const newCard = document.createElement("div");
//   newCard.innerHTML = `<div class="px-3.5 py-2 bg-[##FAFAFA] shadow-md">
//       <h3 class="font-inter font-semibold text-[18px] pt-4 pl-4 mb-1 text-[#111111]">
//         ${title}
//       </h3>
//       <p class="madurai-font text-[18px] text-[#5C5C5C] pl-4">${cardNumber}</p>
//     </div>`;

//   //   append in history container
//   historyContainer.append(newCard);
// });
