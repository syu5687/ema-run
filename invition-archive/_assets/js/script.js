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

$(headerBtn).on('click',()=>{
	//$(mainContent).scrollTop(200);
	//const aniSpeed=500;
	//const nextTo=0;
	//const href=$(this).attr('href');
	//const target=$(href=='#'||href==''?'html':href);
	//const posi=target.offset().top+100;
	//console.log("hello");
})
});
