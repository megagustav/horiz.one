const navItems = document.querySelectorAll('.nav-link');

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", function() {
		Array.from(navItems, navItem => navItem.classList.remove('active'));
		navItems[i].classList.add('active');
	});
}