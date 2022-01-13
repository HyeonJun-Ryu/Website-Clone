

$(document).ready(function  () {
	$("#mainBanner").slideDown(500);
	
}); 



jQuery(function($){

		// 스크롤 아이콘 모션
	var $moveIcon = $('.left-scroll');
	var moveIcon = setInterval(function() {
		$moveIcon.animate({opacity:'.5',"margin-left":'-=10px'}).animate({opacity:'1',"margin-left":'+=10px'})
	}, 1000);
	

	/* 모바일 서브메뉴 */
	$(".side-menu-m").click(function  () {
		$(this).addClass("open");
	});

	$(".side-menu-m").mouseleave(function  () {
		$(this).removeClass("open");
	});

	/* 비밀번호 정보 */

	$(".password-info-bx").click(function  () {
		$(this).addClass("open");
	});

	$(".password-info-bx").mouseleave(function  () {
		$(this).removeClass("open");
	});


	$(".intro-history").click(function  () {
		$(this).removeClass("move");
	});


	/* *********************** 사이드바 FIXED ************************ */
	$(window).scroll(function  () {
		var scrollHeight = $(window).scrollTop();
		var rightStartTop = $(window).height();

		if($("#rightBar").hasClass("sub")){
			if ( scrollHeight > 0 ) {
				$("#rightBar").addClass("move");
			}else {
				$("#rightBar").removeClass("move");
			}
		} else {
			if ( scrollHeight > rightStartTop ) {
				$("#rightBar").addClass("fixed");
			}else {
				$("#rightBar").removeClass("fixed");
			}
		}

	});

	/* 푸터배너 */
	$('.foot-banner-inner ul').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		dots:false,
		autoplay: true,
		speed:800,
		infinite:true,
		autoplaySpeed: 3000,
		easing: 'easeInOutQuint',
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Prev" tabindex="0" role="button"><img src="/images/button/footer_banner_prev.jpg" alt=""></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/button/footer_banner_next.jpg" alt=""></button>',
		responsive: [
					{
					  breakpoint: 1221,
					  settings: {
						slidesToShow: 5,
						slidesToScroll: 1
					  }
					},
					{
					  breakpoint: 801,
					  settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows:false,
						variableWidth:true
					  }
					},
					{
					  breakpoint: 481,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					  }
					}
				  ]
	});	

	$(".check-custom").click(function  () {
		$(this).parents().siblings(".privacy-txt").toggleClass("read");
	});

	$(window).scroll(function  () {
		var scrollHeight = $(window).scrollTop();
		var startTop = $("#header").offset().top;
		if ( scrollHeight > startTop ) {
			$(".main-sitemap-btn").addClass("fixed");
		}else {
			$(".main-sitemap-btn").removeClass("fixed");
		}
	});

	// 사이트맵 버튼
	$(".main-sitemap-btn").click(function  () {
		$("#mainBanner").slideUp(200);
		$(this).toggleClass("active");
		$(this).parent().toggleClass("active");
		$(".sitemap-fixed-pop-wrapper").toggleClass("open");
		$("html").toggleClass("sitemap");
	});

	$(window).resize(function  () {
			var win_width = $(window).outerWidth() + getScrollBarWidth();
			if ( win_width < 1020 ) {
				$("html").removeClass("sitemap");
				$(".sitemap-fixed-pop-wrapper").removeClass("open");
				$(".main-sitemap-btn-wrap").removeClass("active");
				$(".main-sitemap-btn").removeClass("active");
				$(".main-sitemap-btn").parent().removeClass("active");
			}
		});
	
	// 임의의 영역을 만들어 스크롤바 크기 측정
	function getScrollBarWidth(){
		if($(document).height() > $(window).height()){
			$('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
			fakeScrollBar = $('#fakescrollbar');
			fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
			var w1 = fakeScrollBar.find('div').innerWidth();
			fakeScrollBar.css('overflow-y', 'scroll');
			var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
			fakeScrollBar.remove();
			return (w1-w2);
		}
		return 0;
	}

	/* *********************** 헤더 FIXED ************************ */
	$(window).scroll(function  () {
		var scrollHeight = $(window).scrollTop();
		var startTop = $("#header").offset().top;
		if ( scrollHeight > startTop ) {
			$("#header").addClass("fixed");
			$(".sub-visual-shadow").addClass("fixed");
		}else {
			$("#header").removeClass("fixed");
			$(".sub-visual-shadow").removeClass("fixed");
		}
	});

	/*
			$(window).scroll(function  () {
		var scrollHeight = $(window).scrollTop();
		if(!($("#container").hasClass("member"))){
			if ( scrollHeight > 276 ) {
				$(".content-wrap").addClass("fixed");
			}else {
				$(".content-wrap").removeClass("fixed");
			}
		} else {
			if ( scrollHeight > 166 ) {
			$(".content-wrap").addClass("fixed");
			}else {
				$(".content-wrap").removeClass("fixed");
			}
		}
	});
	*/

	$(window).scroll(function  () {
		var scrollHeight = $(window).scrollTop();
		if(!($("#container").hasClass("member"))){
			if ( scrollHeight > 276 ) {
				$(".content-wrap").addClass("fixed");
			}else {
				$(".content-wrap").removeClass("fixed");
			}
		} else {
			if ( scrollHeight > 166 ) {
			$(".content-wrap").addClass("fixed");
			}else {
				$(".content-wrap").removeClass("fixed");
			}
		}
	});




	/* *********************** 상단 언어 목록 ************************ */
	$(".header-lang").click(function  () {
		$(this).toggleClass("open");
	}).mouseleave(function  () {
		$(this).removeClass("open");
	});

	/* *********************** 상단 검색 toggle ************************ */
	$(".header-search-box").each(function  () {
		var $searchBox = $(this);
		var $openBtn = $(this).find(".header-search-open-btn");
		var $closeBtn = $(this).find(".header-search-close-btn");
		
		$openBtn.click(function  () {
			$searchBox.addClass("open");
		});
		$closeBtn.click(function  () {
			$searchBox.removeClass("open");
		});
	});

	/* *********************** top버튼 ************************ */
	$(".to-top-btn").each(function  () {
		// top버튼 나오게 (필요한 경우에만 넣으세요)
		if ( $(this).length > 0 ) {
			$(window).scroll(function  () {
				if ( $(window).scrollTop() > 0 ) {
					$(".to-top-btn").addClass("fixed");
				}else {
					$(".to-top-btn").removeClass("fixed");
				}
			});
		}
		// top버튼 클릭
		$(this).on("click",function  () {
			$("html, body").animate({scrollTop:0},600,"easeInOutExpo");	// easing 효과 사용하기위해서는 jquery.easing.1.3.js이 필요함, 없을 시 기본 "swing"
			return false;
		});
	});

	/* ------  패밀리사이트 ------ */
	$("a.family-open-btn").click(function  () {
		$(this).siblings("ul").stop().slideToggle(200);
		return false;
	});
	$(".familysite-box").mouseleave(function  () {
		$(this).find("ul").stop().slideUp(200);
		return false;
	});

	
	/* *********************** 패밀리사이트 ************************ */
	$(".family-site-box").each(function  () {
		var $familyBox = $(this);
		var $familyListOpenBtn = $(this).children(".family-site-open-btn");
		var $familyList = $(this).children(".family-site-list");
		$familyListOpenBtn.click(function  () {
			$familyList.slideToggle(500);
			$familyBox.toggleClass("open");
			return false;
		});
		$(this).mouseleave(function  () {
			$familyList.slideUp(500);
			$familyBox.removeClass("open");
		});
	});

	/* *********************** 탭 공통 ************************ */
	$(".cm-tab-container").each(function  () {
		var $cmTabList = $(this).children(".cm-tab-list");
		var $cmTabListli = $cmTabList.find("li");
		var $cmConWrapper = $(this).children(".cm-tab-content-wrapper");
		var $cmContent = $cmConWrapper.children(".cm-tab-con");
		
		
		// 탭 영역 숨기고 selected 클래스가 있는 영역만 보이게
		var $selectCon = $cmTabList.find("li.selected").find("a").attr("href");
		$cmContent.hide();
		$($selectCon).show();

		$cmTabListli.children("a").hover(function  () {
			if ( !$(this).parent().hasClass("selected")) {
				var visibleCon = $(this).attr("href");
				$cmTabListli.removeClass("selected");
				$(this).parent("li").addClass("selected");
				$cmContent.hide();
				$(visibleCon).fadeIn();
			}
			return false;
		});
	});


	/* 
	* 개발 추가
	*/
	//우편번호 찾기
	$(".btn-zip").click(function() {
		execDaumPostcode()
	});
	
	//뒤로가기
	$(".btn-history-go-1").click(function() {
		history.go(-1);
		return false;
	});
	
	//숫자체크
	$(".numField").keyup(function() {if(this.value.match(/[^0-9]/)) { alert('숫자만 입력해 주세요.'); this.value = ''; return false;}});

	//풀다운메뉴 폼액션
	$(".jumpselect").change(function() { this.form.submit(); });
	
	//정관 탭 클릭 액션
	$(".btn-articles").click(function() {
		var ano = $(this).attr("data-ano");
		$(".association-info").hide();
		$("#etc_info_" + ano).show();
	});
	
	//로그인
	var options_login = { beforeSubmit:vd_login, success:rs_login };
	$("#login_form").ajaxForm(options_login);

	//회원정보찾기
	var options_find = { beforeSubmit:vd_find, success:rs_find };
	$("#find_form").ajaxForm(options_find);

	//회원가입1
	var options_join1 = { beforeSubmit:vd_join1, success:rs_join1 };
	$("#join1_form").ajaxForm(options_join1);

	//회원가입2
	var options_join2 = { beforeSubmit:vd_join2, success:rs_join2 };
	$("#join2_form").ajaxForm(options_join2);

	//일반회원가입1
	var options_joinbasic1 = { beforeSubmit:vd_joinbasic1, success:rs_joinbasic1 };
	$("#joinbasic1_form").ajaxForm(options_joinbasic1);

	//일반회원가입2
	var options_joinbasic2 = { beforeSubmit:vd_joinbasic2, success:rs_joinbasic2 };
	$("#joinbasic2_form").ajaxForm(options_joinbasic2);
	
	//회원정보수정
	var options_update = { beforeSubmit:vd_update, success:rs_update };
	$("#update_form").ajaxForm(options_update);

	//회원탈퇴
	var options_withdrawal = { beforeSubmit:vd_withdrawal, success:rs_withdrawal };
	$("#withdrawal_form").ajaxForm(options_withdrawal);

	//qna
	var options_qna = { beforeSubmit:vd_qna, success:rs_qna };
	$("#qna_form").ajaxForm(options_qna);
	
	$("#ID_join").keyup(function() {
		$("#id_able").val("0");
	});

	$(".btn-ck-id").click(function() {
		var id = $("#ID_join").val().trim();

		if( !id ){
			alert("아이디를 입력해 주세요.");
			$("#ID_join").focus();
			return false;
		}else{
			if( (id.length < 4 || id.length > 20) || hangul_chk(id) != true ){
				alert("4~20자의 영문, 숫자 조합으로 가능합니다.");
				$("#ID_join").focus();
				return false;
			}else{
				$.get("/kr/member/process.php?Mode=checkID&id=" + id ,function(data,status){
					if( data == "y" ){
						alert("사용 가능한 아이디 입니다.");
						$("#id_able").val("1");
					}else if( data == "x" ){
						alert("사용 불가능한 아이디 입니다.");
						$("#id_able").val("0");
					}else{
						alert("error");
						$("#id_able").val("0");
					}
				});
			}
		}
	});

	//재능기부등록
	var options_talent = { beforeSubmit:vd_talent, success:rs_talent };
	$("#talent_form").ajaxForm(options_talent);

	$("#year_talent").change(function() {
		var Cat_No = $(this).val();
		$("#kisu").html('<option value="">선택</option>');
		if( Cat_No ){
			$.get("process.php?Mode=Kisu&Cat_No=" + Cat_No ,function(data,status){
				var data_kisu = JSON.parse(data);
				for(key in data_kisu) {
					$("#kisu").append('<option value="' + data_kisu[key]['Cat_No'] + '"> ' + data_kisu[key]['Cat_Name'] + '</option>');
				}
			});
		}
	});

	//후원신청
	var options_sponsor = { beforeSubmit:vd_sponsor, success:rs_sponsor };
	$("#sponsor_form").ajaxForm(options_sponsor);

});

