window.onload=function(){
  var squarearea = document.getElementById("squarearea");
  var squarecount = parseInt(Math.random()*21)+30;
  var add = document.getElementById('add');
  add.onclick=addSquare;
  s
  var colors = document.getElementById('colors');
  colors.onclick=changeColors;
  for (var i = 0; i < squarecount; i++) {
    addSquare();
  }
};
funcion moveForward(){

}
function addSquare(){
  var square=document.createElement('div');
  square.className='square';
  square.style.left=parseInt(Math.random()*650)+"px";
  square.style.top=parseInt(Math.random()*250)+"px";
  square.style.backgroundColor=getRandomColor();
  var squarearea = document.getElementById('squarearea');
  squarearea.appendChild(square);
};
function getRandomColor(){
  //hex version
  /*var result = "#";
  var letters = "0123456789abcdef";
  for (var i = 0; i < 6 ; i++) {
    result+= letters.charAt(parseInt(Math.random()*letters.length));
  }*/
  //rgb version
  var result ="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
  return result;
};
function changeColors(){
  var squares=document.querySelectorAll("#squarearea div");
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=getRandomColor();
  }
};
