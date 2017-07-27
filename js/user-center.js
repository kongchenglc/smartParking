window.onload = function() {
    contentWrapperMinHeight();
}

window.onresize = function() {
    setTimeout(contentWrapperMinHeight, 1);
}

function contentWrapperMinHeight() {
    var contentWrapper = document.getElementsByClassName("content-wrapper")[0];
    contentWrapper.style.minHeight = 634 + "px";
}

function submit_password() {
    var passwordWarning = document.getElementById("passwordWarning");
    var password = document.getElementById("password");
    var newPass = document.getElementById("newPass");
    var newRePass = document.getElementById("newRePass");
    if(password.value && newPass.value &&  newRePass.value) {
        if(newPass.value == newRePass.value) {
            (function send(){
	        $.post("changePass.jsp",{
	      		"password":$("#password").val(),
	      		"newPass":$("#newPass").val()
	        },function(result){
	            alert(result);
	            window.location.href="login.jsp"
	        });
	     })();
        } else {
            passwordWarning.innerHTML = "<i class=\"fa fa-warning\"></i>&nbsp;输入密码不一致";
        }
    } else {
            passwordWarning.innerHTML = "<i class=\"fa fa-warning\"></i>&nbsp;请输入完整信息";
    }
}