const say = function (text) {
	var div=document.createElement('div');
	div.style.class='colored_block';
	//div.innerHTML=text;
	document.body.appendChild(div);
};

export default say;

