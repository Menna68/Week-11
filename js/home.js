let logoutBtn = document.getElementById("logoutBtn")

let arrayUsers = JSON.parse(localStorage.getItem("users"));
let cuurentUser = localStorage.getItem("currentUserName")
let cartona = "";
for (let i = 0; i < arrayUsers.length; i++) {
    cartona = `<div class="content m-auto p-5">
          <h2>Welcome ${cuurentUser}</h2>
        </div>`
        
}
document.getElementById("Data").innerHTML = cartona


logoutBtn.addEventListener('click' , function(){
 {
   
        window.location = "./index.html";
    
}


})


