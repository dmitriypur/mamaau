import LazyLoad from "vanilla-lazyload";

// Работает с объектами с класом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: '[data-src],[data-srcset],[data-bg]',
	class_loaded: '_lazy-loaded',
	use_native: true
});

const lazyBackground = new LazyLoad({
	elements_selector: '[data-bg]',
	class_loaded: 'lazy',
 });

// Обновить модуль
//lazyMedia.update();