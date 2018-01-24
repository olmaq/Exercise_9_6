//przyciskNaStronie.addEventListener(typ, handler);

//przyciskNaStronie.addEventListener(typ, function(e) {});

/*function checkOnclickEvent(param) {
	console.log(param);
}

var inputElem = document.getElementById('js-inputValue'),
	imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
	checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
	e.target.value += ' test ';
});*/

var add = document.getElementById('addElem');
//console.log(add);
var list = document.getElementById('list');
//console.log(list);
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var number = document.getElementsByTagName('li').length;	
	element.innerHTML = 'item ' + number;
	list.appendChild(element);
});


