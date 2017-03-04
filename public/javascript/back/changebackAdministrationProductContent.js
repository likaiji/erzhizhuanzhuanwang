/**
 * Created by Administrator on 2017/2/26.
 */
$(document).ready(function(){
    document.getElementById("backAdministrationContentProductBox").style.backgroundColor="#4EC487";
    document.getElementsByClassName("saveChange")[0].onclick=function(){
        var changeNumber=document.getElementById("changeNumber").value;
        var changeLeftLocationOne=document.getElementById("changeLeftLocationOne").value;
        var changeLeftLocationTwo=document.getElementById("changeLeftLocationTwo").value;
        var changeLeftLocationThree=document.getElementById("changeLeftLocationThree").value;
        var changeTitle=document.getElementById("changeTitle").value;
        var changeContent=document.getElementById("changeContent").value;
        var changePrice=document.getElementById("changePrice").value;
        var changeBottomLocationOne=document.getElementById("changeBottomLocationOne").value;
        var changeBottomLocationTwo=document.getElementById("changeBottomLocationTwo").value;
        var changeBottomLocationThree=document.getElementById("changeBottomLocationThree").value;
        var changeBottomLocationFour=document.getElementById("changeBottomLocationFour").value;

        if(changeNumber.length==0 || changeLeftLocationOne.length==0 || changeLeftLocationTwo.length==0 || changeLeftLocationThree.length==0 ||
            changeTitle.length==0 || changeContent.length==0 || changePrice.length==0 || changeBottomLocationOne.length==0 ||
            changeBottomLocationTwo.length==0 || changeBottomLocationThree.length==0 || changeBottomLocationFour.length==0 ){
            alert("请输入正确的商品详细信息！！！")
        }else{
            alert("商品详细信息保存成功!!!");
            window.location.href="/backAdministrationProductContent";
        }
    };
});