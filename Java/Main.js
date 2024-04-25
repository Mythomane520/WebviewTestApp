//footer time and date auto (start)
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date 
 */

function formateTime(date){
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date 
 */

function formateDate(date){
    const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}
setInterval(() => {
    const now = new Date();

    timeElement.textContent = formateTime(now);
    dateElement.textContent = formateDate(now);
}, 200);
//footer time and date auto (end)


// start of java for check out
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        setError(fullName, 'Full name is required');
    } else {
        setSuccess(fullName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(phoneNumber, 'Password is required');
    } else if (phoneNumberValue.length < 10 ) {
        setError(phoneNumber, 'Phone number must be at least 10 character.')
    } else {
        setSuccess(phoneNumber);
    }

    if(messageValue === '') {
        setError(message, 'Message is required');
    } else if (messageValue.length < 5 ) {
        setError(message, 'Provide a message greater then 5 letters');
    } else {
        setSuccess(message);
    }
};


var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('fullName').value;
    if(name.length == 0){
        nameError.innerHTML = ' Full name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Full name is required';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"</i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phoneNumber').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
}
if(phone.length !== 10){
    phoneError.innerHTML = 'Phone No only 10 digits';
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Only digits';
    return false;
}
phoneError.innerHTML = '<i class="fas fa-check-circle"</i>';
return true;
}

function validateEmail(){
var email = document.getElementById('email').value;
if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalid';
    return false;
}
emailError.innerHTML = '<i class="fas fa-check-circle"</i>';
return true;
}

function validateMessage(){
var message = document.getElementById('message').value;
var required = 20;
var left = required - message.length;

if(left > 0){
    messageError.innerHTML = left + 'More characters required';
    return false;
}
messageError.innerHTML = '<i class="fas fa-check-circle"</i>';
return true;
}

function validateForm(){
if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix the errors above before submitting.';
    setTimeout(function(){submitError.style.display = 'none'}, 3000)
    return false;
}else{
    
}
}





let courseArr = [];
let monthCourseCount = 0
let weekCourseCount = 0
let totalCourseCount = 0
let subTotal = 0
let discountPercent = 0
let discountAmount = 0
let vatAmount = 0
let totalAmount = 0



function selectFun(){
    

    
    let firstAidCheck = document.querySelector("#firstAid")
    let sewingChecked = document.querySelector("#sewing")
    let landscapingChecked = document.querySelector("#landscaping")
    let lifeSkillsChecked = document.querySelector("#lifeSkills")
    
    let childMindingChecked = document.querySelector("#childMinding")
    let cookingChecked = document.querySelector("#cooking")
    let gardenMaintenanceChecked = document.querySelector("#gardenMaintenance")

    firstAidCheck.addEventListener("change", ()=>{
        if(firstAidCheck.checked){
            courseArr.push("firstAid")
           
        }else{

            let i = courseArr.indexOf("firstAid")
            courseArr.splice(i,1)
            
          
        }
    })

    sewingChecked.addEventListener("change", ()=>{
        if(sewingChecked.checked){
            courseArr.push("sewing")
           
        }else{
            let i = courseArr.indexOf("sewing")
            courseArr.splice(i,1)
            
            
        }
    })

    landscapingChecked.addEventListener("change", ()=>{
        if(landscapingChecked.checked){
            courseArr.push("landscaping")
            
        }else{
            let i = courseArr.indexOf("landscaping")
            courseArr.splice(i,1)
        }
    })

    lifeSkillsChecked.addEventListener("change", ()=>{
        if(lifeSkillsChecked.checked){
            courseArr.push("lifeSkills")
            
        }else{
            let i = courseArr.indexOf("lifeSkills")
            courseArr.splice(i,1)
        }
    })

    childMindingChecked.addEventListener("change", ()=>{
        if(childMindingChecked.checked){
            courseArr.push("childMinding")
            
        }else{
            let i = courseArr.indexOf("childMinding")
            courseArr.splice(i,1)
        }
    })

    cookingChecked.addEventListener("change", ()=>{
        if(cookingChecked.checked){
            courseArr.push("cooking")
            
        }else{
            let i = courseArr.indexOf("cooking")
            courseArr.splice(i,1)
        }
    })

    gardenMaintenanceChecked.addEventListener("change", ()=>{
        if(gardenMaintenanceChecked.checked){
            courseArr.push("gardenMaintenance")
            
        }else{
            let i = courseArr.indexOf("gardenMaintenance")
            courseArr.splice(i,1)
        }
    })
    

}




function calFun(){

monthCourseCount = 0
weekCourseCount = 0
totalCourseCount = 0
subTotal = 0
discountPercent = 0
discountAmount = 0
vatAmount = 0
totalAmount = 0


    for(let i = 0; i< courseArr.length; i++){
        if(courseArr[i] == "childMinding" || courseArr[i] == "cooking" || courseArr[i] == "gardenMaintenance"){
            weekCourseCount += 1
            
        }else{
            monthCourseCount += 1

        }

        
        
    }
    totalCourseCount = weekCourseCount+monthCourseCount
    subTotal = (weekCourseCount * 750.00) + (monthCourseCount * 1500.00)

    switch(true){
        case totalCourseCount ==  0:
            alert("Please select a course")
            break;
        case totalCourseCount ==  1:
            discountPercent = 0
            break;
        case totalCourseCount == 2:
            discountPercent = 5
            break;
        case totalCourseCount == 3:
            discountPercent = 10
            break;
        case totalCourseCount >=4:
            discountPercent = 15
            break;
        default:
            discountPercent = 0
    }

    discountAmount = (subTotal * discountPercent/100)

    

    totalAmount = (subTotal-discountAmount)

    vatAmount = (totalAmount * 15/100)


    document.querySelector("#subTotalCell").textContent = ("R "+ subTotal.toFixed(2));
    document.querySelector("#discountPercentCell").textContent = (discountPercent + " %")
    document.querySelector("#discountCell").textContent = ("R "+ discountAmount.toFixed(2))
    document.querySelector("#vatCell").textContent = ("R " + vatAmount.toFixed(2))
    document.querySelector("#totalCell").textContent = ("R " + totalAmount.toFixed(2))


}



document.querySelector("#calBtn").addEventListener("click", calFun)
selectFun()
//end of java code for check out.