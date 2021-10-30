const nav: HTMLElement | null = document.querySelector('.primary-navigation');

const navToggle: HTMLElement | null =
	document.querySelector('.mobile-nav-toggle');

navToggle?.addEventListener('click', () => {
	if (nav?.getAttribute('data-visible') === 'true') {
		nav.setAttribute('data-visible', 'false');
		navToggle.setAttribute('aria-expanded', 'false');
	} else {
		nav?.setAttribute('data-visible', 'true');
		navToggle.setAttribute('aria-expanded', 'true');
	}
});
