const gameBoard = document.getElementById("game-board");

const flexDirectionSelect = document.getElementById("flex-direction");
const justifyContentSelect = document.getElementById("justify-content");
const alignItemsSelect = document.getElementById("align-items");
const flexWrapSelect = document.getElementById("flex-wrap");

const resetButton = document.getElementById("reset-button");
const feedback = document.getElementById("feedback");


const defaultSettings = {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap"
};


function applyFlexboxSettings() {
    gameBoard.style.flexDirection = flexDirectionSelect.value;
    gameBoard.style.justifyContent = justifyContentSelect.value;
    gameBoard.style.alignItems = alignItemsSelect.value;
    gameBoard.style.flexWrap = flexWrapSelect.value;
}


function resetLevel() {
    flexDirectionSelect.value = defaultSettings.flexDirection;
    justifyContentSelect.value = defaultSettings.justifyContent;
    alignItemsSelect.value = defaultSettings.alignItems;
    flexWrapSelect.value = defaultSettings.flexWrap;

    applyFlexboxSettings();

    feedback.textContent =
        "Level reset. Choose the Flexbox properties and try again.";
}


flexDirectionSelect.addEventListener("change", applyFlexboxSettings);
justifyContentSelect.addEventListener("change", applyFlexboxSettings);
alignItemsSelect.addEventListener("change", applyFlexboxSettings);
flexWrapSelect.addEventListener("change", applyFlexboxSettings);

resetButton.addEventListener("click", resetLevel);


applyFlexboxSettings();