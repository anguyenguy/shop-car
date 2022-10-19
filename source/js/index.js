var items = [];
$.each(data, function(index, value) {
	items.push( `<article class="card">
	<img src="./image/cars/car_${value.index}/${value.main_image}.jpg" alt="Car ${value.index}">
	<div class="text">
	  <h3>${value.car_name} ${value.year_created}</h3>
	  <p>${value.text}.</p>
	  <p class="price">${value.price} đ</p>
	  <a href="details.html?index=${value.index}" class="btn btn-primary">Xem ngay</a>
	</div>
      </article>`);
});

$.each(items, function(index, value) {
	$(".main").append(value);
});