//로그인
function vd_login(formData, jqForm, options) {
	var frm = document.login_form;
	if (frm.id.value==""){
		alert("아이디를 입력해 주세요.");
		frm.id.focus();
		return false;
	}
	if (frm.pass.value==""){
		alert("비밀번호를 입력해 주세요.");
		frm.pass.focus();
		return false;
	}
}
function rs_login(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		location.href = $("#Prev_URL").val();
	}else if(responseText == "x"){
		alert("아이디 또는 비밀번호가 맞지 않습니다.");
	}else{
		alert("error");
	}
}

//회원정보찾기
function vd_find(formData, jqForm, options) {
	var frm = document.find_form;
	if (frm.Name_find.value==""){
		alert("성명을 입력해 주세요.");
		frm.Name_find.focus();
		return false;
	}
	if (frm.year.value==""){
		alert("년도를 선택해 주세요.");
		frm.year.focus();
		return false;
	}
	if (frm.month.value==""){
		alert("월을 선택해 주세요.");
		frm.month.focus();
		return false;
	}
	if (frm.day.value==""){
		alert("일을 선택해 주세요.");
		frm.day.focus();
		return false;
	}
	if (frm.email.value==""){
		alert("이메일을 입력해 주세요.");
		frm.email.focus();
		return false;
	}
}
function rs_find(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		alert("입력하신 이메일로 회원정보를 보냈습니다.");
	}else if(responseText == "x"){
		alert("입력하신 정보로 등록된 회원 정보가 없습니다.");
	}else{
		alert("error");
	}
}

