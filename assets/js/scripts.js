function pageID() {
		var pageID = document.querySelector('.page').id;
		console.log(pageID);
		document.body.classList.add(pageID);
}

function matchPageIDwithNav() {
	var navID = document.querySelector('.nav-link').id;
	var pageID = document.querySelector('.page').id;
	var currentNav = document.querySelector('nav ul li a#' + pageID);
	var currentNavID = currentNav.id;
	
	if(currentNavID = pageID) {
		console.log("navID matches pageID:" + currentNavID);
		document.querySelector('nav ul li a#' + pageID).classList.add('active');
	}
}

pageID()
matchPageIDwithNav()