var input=document.getElementById('input')
var sousuoxiala=document.getElementById("sousuoxiala")
     input.onkeydown=function(){
        sousuoxiala.style.display="inline-block";
     }
    input.onkeyup=function(){
        if(input.value===""){
            sousuoxiala.style.display="none"
        }
    var ajax=new XMLHttpRequest();
    ajax.open("get","3.php?cont="+input.value,true);
    ajax.send(null);
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4&&ajax.status===200){
            var res=JSON.parse(ajax.responseText).suggestKeycords;
            var str="";
            res.forEach(item=>{
                str+=`<li><a href="https://search.suning.com/${item}/" target="_blank">${item}</a></li>`

            })
         sousuoxiala.innerHTML=str;
        }
    }
}