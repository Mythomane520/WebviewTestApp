




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
// Nav Code//

// Home page //
function showQuote(){
    var quoteForm = document.querySelector("#quoteForm");
  
    if(quoteForm.classList.contains("hideQuote")){
        quoteForm.classList.remove("hideQuote");
        quoteForm.classList.add("showQuote");
        

        quoteBtn.textContent = "Hide Quote Form";
    }else{
        quoteForm.classList.add("hideQuote");
        quoteForm.classList.remove("showQuote");

        quoteBtn.textContent = "Show Quote Form";
        
    }

}

function showNews(){
    var newsForm = document.querySelector("#newsForm");

    if(newsForm.classList.contains("hideQuote")){
        newsForm.classList.remove("hideQuote");
        newsForm.classList.add("showQuote");
        

        newsBtn.textContent = "Hide Newsletter Form";
    }else{
        newsForm.classList.add("hideQuote");
        newsForm.classList.remove("showQuote");

        newsBtn.textContent = "Receive Newsletter";
        
    }
}

var quoteBtn = document.querySelector("#quoteBtn");
var newsBtn = document.querySelector("#newsletterBtn");



if(quoteBtn){
quoteBtn.addEventListener("click", showQuote);
}

if(newsBtn){
    newsBtn.addEventListener("click", showNews);
}
// Home page //













