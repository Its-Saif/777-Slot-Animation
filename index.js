window.addEventListener("DOMContentLoaded", () => {
	let increment1 = 0;
	let increment2 = 0;
	let increment3 = 0;

	const carousel1 = $(".carou1");
	const carousel2 = $(".carou2");
	const carousel3 = $(".carou3");

	const rotateCarousel = (carousel, increment) => {
		carousel.css({
			"-webkit-transform": "rotateX(" + increment * -60 + "deg)",
			transform: "rotateX(" + increment * -60 + "deg)",
		});
		carousel.attr("data-state", (increment % 6) + 1);
	};

	const animateCarousel1 = () => {
		increment1++;
		rotateCarousel(carousel1, increment1);
		setTimeout(animateCarousel1, 2300);
	};

	const animateCarousel2 = () => {
		increment2++;
		rotateCarousel(carousel2, increment2);
		setTimeout(animateCarousel2, 2300);
	};

	const animateCarousel3 = () => {
		increment3++;
		rotateCarousel(carousel3, increment3);
		setTimeout(animateCarousel3, 2300);
	};

	setTimeout(() => {
		animateCarousel1();
	}, 300);

	setTimeout(() => {
		animateCarousel2();
	}, 600);

	setTimeout(() => {
		animateCarousel3();
	}, 900);
});
