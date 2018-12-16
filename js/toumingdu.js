    var oimg=document.querySelectorAll("#lunbobox img");
    var i=0;
    var timer=null;
     autoplay();
    function changeImg(){
        for(k=0;k<oimg.length;k++){
            oimg[k].style.opacity=0;
        }
        oimg[i].style.opacity=1;
    }
    btn2R.onclick=function(){
        if(i>=7){
            i=-1;
        }
        i++;
        changeImg()
        colora()
    }
      btn1L.onclick=function(){
        if(i<=0){
            i=8;
        }
        i--;
        changeImg()
        colora()
    }
    var lis=document.querySelectorAll("#aul li")
    for(k=0;k<lis.length;k++){
        lis[k].index=k;
        lis[k].onclick=function(){   
                i=this.index;
                changeImg()  
                colora()       
        }
    }
    function colora(){
        for(var t=0;t<lis.length;t++){
            lis[t].style.background="#fff";
        }
        lis[i].style.background="hotpink";
    }
       lunbobox.onmouseover=function(){
        clearInterval(timer)
    }
    lunbobox.onmouseout=function(){
        autoplay();
    }
      function autoplay(){
        timer=setInterval(function(){
        if(i>=7){
            i=-1;
        }
        i++;
        changeImg();
        colora()  
    },2000) 
    }

 