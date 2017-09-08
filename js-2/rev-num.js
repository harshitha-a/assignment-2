function revNum(num) {
	var a=num.toString();
	var b='';
	for(var i=a.length-1;i>=0;i--){
		b += a[i];
	}
	return parseInt(b);
}
console.log(revNum(78654321));