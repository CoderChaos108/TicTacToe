const box = document.querySelector(".box");
let isRed = true;
let matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let clicked = [false, false, false, false, false, false, false, false, false];
let moveCount = 0;
let gameOver = false;

const checkWin = (i) => {
    const combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    return combos.some(([a, b, c]) => matrix[a] === i && matrix[b] === i && matrix[c] === i);
};

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");
const div7 = document.querySelector("#div7");
const div8 = document.querySelector("#div8");
const div9 = document.querySelector("#div9");

const resetGame = () => {
    matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    clicked = [false, false, false, false, false, false, false, false, false];
    moveCount = 0;
    gameOver = false;
    isRed = true;

    const divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
    divs.forEach(div => div.style.backgroundColor = "white");
};

const win = (i) => {
    alert(i === 1 ? "Red wins" : "Blue wins");
    gameOver = true;
    setTimeout(resetGame, 1000); // reset after 1 second
};

const checkDraw = () => {
    if (moveCount === 9 && !gameOver) {
        alert("It's a draw!");
        gameOver = true;
        setTimeout(resetGame, 1000); // reset after 1 second
    }
};

const handleClick = (index, div) => {
    if (clicked[index] || gameOver) return;
    clicked[index] = true;
    moveCount++;

    if (isRed) {
        div.style.backgroundColor = "red";
        matrix[index] = 1;
        if (checkWin(1)) {
            win(1);
            return;
        }
    } else {
        div.style.backgroundColor = "blue";
        matrix[index] = 2;
        if (checkWin(2)) {
            win(2);
            return;
        }
    }

    isRed = !isRed;
    checkDraw();
};

div1.addEventListener("click", () => handleClick(0, div1));
div2.addEventListener("click", () => handleClick(1, div2));
div3.addEventListener("click", () => handleClick(2, div3));
div4.addEventListener("click", () => handleClick(3, div4));
div5.addEventListener("click", () => handleClick(4, div5));
div6.addEventListener("click", () => handleClick(5, div6));
div7.addEventListener("click", () => handleClick(6, div7));
div8.addEventListener("click", () => handleClick(7, div8));
div9.addEventListener("click", () => handleClick(8, div9));
