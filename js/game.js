//this is mainly jquery


$('#a1').on('click', function (){
  $('#a1').unbind('click'); // disables after click but how do i get it on again???
  if (playerOneTurn) {
    $('#a1').attr('src', 'images/cat.png')
  } else {
    $('#a1').attr('src', 'images/dog.png')
  }
  playerMove('a' , 1)
});

//
$('#a2').on('click', function (){
  $('#a2').off('click');
  if (playerOneTurn) {
    $('#a2').attr('src', 'images/cat.png')
  } else {
    $('#a2').attr('src', 'images/dog.png')
  }
  playerMove('a' , 2)
});
//
$('#a3').on('click', function (){
  $('#a3').off('click');
  if (playerOneTurn) {
    $('#a3').attr('src', 'images/cat.png')
  } else {
    $('#a3').attr('src', 'images/dog.png')
  }
  playerMove('a' , 3)
});
//
$('#b1').on('click', function (){
  $('#b1').off('click');
  if (playerOneTurn) {
    $('#b1').attr('src', 'images/cat.png')
  } else {
    $('#b1').attr('src', 'images/dog.png')
  }
  playerMove('b' , 1)
});
//
$('#b2').on('click', function (){
  $('#b2').off('click');
  if (playerOneTurn) {
    $('#b2').attr('src', 'images/cat.png')
  } else {
    $('#b2').attr('src', 'images/dog.png')
  }
  playerMove('b' , 2)
});
//
$('#b3').on('click', function (){
  $('#b3').off('click');
  if (playerOneTurn) {
    $('#b3').attr('src', 'images/cat.png')
  } else {
    $('#b3').attr('src', 'images/dog.png')
  }
  playerMove('b' , 3)
});
//
$('#c1').on('click', function (){
  $('#c1').off('click');
  if (playerOneTurn) {
    $('#c1').attr('src', 'images/cat.png')
  } else {
    $('#c1').attr('src', 'images/dog.png')
  }
  playerMove('c' , 1)
});
//
$('#c2').on('click', function (){
  $('#c2').off('click');
  if (playerOneTurn) {
    $('#c2').attr('src', 'images/cat.png')
  } else {
    $('#c2').attr('src', 'images/dog.png')
  }
  playerMove('c' , 2)
});
//
$('#c3').on('click', function (){
  $('#c3').off('click');
  if (playerOneTurn) {
    $('#c3').attr('src', 'images/cat.png')
  } else {
    $('#c3').attr('src', 'images/dog.png')
  }
  playerMove('c' , 3)
});
//
$('#reset').on('click', function(){ // resets images and game logic.
  resetGame();
  $('.default').attr('src', 'images/catdog.png')
})
