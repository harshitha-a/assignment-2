var str='the quick brown fox';
function upperCase(str) {

	var a = str.split('');
	var b=[];

	for (var i = 0; i < a.length; i++) {
	 	b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
	 } 
		
	return b.join('');
}
console.log(upperCase(str));