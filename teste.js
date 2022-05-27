const objTicTacToe = {
  boxes: [
    "box1",
    "box2",
    "box3",
    "box4",
    "box5",
    "box6",
    "box7",
    "box8",
    "box9"
  ],
  vitoriasPossiveis: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ],
  end: false
};

"box1.value" != "" ? objTicTacToe.boxes.splice(objTicTacToe.boxes.indexOf("box1"), 1) : ""

// console.log(objTicTacToe.boxes)
const random = Math.floor(Math.random() * objTicTacToe.boxes.length);
console.log(random, objTicTacToe.boxes[random])