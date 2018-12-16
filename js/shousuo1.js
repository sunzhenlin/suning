var input1A=document.getElementById('input1A')
var sousuoxialaA=document.getElementById("sousuoxialaA")
     inputA.onkeydown=function(){
        sousuoxialaA.style.display="inline-block";
     }
    inputA.onkeyup=function(){
        if(inputA.value===""){
            sousuoxialaA.style.display="none"
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
         sousuoxialaA.innerHTML=str;
        }
    }
}