window.mouseDown = false;
document.onmousedown = function(){
	window.mouseDown = true;
}
document.onmouseup = function(){
	window.mouseDown = false;
}
var buttons = document.getElementsByTagName('button')
var color = 'red'
var grid = document.getElementById('mainContainer')
for (var i = 0; i <= 255; i++) {
	var div = document.createElement('div')
	div.setAttribute('style', 'background-color: white; width: 30px; height: 30px; border: 2px solid black')
	div.addEventListener('mouseover', changeColor)
	grid.appendChild(div)
}
function changeColor() {
	if (window.mouseDown) {
		this.setAttribute('style', `background-color: ${color}; width: 30px; height: 30px; border: 2px solid black`)
	}
}
function changeBrush(col){
	color = col
}