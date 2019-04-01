//create and object to store the game data
const ttt = {
  a: [0, 0, 0],
  b: [0, 0, 0],
  c: [0, 0, 0]
}

//board checker - needs work - for humans
const bchk = function() {
  console.log(ttt['a']);
  console.log(ttt['b']);
  console.log(ttt['c']);
}

//game reset
const resetGame = function () {
for (let i = 0; i < ttt['a'].length; i++) {
  ttt['a'][i] = 0
}
for (let i = 0; i < ttt['b'].length; i++) {
  ttt['b'][i] = 0
}
for (let i = 0; i < ttt['c'].length; i++) {
  ttt['c'][i] = 0
}
bchk();
}


// player turn managemnet
let playerOneTurn = true;
const playerMove = function(row, pos) {
if (playerOneTurn) {
  player1(row, pos);
  } else {
  player2(row, pos);
  }
}

  //define two players, fun player 1 / player 2
const player1 = function(row, pos) {
// check for legal move, use a funtion?
  if (ttt[row][pos-1] === 1 || ttt[row][pos-1] === 2){
    console.log('illegal move')
    } else { // make the move, ie update game logic
    ttt[row][pos-1] = 1
    winCheck();
    playerOneTurn = false;
    }
  }
const player2 = function(row, pos) {
// check for legal move, use a funtion?
  if (ttt[row][pos-1] === 1 || ttt[row][pos-1] === 2){
    console.log('illegal move')
    } else { // make the move, ie update game logic
    ttt[row][pos-1] = 2
    winCheck();
    playerOneTurn = true;
    }
  }

//define win conditions. --- need to define draw condition too. if array total exceeds 12
// locations
const winCheck = function() {
  a1 = ttt.a[0]
  a2 = ttt.a[1]
  a3 = ttt.a[2]
  b1 = ttt.b[0]
  b2 = ttt.b[1]
  b3 = ttt.b[2]
  c1 = ttt.c[0]
  c2 = ttt.c[1]
  c3 = ttt.c[2]

//a1/a2/a3
if (a1 === 1 && a2 === 1 && a3 === 1) {
  console.log('player 1 wins');
}
if (a1 === 2 && a2 === 2 && a3 === 2){
  console.log('player 2 wins');
}
//b1/b2/b3
if (b1 === 1 && b2 === 1 && b3 === 1) {
  console.log('player 1 wins');
}
if (b1 === 2 && b2 === 2 && b3 === 2){
  console.log('player 2 wins');
}
//c1/c2/c3
if (c1 === 1 && c2 === 1 && c3 === 1) {
  console.log('player 1 wins');
}
if (c1 === 2 && c2 === 2 && c3 === 2){
  console.log('player 2 wins');
}
//a1,b1,c1
if (a1 === 1 && b1 === 1 && c1 === 1) {
  console.log('player 1 wins');
}
if (a1 === 2 && b1 === 2 && c1 === 2){
  console.log('player 2 wins');
}
//a2, b2, c2
if (a2 === 1 && b2 === 1 && c2 === 1) {
  console.log('player 1 wins');
}
if (a2 === 2 && b2 === 2 && c2 === 2){
  console.log('player 2 wins');
}
//a3, b3, c3
if (a3 === 1 && b3 === 1 && c3 === 1) {
  console.log('player 1 wins');
}
if (a3 === 2 && b3 === 2 && c3 === 2){
  console.log('player 2 wins');
}
//a1, b2, c3
if (a1 === 1 && b2 === 1 && c3 === 1) {
  console.log('player 1 wins');
}
if (a1 === 2 && b2 === 2 && c3 === 2){
  console.log('player 2 wins');
}
//a3, b2, c1
if (a3 === 1 && b2 === 1 && c1 === 1) {
  console.log('player 1 wins');
}
if (a3 === 2 && b2 === 2 && c1 === 2){
  console.log('player 2 wins');
}
bchk();
}


// each position needs a variable location, whats the most logical way to record these? ie MOVES
//ttt[array][position]
