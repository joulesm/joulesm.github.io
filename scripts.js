

$( document ).ready(function() {
	// Attach a click listener to all p-more classes.
	$('.p-more').click(function() {
		$(this).siblings('.p-hidden').slideDown(300);
		$(this).siblings('.p-hidden-video').slideDown(300);
		$(this).css('text-decoration', 'none').css('cursor', 'auto');
	});

	// Open all links in a new tab.
	$('.projects a').attr('target', '_blank');

	// If page was loaded on a URL with the #id, then auto-open its p-more class.
	var splitUrl = window.location.href.split('#')
	if (splitUrl[1]) {
		var moreEl = document.getElementById(splitUrl[1]).getElementsByClassName("p-more")[0];
		// Click the p-more class element under the id.
		if (moreEl) {
			moreEl.click();
		}
	}
});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-26683532-1', 'auto');
ga('send', 'pageview');
