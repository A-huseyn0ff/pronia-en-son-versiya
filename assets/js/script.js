AOS.init();
  const USDbtn=document.getElementById('USD-btn')
  const ENGLISHbtn=document.getElementById('ENGLISH-btn')
const USDli=document.getElementById('USD-li')
const ENGLISHli=document.getElementById('ENGLISH-li')

USDbtn.addEventListener('click',()=>{
  if (ENGLISHli.classList.contains('active')) {
    ENGLISHli.classList.remove('active')
  }
  USDli.classList.toggle('active')
})
ENGLISHbtn.addEventListener('click',()=>{
  if (USDli.classList.contains('active')) {
    USDli.classList.remove('active')
  }
  ENGLISHli.classList.toggle('active')
})

// ---------------------------------------------------------
const arr=[
    "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png",
    "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png",
  ]
  let ind=0
 const slideimg=document.getElementById('img-slider')
 const left=document.getElementById('left-arrow')
 const right=document.getElementById('right-arrow')
 const colimg=document.getElementById('colimg')
//  slideimg.setAttribute('data-aos',"fade-up")
 left.addEventListener('click',()=>{
    ind--
    if (ind<0) {
    ind=1
    }
    slideimg.src=arr[ind]
 })
 right.addEventListener('click',()=>{
    ind++
    if (ind>1) {
        ind=0
    }
    slideimg.src=arr[ind]
}
)
// ----------------------------------------------------------
const body=document.querySelector('body')
const moveImgSlider=document.getElementById('img-slider')
body.addEventListener('mousemove',function(e){
  let x=Math.floor(e.clientX/40);
  let y=Math.floor(e.clientY/40);
  moveImgSlider.style.transform=`translate(${-x}px,${-y}px)`
})
//-----------------------------------------------------------
const searchbtn=document.getElementById('Search')
const searchbox=document.getElementById('Search-box')
const X=document.getElementById('x')
searchbtn.addEventListener('click',()=>{
searchbox.style.display='flex'
})
X.addEventListener('click',()=>{
  searchbox.style.display='none'
})