new Splide( '.splide', {
    type: 'loop',
    perPage: 4,
    autoplay: false,
    interval: 5000,
    breakpoints: {
        1373: {
            perPage: 3,
        },
		992: {
			perPage: 2,
	    },
        768: {
			perPage: 1,
	    },
    },
}).mount();

$('#btnToggle').click(function(){
    $('.list-menu-wrap').toggle()
    if($(this).html() == '<i class="bi bi-list"></i>'){
        $(this).html('<i class="bi bi-x-lg"></i>')
    }else{
        $(this).html('<i class="bi bi-list"></i>')
    }
  })

  new Splide( 'specialist-slider', {
    type: 'loop',
    perPage: 8,
    autoplay: false,
    interval: 5000,
    breakpoints: {
        1373: {
            perPage: 6,
        },
		992: {
			perPage: 4,
	    },
        768: {
			perPage: 3,
	    },
    },
}).mount();