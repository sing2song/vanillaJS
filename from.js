const select = document.querySelector(".country");
const Country="Country";


function init(){    

    const currentCountry = localStorage.getItem(Country);
    if(currentCountry===null){
        select.addEventListener('change',function(){
            const optionValue=select.value;
            localStorage.setItem(Country,optionValue);            
        });
/*
        select.addEventListener('change',(event)=>{
            const optionValue=`${event.target.value}`;
            localStorage.setItem(Country,optionValue);            
        });*/
    }else{
        select.value=currentCountry;        
    }
}
init();