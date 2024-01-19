let num1 = 0;

document.getElementById("num").textContent = num1;

document.getElementById("inrc").onclick = function(){

  num1 ++;
  document.getElementById("num").textContent = num1;

}

document.getElementById("decr").onclick = function(){

  num1 --;
  document.getElementById("num").textContent = num1;

}

document.getElementById("rst").onclick = function(){

  num1 = 0;
  document.getElementById("num").textContent = num1;

}