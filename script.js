const from= document.getElementById('from');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');


// show innput Error message
function showError(input, messege){
  const fromControl= input.parentElement;
  fromControl.className="from-control error";
  const small= fromControl.querySelector('small')
small.innerText= message;

}

// Event Listener
form.addEventListener('submit',function(e){
e.preventDefault();
if(username.value ===" "){
showError(username, 'Username is required')
}else{
  showSuccess(username);
}
})
