/**
 * Created by Administrator on 2017/2/16.
 */
$(document).ready(function(){
    //更改导航栏
    document.getElementById("cqueComputer").style.color="#4EC487";


    //添加到购物车
    //更改首页电脑数码模态框的输入框内容
    var goodsShopcar=document.getElementsByClassName("goodsShopcar");
    for(var i=0;i<goodsShopcar.length;i++){
        (function(i){
            document.getElementsByClassName("goodsShopcar")[i].onclick=function(){

                //修改模态框的商品信息
                var computerCarsTitle=document.getElementsByClassName("computerCarsTitle")[i].innerHTML;
                document.getElementById("goodsTileMotai").innerHTML=computerCarsTitle;

                //修改模态框的商品价格
                var goodsCarsPrice=document.getElementsByClassName("goodsPrice")[i].innerHTML;
                document.getElementById("goodsPriceMotai").innerHTML=goodsCarsPrice;
            };
        })(i);
    }
});

angular.module('CQUE',[])
    .controller('cqueComputer',['$http',function($http){
        var self=this;
        //alert("bbb")

        self.Navcomputerdata=[
            {
                url:'1',
                img:'images/computer/computerone.png',
                title:'戴尔(DELL)魔方15MF',
                price:'￥3000'
            },
            {
                url:'2',
                img:'images/computer/computertwo.png',
                title:'宏基笔记本电脑',
                price:'￥1800'
            },
            {
                url:'3',
                img:'images/computer/computerthree.png',
                title:'联想i7八核独显',
                price:'￥2000'
            },
            {
                url:'4',
                img:'images/phone/phoneone.png',
                title:'苹果 iPhone6s 银色 16G',
                price:'￥1900'
            },
            {
                url:'9',
                img:'images/ipad/ipadone.png',
                title:'ipad air2 32G国行',
                price:'￥2600'
            }
        ];

    }]);