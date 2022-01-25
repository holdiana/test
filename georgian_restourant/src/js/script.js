const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__nav-body');

if (iconMenu) {
	iconMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

//scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 0;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
			duration: '5000'
		});
	});
})


//slider
$('.carousel__inner').slick({
	prevArrow: '<button type="button"  class="carousel-control carousel-control__right"><img src="./icons/right-arrow.svg" alt="prev icon" class="carousel__arrow-icon"></button>',
	nextArrow: '<button type="button" class="carousel-control carousel-control__left"><img src="./icons/left-arrow.svg" alt="next icon" class="carousel__arrow-icon"></button>',
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 4,
	dots: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '5px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 376,
			settings: 'unslick'
		}
	]
});

//galery bottom
if (screen.width <= 768) {
	$('.gallery__slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		dotsClass: 'gallery__dots',
		responsive: [
			{
				breakpoint: 555,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 376,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})
}