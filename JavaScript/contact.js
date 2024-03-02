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

// contact form//


var email = document.querySelector("#email")
var emailValid=false

var fName = document.querySelector("#firstNameInput")
var fNameValid = false

var lName = document.querySelector("#lastNameInput")
var lNameValid=false;

var errorArr=[]

var errorModal = document.querySelector("#errorModal")

var msg=""
var newP = ""

var isError = false;

var form= document.querySelector("#form")



var contactFun = ()=>{

    errorModal.classList.remove("noDis")
    submitBtn.classList.add("noDis")
    
    
    
    i=0
    errorArr = []
    var newDiv=document.createElement("div")
    newDiv.setAttribute("id", "modalBody")
    newDiv.classList.add("disNone")
    errorModal.appendChild(newDiv)
    
    
    
    
    switch(true){
        case email.value.includes("@") && email.value.includes("."):
            emailValid = true;
            break
        case email.value.includes("@") && !email.value.includes("."):
            emailValid = false;
            break
        case !email.value.includes("@") && email.value.includes("."):
            emailValid = false;
            break
        case !email.value.includes("@") && !email.value.includes("."):
            emailValid = false;
            break
    }
    
    switch(true){
        case fName.value != "" && lName.value != "" && emailValid == true:
            console.log("success")
            
            isError = false;
            break;
        case fName.value == "" && lName.value != "" && emailValid == true:
            console.log("fName")
            errorArr.push("First name invalid")
            isError = true
            break;
        case fName.value != "" && lName.value == "" && emailValid == true:
            errorArr.push("Last name invalid")
            console.log("lName")
            isError = true
            break;
        case fName.value != "" && lName.value != "" && emailValid == false:
            errorArr.push("Email invalid")
            console.log("Email Invalid")
            isError = true
            break;
    
        case fName.value == "" && lName.value == "" && emailValid == true:
            errorArr.push("First name invalid")
            errorArr.push("Last name invalid")
            console.log("fName lName")
            isError = true
            break;
        case fName.value == "" && lName.value != "" && emailValid == false:
            errorArr.push("First name invalid")
            errorArr.push("Email invalid")
            console.log("fName Email")
            isError = true
            break;
        case fName.value != "" && lName.value == "" && emailValid == false:
            errorArr.push("Last name invalid")
            errorArr.push("Email invalid")
            console.log("lName Email")
            isError = true
            break;
        case fName.value == "" && lName.value == "" && emailValid == false:
            errorArr.push("First name invalid")
            errorArr.push("Last name invalid")
            errorArr.push("Email invalid")
            console.log("fName lName Email")
            isError = true
            break;
    }
    
    console.log(errorArr)
    
    if(isError == false){
    
     
    
        console.log("s")
        newP = document.createElement("p")
        newP.textContent = "Please wait..."
     
        modalBody.appendChild(newP)
    
        modalCloseBtn.classList.add("noDis")
    
    
    
    }else{
    
        fName.value = ""
        lName.value = ""
        email.value = ""
    
        console.log("p")
        newP = document.createElement("p")
        newP.textContent = "Error:"
       
        modalBody.appendChild(newP)
    
    for(let i=0;i<errorArr.length;i++){
        console.log("f")
        newP = document.createElement("p")
        newP.textContent = errorArr[i]
        
        modalBody.appendChild(newP)
    }
    
    }
    console.log(i)
    
    
    errorModal.classList.remove("modalClosed")
    }
    
    var closeModalFun = () =>{
    
    errorModal.classList.add("noDis")
    submitBtn.classList.remove("noDis")
    
    
    modalBody.remove(".clear")
    errorArr = []
    i=0
    newP = ""
    errorModal.classList.add("modalClosed")
    
    
    }



var submitBtn= document.querySelector("#submitBtn")
submitBtn.addEventListener("click", contactFun)

var modalCloseBtn = document.querySelector("#modalCloseBtn")
modalCloseBtn.addEventListener("click", closeModalFun)

document.addEventListener('invalid', (function(){
    return function(e){

        e.preventDefault();

    };
})(), true);

//contact form//