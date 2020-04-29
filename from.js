const select = document.querySelector(".js-select");
const Country="Country";

function handleChange(){
    const optionValue=select.value;
    localStorage.setItem(Country,optionValue);   
}

function init(){   

    const currentCountry = localStorage.getItem(Country);
    if(currentCountry){
        const option = document.querySelector(`option[value="${currentCountry}"]`);
        option.selected = true;       
    }    
}

init();
select.addEventListener("change",handleChange);