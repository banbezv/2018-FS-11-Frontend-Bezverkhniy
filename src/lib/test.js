const say = function (text) {
	var div=document.createElement('div');
	div.classList.add('colored_block');
	div.innerHTML=text;
	document.body.appendChild(div);
};

export default say;

