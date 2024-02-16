// const btnAdd=document.querySelector(".add-to-card");
const btnConcel=document.querySelector(".btn-concel");
const btnConfirm=document.querySelector(".btnconfirm");
const payment=document.querySelector(".top-pay");
const btnClose=document.querySelector(".btn_close");
// btnAdd.addEventListener("click",function(){
//     payment.classList.add("active");
// });
const btnAdd=document.querySelectorAll(".pre-order");
for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click",function(){
        payment.classList.add("active");
    })
    
};



btnClose.addEventListener("click",function(){
    payment.classList.remove("active")
});
btnConcel.addEventListener("click",function(){
    payment.classList.remove("active")
});

