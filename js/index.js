renderThanks("Hey everyone, thanks for visiting my website! I just want use this space to thank everyone so much!");
checkThanksBox();

function renderThanks(word) {
    const thanksBox = document.getElementById("text");

    thanksBox.textContent = "";

    for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
            thanksBox.textContent += word[i];
            thanksBox.style.color = "cyan";
        }, i * 75);
    }
}

function checkThanksBox() {
    var checkBox = document.getElementById("check");
    var thanksBox = document.querySelector(".thanksBox");

    checkBox.addEventListener("click", () => {
        if (checkBox.checked) {
            thanksBox.style.display = "none";
        } else {
            thanksBox.style.display = "block";
        }
    });
}