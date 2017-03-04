/**
 * Created by Administrator on 2017/2/25.
 */
$(document).ready(function(){
   document.getElementById("personalDataleftBox").style.backgroundColor="#4EC487";
   var deleteUser=document.getElementsByClassName("deleteUser");
   for(var i=0;i<deleteUser.length;i++){
      (function(j){
         document.getElementsByClassName("deleteUser")[j].onclick=function(){
            alert("编号为"+(j+1)+"的用户删除成功！！！")
         }
      })(i)
   }

});