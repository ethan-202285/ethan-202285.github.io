$(document).ready(function () {
	$('body').scrollspy({ 
		target: '#ScrollListener'
	})
	
	$(window).scroll(function(){
		var topHeight = $("#header_nav").offset().top;
		if(topHeight > 50){
			$("#header_nav").addClass("on");
		}else{
			$("#header_nav").removeClass("on");
		}
	});
	
	$("#ScrollListener ul li a").click(function(e){
		var toTop = $($(this).attr("href")).offset().top;
		$("body,html").animate({
			scrollTop : toTop
		},900);
		e.preventDefault();
	});
	
	// 点击显示弹窗
	$(".range_content .col-md-3").click(function (e) {
		$("#Shadow").show()
		$("html,body").addClass('oh')
		sessionStorage.setItem("type", $(this).index() + 1)
		var value = ''
		switch ($(this).index() + 1) {
			case 1:
				// value = '安全'
				
				break
			
		}
		$(".needType").val(value)
	})
	
	$("#close").click(function() {
		$("#Shadow").hide()
		$("html,body").removeClass('oh')
		sessionStorage.removeItem("type")	
		$(".companyName").val('')
		$(".companyName").val('')
		$(".contactName").val('')
		$(".contact1").val('')
		$(".email").val('')
		$(".demand").val('')
	})
	
	$(".needType").click(function() {
		$("#menu").slideToggle()
	})
	
	$("#menu ul li").on("click", function(ev) {
		$(".needType").val(ev.target.innerText)
		sessionStorage.setItem("type", $(this).index() + 1)
		$("#menu").slideToggle()
	})
	
})