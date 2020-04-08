let homeFormName = document.getElementById("home-form-name");
let homeFormEmail = document.getElementById("home-form-email");
let homeFormCompany = document.getElementById("home-form-company");
let homeFormWebsite = document.getElementById("home-form-website");

function onSubmit(){
    
    let msg = "";
    msg+="Name : "+homeFormName.value+"%0a"
    msg+="Email : "+homeFormEmail.value+"%0a"
    msg+="Company : "+homeFormCompany.value+"%0a"
    msg+="Website : "+homeFormWebsite.value+"%0a"
    

    msg = msg.split(" ")
    msg = msg.join("%20")
   


    window.open("https://wa.me/919068194171?text="+msg, '_blank');

}

