let scroll = document.querySelector(".Scroll_btn");
let complain_form = document.querySelector(".complain_form");
let complain_btn = document.querySelector(".btn");
let submit_btn = document.querySelector(".submit_btn");
let exit_btn = document.querySelector(".exit_btn");

scroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    });
});

complain_btn.addEventListener("click", () => {
    complain_form.classList.add("showform");
});

submit_btn.addEventListener("click", (event) => {
    const name = document.getElementById("complain_name").value;
    const phone = document.getElementById("complain_phone").value;
    const emails = document.getElementById("complain_email").value;
    const PNR = document.getElementById("complain_pnr").value;
    let valid = true;  

    document.querySelectorAll(".error_message").forEach(msg => {
        msg.textContent = '';  
    });

    event.preventDefault(); 


    let nameError = document.querySelector("#complain_name + .error_message");
    if (name.trim() === '') {
        if (nameError) nameError.textContent = "Please Enter The Name";
        alert("Please Enter The Name");
        valid = false;
    } else if (!validname(name)) {
        if (nameError) nameError.textContent = "Enter A Valid Name";
        alert("Please Enter A Valid Name");
        valid = false;;
    }


    let emailError = document.querySelector("#complain_email + .error_message");
    if (emails.trim() === '') {
        if (emailError) emailError.textContent = "Please Enter The Email";
        alert("Please Enter The Email");
        valid = false;
    } else if (!validemail(emails)) {
        if (emailError) emailError.textContent = "Please Enter A Valid Email";
        alert("Please Enter A Valid Email");
        valid = false;
    }

    let phoneError = document.querySelector("#complain_phone + .error_message");
    if (phone.trim() === '') {
        if (phoneError) phoneError.textContent = "Please Enter The Phone Number";
        alert("Please Enter The Phone Number");
        valid = false;
    } else if (!validphoneno(phone)) {
        if (phoneError) phoneError.textContent = "Please Enter A Valid Phone Number";
        alert("Please Enter A Valid Phone Number");
        valid = false;
    }

    let pnrError = document.querySelector("#complain_pnr + .error_message");
    if (PNR.trim() === '') {
        if (pnrError) pnrError.textContent = "Please Enter The PNR";
        alert("Please Enter The PNR");
        valid = false;
    } else if (!validpnr(PNR)) {
        if (pnrError) pnrError.textContent = "Please Enter A Valid PNR";
        alert("Please Enter A Valid PNR");
        valid = false;
    }


    if (valid) {
        alert("Complaint submitted successfully!");
        complain_form.classList.remove("showform");
    } else {
        alert("Please fill in all fields correctly.");    
    }
});


function validemail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validphoneno(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

function validpnr(pnr) {
    const re = /^.{10}$/;  
    return re.test(pnr);
}

function validname(name) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
}

exit_btn.addEventListener("click", () => {
    complain_form.classList.remove("showform");
});
