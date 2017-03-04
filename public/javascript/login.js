/**
 * Created by Administrator on 2017/2/12.
 */

    //自动更换背景图片
    function changeBg(){
            //定义五组图片
            var bgArr=['../images/backgroundimages/bgone.jpg','../images/backgroundimages/bgtwo.jpg',
                '../images/backgroundimages/bgthree.jpg','../images/backgroundimages/bgfour.jpg',
                '../images/backgroundimages/bgfive.jpg'];

            //random() 方法可返回介于 0 ~ 1 之间的一个随机数。
            var index =parseInt(Math.random()*(bgArr.length-1));
            var currentImage=bgArr[index];
            document.getElementById("loginBox").style.backgroundImage="url("+currentImage+")";
    }
    setInterval(changeBg, 2000);

    //验证用户名
    function check(){
        //console.log("aaa");
        var submitUserName=document.submitForm.submitUserName; //获取用户名
        var submitPassword=document.submitForm.submitPassword; //获取密码
        console.log(submitUserName.value.length);
        console.log(submitPassword.value.length);
        if (submitUserName.value.length==0 || submitPassword.value.length==0)   {  //判断条件
            document.getElementById("userNameError").style.display="block";
            return false;
        }
        else{
            document.getElementById("userNameError").style.display="none";
            return true;

        }
    }

