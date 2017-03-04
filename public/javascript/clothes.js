/**
 * Created by Administrator on 2017/2/16.
 */
$(document).ready(function(){
    //更改导航栏
    document.getElementById("cqueClothes").style.color="#4EC487";


    //添加到购物车
    var goodsShopcar=document.getElementsByClassName("goodsShopcar");
    for(var i=0;i<goodsShopcar.length;i++){
        (function(i){
            document.getElementsByClassName("goodsShopcar")[i].onclick=function(){

                //修改模态框的商品信息
                var clothescarsTitle=document.getElementsByClassName("clothescarsTitle")[i].innerHTML;
                document.getElementById("goodsTileMotai").innerHTML=clothescarsTitle;

                //修改模态框的商品价格
                var goodsPrice=document.getElementsByClassName("goodsPrice")[i].innerHTML;
                document.getElementById("goodsPriceMotai").innerHTML=goodsPrice;
            };
        })(i);
    }


});

angular.module('CQUE',[])
    .controller('cqueClothes',['$http',function($http){
        var self=this;
        //alert("bbb")

        self.NavClothesdata=[
            {
                url:'5',
                img:'images/clothes/clothesone.png',
                title:'毛衣外套单件',
                price:'￥25'
            },
            {
                url:'6',
                img:'images/clothes/clothestwo.png',
                title:'羊羔毛内机车麂皮外套',
                price:'￥128'
            },
            {
                url:'7',
                img:'images/book/bookone.png',
                title:'摄影技术与艺术（第3版）',
                price:'￥27'
            },
            {
                url:'8',
                img:'images/book/booktwo.png',
                title:'药剂师考试用书',
                price:'￥60'
            },
            {
                url:'10',
                img:'images/clothes/clothesthree.png',
                title:'荧光黄棉服中长款外套',
                price:'￥80'
            }
        ];

    }]);