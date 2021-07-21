'use strict'

var gBoard = [];

var gCell = {
    minesAroundCount: 0,
    isShown: false,
    isMine: false,
    isMarked: false
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

const MINE = '💣';
const FLAG = '🚩';
const EMPTY = ' ';


function buildBoard(SIZE) {
    for (var i = 0; i < SIZE; i++) {
        gBoard.push([]);
        for (var j = 0; j < SIZE; j++) {
            gBoard[i].push(gCell);
        }
    }
    return gBoard;
}

function initGame() {
    var board = buildBoard(4);
    renderBoard(board);
}

function renderBoard(board) {
	var strHTML = '<table><tbody>';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>';
		for (var j = 0; j < board[0].length; j++) {
			var currCell = board[i][j];
			var cellClass = getClassName({ i, j })

			if (currCell.type === MINE) cellClass += '-mine';
			else if (currCell.type === EMPTY) cellClass += '-flag';

            strHTML += `<td class="cell ${cellClass}></td>`
		}
		strHTML += '</tr></tbody></table>';
	}
    var elContainer = document.querySelector('.board-container')
    elContainer.innerHTML = strHTML;
}


function renderCell(location, value) {

var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
elCell.innerHTML = value;
}

function getClassName(location) {
	var cellClass = 'cell-' + location.i + '-' + location.j;
	return cellClass;
}
