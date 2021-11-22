const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__nav-items');

if (iconMenu) {
	iconMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

//slider
$('.carousel__inner').slick({
	prevArrow: '<button type="button"  class="carousel-control carousel-control__right"><img src="./icons/right-arrow.svg" alt="prev icon" class="carousel__arrow-icon"></button>',
	nextArrow: '<button type="button" class="carousel-control carousel-control__left"><img src="./icons/left-arrow.svg" alt="next icon" class="carousel__arrow-icon"></button>',
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 5,
	dots: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 555,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});