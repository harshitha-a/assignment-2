function testDateWeekend(date) {
	var a = new Date(date);

	if(a.getDay() === 6 || a.getDay() === 0){
		return "Weekend";
	}else{
		return "Weekday";
	}
}
console.log(testDateWeekend("May 1 2011"));