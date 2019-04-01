//this is mainly jquery

$('#a1').on('click', function (){
  playerMove('a' , 1)
  if (ttt['a'][0]=== 1) {
    $('#1a').attr('src', 'images/cat.png')
  } else {
    $('#1a').attr('src', 'images/dog.png')
  }

});
//
$('#a2').on('click', function (){
  playerMove('a' , 2)
  if (ttt['a'][1]=== 1) {
    $('#2a').attr('src', 'images/cat.png')
  } else {
    $('#2a').attr('src', 'images/dog.png')
  }

});
//
$('#a3').on('click', function (){
  playerMove('a' , 3)
  if (ttt['a'][2]=== 1) {
    $('#3a').attr('src', 'images/cat.png')
  } else {
    $('#3a').attr('src', 'images/dog.png')
  }
});
//
$('#b1').on('click', function (){
  playerMove('b' , 1)
  if (ttt['b'][0]=== 1) {
    $('#1b').attr('src', 'images/cat.png')
  } else {
    $('#1b').attr('src', 'images/dog.png')
  }
});
//
$('#b2').on('click', function (){
  playerMove('b' , 2)
  if (ttt['b'][1]=== 1) {
    $('#2b').attr('src', 'images/cat.png')
  } else {
    $('#2b').attr('src', 'images/dog.png')
  }
});
//
$('#b3').on('click', function (){
  playerMove('b' , 3)
  if (ttt['b'][2]=== 1) {
    $('#3b').attr('src', 'images/cat.png')
  } else {
    $('#3b').attr('src', 'images/dog.png')
  }
});
//
$('#c1').on('click', function (){
  playerMove('c' , 1)
  if (ttt['c'][0]=== 1) {
    $('#1c').attr('src', 'images/cat.png')
  } else {
    $('#1c').attr('src', 'images/dog.png')
  }
});
//
$('#c2').on('click', function (){
  playerMove('c' , 2)
  if (ttt['c'][1]=== 1) {
    $('#2c').attr('src', 'images/cat.png')
  } else {
    $('#2c').attr('src', 'images/dog.png')
  }
});
//
$('#c3').on('click', function (){
  playerMove('c' , 3)
  if (ttt['c'][2]=== 1) {
    $('#3c').attr('src', 'images/cat.png')
  } else {
    $('#3c').attr('src', 'images/dog.png')
  }
});
//
$('#reset').on('click', function(){
  resetGame();
})