//회원가입1
function vd_join1(formData, jqForm, options) {
	var frm = document.join1_form;
	if (frm.Name_in.value==""){
		alert("성명을 입력해 주세요.");
		frm.Name_in.focus();
		return false;
	}
	if (frm.year.value==""){
		alert("활동기수를 선택해주세요.");
		frm.year.focus();
		return false;
	}
	if (frm.kisu.value==""){
		alert("활동기수를 선택해주세요.");
		frm.kisu.focus();
		return false;
	}
	if (frm.nation.value==""){
		alert("활동국가를 선택해주세요.");
		frm.nation.focus();
		return false;
	}
	if (frm.Email.value){
		if( CheckEmail(frm.Email.value) != true ){
			alert("이메일 주소를 정확하게 입력해 주세요.");
			frm.Email.focus();
			return false;
		}
	}
	if (!frm.agree1.checked){
		alert("이용약관에 동의해 주세요.");
		frm.agree1.focus();
		return false;
	}
	if (!frm.agree2.checked){
		alert("개인정보처리방침에 동의해 주세요.");
		frm.agree2.focus();
		return false;
	}
}
function rs_join1(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		location.href = "/kr/member/join_02.php";
	}else if(responseText == "n"){
		if (confirm('이미 회원가입 하셨습니다.')){
			location.href = "/kr/member/search_member.php";
		}else{
			return false;
		}
	}else if(responseText == "x"){
		alert("요청하신 정보로 등록된 회원이 없습니다.");
	}else{
		alert("error");
	}
}

