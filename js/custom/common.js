function isValidUserid(val) {
	var pattern = /^[a-zA-Z]{1}[a-zA-Z0-9_]{4,19}$/;
	return (pattern.test(val)) ? true : false;
}
function ChkPassWord(ObjUserID, ObjUserPassWord) {

	if(ObjUserPassWord.value.indexOf(ObjUserID.value) > -1) {
		alert("비밀번호에 아이디를 사용할 수 없습니다.");
		return false;
	} // if
	
	/*
	var SamePass_0 = 0; //동일문자 카운트
	var SamePass_1 = 0; //연속성(+) 카운드
	var SamePass_2 = 0; //연속성(-) 카운드

	var chr_pass_0;
	var chr_pass_1;

	for(var i=0; i < ObjUserPassWord.value.length; i++) {
		chr_pass_0 = ObjUserPassWord.value.charAt(i);
		chr_pass_1 = ObjUserPassWord.value.charAt(i+1);

		//동일문자 카운트
		if(chr_pass_0 == chr_pass_1) {
			SamePass_0 = SamePass_0 + 1
		} // if


		//연속성(+) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1) {
			SamePass_1 = SamePass_1 + 1
		} // if

		//연속성(-) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1) {
			SamePass_2 = SamePass_2 + 1
		} // if
	} // for

	if(SamePass_0 > 1) {
		alert("동일문자를 3번 이상 사용할 수 없습니다.");
		return false;
	} // if
	*/

	/*
	if(SamePass_1 > 1 || SamePass_2 > 1 )  {
		alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
		return false;
	} // if
	*/
	return true;
} // function



function ckPwdPattern(sPwd, sPwdType)
{
    if (sPwdType == 'A') {
        var pattern = /^[a-zA-Z0-9]{4,16}$/; //조합없이 4~16
        var chk = (pattern.test(sPwd)) ? true : false;
        return chk;
    } else {
        var chars1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //영대소문자
        var chars2 = '0123456789'; //숫자
        var chars3 = '\~\`\!\@\#\$\%\^\(\)\_\-\=\{\}\[\]\|\;\:\<\>\,\.\?\/';

        var s = containsChar(sPwd, chars1, chars2, chars3);
        var s1 = s.split("/");
        var check_length = 0;

        if (s1[0] > 0) {
            check_length = parseInt(check_length)+parseInt(s1[0]);
            s1[0] = 1;
        }
        if (s1[1] > 0) {
            check_length = parseInt(check_length)+parseInt(s1[1]);
            s1[1] = 1;
        }
        if (s1[2] > 0) {
            check_length = parseInt(check_length)+parseInt(s1[2]);
            s1[2] = 1;
        }

        //영대문자, 숫자, 특수문자 중 2가지 이상 조합이면
        if (( parseInt(s1[0]) + parseInt(s1[1]) + parseInt(s1[2]) ) >= 2) {
            if (sPwdType == 'B') {
                if (sPwd.length >= 8 && sPwd.length <=16) {
                    if (sPwd.length > check_length) {//허용되지 않은 문자가 포함된 경우
                        return 'F';//허용되지 않은 문자가 포함됨
                    }else{
                        return true;
                    }
                }else {
                    return false;//8자~16자가 안됨
                }
            } else if (sPwdType == 'C') {
                if (sPwd.length >= 10 && sPwd.length <=16) {
                    if (sPwd.length > check_length) {
                        return 'F';
                    }else{
                        return true;
                    }
                }else {
                    return false;//10자~16자가 안됨
                }
            } else {
                return false;
            }
        } else {
            return false; //영문대소문자, 숫자, 특수문자 2가지 조합이 안됨
        }
    }
}


function containsChar(input, chars1, chars2, chars3)
{
    var cnt1 = 0;
    var cnt2 = 0;
    var cnt3 = 0;

    for (var i=0;i<input.length;i++)
    {
        //영대소문자 포함여부
        if (chars1.indexOf(input.charAt(i))!= -1) {
            cnt1++;
        }
        //숫자 포함여부
        if (chars2.indexOf(input.charAt(i))!= -1) {
            cnt2++;
        }
        //특수문자 포함여부
        if (chars3.indexOf(input.charAt(i))!= -1) {
            cnt3++;
        }
    }
    return (cnt1+"/"+cnt2+"/"+cnt3);
}



function userCheck() {
	alert('회원 전용 페이지입니다. 로그인해주세요.');
	var link = _CACHE_URL + "/07_sub/01_sub.html?href=" + encodeURIComponent(_CURRENT_PAGE);
	location.href = link;
}

function viewContents(no,subpage,mcode){
	location.href=subpage+"?no="+no+mcode;
}

