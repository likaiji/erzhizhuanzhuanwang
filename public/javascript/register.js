/**
 * Created by Administrator on 2017/2/13.
 */
  //验证
function registerCheck(){
    //event.preventDefault();
    //alert("aaa");
    var registerUsername=document.registerForm.registerUserName.value;  //获取输入的用户名
    var registerPassword=document.registerForm.registerPassword.value;  //获取输入的第一个密码
    var registerPasswordSure=document.registerForm.registerPasswordSure.value; //获取第二个密码
    var registerphone=document.registerForm.registerphone.value;   //获取电话号码
    if(registerUsername.length!=0 && registerPassword.length!=0 && registerPasswordSure.length!=0 && registerphone.length!=0 &&
        registerPassword==registerPasswordSure && registerphone.match(/^(((13[0-9]{1})|(15[0-9]{1})|170|186)+\d{8})$/) )
    {  //符合条件，执行下面代码    true表示提交
        console.log("注册成功，正在跳转！！！");
        return true;
    }else if(registerUsername.length!=0 && registerPassword.length!=0 && registerPasswordSure.length!=0 && registerphone.length!=0 &&
        registerPassword!=registerPasswordSure && registerphone.match(/^(((13[0-9]{1})|(15[0-9]{1})|170|186)+\d{8})$/) )
    {   //两次密码不符
        document.getElementById("passwordError").style.display="block";
        document.getElementById("phoneError").style.display="none";
        document.getElementById("doubleError").style.display="none";
        document.getElementById("inputNull").style.display="none";
        return false;
    }
    else if( registerUsername.length!=0 && registerPassword.length!=0 && registerPasswordSure.length!=0 && registerphone.length!=0 &&
        registerPassword==registerPasswordSure && !registerphone.match(/^(((13[0-9]{1})|(15[0-9]{1})|170|186)+\d{8})$/))
    {  //手机号码格式错误
        document.getElementById("passwordError").style.display="none";
        document.getElementById("phoneError").style.display="block";
        document.getElementById("doubleError").style.display="none";
        document.getElementById("inputNull").style.display="none";
        return false;
    }else if(registerUsername.length!=0 && registerPassword.length!=0 && registerPasswordSure.length!=0 && registerphone.length!=0 &&
        registerPassword!=registerPasswordSure && !registerphone.match(/^(((13[0-9]{1})|(15[0-9]{1})|170|186)+\d{8})$/) )
    {
        document.getElementById("passwordError").style.display="none";
        document.getElementById("phoneError").style.display="none";
        document.getElementById("doubleError").style.display="block";
        document.getElementById("inputNull").style.display="none";
        return false;
    }else if(registerUsername.length==0 || registerPassword.length==0 || registerPasswordSure.length ==0 || registerphone.length==0 ||
        registerPassword==registerPasswordSure || registerphone.match(/^(((13[0-9]{1})|(15[0-9]{1})|170|186)+\d{8})$/) )
    {
        document.getElementById("passwordError").style.display="none";
        document.getElementById("phoneError").style.display="none";
        document.getElementById("doubleError").style.display="none";
        document.getElementById("inputNull").style.display="block";
        return false;
    }



}