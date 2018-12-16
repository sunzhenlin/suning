var gundongzhou=document.getElementById("gundongzhou")

console.log(document.documentElement.scrollTop)

    window.onscroll=function(){
        if(document.documentElement.scrollTop>500){
            gundongzhou.style.display="block";
        }
        if(document.documentElement.scrollTop<500){
            gundongzhou.style.display="none";
        }
    }