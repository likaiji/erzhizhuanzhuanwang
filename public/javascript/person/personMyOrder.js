/**
 * Created by Administrator on 2017/2/15.
 */
$(document).ready(function(){
   //console.log("aaa");
document.getElementById("myOrderleftBox").style.backgroundColor="#4EC487";


});

angular.module('person',[])
    .controller('personOrder',['$http',function($http){
        var self=this;
        self.data=[
            {
                orderImg:'images/computer/computerone.png',
                orderTitle:'戴尔(DELL)魔方15MF',
                orderNumber:'11323232',
                orderPrice:'￥3000',
                orderStatus:'未提交',
                orderBtn:'提交订单'
            },
            {
                orderImg:'images/computer/computerone.png',
                orderTitle:'戴尔(DELL)魔方15MF',
                orderNumber:'15150909876',
                orderPrice:'￥3000',
                orderStatus:'未提交',
                orderBtn:'提交订单'
            }
        ]

    }]);