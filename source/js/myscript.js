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


	$(function () {
  $("#mydd a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu1").html($(this).html() + ' <span class="downicon"></span>');
  });
});

$(function () {
  $("#mydd2 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu2").html($(this).html() + ' <span class="downicon"></span>');
  });
});
$(function () {
  $("#mydd3 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu3").html($(this).html() + ' <span class="downicon"></span>');
  });
});
