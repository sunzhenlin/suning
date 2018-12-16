var imgs=document.getElementsByClassName("imgs")
var imgsxiao=document.getElementsByClassName("imgsxiao")
    for(var i=0;i<imgsxiao.length;i++){
        imgsxiao[i].index=i;
    imgsxiao[i].onmouseover=function(){  
      for(var k=0;k<imgsxiao.length;k++){
        imgs[k].style.display="none";
         imgsxiao[k].style.border="none";

      } 
   imgs[this.index].style.display="block";
    imgsxiao[this.index].style.border="1px solid #ff6600";
  
    }
 }
 var f=0;
 function move(ele,dir,end){
   
     if(dir==="left"){
      clearInterval(ele.timer)
         ele.timer=setInterval(function(){
             ele.style.left=ele.offsetLeft-10+"px";
             if(ele.offsetLeft<=end){
                 ele.style.left=end+"px";
                 clearInterval(ele.timer)
             }
         })
     }else{
          ele.timer=setInterval(function(){
             ele.style.left=ele.offsetLeft+10+"px";
             if(ele.offsetLeft>=end){
                 ele.style.left=end+"px";
                 clearInterval(ele.timer)
             }
         })
     }
 }

btnR.onclick=function(){
   if(f>=5){
      liuzhangtu.style.left=0;
      f=0;
   }
   f++;
   move(liuzhangtu,"left",-200*f);
}
btnL.onclick=function(){
   if(f<=0){
      liuzhangtu.style.left="-1200px";
      f=6;
   }
   f--;
   move(liuzhangtu,"left",-200*f);
}
var lis=document.querySelectorAll("#liugedian li");
for(var y=0;y<lis.length;y++){
   lis[y].index=y;
   lis[y].onclick=function(){
      if(this.index>=f){
         move(liuzhangtu,"left",-200*f);
         lis[f].style.background="#fff"
      }else{
         move(liuzhangtu,"left",-200*f);
         lis[f].style.background="#000"
      }
      f=this.index;
   }
}
jiashu.onclick=function(){ 
   shuliangduoshao.innerHTML=parseInt(shuliangduoshao.innerHTML)+1; 
}
jian.onclick=function(){ 
    var res=shuliangduoshao.innerHTML=parseInt(shuliangduoshao.innerHTML)-1;
   if(res<=0) {
      shuliangduoshao.innerHTML=0;
   }
}