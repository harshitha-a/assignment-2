function longCountryName(a) {
	var max='';
	for (var i = 0; i < a.length; i++) {
		if(a[i].length>max.length){
			max=a[i];
		}
	}
	return max;
}

var a=["Australia", "Germany", "United States of America"];
console.log(longCountryName(a));