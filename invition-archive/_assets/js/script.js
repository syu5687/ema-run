$(function(){
	
const headerBg=$('.header');
const headerBtn=$('.header li a');
const headerHei= headerBg.outerHeight(); 

$(window).on('scroll',()=>{
	// if($(this).scrollTop()>=100){
	// headerBg.addClass('bgWhitegrad');
	// }else{
	// headerBg.removeClass('bgWhitegrad');
	// }
	
});

headerBtn.on('click',function(e){
	e.preventDefault();
	const aniSpeed=500;
	const href=$(this).attr('href');
	const target=href==='#'||href===''?$('html'):$(href);
	if(!target.length)return;
	const posi=target.offset().top-0;
	$('html,body').animate({
		scrollTop:posi
	},aniSpeed);
});
});
