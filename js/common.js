$(document).ready(function() {
	function heightDetect(){
		$(".main_head").css("height", $(window).height())
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});
$(".top_mnu ul a").click(function () {
	$(".top_mnu").fadeOut(500);
	$(".sandwich").toggleClass("active");

}).append("<span></span>");
$(".toggle_mnu").click(function () {
    if($(".top_mnu").is(":visible")){
        $(".top_text").removeClass("h_opacify");
        $(".top_mnu").fadeOut(500);
		$(".top_mnu li a").removeClass("fadeInUp animated");
    }else{
    	$(".top_text").addClass("h_opacify");
        $(".top_mnu").fadeIn(500);
		$(".top_mnu li a").addClass("fadeInUp animated");
    }

});
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});