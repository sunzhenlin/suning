var pei=document.getElementById("cainixihuan");
var ajax=new XMLHttpRequest();
    ajax.open("get","shangpin.php",true);
    ajax.send(null);
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4&&ajax.status===200){
            var res=JSON.parse(ajax.responseText);
            // console.log(res);
            var str=`
            <div id="cainixihuan1">
                <img src="images/黄shu.jpg" alt="">
                 <h3>猜你喜欢</h3>
                 </div>
            `;
            for(var h=0;h<res.length;h++){
                str+=`
                
                 <div id="cainixihuan2">
                 <img src="${res[h].img}" alt="">
                 <p>${res[h].cot}</p>
                 <span id="CNXH1">${res[h].qian}</span>
                 <span id="CNXH2">${res[h].z}</span>
                 </div>
                `
            }
         pei.innerHTML=str;
        }
    }
