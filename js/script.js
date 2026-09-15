const gameBoard = document.getElementById("game-board");

const flexDirectionSelect = document.getElementById("flex-direction");
const justifyContentSelect = document.getElementById("justify-content");
const alignItemsSelect = document.getElementById("align-items");
const flexWrapSelect = document.getElementById("flex-wrap");

const cssCode = document.getElementById("css-code");

const levelIndicator = document.getElementById("level-indicator");
const attemptCounter = document.getElementById("attempt-counter");

const levelTitle = document.getElementById("level-title");
const instruction = document.getElementById("instruction");

const previousButton = document.getElementById("previous-button");
const checkButton = document.getElementById("check-button");
const resetButton = document.getElementById("reset-button");
const nextButton = document.getElementById("next-button");
const applyCodeButton = document.getElementById("apply-code-button");

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
            "Place the crew in a vertical column on the right side of the board.",

        items: ["🌕", "🚀", "🛰️"],

        solution: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 5",
        instruction:
            "Reverse the horizontal order and center the crew in the middle of the board.",

        items: ["🚀", "🛰️", "🛸"],

        solution: {
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 6",
        instruction:
            "Arrange the crew vertically in reverse order and place the column at the bottom-left.",

        items: ["🚀", "👨‍🚀", "🌎"],

        solution: {
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 7",
        instruction:
            "Keep the crew in one row, distribute equal space around every item and center them vertically.",

        items: ["⭐", "🚀", "🛰️", "🌕"],

        solution: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 8",
        instruction:
            "Keep the crew in a row, create equal spacing between every item and place them at the top.",

        items: ["🚀", "🛸", "⭐", "🛰️"],

        solution: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 9",
        instruction:
            "Reverse the row, spread the crew from edge to edge and center them vertically.",

        items: ["🚀", "🌎", "🛰️", "👨‍🚀"],

        solution: {
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 10",
        instruction:
            "Build a vertical column, distribute equal space around the items and place the column on the right.",

        items: ["🌕", "🚀", "⭐"],

        solution: {
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-end",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 11",
        instruction:
            "Reverse the vertical order, distribute the items from top to bottom and center the column horizontally.",

        items: ["👨‍🚀", "🛰️", "🚀"],

        solution: {
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 12",
        instruction:
            "Move the horizontal crew to the bottom-right corner.",

        items: ["🚀", "🌕", "🛸"],

        solution: {
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 13",
        instruction:
            "Reverse the row, place the crew on the left side and move the row to the bottom.",

        items: ["🚀", "⭐", "🛰️"],

        solution: {
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 14",
        instruction:
            "Build a vertical column in the center and distribute equal space between the items.",

        items: ["🌎", "🚀", "👨‍🚀"],

        solution: {
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 15",
        instruction:
            "Reverse the vertical order, distribute equal space around the items and place the column on the left.",

        items: ["🛰️", "🚀", "🌕"],

        solution: {
            flexDirection: "column-reverse",
            justifyContent: "space-around",
            alignItems: "flex-start",
            flexWrap: "nowrap"
        }
    },

    {
        title: "Mission 16",
        instruction:
            "Allow the crew to wrap into multiple rows and spread the items across each row.",

        items: [
            "🚀",
            "👨‍🚀",
            "🛰️",
            "🛸",
            "🌎",
            "🌕",
            "⭐",
            "☄️"
        ],

        solution: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap"
        }
    },

    {
        title: "Mission 17",
        instruction:
            "Wrap the crew into multiple rows, center the items in each row and center the items vertically.",

        items: [
            "🚀",
            "🛰️",
            "🌎",
            "⭐",
            "🛸",
            "🌕",
            "☄️",
            "👨‍🚀"
        ],

        solution: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
        }
    },

    {
        title: "Mission 18",
        instruction:
            "Reverse the horizontal order, allow wrapping and distribute equal space around the crew.",

        items: [
            "🚀",
            "🛰️",
            "🌕",
            "🌎",
            "🛸",
            "⭐",
            "👨‍🚀",
            "☄️"
        ],

        solution: {
            flexDirection: "row-reverse",
            justifyContent: "space-around",
            alignItems: "flex-start",
            flexWrap: "wrap"
        }
    },

    {
        title: "Mission 19",
        instruction:
            "Arrange the crew vertically, allow wrapping into new columns and center the items horizontally.",

        items: [
            "🚀",
            "🛰️",
            "🌕",
            "🌎",
            "🛸",
            "⭐",
            "👨‍🚀",
            "☄️"
        ],

        solution: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap"
        }
    },

    {
        title: "Mission 20",
        instruction:
            "Final mission: reverse the vertical order, enable reverse wrapping, distribute the crew evenly and center the items within each column.",

        items: [
            "🚀",
            "👨‍🚀",
            "🛰️",
            "🛸",
            "🌎",
            "🌕",
            "⭐",
            "☄️"
        ],

        solution: {
            flexDirection: "column-reverse",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap-reverse"
        }
    }
];


let currentLevel = 0;

let solved = false;

const completedLevels = new Set();

const attemptsPerLevel =
    new Array(levels.length).fill(0);


function getCurrentSettings() {
    return {
        flexDirection: flexDirectionSelect.value,
        justifyContent: justifyContentSelect.value,
        alignItems: alignItemsSelect.value,
        flexWrap: flexWrapSelect.value
    };
}


function updateCodeBox() {
    const settings = getCurrentSettings();

    cssCode.value =
`flex-direction: ${settings.flexDirection};
justify-content: ${settings.justifyContent};
align-items: ${settings.alignItems};
flex-wrap: ${settings.flexWrap};`;
}


function applyFlexboxSettings() {
    gameBoard.style.flexDirection = flexDirectionSelect.value;
    gameBoard.style.justifyContent = justifyContentSelect.value;
    gameBoard.style.alignItems = alignItemsSelect.value;
    gameBoard.style.flexWrap = flexWrapSelect.value;

    updateCodeBox();
}


function setDefaultControls() {
    flexDirectionSelect.value =
        defaultSettings.flexDirection;

    justifyContentSelect.value =
        defaultSettings.justifyContent;

    alignItemsSelect.value =
        defaultSettings.alignItems;

    flexWrapSelect.value =
        defaultSettings.flexWrap;

    applyFlexboxSettings();
}


function renderItems(items) {
    gameBoard.innerHTML = "";

    items.forEach((item) => {

        const element =
            document.createElement("div");

        element.className = "game-item";
        element.textContent = item;

        gameBoard.appendChild(element);
    });
}


function updateAttemptCounter() {
    attemptCounter.textContent =
        `Attempts: ${attemptsPerLevel[currentLevel]}`;
}


function loadLevel() {
    const level = levels[currentLevel];

    levelIndicator.textContent =
        `Level ${currentLevel + 1} of ${levels.length}`;

    levelTitle.textContent =
        level.title;

    instruction.textContent =
        level.instruction;

    solved =
        completedLevels.has(currentLevel);

    updateAttemptCounter();

    feedback.className =
        "feedback";


    if (solved) {

        feedback.textContent =
            "✅ You already completed this mission. You may solve it again or continue.";

        feedback.className =
            "feedback success";

        nextButton.disabled = false;

    } else {

        feedback.textContent =
            "Choose the Flexbox properties and check your solution.";

        nextButton.disabled = true;
    }


    previousButton.disabled =
        currentLevel === 0;


    if (currentLevel === levels.length - 1) {

        nextButton.textContent =
            "Restart Game";

    } else {

        nextButton.textContent =
            "Next Mission";
    }


    renderItems(level.items);

    setDefaultControls();
}


function resetGame() {
    completedLevels.clear();

    attemptsPerLevel.fill(0);

    currentLevel = 0;

    solved = false;

    loadLevel();
}


function checkSolution() {
    const solution =
        levels[currentLevel].solution;


    attemptsPerLevel[currentLevel]++;

    updateAttemptCounter();


    const isCorrect =
        flexDirectionSelect.value === solution.flexDirection &&
        justifyContentSelect.value === solution.justifyContent &&
        alignItemsSelect.value === solution.alignItems &&
        flexWrapSelect.value === solution.flexWrap;


    if (isCorrect) {

        solved = true;

        completedLevels.add(currentLevel);

        feedback.className =
            "feedback success";


        if (currentLevel === levels.length - 1) {

            feedback.textContent =
                "🎉 Excellent! You completed all 20 Flexbox missions.";

            nextButton.textContent =
                "Restart Game";

        } else {

            feedback.textContent =
                "✅ Correct! Mission completed. You can continue to the next mission.";
        }


        nextButton.disabled =
            false;

    } else {

        solved = false;

        feedback.className =
            "feedback error";

        feedback.textContent =
            "❌ Not quite right. There is no penalty — change the Flexbox properties and try again.";

        nextButton.disabled =
            !completedLevels.has(currentLevel);
    }
}


function goToNextLevel() {
    if (
        !solved &&
        !completedLevels.has(currentLevel)
    ) {
        return;
    }


    if (
        currentLevel ===
        levels.length - 1
    ) {

        resetGame();

        return;
    }


    currentLevel++;

    loadLevel();
}


function goToPreviousLevel() {
    if (currentLevel === 0) {
        return;
    }

    currentLevel--;

    loadLevel();
}


function applyCodeFromEditor() {
    const code =
        cssCode.value;


    const allowedValues = {

        "flex-direction": [
            "row",
            "row-reverse",
            "column",
            "column-reverse"
        ],

        "justify-content": [
            "flex-start",
            "center",
            "flex-end",
            "space-between",
            "space-around",
            "space-evenly"
        ],

        "align-items": [
            "flex-start",
            "center",
            "flex-end",
            "stretch"
        ],

        "flex-wrap": [
            "nowrap",
            "wrap",
            "wrap-reverse"
        ]
    };


    const newSettings = {
        flexDirection:
            flexDirectionSelect.value,

        justifyContent:
            justifyContentSelect.value,

        alignItems:
            alignItemsSelect.value,

        flexWrap:
            flexWrapSelect.value
    };


    const declarations =
        code.split(";");


    let validDeclarationCount = 0;

    let invalidDeclaration = false;


    declarations.forEach((declaration) => {

        const trimmed =
            declaration.trim();


        if (trimmed === "") {
            return;
        }


        const parts =
            trimmed.split(":");


        if (parts.length !== 2) {

            invalidDeclaration = true;

            return;
        }


        const property =
            parts[0].trim();

        const value =
            parts[1].trim();


        if (
            !allowedValues[property] ||
            !allowedValues[property].includes(value)
        ) {

            invalidDeclaration = true;

            return;
        }


        validDeclarationCount++;


        if (property === "flex-direction") {
            newSettings.flexDirection = value;
        }

        if (property === "justify-content") {
            newSettings.justifyContent = value;
        }

        if (property === "align-items") {
            newSettings.alignItems = value;
        }

        if (property === "flex-wrap") {
            newSettings.flexWrap = value;
        }

    });


    if (
        invalidDeclaration ||
        validDeclarationCount === 0
    ) {

        feedback.className =
            "feedback error";

        feedback.textContent =
            "⚠️ Invalid CSS. Use only flex-direction, justify-content, align-items and flex-wrap with valid values.";

        return;
    }


    flexDirectionSelect.value =
        newSettings.flexDirection;

    justifyContentSelect.value =
        newSettings.justifyContent;

    alignItemsSelect.value =
        newSettings.alignItems;

    flexWrapSelect.value =
        newSettings.flexWrap;


    applyFlexboxSettings();


    feedback.className =
        "feedback info";

    feedback.textContent =
        "CSS applied successfully. Press Check Solution when you are ready.";
}


/* Select Controls */

flexDirectionSelect.addEventListener(
    "change",
    applyFlexboxSettings
);

justifyContentSelect.addEventListener(
    "change",
    applyFlexboxSettings
);

alignItemsSelect.addEventListener(
    "change",
    applyFlexboxSettings
);

flexWrapSelect.addEventListener(
    "change",
    applyFlexboxSettings
);


/* Buttons */

applyCodeButton.addEventListener(
    "click",
    applyCodeFromEditor
);

resetButton.addEventListener(
    "click",
    resetGame
);

checkButton.addEventListener(
    "click",
    checkSolution
);

nextButton.addEventListener(
    "click",
    goToNextLevel
);

previousButton.addEventListener(
    "click",
    goToPreviousLevel
);


/* Apply code with Command/Ctrl + Enter */

cssCode.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            (event.metaKey || event.ctrlKey)
        ) {

            event.preventDefault();

            applyCodeFromEditor();
        }

    }
);


loadLevel();


const boardWrapper =
    document.querySelector(".board-wrapper");


function fitGameBoardToScreen() {
    const boardWidth = 600;
    const boardHeight = 350;

    const availableWidth =
        boardWrapper.clientWidth;

    const scale =
        Math.min(
            1,
            availableWidth / boardWidth
        );

    gameBoard.style.transform =
        `scale(${scale})`;

    boardWrapper.style.height =
        `${boardHeight * scale}px`;
}


window.addEventListener(
    "resize",
    fitGameBoardToScreen
);


fitGameBoardToScreen();