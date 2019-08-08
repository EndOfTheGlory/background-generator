var first_input = document.querySelector('.first_input');
var second_input = document.querySelector('.second_input');
var ch_left = document.querySelector('.choose_left_color');
var ch_right = document.querySelector('.choose_right_color');
var send = document.querySelector('.send_colors');
var h2 = document.querySelector('.initial_color');
var h3 = document.querySelector('h3');
var h4 = document.querySelector('h4');
var body = document.getElementById("holder");
var random = document.querySelector('.random');

function createBackground(){
	body.style.background = "linear-gradient(to right," + 
	first_input.value + 
	',' + second_input.value + ')';
	h3.textContent = 'Left color:' + first_input.value + ',' + "right color:" + second_input.value;
	clearInitialColor();
	// h3.textContent = body.style.background + ';';
}

function inputBackgroundColor(left_color,right_color){
	body.style.background = "linear-gradient(to right," + 
	left_color + ',' +
	right_color + ')';
	h3.textContent = 'Left color:' + left_color + ',' + "right color:" + right_color;
	clearInitialColor();
}

function inputChange(){
	if (ch_left.value.length > 0 && ch_right.value.length > 0){
		h4.textContent = 'Ok!We will try to attach these values!But nothing will change if' +
		"it's not according to the rules of color formate";
		var left_color = ch_left.value;
		var right_color = ch_right.value;
		inputBackgroundColor(left_color,right_color);
	}else{
		h4.textContent = "Please fill all the inputs!"
	}
}

function randomNumber(){
	var random_number = Math.floor(Math.random() * 256);
	return random_number;
}

function getRandomRgbNumber(){
	var color = [];
	var color_rgb = 'rgb('
	for (i = 0;i < 3 ; i++){
		color[i] = randomNumber();
		color_rgb = color_rgb + color[i] + ',';
	}
	var color_rgb = color_rgb.slice(0, -1);
	var color_rgb = color_rgb + ')';
	return color_rgb
}

function godOfRandom(){
	var left_color_rgb = getRandomRgbNumber();
	var rigth_color_rgb = getRandomRgbNumber();

	inputBackgroundColor(left_color_rgb,rigth_color_rgb);
}

function showInitialColor(){
	h2.textContent = 'Initial color is:' + first_input.value + ',' + second_input.value;
}

function clearInitialColor(){
	h2.textContent = ''
}

// function enterChange(button_number){
// 	if (button_number === 13){
// 		inputBackgroundColor(ch_left.value,ch_right.value)
// 	}
// }

first_input.addEventListener("input",createBackground);

second_input.addEventListener("input",createBackground);



send.addEventListener("click", inputChange);


random.addEventListener("click", godOfRandom);

showInitialColor();


// ch_left.addEventListener("keypress", enterChange);
// ch_right.addEventListener("keypress", enterChange);

//Good colors : #000 and #5555