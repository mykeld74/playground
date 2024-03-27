import { quartInOut, linear } from 'svelte/easing';

const slideIn = (node, { duration, delay }) => {
	return {
		duration,
		delay,
		css: (t) => {
			const eased = quartInOut(1 - t);
			return `
        opacity: ${t};
        transform: translateX(${eased * 600}px);

      `;
		}
	};
};
const slideOut = (node, { duration }) => {
	return {
		duration,
		css: (t) => {
			const eased = quartInOut(1 - t);
			return `
        opacity: ${t};
        transform: translateX(${eased * -600}px);

      `;
		}
	};
};
const swing = (node, { duration, direction }) => {
	let turn = 90;
	let offset = 200;
	let origin = 'bottom right 50px';

	if (direction === 'reverse') {
		turn = -90;
		offset = -200;
		origin = 'bottom left 50px';
	}
	return {
		duration,

		css: (t) => {
			const eased = linear(1 - t);
			return `
        opacity: ${t};
        transform: rotateY(${eased * turn}deg) rotateX(${eased * turn * -1}deg) translateZ(${
				eased * 1
			}em) translateX(${eased * offset}px) scale(${t});
        transform-origin: ${origin};
      `;
		}
	};
};
const swingOut = (node, { duration }) => {
	return {
		duration,
		css: (t) => {
			const eased = linear(1 - t);
			return `
      opacity: ${t};
      transform: rotateY(${eased * -90}deg) rotateX(${eased * 90}deg) translateZ(${
				eased * 1
			}em) translateX(${eased * -200}px) scale(${t});
      transform-origin: bottom left 50px;
    `;
		}
	};
};

export { slideIn, slideOut, swing, swingOut };
