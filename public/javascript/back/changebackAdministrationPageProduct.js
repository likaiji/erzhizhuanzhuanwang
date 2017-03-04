/**
 * Created by Administrator on 2017/2/25.
 */
$(document).ready(function(){
    document.getElementById("backAdministrationPageProductBox").style.backgroundColor="#4EC487";
    document.getElementsByClassName("saveChange")[0].onclick=function(){
        var changeNumber=document.getElementById("changeNumber").value;
        var changeLocation=document.getElementById("changeLocation").value;
        var changeTitle=document.getElementById("changeTitle").value;
        var changePrice=document.getElementById("changePrice").value;
        //console.log(changeNumber);
        if(changeNumber.length==0 || changeLocation.length==0 || changeTitle.length==0  || changePrice.length==0){
            alert("请输入正确的修改信息！！！")
        }else{
            alert("商品信息保存成功");
            window.location.href="/backAdministrationPageProduct";
        }
    };
});

