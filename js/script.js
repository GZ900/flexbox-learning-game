const gameBoard = document.getElementById("game-board");

const flexDirectionSelect = document.getElementById("flex-direction");
const justifyContentSelect = document.getElementById("justify-content");
const alignItemsSelect = document.getElementById("align-items");
const flexWrapSelect = document.getElementById("flex-wrap");

const levelIndicator = document.getElementById("level-indicator");
const attemptCounter = document.getElementById("attempt-counter");
const levelTitle = document.getElementById("level-title");
const instruction = document.getElementById("instruction");

const checkButton = document.getElementById("check-button");
const resetButton = document.getElementById("reset-button");
const nextButton = document.getElementById("next-button");
const feedback = document.getElementById("feedback");


const defaultSettings = {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap"
};


const levels = [
    {
        title: "Mission 1",
        instruction:
            "Keep the crew in a row at the top and center them horizontally.",
        items: ["🚀", "👨‍🚀", "🛰️"],

        solution: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 2",
        instruction:
            "Keep the crew in a row, spread them across the board and move them to the bottom.",
        items: ["🚀", "🛸", "🛰️"],

        solution: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 3",
        instruction:
            "Arrange the crew from top to bottom and center the column horizontally.",
        items: ["👨‍🚀", "🌎", "🚀"],

        solution: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 4",
        instruction:
            "Arrange the crew vertically in reverse order and center them in the middle of the board.",
        items: ["🌕", "🚀", "👨‍🚀"],

        solution: {
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 5",
        instruction:
            "Reverse the crew's horizontal order, center the group and place it at the bottom.",
        items: ["🚀", "🛰️", "🛸"],

        solution: {
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 6",
        instruction:
            "Allow the space crew to wrap into multiple rows, spread the items across each row and center them vertically.",
        items: ["🚀", "👨‍🚀", "🛰️", "🛸", "🌎", "🌕", "⭐", "☄️"],

        solution: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
        }
    }
];


let currentLevel = 0;
let attempts = 0;
let solved = false;


function applyFlexboxSettings() {
    gameBoard.style.flexDirection = flexDirectionSelect.value;
    gameBoard.style.justifyContent = justifyContentSelect.value;
    gameBoard.style.alignItems = alignItemsSelect.value;
    gameBoard.style.flexWrap = flexWrapSelect.value;
}


function setDefaultControls() {
    flexDirectionSelect.value = defaultSettings.flexDirection;
    justifyContentSelect.value = defaultSettings.justifyContent;
    alignItemsSelect.value = defaultSettings.alignItems;
    flexWrapSelect.value = defaultSettings.flexWrap;

    applyFlexboxSettings();
}


function renderItems(items) {
    gameBoard.innerHTML = "";

    items.forEach((item) => {
        const element = document.createElement("div");

        element.className = "game-item";
        element.textContent = item;

        gameBoard.appendChild(element);
    });
}


function loadLevel() {
    const level = levels[currentLevel];

    levelIndicator.textContent =
        `Level ${currentLevel + 1} of ${levels.length}`;

    levelTitle.textContent = level.title;
    instruction.textContent = level.instruction;

    attempts = 0;
    solved = false;

    attemptCounter.textContent = "Attempts: 0";

    feedback.textContent =
        "Choose the Flexbox properties and check your solution.";

    feedback.className = "feedback";

    nextButton.disabled = true;
    nextButton.textContent = "Next Mission";

    renderItems(level.items);
    setDefaultControls();
}


function resetLevel() {
    setDefaultControls();

    solved = false;
    nextButton.disabled = true;

    feedback.className = "feedback";
    feedback.textContent =
        "Level reset. Choose the Flexbox properties and try again.";
}


function checkSolution() {
    const solution = levels[currentLevel].solution;

    attempts++;

    attemptCounter.textContent = `Attempts: ${attempts}`;

    const isCorrect =
        flexDirectionSelect.value === solution.flexDirection &&
        justifyContentSelect.value === solution.justifyContent &&
        alignItemsSelect.value === solution.alignItems &&
        flexWrapSelect.value === solution.flexWrap;


    if (isCorrect) {
        solved = true;

        feedback.className = "feedback success";

        if (currentLevel === levels.length - 1) {
            feedback.textContent =
                "🎉 Mission complete! You finished all Flexbox missions.";

            nextButton.textContent = "Restart Game";
        } else {
            feedback.textContent =
                "✅ Correct! Mission completed. You can continue to the next mission.";
        }

        nextButton.disabled = false;
    } else {
        solved = false;

        feedback.className = "feedback error";
        feedback.textContent =
            "❌ Not quite right. Change the Flexbox properties and try again.";

        nextButton.disabled = true;
    }
}


function goToNextLevel() {
    if (!solved) {
        return;
    }

    if (currentLevel === levels.length - 1) {
        currentLevel = 0;
    } else {
        currentLevel++;
    }

    loadLevel();
}


flexDirectionSelect.addEventListener("change", applyFlexboxSettings);
justifyContentSelect.addEventListener("change", applyFlexboxSettings);
alignItemsSelect.addEventListener("change", applyFlexboxSettings);
flexWrapSelect.addEventListener("change", applyFlexboxSettings);

resetButton.addEventListener("click", resetLevel);
checkButton.addEventListener("click", checkSolution);
nextButton.addEventListener("click", goToNextLevel);


loadLevel();