var a=["blue","green","red","orange"];
var range =["th","st","nd","rd"];
for (var i = 1; i < range.length; i++) {
	console.log(i+range[i]+" choice is "+a[i-1]);
}