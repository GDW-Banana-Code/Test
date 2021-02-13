let aboutGameLink = document.querySelector('.about-game-link');
let heroesLink = document.querySelector('.heroes-link');
let aboutSubmenu = document.querySelector('.about-game-submenu');
let heroesSubmenu = document.querySelector('.heroes-submenu')
console.log(heroesLink);


aboutGameLink.addEventListener('mouseenter', function (event) {
	event.preventDefault();
	aboutSubmenu.style.display = 'inline';
	aboutSubmenu.style.top = '50px';
	aboutSubmenu.style.left = '400px';
	aboutSubmenu.style.transition = '1s';
})

aboutGameLink.addEventListener('mouseleave', function (event) {
	event.preventDefault();
	aboutSubmenu.style.top = '-100px';
})

heroesLink.addEventListener('mouseenter', function (event) {
	event.preventDefault();
	heroesSubmenu.style.display = 'inline';
	heroesSubmenu.style.top = '50px';
	heroesSubmenu.style.left = '1030px';
	heroesSubmenu.style.transition = '1s';
})

heroesLink.addEventListener('mouseleave', function (event) {
	event.preventDefault();
	heroesSubmenu.style.top = '-100px';
})

heroesSubmenu.addEventListener('mouseenter', function (event) {
	heroesSubmenu.style.display = 'inline';
})

heroesLink.addEventListener('mouseleave', function (event) {
	event.preventDefault();
	heroesSubmenu.style.top = '-100px';
})

let spanGame = document.createElement('span');