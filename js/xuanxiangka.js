var shiliu=document.getElementsByClassName("shiliu")
var adedasi=document.getElementsByClassName("adedasi")
    for(var i=0;i<shiliu.length;i++){
        shiliu[i].index=i;
    shiliu[i].onmouseover=function(){  
      for(var k=0;k<shiliu.length;k++){
        shiliu[k].style.background="#fff";
        adedasi[k].style.display="none";

      } 
   this.style.background="#ff8764";
   adedasi[this.index].style.display="block";
    }
 }
