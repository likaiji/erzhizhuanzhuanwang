/**
 * Created by Administrator on 2017/2/17.
 */
$(document).ready(function(){
    var imgWidth=document.getElementById("lunboimg").width;
    //console.log(imgWidth);
    document.getElementById("productContentAreaTitleImgLittleOne").onclick=function(){
        document.getElementById("lunboImg").style.marginLeft="0px";
        //console.log("aaa")
    };
    document.getElementById("productContentAreaTitleImgLittleTwo").onclick=function(){
        document.getElementById("lunboImg").style.marginLeft=-(imgWidth*1)+"px";
        //console.log("bbb")
    };
    document.getElementById("productContentAreaTitleImgLittleThree").onclick=function(){
        document.getElementById("lunboImg").style.marginLeft=-(imgWidth*2)+"px";
        //console.log("ccc")
    };


    //添加到购物车
    document.getElementById("productContentAreaTitleContentSubmit").onclick=function(){
        //修改模态框的商品信息
        var clothescarsTitle=document.getElementById("contentCarsTitle").innerHTML;
        document.getElementById("goodsTileMotai").innerHTML=clothescarsTitle;

        //修改模态框的商品价格
        var productCarsPrice=document.getElementById("productCarsPrice").innerHTML;
        document.getElementById("goodsPriceMotai").innerHTML=productCarsPrice;
    }

});

