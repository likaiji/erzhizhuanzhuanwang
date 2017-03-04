/**
 * Created by Administrator on 2017/2/26.
 */
$(document).ready(function(){
    document.getElementById("myOrderleftBox").style.backgroundColor="#4EC487";
    document.getElementsByClassName("saveChange")[0].onclick=function(){
        var changeNumber=document.getElementById("changeNumber").value;
        var changeProductName=document.getElementById("changeProductName").value;
        var changeUserName=document.getElementById("changeUserName").value;
        var changeUserPhone=document.getElementById("changeUserPhone").value;
        var changeTotalPrice=document.getElementById("changeTotalPrice").value;
        var changeAddress=document.getElementById("changeAddress").value;
        var changeOrderStatus=document.getElementById("changeOrderStatus").value;

        if(changeNumber.length==0 || changeProductName.length==0 || changeUserName.length==0 || changeUserPhone.length==0 ||
            changeTotalPrice.length==0 || changeAddress.length==0 || changeOrderStatus.length==0 ){
            alert("请输入正确的订单修改信息！！！")
        }else{
            alert("订单修改成功");
            window.location.href="/backAdministrationOrderProduct";
        }
    }
});