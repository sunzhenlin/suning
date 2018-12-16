setInterval(function(){
            countDown(2019,11,2)
        },1000)
function addZero(a){
            if(a<10){
                a="0"+a;
            }
            return a
        }
function countDown(year,month,date){
            console.log(year,month,date)
            var d1=new Date(year,month-1,date);           
            var d2=new Date();
            var time_dif=(d1.getTime()-d2.getTime())/1000;
            var day=parseInt(time_dif/60/60/24);           
            var hours=parseInt(time_dif%(60*60*24)/60/60) 
            var min=parseInt(time_dif%(60*60)/60)        
            var sec=parseInt(time_dif%(60))           
            var str=`${addZero(day)}天${addZero(hours)}小时${addZero(min)}分钟${addZero(sec)}秒`;
            daojishi.innerHTML=str;
        }