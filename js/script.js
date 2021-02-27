$(document).ready(function(){

	$(".m_nav_menu").hide();
	$(".menu .cross").hide();

	// book icons
	$("#academics").click(function(){
		window.location.href = "https://drive.google.com/drive/folders/1eZYSuGoUI-PfGVA6Vy3UizOZZKokDgch?usp=sharing";
	});
	$("#comics").click(function(){
		window.location.href = "https://drive.google.com/drive/folders/1jFz7XZi3kJM-KXjWwmSfCXXc2fmvjK1N?usp=sharing";
	});
	$("#encyclopedia").click(function(){
		window.location.href = "https://drive.google.com/drive/folders/1GZVpVjcCPSQm496r5Z8Ga73fRBn4uuTm?usp=sharing";
	});
	$("#fictional").click(function(){
		window.location.href = "https://drive.google.com/drive/folders/1HOPETo-oKyxi-_YZrORIkuXMOYb0jQA0?usp=sharing";
	});
	$("#non-fictional").click(function(){
		window.location.href = "https://drive.google.com/drive/folders/1aw-zpSUqblnHCODWsVr8hraMMxBbwoOv?usp=sharing";
	});
	$("#periodicals").click(function(){
		window.location.href = "periodicals.html";
	});


	// periodical icons
	$("#jagran").click(function(){
		window.location.href = "https://www.jagran.com/";
	});
	$("#amarujala").click(function(){
		window.location.href = "https://epaper.amarujala.com/";
	});
	$("#hindustantimes").click(function(){
		window.location.href = "https://epaper.hindustantimes.com/Home/mIndex?htepaper=mobile&tstmp=1204202004";
	});
	$("#champak").click(function(){
		window.location.href = "http://www.champak.in/";
	});
	$("#jansatta").click(function(){
		window.location.href = "https://epaper.jansatta.com/t/23814/?s=%E0%A4%B2%E0%A4%96%E0%A4%A8%E0%A4%8A";
	});

	// Mobile navigation
	$(".menu .bars").click(function(){
		$(".menu .bars").hide();
		$(".menu .cross").show();
		$(".m_nav_menu").show();
	});

	$(".menu .cross").click(function(){
		$(".menu .bars").show();
		$(".menu .cross").hide();
		$(".m_nav_menu").hide();
	});

	$(".m_nav_menu ul li").click(function(){
		$(".menu .bars").show();
		$(".menu .cross").hide();
		$(".m_nav_menu").hide();
	});

});