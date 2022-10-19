const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let index = params.index; 


var folder = `./image/cars/car_${index}`
var items = [];

$.each(data, function(i, value) {
	if(index==value.index){
                items.push( `
                        <p class"text">${value.text}.</p>
                        `);
                for(let i=1; i<=value.total_image; i++){
                        items.push( `
                        <img src="./image/cars/car_${value.index}/${i}.jpg" alt="Car ${value.index}">
                        `);
                }
                items.push( `<div class="center">
                        <a class="btn btn-default" href="https://zalo.me/0968024501">Mua ngay</a>
                        </div>
                        `);
        }
});

$.each(items, function(index, value) {
	$(".main").append(value);
});
