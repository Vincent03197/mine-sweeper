// 'use strict'

// var gBoard = [];
// var gCell = {
//     minesAroundCount: 0,
//     isShown: false,
//     isMine: false,
//     isMarked: false
// }

// var gLevel = {
//     SIZE: 4,
//     MINES: 2
// }
// var gGame = {
//     isOn: false,
//     shownCount: 0,
//     markedCount: 0,
//     secsPassed: 0
// }

// const MINE = '💣';
// const FLAG = '🚩';
// const EMPTY = ' ';


// function initGame() {
//     var board = buildBoard(gLevel.SIZE);
//     renderBoard(board);
// }

// function buildBoard(SIZE) {
//     for (var i = 0; i < SIZE; i++) {
//         gBoard.push([]);
//         for (var j = 0; j < SIZE; j++) {
//             gBoard[i].push(gCell);
//         }
//     }
//     console.table(gBoard);
//     return gBoard;
// }

// function setMinesNegsCount(board) {
// }

// function renderBoard(board) {
//     var strHTML = '<table><tbody';
//     for (var i = 0; i < board.length; i++) {
//         strHTML += '<tr>';
//         for (var j = 0; j < board[0].length; j++) {
//             var currCell = board[i][j];
//             var className = `cell cell${i}'-'${j}`;
//             if (currCell.isMarked) currCell = FLAG;
//             else if (currCell.isShown) currCell = currCell.isMine ? MINE : currCell.minesAroundCount;
//             if (currCell.minesAroundCount === 0) currCell = EMPTY;


//             strHTML += `<td class="' ${className} '" onclick="cellClicked(this, ${i} , ${j})">${currCell}</td>`;
//         }
//     }

//     strHTML += '</tr>';
//     var elContainer = document.querySelector('.board-container')
//     elContainer.innerHTML = strHTML;
// }

// // renderCell(2, 2, MINE);
// // function renderCell(i, j, value) {
// //     var elCell = document.getElementsByClassName(`.cell${i}'-'${j}`);
// // elCell.innerHTML = value;
// //     console.log(elCell);

// // }

// function cellClicked(elCell, i, j) {
//     console.log(gBoard[i][j])
// }

// function callMarked(elCell) {
// }

// function checkGameOver() {
// }

// function expandShown(board, elCell, i, j) {


// }
