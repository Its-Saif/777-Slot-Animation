window.addEventListener("DOMContentLoaded", () => {
	let increment1 = 0;
	let increment2 = 0;
	let increment3 = 0;
	const rotationInterval = 2300;
	const delayBetweenCarousels = 300;

	const carousel1 = $(".carou1");
	const carousel2 = $(".carou2");
	const carousel3 = $(".carou3");

	const rotateCarousel = (carousel, increment) => {
		carousel.css({
			"-webkit-transform": "rotateX(" + increment * -30 + "deg)",
			transform: "rotateX(" + increment * -30 + "deg)",
		});
		carousel.attr("data-state", (increment % 12) + 1);
	};

	const animateCarousels = (startTime) => {
		const currentTime = Date.now();
		const elapsedTime = currentTime - startTime;

		increment1 = Math.floor(elapsedTime / rotationInterval);
		increment2 = Math.floor(
			(elapsedTime - delayBetweenCarousels) / rotationInterval
		);
		increment3 = Math.floor(
			(elapsedTime - 2 * delayBetweenCarousels) / rotationInterval
		);

		rotateCarousel(carousel1, increment1);
		rotateCarousel(carousel2, increment2);
		rotateCarousel(carousel3, increment3);

		requestAnimationFrame(() => {
			animateCarousels(startTime);
		});
	};

	const startTime = Date.now();
	animateCarousels(startTime);
});
