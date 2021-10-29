const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const header = document.querySelector('header');
const nav = document.querySelector('.primary-navigation');

header?.addEventListener('click', e => {
	const target = e.target as HTMLDivElement;
	if (target.classList.contains('hamburger')) {
		hamburgerBtn?.classList.toggle('hidden');
		closeBtn?.classList.toggle('hidden');
		nav?.classList.toggle('hidden');
	} else if (target.classList.contains('close')) {
		hamburgerBtn?.classList.toggle('hidden');
		closeBtn?.classList.toggle('hidden');
		nav?.classList.toggle('hidden');
	}
});
