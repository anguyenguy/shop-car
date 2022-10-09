data = [
	{
		name: "quan",
		age: 25
	}, 
	{
		name: "quang",
		age: 20
	}, 

]

$.each(data, function(index, value) {
	console.log(index + ': ' + value.name);
	console.log(index + ': ' + value.age);
});