export const scrollControl = () => {
	let html = document.querySelector('html');
	let htmlPosition = html?.style;

	const enableScroll = () => {
		if (htmlPosition) {
			htmlPosition.overflow = 'auto';
		}
	};
	const disableScroll = () => {
		if (htmlPosition) {
			htmlPosition.overflow = 'hidden';
		}
	};

	return { enableScroll, disableScroll };
};

export const scrollpsy = () => {
	const scrollspys = document.querySelectorAll('section');
	const links = document.querySelector('.links ') || document.querySelector('.nav-links'); // Fallback if no .links
	const linksHeight = links?.offsetHeight || 0;
	const allLinks = document.querySelectorAll('nav a, .links a');

	function scrollspy() {
		scrollspys.forEach((current) => {
			let _ = current;
			let currentElementOffset = _.offsetTop;
			let scrollPosition =
				document.documentElement.scrollTop || document.body.scrollTop;
			if (currentElementOffset <= scrollPosition + linksHeight + 100) {
				allLinks.forEach((currentLink) => {
					if (currentLink.classList.contains('!text-[#ff8c00]')) {
						currentLink.classList.remove('!text-[#ff8c00]');
					}
				});
				const currentID = current.getAttribute('id');
				if (currentID && currentID !== 'hero') {
					const currentLinks = document.querySelectorAll(
						`a[href="/#${currentID}"], a[href="#${currentID}"]`
					);
					currentLinks.forEach(link => {
                        link.classList.add('!text-[#ff8c00]');
                    });
				}
			}
		});
	}

	window.addEventListener('scroll', scrollspy);
};

export const topBarScroll = () => {
	let lastKnownScrollY = 100;
	let currentScrollY = 0;
	let ticking = false;
	let idOfHeader = 'header';
	let eleHeader = document.getElementById(idOfHeader);
    
    if (!eleHeader) return; // fail safe

	const classes = {
		pinned: '!translate-y-0',
		unpinned: '!-translate-y-full',
	};
    
	function onScroll() {
		currentScrollY = window.pageYOffset;
		requestTick();
	}
    
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(update);
		}
		ticking = true;
	}
    
	function update() {
		if (currentScrollY < lastKnownScrollY) {
			pin();
		} else if (currentScrollY > lastKnownScrollY) {
			unpin();
		}
		lastKnownScrollY = currentScrollY;
		ticking = false;
	}
    
	function pin() {
		if (eleHeader.classList.contains(classes.unpinned)) {
			eleHeader.classList.remove(classes.unpinned);
			eleHeader.classList.add(classes.pinned);
		}
	}
    
	function unpin() {
		if (
			eleHeader.classList.contains(classes.pinned) ||
			!eleHeader.classList.contains(classes.unpinned)
		) {
			eleHeader.classList.remove(classes.pinned);
			eleHeader.classList.add(classes.unpinned);
		}
	}
    
	document.addEventListener('scroll', onScroll, false);
};