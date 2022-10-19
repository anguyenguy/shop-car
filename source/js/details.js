const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let index = params.index; 


var folder = `image/cars/car_${index}`

$.each(data, function(i, value) {
	if(index==value.index){
                $.ajax({
                        url : folder,
                        success: function (data) {
                            $(data).find("a").attr("href", function (i, val) {
                                console.log(val)
                                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                                    $("main").prepend( "<img src='"+ folder + val +"'>" );
                                } 
                            });
                        }
                    });
        }
});