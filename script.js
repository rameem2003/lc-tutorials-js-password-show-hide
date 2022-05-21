const tog = document.getElementById("togg");
const pass = document.getElementById("pass");


tog.addEventListener("click", () => {
    if(pass.type === "password"){
        pass.type = "text";
        tog.classList.replace("fa-eye", "fa-eye-slash");
    }else{
        pass.type = "password";
        tog.classList.replace("fa-eye-slash", "fa-eye");
    }
})