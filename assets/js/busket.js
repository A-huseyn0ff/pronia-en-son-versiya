const busketbtn=document.getElementById('busket')
const busketbox=document.getElementById('cart-menu')
const exit=document.getElementById('Exit')
busketbtn.addEventListener('click',()=>{
    busketbox.style.display='flex'
})
exit.addEventListener('click',()=>{
    busketbox.style.display='none'
})




