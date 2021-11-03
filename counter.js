var input=document.querySelector("input");
var btn=document.querySelector("button");
var one=document.querySelectorAll(".one")
var two=document.querySelectorAll(".two")
var len=one.length-1;
one[4].innerHTML=0;
var twoval=0;
var threeval=0;
var fourval=0;
var fiveval=0;
var interval;



btn.addEventListener("click",function(){
    
    clearInterval(interval);
    one[0].innerHTML=0
    one[1].innerHTML=0
    one[2].innerHTML=0
    one[3].innerHTML=0
    two[0].innerHTML=0
    two[1].innerHTML=0
    two[2].innerHTML=0
    two[3].innerHTML=0
    oneCounter();
})


function oneCounter (){
    var number=input.value;
    var numberLength=input.value.length;
    var val=0;
    twoval=0;
    threeval=0;
    fourval=0;
    fiveval=0;
    one[4].innerHTML=0;
    interval=setInterval(() => {
        val++;
        if(val==10){
            val=0;
            twoCounter();   
        }
        two[4].innerHTML=val;
        two[4].classList.add("anim");
        
        var res=true;
        var count=4;
        
        
        setTimeout(() => {
            one[4].innerHTML=val
                
            
            two[4].classList.remove("anim")
        }, 900);
        for(let i=numberLength-1;i>=0;i--){
            if(number[i]==two[count].innerHTML){
                count--;
                continue;
            }
            else{
                res=false;
                
            }
        }
        if(res){

            clearInterval(interval);
            setTimeout(() => {
                alert("countdown complete!..")
                res=false;
            }, 950);
        }
    }, 1100);
}

function twoCounter(){    
        twoval++;
        if(twoval>=10){
            twoval=0;
            threeCounter();   
        }
        two[3].innerHTML=twoval;
        two[3].classList.add("anim");
        setTimeout(() => {
            one[3].innerHTML=twoval;
            two[3].classList.remove("anim");
        }, 900);
}
function threeCounter(){    
        threeval++;
        if(threeval>=10){
            threeval=0;
            fourCounter();   
        }
        two[2].innerHTML=threeval;
        two[2].classList.add("anim");
        setTimeout(() => {
            one[2].innerHTML=threeval;
            two[2].classList.remove("anim");
        }, 900);
}
function fourCounter(){    
        fourval++;
        if(fourval>=10){
            fourval=0;
            fiveCounter();   
        }
        two[1].innerHTML=fourval;
        two[1].classList.add("anim");
        setTimeout(() => {
            one[1].innerHTML=fourval;
            two[1].classList.remove("anim");
        }, 900);
}
function fiveCounter(){    
        fiveval++;
        if(fiveval>=10){
            return;
        }
        two[0].innerHTML=fiveval;
        two[0].classList.add("anim");
        setTimeout(() => {
            one[0].innerHTML=fiveval;
            two[0].classList.remove("anim");
        }, 900);
}