window.onload=function(){
  document.getElementById("ok").onclick=computeTip();
  document.getElementById("good").onclick=computeTip();
  document.getElementById("great").onclick=computeTip();
};
function computeTip(){
  var subtotal = parseFloat(document.getElementById('subtotal'));
  var tipPercent = parseInt(this.value);
  var tipAmmount = subtotal*tipPercent/100;
  document.getElementById('total').innerHTML= "Tip: $"+subtotal;//+tipAmmount;
};
