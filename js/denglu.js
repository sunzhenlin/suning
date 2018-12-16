DL_1.onclick=function(){
    er.style.display="block";
    ZHMM.style.display="none"
    this.style.borderBottom="2px solid #ff6600";
    DL_2.style.borderBottom="none";
    this.style.color="#ffb757";
    DL_2.style.color="#000";


}


DL_2.onclick=function(){
    ZHMM.style.display="block";
     er.style.display="none";
     this.style.borderBottom="2px solid #ff6600";
    DL_1.style.borderBottom="none";
     this.style.color="#ffb757";
    DL_1.style.color="#000";
}
YHDL.onclick=function(){
        var ajax=new XMLHttpRequest();
        ajax.open("get","2.php?ZH="+ZH.value+"&MM="+MM.value,true);
        ajax.send(null);
        ajax.onreadystatechange=function(){
           if(ajax.readyState===4&&ajax.status===200){
              console.log(ajax.responseText)
              var res=JSON.parse(ajax.responseText).code;
               if(res===0){
                  alert("用户名不存在")
               }else if(res===1){
                  alert("密码错误")
               }else if(res===2){
                  alert("登录成功");
               }            
           }
        }
    }