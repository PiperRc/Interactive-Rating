const label=document.querySelectorAll('label');
const radiobtn=document.querySelectorAll('.radiobtn');

const submit=document.querySelector('.submit-btn');
const container=document.querySelector('.container');
const thankyou=document.querySelector('.thankyou');
const rating=document.querySelector('.selected span')
// const form=document.querySelector('form');


 
const getValue=() => {
   
    const radiobtn = document.querySelectorAll('.radiobtn');
    for (i = 0; i < radiobtn.length; i++) {
        if (radiobtn[i].checked) {
           return label[i].textContent;
            
        }
    }
}

submit.addEventListener('click',()=>{

container.style.opacity=0;
container.style.zIndex=-1;
thankyou.style.opacity=1;
thankyou.style.zIndex=1;
rating.innerHTML=getValue();
})


// // sent.html
// let charlene=document.querySelector('.charlene')
// form.addEventListener('submit',(e)=>{

//     e.preventDefault();
//     charlene.innerHTML=getValue();
// })


// // 