//회원가입2
function vd_join2(formData, jqForm, options) {
	var frm = document.join2_form;
	if (frm.ID.value==""){
		alert("아이디를 입력해 주세요.");
		frm.ID.focus();
		return false;
	}
	if (frm.id_able.value!="1"){
		alert("아이디 중복체크를 해주세요.");
		frm.ID.focus();
		return false;
	}
	
	if (frm.pass1.value==""){
		alert("비밀번호를 입력해 주세요.");
		frm.pass1.focus();
		return false;
	}
	var pass1 = $("#pass1").val();
	if( (pass1.length < 6 || pass1.length > 20) || checkPassAble(pass1) != true ){
		alert("6~20자의 영문, 숫자, 특수문자 가능합니다.");
		frm.pass1.focus();
		return false;
	}
	if (frm.pass2.value==""){
		alert("비밀번호 확인을 입력해 주세요.");
		frm.pass2.focus();
		return false;
	}
	if (frm.pass1.value!=frm.pass2.value){
		alert("비밀번호가 맞지 않습니다.");
		frm.pass2.focus();
		return false;
	}
	if (!frm.Sex[0].checked && !frm.Sex[1].checked){
		alert("성별을 선택해 주세요.");
		frm.Sex[0].focus();
		return false;
	}
	if (frm.Birth.value==""){
		alert("생년월일을 입력해 주세요.");
		frm.Birth.focus();
		return false;
	}
	if (frm.Mobile2.value==""){
		alert("휴대폰번호를 입력해 주세요.");
		frm.Mobile2.focus();
		return false;
	}
	if (frm.Mobile3.value==""){
		alert("휴대폰번호를 입력해 주세요.");
		frm.Mobile3.focus();
		return false;
	}
	if (frm.Email_in.value==""){
		alert("이메일을 입력해 주세요.");
		frm.Email_in.focus();
		return false;
	}
	if( CheckEmail(frm.Email_in.value) != true ){
		alert("이메일 주소를 정확하게 입력해 주세요.");
		frm.Email_in.focus();
		return false;
	}
}
function rs_join2(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		location.href = "/kr/member/join_finish.php";
	}else if(responseText == "id"){
		alert("아이디가 중복되었습니다.");
	}else if(responseText == "email"){
		alert("이메일이 중복되었습니다.");
	}else{
		alert("error");
	}
}

