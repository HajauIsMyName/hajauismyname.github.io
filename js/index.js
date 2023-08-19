renderThanks("Hey everyone, thanks for visiting my website! I just want use this space to thank everyone so much!");

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