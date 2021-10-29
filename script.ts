const nav:
	| ({
			dataset: {
				visible: 'true' | 'false';
			};
	  } & HTMLElement)
	| null = document.querySelector('.primary-navigation');

const navToggle: HTMLElement | null =
	document.querySelector('.mobile-nav-toggle');

navToggle?.addEventListener('click', () => {
	if (nav?.dataset.visible === 'true') {
		nav!.dataset.visible = 'false';
		navToggle?.setAttribute('aria-expanded', 'false');
	} else {
		nav!.dataset.visible = 'true';
		navToggle?.setAttribute('aria-expanded', 'true');
	}
});
