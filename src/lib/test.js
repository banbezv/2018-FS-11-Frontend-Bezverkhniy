const say = function (text) {
	var div=document.createElement('div');
	div.style.background='#00ffdd';
	div.innerHTML=text;
	document.body.appendChild(div);
};

export default say;

