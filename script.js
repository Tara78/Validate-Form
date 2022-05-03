const form = document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');


// Functions show input error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small= formControl.querySelector('small');
  small.innerText= message;

}

function showSuccess(input) {
  const formControl = input.parentElement;
formControl.className = 'form-control success';

}
//  Basic solution 

// check Email is valid

// function isValidEmail(email){
//   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(String(email).toLowerCase());
// }

// Event listener 
// form.addEventListener('submit', function(e){
//   e.preventDefault();
// if(username.value === ""){
//   showError(username, "User name is Required")
// }
// else{
//   showSuccess(username); 
// }

//   if (email.value === "") {
//     showError(username, "Email is Required")
//   }
//   else if(!isValidEmail(email.value)){
//     showError(email, "Email is not valid")
//   }
//   else {
//     showSuccess(email);
//   }

//   if (password.value === "") {
//     showError(password, "Password is Required")
//   }
//   else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Retype your password")
//   }
//   else {
//     showSuccess(password2);
//   }

// })


// Another solution 

// Check Required Field
function checkRequired(inputArr) {
inputArr.forEach(function(input) {
 if(input.value.trim() === ""){
  showError(input, `${getFieldName(input)} is required`);
 }else{
 showSuccess(input);
 }
})
}

// Check input length
function checkLenght(input, min, max) {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be less than ${min} characters`);
  }else if(input.value.length >max){
    showError(input, `${getFieldName(input)} must be greater than ${max} characters`);
  }else{
    showSuccess(input)
  }
}

// Check email is valid 
function checkEmail(input){
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(re.test(input.value)){
  showSuccess(input)
}else{
  showError(input, 'Email is not valid')
}
}

// Match password 
function checkPasswordMatch(input1,input2 ){
  if(input1.value !== input2.value){
    showError(input2, 'Password is not match')
  }
}

// Get Field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event listener
form.addEventListener("submit", function(e) {
  e.preventDefault(); 
  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 15);
  checkLenght(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2)

})

