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

// Traverse way
const callBtns = document.getElementsByClassName("call-btn");
// console.log(callBtns);

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const coinBox = parseInt(document.getElementById("coin-box").innerText);
    if (coinBox < 20) {
      alert(
        "❌ You do no have sufficient coins, you need at least 20 coins to call"
      );
      return;
    }
    finalCoin = coinBox - 20;
    document.getElementById("coin-box").innerText = finalCoin;

    const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
    // console.log(cardTitle);
    const phoneNumber = callBtn.parentNode.parentNode.children[3].innerText;

    // Adding Call Time
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const callTime = now.toLocaleTimeString([], options);
    // console.log(phoneNumber);
    const historyContainer = document.getElementById("history-container");
    // creating Div
    const newCard = document.createElement("div");

    newCard.innerHTML = `<div id="history" class="px-3.5 py-2 bg-[##FAFAFA] shadow-md">
      <h3 class="font-inter font-semibold text-[18px] pt-4 pl-4 mb-1 text-[#111111]">
        ${cardTitle}
      </h3>
      <div class="flex justify-between">
      <p class="madurai-font text-[18px] text-[#5C5C5C] pl-4">${phoneNumber}</p>
      <span class="madurai-font text-[18px] text-[#111111] pr-4">${callTime}</span>
      
      </div>
    </div>`;

    //   append in history container
    historyContainer.append(newCard);
    alert("📞" + "Calling " + cardTitle + " " + phoneNumber + "...");
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");

  // Remove all child elements (clear history)
  historyContainer.innerHTML = "";
});

// ✅ Function to copy text
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text);
  }
  //   else {
  //     // Fallback for older browsers
  //     const textarea = document.createElement("textarea");
  //     textarea.value = text;
  //     textarea.style.position = "fixed";
  //     textarea.style.opacity = "0";
  //     document.body.appendChild(textarea);
  //     textarea.select();
  //     document.execCommand("copy");
  //     document.body.removeChild(textarea);
  //   }
}

// ✅ Attach event listeners to all copy buttons
const copyButtons = document.getElementsByClassName("copy-btn");

for (let copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function () {
    // Find the parent card of this button
    const card = copyBtn.parentNode.parentNode.children[3].innerText;
    console.log(card);
    // Find the phone number inside this card
    // const phoneEl = document.querySelector(".phone-number");
    const copyCounter = parseInt(
      document.getElementById("copy-counter").innerText
    );

    const totalCopyCount = copyCounter + 1;
    document.getElementById("copy-counter").innerText = totalCopyCount;

    if (card) {
      const number = card;
      copyToClipboard(number);

      alert(`📋 Phone number ${number} copied to clipboard!`);
    }
    // return number;
  });
}
