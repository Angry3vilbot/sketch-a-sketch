var grid = document.getElementById('mainContainer')
for (var i = 0; i <= 255; i++) {
	var div = document.createElement('div')
	div.setAttribute('style', 'background-color: white; width: 30px; height: 30px; border: 2px solid black')
	grid.appendChild(div)
}