//일반회원가입1
function vd_joinbasic1(formData, jqForm, options) {
	var frm = document.joinbasic1_form;
	if (frm.Name_in.value==""){
		alert("성명을 입력해 주세요.");
		frm.Name_in.focus();
		return false;
	}
	if (frm.Email.value==""){
		alert("이메일 주소를 입력해 주세요.");
		frm.Email.focus();
		return false;
	}
	if( CheckEmail(frm.Email.value) != true ){
		alert("이메일 주소를 정확하게 입력해 주세요.");
		frm.Email.focus();
		return false;
	}
	if (!frm.agree1.checked){
		alert("이용약관에 동의해 주세요.");
		frm.agree1.focus();
		return false;
	}
	if (!frm.agree2.checked){
		alert("개인정보처리방침에 동의해 주세요.");
		frm.agree2.focus();
		return false;
	}
}
function rs_joinbasic1(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		location.href = "/kr/member/join_basic_02.php";
	}else if(responseText == "x"){
		alert("이미 회원가입 하셨습니다.");
	}else if(responseText == "email"){
		alert("이미 가입된 이메일 주소입니다.");
	}else{
		alert("error");
	}
}

//일반회원가입2
function vd_joinbasic2(formData, jqForm, options) {
	var frm = document.joinbasic2_form;
	if (frm.ID.value==""){
		alert("아이디를 입력해 주세요.");
		frm.ID.focus();
		return false;
	}
	if (frm.id_able.value!="1"){
		alert("아이디 중복체크를 해주세요.");
		frm.ID.focus();
		return false;
	}
	
	if (frm.pass1.value==""){
		alert("비밀번호를 입력해 주세요.");
		frm.pass1.focus();
		return false;
	}
	var pass1 = $("#pass1").val();
	if( (pass1.length < 6 || pass1.length > 20) || checkPassAble(pass1) != true ){
		alert("6~20자의 영문, 숫자, 특수문자 가능합니다.");
		frm.pass1.focus();
		return false;
	}
	if (frm.pass2.value==""){
		alert("비밀번호 확인을 입력해 주세요.");
		frm.pass2.focus();
		return false;
	}
	if (frm.pass1.value!=frm.pass2.value){
		alert("비밀번호가 맞지 않습니다.");
		frm.pass2.focus();
		return false;
	}
	if (!frm.Sex[0].checked && !frm.Sex[1].checked){
		alert("성별을 선택해 주세요.");
		frm.Sex[0].focus();
		return false;
	}
	if (frm.Birth.value==""){
		alert("생년월일을 입력해 주세요.");
		frm.Birth.focus();
		return false;
	}
	if (frm.Mobile2.value==""){
		alert("휴대폰번호를 입력해 주세요.");
		frm.Mobile2.focus();
		return false;
	}
	if (frm.Mobile3.value==""){
		alert("휴대폰번호를 입력해 주세요.");
		frm.Mobile3.focus();
		return false;
	}
}
function rs_joinbasic2(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		location.href = "/kr/member/join_finish.php";
	}else if(responseText == "id"){
		alert("아이디가 중복되었습니다.");
	}else if(responseText == "email"){
		alert("이메일이 중복되었습니다.");
	}else{
		alert("error");
	}
}

