// document.getElementById("signup-form").addEventListener("submit", function(event) {
//     event.preventDefault();
// console.log("running")
//     let password = document.getElementById("password").value;
//     let confirm_password = document.getElementById("confirm_password").value;

//     if (password !== confirm_password) {
//         showDiv()
//         document.getElementById("signup-form").reset();
//         errorDiv.style.display = 'block'; // Show error message
//         signupForm.reset(); // Reset form fields
//     }
//     function showDiv() {
//     let div = document.getElementById('password-error');
//     div.style.display = 'block'; // or 'inline' or any other suitable value
// }

// });

const signInBtn=document.getElementById("signInBtn");
const guestLoginBtn=document.getElementById("guestLoginBtn");
const fullname=document.getElementById("fullname")
signInBtn.addEventListener('click',(e)=>{
e.preventDefault();
let password = document.getElementById("password").value;
let confirm_password = document.getElementById("confirm_password").value;
function showDiv() {
    let div = document.getElementById('password-error');
    div.style.display = 'block';}

if (password !== confirm_password) {
    showDiv()
    document.getElementById("signup-form").reset();
    errorDiv.style.display = 'block'; // Show error message
    signupForm.reset(); // Reset form fields
}else {
    localStorage.setItem("username",fullname.value)
    window.location.replace("/main.html")
}
})

guestLoginBtn.addEventListener('click',(e)=>{
    localStorage.setItem("username","Guest")

    window.location.replace("/main.html")

})
