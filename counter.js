var input=document.querySelector("input");
var btn=document.querySelector("button");
var one=document.querySelector(".one")
var two=document.querySelector(".two")



btn.addEventListener("click",function(){
    one.innerHTML=0;
    var val=0;
    var interval=setInterval(() => {
        val++;
        console.log(val);
        two.innerHTML=val;
        two.classList.add("anim");
        if(val==input.value){
            
            clearInterval(interval);
        }
        setTimeout(() => {
            one.innerHTML=val
            two.classList.remove("anim")
            if(one.innerHTML==input.value){
                setTimeout(() => {
                    alert("countdown complete!")       
                }, 100);
            }
        }, 900);
    }, 1100);
})