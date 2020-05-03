const calculator = document.getElementById("calculator"),
BtnAll = calculator.querySelectorAll("button");


let a="";
let op="";
let b="";
let ans="";
let flag=0;

let print = document.querySelector(".print");
   
function getNumber(num){
    if(op==""){//첫번째연산자
         a+=num;
    }else{
        if(flag==0){
            print.value="";
            flag=1;
            b+=num;
        }else{    
            b+=num;
            flag=0;
        }
        
    }
    print.value+=num;
    console.log("a="+a+", b="+b+", op="+op);
}

function getOperator(oper){
    if(a!==""){
        
        if(op==""){
            op=oper;    
            a+=op;
        }else{
            a+=b;
            a=Math.floor(eval(a));
            op="";
            print.value=a;
       }
    }else{
        return;
    }
    //print.value="";
    console.log("a="+a+", b="+b+", op="+op);
}

window.clear= function(){
    print.value="";
    a="";
    b="";
    op="";
    ans="";
    console.log("a="+a+",b="+b+",ans="+ans);
}
window.compute = function(){
    let ans = a+op+b;

    a=Math.floor(eval(ans));
    print.value=ans;
    op="";
    b="";
    ans="";
    
    console.log("a="+a+",ans="+ans);
}

function init(){
    document.getElementById("clear").addEventListener('click',clear);

}
init();

