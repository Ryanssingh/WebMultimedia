window.onload=function () {
  document.getElementById('bold').onclick=boldClick;
  document.getElementById('italic').onclick=italicClick;
  document.getElementById('serif').onclick=fontClick;
  document.getElementById('monospace').onclick=fontClick;
  document.getElementById('fantasy').onclick=fontClick;
}
function boldClick(){
  var lyrics = document.getElementById('lyrics');
  if (this.checked){
    lyrics.style.fontWeight="bold";
  }
  else {
    lyrics.style.fontWeight="normal";
  }
}
function italicClick(){
  var lyrics = document.getElementById('lyrics');
  if (this.checked){
    lyrics.style.fontStyle="italic";
  }
  else {
    lyrics.style.fontStyle="normal";
  }
}
function fontClick() {
  //change font
  var lyrics = document.getElementById('lyrics');
  lyrics.style.fontFamily=this.id;
  //change size
  var fontSize= parseInt(lyrics.style.fontSize)||12;
  fontSize+=2;
  lyrics.style.fontSize=fontSize+"pt";
}
