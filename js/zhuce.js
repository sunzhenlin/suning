 var shoujihao=document.getElementById("shoujihao")


 shoujihao.onkeyup=function(){
    sjhm1=/^1\d{10}$/.test(this.value)
        if(!sjhm1){
           shoujihaocuowu.style.display="block"
        }else{
             shoujihaocuowu.style.display="none"
        }
     }

    var arr2=["0","1","2","3","4","5","6","7","8","9","a","b","c"];
    huoquyanzhengma.onclick=function(){
       liuwei(6)
    }
    function liuwei(shulie){
        var str="";
        for(var i=0;i<shulie;i++){
            var index=parseInt(arr2.length*Math.random())
            str+=arr2[index]
        }   
        yanzhengmakuang.innerHTML=str;
    }
    yanzhengmashuru.onblur=function(){
        res3=this.value;
        if(this.value===yanzhengmakuang.innerHTML){
             shuruliuwei.style.display="none";
        }else{
            shuruliuwei.style.display="block";
        }
    }
    zhucemima.onclick=function(){
        
        mimacuowu.style.display="block";
        
     }
     zhucemima.onblur=function(){
        res4=/^\w{6,19}$/.test(this.value)
        mimacuowu.style.display="none";
        
     }
     tijiao.onclick=function(){
        if(sjhm1&&res3&&res4){
        
            alert("注册成功")
        }else(
            alert("注册失败"))
        }