/*****************************************************
* 레이어 팝업창 관련
*****************************************************/
function closeLayerPop(chk,no,opt) 
{ 
	if(chk.checked == true)
	{
		var today	= new Date();

		if(opt == 1)	var expire	= new Date(today.getTime() + (60*60*24*1000));
		else			var expire	= new Date(today.getTime() + (60*60*24*365*1000));

		setCookie("nsPopup_"+no,"yes",expire); 

		var obj = eval("	document.all['divpop"+no+"']");
		obj.style.visibility = "hidden"; 
		obj.style.display = "none"; 
	}
} 
function closeLayer(no){
	var obj = eval("	document.all['divpop"+no+"']");
	obj.style.visibility = "hidden"; 
	obj.style.display = "none"; 
}
function openLayer(no){
	var obj = eval("	document.all['divpop"+no+"']");
	obj.style.visibility = "visible"; 
	obj.style.display = ""; 
}

function closeAreaLayerPop(no) 
{ 
	var today	= new Date();

	var expire	= new Date(today.getTime() + (60*60*24*1000));

	setCookie("nsAreaPopup_"+no,"yes",expire); 

	var obj = eval("	document.all['area_divpop"+no+"']");
	obj.style.visibility = "hidden"; 
	obj.style.display = "none"; 
} 
function goLayerClose(url,lno) {
	closeAreaLayerPop(lno);
	location.href = url;
}
/*****************************************************/

function viewContentsLayer(no,title,mode)
{
	if(mode == "visible")
	{
		var contTbl		= document.all.contentsTbl;
		contVal	= eval("document.all.contents_"+no);
		document.all.title.innerHTML		= title;

		if(contVal.innerHTML != undefined)	document.all.cont.innerHTML	= contVal.innerHTML;
		else								document.all.cont.innerHTML	= "&nbsp;";

		contTbl.style.top					= event.clientY + document.body.scrollTop;
		contTbl.style.left					= event.clientX + document.body.scrollLeft;
		contTbl.style.visibility			= mode;
	}
	else
	{
		document.all.title.innerHTML		= "";
		document.all.cont.innerHTML			= "";
		document.all.contentsTbl.style.visibility	= mode;
	}
}


/****************************************************
// 페이지 로딩시 실제로 팝업띄우는 함수
*****************************************************/
function popupPage(popCnt)
{
	if(popCnt > 0)	openPop();
}

function openPop()
{
	for(i = 0 ; i < popObj.length ; i++)
	{
		if(!getCookie(popObj[i][3]))
		{
			window.open(popObj[i][0],popObj[i][1],popObj[i][2]);
		}
	}
}
/****************************************************
* 쿠키 저장
*****************************************************/
// 시간은 분단위
function setCookieVal (name, value, time) {
	pathname = location.pathname;
	var ExpDate = new Date();
  var myDomain = pathname.substring(0, pathname.lastIndexOf('/')) +'/';

	// 이렇게 쓸수도 있다.
  var myDomain = '/';

  ExpDate.setTime(ExpDate.getTime() + 1000*60* time);
  setCookie(name, value, ExpDate, myDomain);
}

function setCookie (name, value) {
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (2 < argc) ? argv[2] : null;
	var path = (3 < argc) ? argv[3] : null;
	var domain = (4 < argc) ? argv[4] : null;
	var secure = (5 < argc) ? argv[5] : false;
	document.cookie = name + "=" + escape (value) +
		((expires == null) ? "" :
			 ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
}

function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1) endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

function getCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {	//while open
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			 return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}	//while close
	return null;
}


/***********************************************************************************************/


function favmenu(){
	var bookmarkURL = window.location.hostname;
	var bookmarkTitle = document.title;
	var ua = window.navigator.userAgent.toLowerCase(); 

	if ( /iphone/.test(ua) || /ipad/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) { 
		var BlockDevice = ua.indexOf("iphone") + ua.indexOf("ipad");
		if(BlockDevice == -2){
			var url =  "naversearchapp://addshortcut?url=http%3A%2F%2F" + bookmarkURL + "%2Fmain%2F&icon=http%3A%2F%2F" + bookmarkURL + "%2Fimg%2Ficon_72.png&title="+ encodeURIComponent(bookmarkTitle) +"&serviceCode=nstore&version=7";
			document.location.href= url;
		}else{
			alert("아이폰, 아이패드 계열은 직접 홈버튼추가를 사용하셔야합니다.");
			return false;
		}

	} else {
		var triggerDefault = false;
		if (window.sidebar && window.sidebar.addPanel) {
			// Firefox version < 23
			window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
		} else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
			// Firefox version >= 23 and Opera Hotlist
			var $this = $(this);
			$this.attr('href', bookmarkURL);
			$this.attr('title', bookmarkTitle);
			$this.attr('rel', 'sidebar');
			$this.off(e);
			triggerDefault = true;
		} else if (window.external && ('AddFavorite' in window.external)) {
			// IE Favorite
			window.external.AddFavorite(bookmarkURL, bookmarkTitle);
		} else {
			// WebKit - Safari/Chrome
			alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
		}
	}
}

