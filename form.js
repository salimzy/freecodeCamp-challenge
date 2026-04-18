const result = document.getElementById("data");
 let form = document.getElementById("register");
 let login=false;
form.addEventListener("submit",function(e) {
e.preventDefault();


const username = form.name.value.trim();
const email = form.email.value.trim();
const password = form.password.value.trim();

// Clear old errors
document.querySelectorAll(".error").forEach(el => el.remove());

let isValid = true;
if (password.length<6) {
  showError(form.password, "password must be 6+ chars");
  isValid=false;
}
if (name.length < 3) {
  showError(form.name, "Username must be 3+ chars");
  isValid = false;
}

if (!email.includes("@")) {
  showError(form.email, "Enter valid email");
  isValid = false;
}

if (isValid) {
  console.log("Form is valid, sending...", { name, email });
  insertData(name,email,password);
  form.reset();
  // sendDataToServer({ username, email });
}
});
function showError(input, message) {
  const error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.textContent = message;
  input.after(error);
}
function insertData(name,email,password){
  //validation
  const user ={name:name,email:email,password:password}
  let checked = checkAuth(user);
  if (checked===true) {
    localStorage.setItem("user", JSON.stringify(user));
login = true;
loggedin(user);
  }
 
  //submittion
  //storing into localStorage
}
function clearData(param) {
 name.value ='';
 email.value='';
 password ='';
 
  
}
function loggedin(user) {
  // Tab to edit
  
  const div=document.createElement("div");
  let container =document.getElementsByClassName('login');
  div.textContent=`loggedin as ${user.name} <p>with email of ${user.email}</p>`;
  div.className="loggedin-container";
  let span =document.createElement("span")
  span.textContent="logout";
  span.className='btn';
  div.after(span);
  container.appendChild(div);
}
function checkAuth() {
  // Tab to edit
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser!==[]) {
    return false;
    console.log('not found');
  } else {
    return true;
console.log(savedUser.name);
  }

}