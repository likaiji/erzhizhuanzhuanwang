/**
 * Created by Administrator on 2017/2/15.
 */
$(document).ready(function(){
    //console.log("aaa")
    document.getElementById("changePersonalDataleftBox").style.backgroundColor="#4EC487";
});


//省市二级联动代码
var arr=new Array(2); //创建一个存储数组

arr[0]=["南山校区","1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋","14栋","15栋","16栋","17栋"];
arr[1]=["学府校区","A栋","B栋","C栋","D栋","E栋","F栋","G栋","H栋"];

function add1(val){
    //alert(val)  //选择框选择哪一个值，val就是哪个值


    //获取city的select对象（整个select标签）
    var city1 = document.getElementById("cityid");
    //得到city里面的option(数组对象)
    var options1 = city1.getElementsByTagName("option");

    //遍历数组
    for(var m=0;m<options1.length;m++){
        var op=options1[m];
        city1.removeChild(op); //从列表中删除op
        m--;
    }

    //遍历二维数组
    for(var i=0;i<arr.length;i++){
        //得到二维数组里面的每一个数组
        var arr1=arr[i];  //arr[0],arr[1]两个数组

        //得到遍历数组后的第一个值
        var firstvalue=arr1[0]; //得到南山校区，学府校区

        //判断传递过来的值是否和第一个值相等
        if(firstvalue==val){
            //得到第一个值后面的元素
            //遍历arr1数组
            for(var j=1;j<arr1.length;j++){
                var value1=arr1[j]; //得到所有楼栋的名字（所有的都会出现一次）
                //alert(value1)

                //创建option
                var option1=document.createElement("option");

                //创建文本(一长串的文本)
                var text1=document.createTextNode(value1);
                //console.log(text1)

                //把文本添加到option里面
                option1.appendChild(text1);

                //把option1值添加到楼栋哪个select里面
                city1.appendChild(option1);
            }
        }
    }

}

//获取二级联动的值
function func(){
    var aaa=document.getElementById("countryid").value;
    var bbb=document.getElementById("cityid").value;
    console.log(aaa)
    console.log(bbb)
}
