/**
 * Created by Administrator on 2016/12/21.
 */
window.onload=function(){

/*轮播部分*/
/*定义函数*/
function index(n){
    var index=0; //获取下标

    /*定义方法*/
    function scrollImg(index) {
        var imgWidth=document.getElementById("m1").width;

        //通过js改变左边距
        document.getElementById("carouselContentTop").style.marginLeft=-imgWidth*index+"px";

        //获取图片的id为carouselContentTop下方的所有的img属性的title值
        // 因为id为carouselContentTop下方的所有的img属性有很多个，所以是个数组格式
        var data=document.getElementById("carouselContentTop").getElementsByTagName("img")[index].title;
        document.getElementById("carouselContentBottomTitleB").innerHTML=data;

        //获取小圆点的id，是一个数组(注意：这样获取的话，最好只隔一层获取，不然或报错)
        var menu=document.getElementById("section-menu").getElementsByTagName("li");
        for (i=0;i<menu.length;i++){
            if(i==index){
                menu[i].className="active";  //最先是inde=0，显示第一张图片，然后i=0；i和index 相等，所以执行第一个li的显示
            }
            else{
                menu[i].className=""; //如果i不等于index，则除了这个角标之外的属性都为空
            }
            //实现点击图片就可以跳转到相应的图片；
            menu[i].addEventListener("click",  (function(a){
                return function(){
                    scrollImg(a)
                };
            })  (i))

        }
    }

    //每3000毫秒调用一次函数，改变图片位置
    num = 0;
    setInterval(function() {
        num++;
        if (num == 4) {
            num = 0
        }
        scrollImg(num); //执行方法,调用前面的scrollImg方法
    }, 3000);
    
}

/*初始化，图片有4张*/
index(4);



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
    };

    //更改导航栏
    document.getElementById("cqueIndex").style.color="#4EC487";



//更改首页电脑数码模态框的输入框内容
    var goodsShopcar=document.getElementsByClassName("goodsShopcar");
    for(var i=0;i<goodsShopcar.length;i++){
        (function(i){
            document.getElementsByClassName("goodsShopcar")[i].onclick=function(){

                //修改模态框的商品信息
                 var goodsCarstitle=document.getElementsByClassName("indexGoodsTitle")[i].innerHTML;
                 document.getElementById("goodsTileMotai").innerHTML=goodsCarstitle;

                //修改模态框的商品价格
                var goodsCarsprice=document.getElementsByClassName("goodsPrice")[i].innerHTML;
                document.getElementById("goodsPriceMotai").innerHTML=goodsCarsprice;
            };
        })(i);
    }


    //更改首页衣服书籍模态框的输入框内容
    var indexClothesTitleCar=document.getElementsByClassName("indexClothesgoodsShopcar");
    for(var j=0;j<indexClothesTitleCar.length;j++){
        (function(j){
            document.getElementsByClassName("indexClothesgoodsShopcar")[j].onclick=function(){

                //修改模态框的商品信息
                var indexClothesCarContent=document.getElementsByClassName("indexgoodCarTitle")[j].innerHTML;
                document.getElementById("goodsTileMotai").innerHTML=indexClothesCarContent;

                //修改模态框的商品价格
                var indexClothesCarprice=document.getElementsByClassName("indexClothesgoodsPrice")[j].innerHTML;
                document.getElementById("goodsPriceMotai").innerHTML=indexClothesCarprice;
            };
        })(j);
    }

    //判断提交订单的信息是否为空
    document.getElementById("btnCars").onclick=function(){
        var goodCarUsername=document.getElementById("goodCarUsername").value;
        var goodCarAddress=document.getElementById("goodCarAddress").value;
        var goodCarPhone=document.getElementById("goodCarPhone").value;
        if(goodCarUsername.length==0 || goodCarAddress.length==0 || goodCarPhone.length==0){
            alert("请输入正确的订单信息")
        }else{
            alert("成功提交订单!");
            window.location.href="/";
        }
    }



};



//用angular ng-repeat循环遍历商品
var app=angular.module('goods',[]);
app.controller('goodsRepeat',['$http',function($http){
    var self=this;
    self.computerdata=[
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
        }
    ];

    self.clothesdata=[
        {
            url:'5',
            img:'images/clothes/clothesone.png',
            title:'衣品天成 2016夏装新品短袖条纹T恤女',
            price:'￥30'
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
            title:'畅销书  <<心静了世界就静了>>',
            price:'￥18.8'
        },
        {
            url:'8',
            img:'images/book/booktwo.png',
            title:'好吗好的',
            price:'￥28'
        }
    ];

}])