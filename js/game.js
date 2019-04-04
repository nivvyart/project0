//this is mainly jquery


//clears and adds if fields can be clicked
const clearClass = function() {
  $('#a1, #a2, #a3, #b1, #b2, #b3, #c1, #c2, #c3').removeClass('disableClick')
}

const lockDown = function () {
  $('#a1, #a2, #a3, #b1, #b2, #b3, #c1, #c2, #c3').addClass('disableClick')
}


//win condition functions
const catWins = function() {
console.log('cat wins');
lockDown();
$('.winConditionCat').css('display', 'block')
}

const dogWins = function() {
console.log('dog wins');
lockDown()
$('.winConditionDog').css('display', 'block')
}

const draw = function() {
lockDown()
$('.winConditionDraw').css('display', 'block')
}


//game interface
$('#a1').on('click', function (){
  $('#a1').addClass('disableClick')
  if (playerOneTurn) {
    $('#a1').attr('src', 'images/cat.png')
  } else {
    $('#a1').attr('src', 'images/dog.png')
  }
  playerMove('a' , 1)
});

//
$('#a2').on('click', function (){
  $('#a2').addClass('disableClick')
  if (playerOneTurn) {
    $('#a2').attr('src', 'images/cat.png')
  } else {
    $('#a2').attr('src', 'images/dog.png')
  }
  playerMove('a' , 2)
});
//
$('#a3').on('click', function (){
  $('#a3').addClass('disableClick')
  if (playerOneTurn) {
    $('#a3').attr('src', 'images/cat.png')
  } else {
    $('#a3').attr('src', 'images/dog.png')
  }
  playerMove('a' , 3)
});
//
$('#b1').on('click', function (){
  $('#b1').addClass('disableClick')
  if (playerOneTurn) {
    $('#b1').attr('src', 'images/cat.png')
  } else {
    $('#b1').attr('src', 'images/dog.png')
  }
  playerMove('b' , 1)
});
//
$('#b2').on('click', function (){
  $('#b2').addClass('disableClick')
  if (playerOneTurn) {
    $('#b2').attr('src', 'images/cat.png')
  } else {
    $('#b2').attr('src', 'images/dog.png')
  }
  playerMove('b' , 2)
});
//
$('#b3').on('click', function (){
  $('#b3').addClass('disableClick')
  if (playerOneTurn) {
    $('#b3').attr('src', 'images/cat.png')
  } else {
    $('#b3').attr('src', 'images/dog.png')
  }
  playerMove('b' , 3)
});
//
$('#c1').on('click', function (){
  $('#c1').addClass('disableClick')
  if (playerOneTurn) {
    $('#c1').attr('src', 'images/cat.png')
  } else {
    $('#c1').attr('src', 'images/dog.png')
  }
  playerMove('c' , 1)
});
//
$('#c2').on('click', function (){
  $('#c2').addClass('disableClick')
  if (playerOneTurn) {
    $('#c2').attr('src', 'images/cat.png')
  } else {
    $('#c2').attr('src', 'images/dog.png')
  }
  playerMove('c' , 2)
});
//
$('#c3').on('click', function (){
  $('#c3').addClass('disableClick')
  if (playerOneTurn) {
    $('#c3').attr('src', 'images/cat.png')
  } else {
    $('#c3').attr('src', 'images/dog.png')
  }
  playerMove('c' , 3)
});
//


//modal buttons and reset functions start here
$('#reset').on('click', function(){ // resets images and game logic.
  resetGame();
  $('.default').attr('src', 'images/catdog.png')
})

//// closes play again window
$('#catClose').on('click', function(){
  $('.winConditionCat').css('display', 'none')
})

$('#dogClose').on('click', function(){
  $('.winConditionDog').css('display', 'none')
})

$('#drawClose').on('click', function(){
  $('.winConditionDraw').css('display', 'none')
})

$('#anotherGameClose').on('click', function(){
  $('.anotherGame').css('display', 'none')
})
//// programming for play again button cat/dog/draw
$('#catPlayAgain').on('click', function(){
  resetGame();
  $('.default').attr('src', 'images/catdog.png')
  clearClass()
  $('.winConditionCat').css('display', 'none')
})

$('#dogPlayAgain').on('click', function(){
  resetGame();
  $('.default').attr('src', 'images/catdog.png')
  clearClass()
  $('.winConditionDog').css('display', 'none')
})

$('#drawPlayAgain').on('click', function(){
  resetGame();
  $('.default').attr('src', 'images/catdog.png')
  clearClass()
  $('.winConditionDraw').css('display', 'none')
})




//species select button.
$('#modalBtn').on('click', function(){
  $('.modal').css('display', 'block')
})
$('#catChoice').on('click', function(){
  resetGame();
  $('.default').attr('src', 'images/catdog.png')
  clearClass()
  playerOneTurn = true;
  $('.modal').css('display', 'none')
})

$('#dogChoice').on('click', function(){
  resetGame();
  $('.default').attr('src', 'images/catdog.png')
  clearClass()
  playerOneTurn = false;
  $('.modal').css('display', 'none')
})
