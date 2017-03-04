/**
 * Created by Administrator on 2017/2/13.
 */
window.onload=function(){

    /*鼠标放到qq图标，显示二维码*/
    document.getElementById("qq").onmouseover=function(){
        //console.log("aaa");
        document.getElementById("qqerweima").style.display="block";
    };
    /*鼠标离开qq图标，二维码消失*/
    document.getElementById("qq").onmouseout=function(){
        //console.log("aaa");
        document.getElementById("qqerweima").style.display="none";
    };

    /*鼠标放到微信图标，显示二维码*/
    document.getElementById("wechat").onmouseover=function(){
        //console.log("aaa");
        document.getElementById("wechaterweima").style.display="block";
    };
    /*鼠标离开微信q图标，二维码消失*/
    document.getElementById("wechat").onmouseout=function(){
        //console.log("aaa");
        document.getElementById("wechaterweima").style.display="none";
    }

};