//회원정보수정
function vd_update(formData, jqForm, options) {
	var frm = document.update_form;
	
	if (frm.pass1.value.trim()){
		if (frm.pass1.value==""){
			alert("비밀번호를 입력해 주세요.");
			frm.pass1.focus();
			return false;
		}
		var pass1 = $("#pass1").val();
		if( (pass1.length < 6 || pass1.length > 20) || checkPassAble(pass1) != true ){
			alert("6~20자의 영문, 숫자, 특수문자 가능합니다.");
			frm.pass1.focus();
			return false;
		}
		if (frm.pass2.value==""){
			alert("비밀번호 확인을 입력해 주세요.");
			frm.pass2.focus();
			return false;
		}
		if (frm.pass1.value!=frm.pass2.value){
			alert("비밀번호가 맞지 않습니다.");
			frm.pass2.focus();
			return false;
		}
	}

	if (!frm.Sex[0].checked && !frm.Sex[1].checked){
		alert("성별을 선택해 주세요.");
		frm.Sex[0].focus();
		return false;
	}
	if (frm.Birth.value==""){
		alert("생년월일을 입력해 주세요.");
		frm.Birth.focus();
		return false;
	}
	if (frm.Mobile2.value==""){
		alert("휴대폰번호를 입력해 주세요.");
		frm.Mobile2.focus();
		return false;
	}
	if (frm.Mobile3.value==""){
		alert("휴대폰번호를 입력해 주세요.");
		frm.Mobile3.focus();
		return false;
	}
	if (frm.Email.value==""){
		alert("이메일을 입력해 주세요.");
		frm.Email.focus();
		return false;
	}
	if( CheckEmail(frm.Email.value) != true ){
		alert("이메일 주소를 정확하게 입력해 주세요.");
		frm.Email.focus();
		return false;
	}
}
function rs_update(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		alert("수정되었습니다.");
		location.reload();
	}else if(responseText == "email"){
		alert("이메일이 중복되었습니다.");
	}else{
		alert("error");
	}
}

//회원탈퇴
function vd_withdrawal(formData, jqForm, options) {
	var frm = document.withdrawal_form;
	if (frm.pass.value==""){
		alert("비밀번호를 입력해 주세요.");
		frm.pass.focus();
		return false;
	}
	if (frm.del_comment.value==""){
		alert("탈퇴사유를 입력해 주세요.");
		frm.del_comment.focus();
		return false;
	}
}
function rs_withdrawal(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		alert("회원탈퇴 신청되었습니다.");
		location.href = "/kr/member/logout.php";
	}else if(responseText == "x"){
		alert("비밀번호가 맞지 않습니다.");
	}else{
		alert("error");
	}
}

