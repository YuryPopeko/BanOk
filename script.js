window.onload = function() {

	(function go() {
		window.onscroll = function() {
		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
		let screenPoint = [];

			if($(window).width() >= 1900) {
				screenPoint[0] = 1400;
				screenPoint[1] = 1600;
				screenPoint[2] = 1900;
				screenPoint[3] = 2100;
				screenPoint[4] = 2400;
				screenPoint[5] = 2600;
				screenPoint[6] = 2900;
			} else if ($(window).width() >= 1024 && $(window).width() < 1920) {
				screenPoint[0] = 1300;
				screenPoint[1] = 1500;
				screenPoint[2] = 1700;
				screenPoint[3] = 1900;
				screenPoint[4] = 2200;
				screenPoint[5] = 2400;
				screenPoint[6] = 2700;
			} else if ($(window).width() >= 320 && $(window).width() < 1024) {
				screenPoint[0] = 700;
				screenPoint[1] = 900;
				screenPoint[2] = 1100;
				screenPoint[3] = 1300;
				screenPoint[4] = 1600;
				screenPoint[5] = 1800;
				screenPoint[6] = 2100;
			} 

			if (scrolled > screenPoint[0]) {
		    	document.getElementsByClassName('way-vertical start')[0].style = "background-position: 0 -100%;";
		    	document.getElementsByClassName('processing')[0].style = "transform: rotate(-300deg);";
			}

			if (scrolled > screenPoint[1] && scrolled < screenPoint[1] + 600) {
				if($(".good-history").css('display') === 'none' && $(".bad-history").css('display') === 'none') {
					document.getElementsByClassName('dark')[0].style = "display: block;";
					document.getElementsByClassName('good-button')[0].style = "animation: 0.45s history-choise;";
		    		document.getElementsByClassName('bad-button')[0].style = "animation: 0.45s 0.4s history-choise;";
				}
			} else {
				document.getElementsByClassName('dark')[0].style = "display: none;";
			}

			document.getElementById("good-history").onclick = function() {
				document.getElementsByClassName('dark')[0].style = "display: none;";
			}

			document.getElementById("bad-history").onclick = function() {
				document.getElementsByClassName('dark')[0].style = "display: none;";
			}

			if (scrolled > screenPoint[2]) {
		    	document.getElementsByClassName('way-vertical start')[1].style = "background-position: 0 -100%;";
		    	document.getElementsByClassName('check-check-img')[0].style = "transform: scale(1);";

		    	document.getElementsByClassName('way-vertical first')[2].style = "background-position: 0 -100%;";
		    	document.getElementsByClassName('quarter-circle-top-left')[0].style = "background-position: 100% 0;";
		    	document.getElementsByClassName('way-horizontal left')[3].style = "background-position: 100% 0;";
		    	document.getElementsByClassName('check-bad-check-img')[0].style = "transform: scale(1);";
			} else {
				document.getElementsByClassName('way-vertical start')[1].style = "transition-delay: 0.2s;background-position: 0 0;";
				document.getElementsByClassName('check-check-img')[0].style = "transition-delay: 0s;transform: scale(0);";

				document.getElementsByClassName('check-bad-check-img')[0].style = "transition-delay: 0s;transform: scale(0);";
				document.getElementsByClassName('way-horizontal left')[3].style = "transition-delay: 0.2s;background-position: 0 0;";
				document.getElementsByClassName('quarter-circle-top-left')[0].style = "transition-delay: 0.4s;background-position: 0 0;";
				document.getElementsByClassName('way-vertical first')[2].style = "transition-delay: 0.6s;background-position: 0 0;";
			}

			if (scrolled > screenPoint[3]) {
		    	document.getElementsByClassName('way-horizontal right first')[0].style = "background-position: -100% 0";
		    	document.getElementsByClassName('quarter-circle-bottom-left first')[0].style = "background-position: 0 0";
		    	document.getElementsByClassName('way-vertical first')[1].style = "background-position: 0 -100%";
		    	document.getElementsByClassName('check-min-img')[0].style = "transform: scale(1);";
			} else {
				document.getElementsByClassName('check-min-img')[0].style = "transition-delay: 0s;transform: scale(0);";
		    	document.getElementsByClassName('way-vertical first')[1].style = "transition-delay: 0.2s;background-position: 0 0;";
		    	document.getElementsByClassName('quarter-circle-bottom-left first')[0].style = "transition-delay: 0.4s; background-position: 100% 0;";
				document.getElementsByClassName('way-horizontal right first')[0].style = "transition-delay: 0.6s;background-position: 0 0;";				
			}

			if (scrolled > screenPoint[4]) {
		    	document.getElementsByClassName('way-horizontal left second')[0].style = "background-position: 100% 0";
		    	document.getElementsByClassName('quarter-circle-bottom-right first')[0].style = "background-position: 100% 0";
		    	document.getElementsByClassName('way-vertical second')[1].style = "background-position: 0 -100%";
		    	document.getElementsByClassName('check-bank-img')[0].style = "transform: scale(1);";

		    	document.getElementsByClassName('check-search-bank-img')[1].style = "transform: scale(1);";
		    	document.getElementsByClassName('way-vertical first')[3].style = "background-position: 0 -100%";
		    	document.getElementsByClassName('way-vertical first')[4].style = "background-position: 0 -100%";
		    	document.getElementsByClassName('check-case-img')[0].style = "transform: scale(1);";
			} else {
				document.getElementsByClassName('check-bank-img')[0].style = "transition-delay: 0s;transform: scale(0);";
		    	document.getElementsByClassName('way-vertical second')[1].style = "transition-delay: 0.2s;background-position: 0 0;";
		    	document.getElementsByClassName('quarter-circle-bottom-right first')[0].style = "transition-delay: 0.4s;background-position: 0 0;";
				document.getElementsByClassName('way-horizontal left second')[0].style = "transition-delay: 0.6s;background-position: 0 0;";
			
				document.getElementsByClassName('check-case-img')[0].style = "transition-delay: 0s;transform: scale(0);";
				document.getElementsByClassName('check-search-bank-img')[1].style = "transition-delay: 0s;transform: scale(0);";
				document.getElementsByClassName('way-vertical first')[3].style = "transition-delay: 0.2s;background-position: 0 0";
				document.getElementsByClassName('way-vertical first')[4].style = "transition-delay: 0.2s;background-position: 0 0";
			}

			if (scrolled > screenPoint[5]) {
		    	document.getElementsByClassName('way-horizontal right third')[0].style = "background-position: -100% 0";
		    	document.getElementsByClassName('quarter-circle-bottom-left second')[0].style = "background-position: 0 0";
		    	document.getElementsByClassName('way-vertical third')[0].style = "background-position: 0 -100%";
		    	document.getElementsByClassName('check-search-bank-img')[0].style = "transform: scale(1);";

		    	document.getElementsByClassName('way-vertical second')[2].style = "background-position: 0 -100%";
		    	document.getElementsByClassName('way-vertical second')[3].style = "background-position: 0 -100%";
			} else {
				document.getElementsByClassName('check-search-bank-img')[0].style = "transition-delay: 0s;transform: scale(0);";
		    	document.getElementsByClassName('way-vertical third')[0].style = "transition-delay: 0.2s;background-position: 0 0;";
		    	document.getElementsByClassName('quarter-circle-bottom-left second')[0].style = "transition-delay: 0.4s;background-position: 100% 0;";
				document.getElementsByClassName('way-horizontal right third')[0].style = "transition-delay: 0.6s;background-position: 0 0;";

				document.getElementsByClassName('way-vertical second')[2].style = "background-position: 0 0";
				document.getElementsByClassName('way-vertical second')[3].style = "background-position: 0 0";
			}

			if (scrolled > screenPoint[6]) {
		    	document.getElementsByClassName('way-horizontal fourth')[0].style = "background-position: 100% 0";
		    	document.getElementsByClassName('quarter-circle-bottom-right third')[0].style = "background-position: 100% 0";
		    	document.getElementsByClassName('way-vertical fourth')[0].style = "background-position: 0 -100%";
			} else {
		    	document.getElementsByClassName('way-vertical fourth')[0].style = "transition-delay: 0s;background-position: 0 0;";
		    	document.getElementsByClassName('quarter-circle-bottom-right third')[0].style = "background-position: 0 0;";
				document.getElementsByClassName('way-horizontal fourth')[0].style = "transition-delay: 0.4s;background-position: 0 0;";
			}

		}
	})();
	
	$('.video').click(function() {
		let video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
	    $(this).parent().html(video);
	});

}