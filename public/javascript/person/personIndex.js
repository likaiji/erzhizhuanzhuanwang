/**
 * Created by Administrator on 2017/2/15.
 */

$(document).ready(function(){
    //修改左边的绿色小长方形
    document.getElementById("personIndexleftBox").style.backgroundColor="#4EC487";

    var nowTime=new Date();  //获取当前时间
    //console.log(nowTime);  //获取当前时间 是一个对象
    //console.log(nowTime.getFullYear()+"年");  //获取当前年份
    //console.log((nowTime.getMonth()+1)+"月");  //获取当前月份(默认从0开始，所以加1)
    //console.log(nowTime.getDate()+"日");  //获取当前日份
    //console.log(nowTime.getHours()+"时");  //获取当前小时
    //console.log(nowTime.getMinutes()+"分");  //获取当前分钟
    //console.log(nowTime.getSeconds()+"秒");  //获取当前秒数

    if(nowTime.getHours()>=0 && nowTime.getHours()<=11){  //0到11点为上午
        document.getElementById("personHello").innerHTML="上午好";
    }else if(nowTime.getHours()>=12 && nowTime.getHours()<=14){
        document.getElementById("personHello").innerHTML="中午好";
    }else if(nowTime.getHours()>=15 && nowTime.getHours()<=18){
        document.getElementById("personHello").innerHTML="下午好";
    } else{
        document.getElementById("personHello").innerHTML="晚上好";
    }

    function showTime(){
       var realTime=new Date();  //获取当前时间()
        return realTime.getFullYear()+"年"+(realTime.getMonth()+1)+"月"+realTime.getDate()+"日"+" "
                +realTime.getHours()+"时"+realTime.getMinutes()+"分"+realTime.getSeconds()+"秒";
        //console.log(realTime.getFullYear()+"年"+(realTime.getMonth()+1)+"月")
    }
    setInterval(
        function(){document.getElementById("trueTime").innerHTML=showTime();
        },1000);  //每一秒执行一次这个function方法

});