//재능기부등록
function vd_talent(formData, jqForm, options) {
	var frm = document.talent_form;
	if (frm.name.value==""){
		alert("성명을 입력해 주세요.");
		frm.name.focus();
		return false;
	}
	if (frm.year.value==""){
		alert("활동기수를 선택해주세요.");
		frm.year.focus();
		return false;
	}
	if (frm.kisu.value==""){
		alert("활동기수를 선택해주세요.");
		frm.kisu.focus();
		return false;
	}
	if (frm.nation.value==""){
		alert("활동국가를 선택해주세요.");
		frm.nation.focus();
		return false;
	}
	if (frm.area.value==""){
		alert("지역을 입력해 주세요.");
		frm.area.focus();
		return false;
	}
	if (frm.email.value){
		if( CheckEmail(frm.email.value) != true ){
			alert("이메일 주소를 정확하게 입력해 주세요.");
			frm.email.focus();
			return false;
		}
	}
	if (!frm.agree.checked){
		alert("개인정보처리방침에 동의해 주세요.");
		frm.agree.focus();
		return false;
	}

	$(".btn-submit").hide();
}
function rs_talent(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		alert("정상적으로 접수 되었습니다.");
		location.reload();
	}else{
		alert("error");
	}
}

//후원신청
function vd_sponsor(formData, jqForm, options) {
	var frm = document.sponsor_form;
	if (frm.name.value==""){
		alert("성명을 입력해 주세요.");
		frm.name.focus();
		return false;
	}
	if (frm.phone.value==""){
		alert("연락처를 입력해 주세요.");
		frm.phone.focus();
		return false;
	}
	if (frm.email.value){
		if( CheckEmail(frm.email.value) != true ){
			alert("이메일 주소를 정확하게 입력해 주세요.");
			frm.email.focus();
			return false;
		}
	}
	if (!frm.agree.checked){
		alert("개인정보처리방침에 동의해 주세요.");
		frm.agree.focus();
		return false;
	}

	$(".btn-submit").hide();
}
function rs_sponsor(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		alert("정상적으로 접수 되었습니다.");
		location.reload();
	}else{
		alert("error");
	}
}

//qna
function vd_qna(formData, jqForm, options) {
	var frm = document.qna_form;
	if (frm.qtype.value==""){
		alert("구분을 선택해 주세요.");
		frm.qtype.focus();
		return false;
	}
	if (frm.subject.value==""){
		alert("제목을 입력해 주세요.");
		frm.subject.focus();
		return false;
	}
	if (frm.contents.value==""){
		alert("내용을 입력해 주세요.");
		frm.contents.focus();
		return false;
	}
}
function rs_qna(responseText, statusText, xhr, $form){
	if(responseText == "y"){
		alert("정상적으로 등록 되었습니다.");
		location.href = "/kr/member/qna.php";
	}else{
		alert("error");
	}
}

//다음 새주소
function execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = ''; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수

                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    fullAddr = data.roadAddress;

                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    fullAddr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                if(data.userSelectedType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('Zip').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('Address').value = fullAddr;

                // 커서를 상세주소 필드로 이동한다.
                document.getElementById('Address_Ext').focus();
            }
        }).open();
}

function CheckEmail(str){
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (filter.test(str)){
		return true;
	}else{
		return false;
	}
}

function hangul_chk(word) {
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
	for (i=0; i< word.length; i++){
		idcheck = word.charAt(i);
		for ( j = 0 ;  j < str.length ; j++){
			if (idcheck == str.charAt(j)) break;
     			if (j+1 == str.length){
   					return false;
     			}
     		}
     	}
	return true;
}

function checkPassAble(word) {
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$%&()-_";
	for (i=0; i< word.length; i++){
		idcheck = word.charAt(i);
		for ( j = 0 ;  j < str.length ; j++){
			if (idcheck == str.charAt(j)) break;
     			if (j+1 == str.length){
   					return false;
     			}
     		}
     	}
	return true;
}

function divSlideToggle(divID){
	$(divID).slideToggle();
}

function notice_getCookie( name ){
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length ){
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
			endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 )
		break;
	}
	return "";
}

function setCookie( name, value, expiredays ){
	var today = new Date();
	today.setDate( today.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
}
