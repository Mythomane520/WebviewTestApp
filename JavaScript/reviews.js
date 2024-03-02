// Nav code//
function animateOpen(){
    document.querySelector("#nav").classList.remove("closeNav")
    document.querySelector("#nav").classList.add("openNav")

    console.log("Open");
}

function animateClose(){
    document.querySelector("#nav").classList.add("closeNav")
    document.querySelector("#nav").classList.remove("openNav")

    console.log("Close");

}
var menuBtn=document.querySelector("#menuBtn")
var closeNav=document.querySelector("#closeBtn")

menuBtn.addEventListener("click", animateOpen)
closeNav.addEventListener("click", animateClose)
// Nav code//

// carousel//
var isDragStart = false, prevPageX, prevScrollLeft;

var dragStart = (e)=>{
    isDragStart=true;
    prevPageX = e.pageX  || e.touches[0].pageX;
    prevScrollLeft = slides.scrollLeft;
}

var dragging = (e) =>{
    if(!isDragStart)return;
    e.preventDefault();
    console.log(e.pageX);
    var positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slides.scrollLeft = prevScrollLeft - positionDiff;
}

var dragStop = () =>{
    isDragStart = false;
}

var slides = document.querySelector("#slides");
if(slides){
slides.addEventListener("mousemove",  dragging);
slides.addEventListener("mousedown", dragStart);
slides.addEventListener("mouseup", dragStop);

slides.addEventListener( "touchmove", dragging);
slides.addEventListener("touchstart", dragStart);
slides.addEventListener("touchend", dragStop);
}


var firstImg = document.querySelectorAll(".slide")[0];
var firstImgWidth = firstImg.clientWidth +12.8;


var prevBtn = document.querySelector("#prevBtn")
prevBtn.addEventListener("click", () =>{
    slides.scrollLeft += firstImgWidth;
})

var nextBtn = document.querySelector("#nextBtn")
nextBtn.addEventListener("click",() =>{
    slides.scrollLeft -= firstImgWidth;
})
// carousel//