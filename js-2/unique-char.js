function uniqueChar(str) {
	var obj={};
	var a='';
	for (var i = 0; i < str.length; i++) {
		if(!obj[str.charAt(i)]){
			obj[str.charAt(i)] = 1;
			a = a+str[i];
		}
	}
	return a;
}

var str = "the quick brown fox";
console.log(uniqueChar(str));