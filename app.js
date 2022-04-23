const label=document.querySelectorAll('label');
const radiobtn=document.querySelectorAll('.radiobtn');
const submit=document.querySelector('.submit-btn');
const container=document.querySelector('.container');
const thankyou=document.querySelector('.thankyou');
const rating=document.querySelector('.selected span');
const main=document.querySelector('main');

const getValue=() => {

    for (i = 0; i < radiobtn.length; i++) {
        if (radiobtn[i].checked) {
           return label[i].textContent;
            
        }
    }
}

submit.addEventListener('click',()=>{
for(i=0;i<radiobtn.length;i++){
    if(radiobtn[i].checked){
        container.style.opacity=0;
        container.style.zIndex=-1;
        thankyou.style.opacity=1;
        thankyou.style.zIndex=1;
        rating.innerHTML=getValue();
        main.style.paddingTop='2rem';
        main.style.paddingBottom='7rem';
    } 
}
})

