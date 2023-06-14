// click event
function form_submit() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;
    let adr = document.getElementById("adr").value;
    let city = document.getElementById("city").value;
    let pin = document.getElementById("pin").value;
    let mno = document.getElementById("mno").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (fname == "" || fname == null) {
        document.getElementById("msg").innerText = "Enter First name";
        return false
    } else if (lname == "" || lname == null) {
        document.getElementById("msg1").innerText = "Enter Last name";
        return false
    } else if (dob == "" || dob == null) {
        document.getElementById("msg2").innerText = "Select Date";
        return false
    } else if (male == false && female == false && other == false) {
        document.getElementById("msg3").innerText = "Select Gender";
        return false;
    } else if (adr == "" || adr == null) {
        document.getElementById("msg4").innerText = "Enter Address"
        return false;
    } else if (city == -1) {
        document.getElementById("msg5").innerText = "Select City"
        return false
    } else if (pin == "" || pin == null) {
        document.getElementById("msg6").innerText = "Enter pincode"
        return false;
    } else if (mno == "" || mno == null) {
        document.getElementById("msg7").innerText = "Enter Mobile No"
        return false;
    } else if (email == "" || email == null) {
        document.getElementById("msg8").innerText = "Enter Email"
        return false
    } else if (pass == "" || pass == null) {
        document.getElementById("msg9").innerText = "Enter Password"
        return false
    } else if (cpass == "" || cpass == null) {
        document.getElementById("msg10").innerText = "Enter Confirm Password"
        return false
    }
    else {
        document.getElementById("msg").innerText = "";
        document.getElementById("msg1").innerText = "";
        document.getElementById("msg2").innerText = "";
        document.getElementById("msg3").innerText = "";
        document.getElementById("msg4").innerText = "";
        document.getElementById("msg5").innerText = "";
        document.getElementById("msg6").innerText = "";
        document.getElementById("msg7").innerText = "";
        document.getElementById("msg8").innerText = "";
        document.getElementById("msg9").innerText = "";
        document.getElementById("msg10").innerText = "";
        return false
    }
}

// blur event 
function blank_check(blnk, spanid) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(spanid).innerText = "Please, Enter value!!!"
        return false
    }
}
function select_val(selectval, spanid) {
    if (selectval.value == -1) {
        document.getElementById(spanid).innerText = "Please, Select value!!!"
        return false
    } else {
        document.getElementById(spanid).innerText = ""
        return false
    }
}
function blank_radio_check(blnk, spanid) {
    if (blnk.checked == false) {
        document.getElementById(spanid).innerText = "Please, select value!!!"
        return false
    } else {
        document.getElementById(spanid).innerText = ""
        return false
    }
}

// key event 
// regular expression
function name_expression(exp, spanid) {
    let regex = /^[a-zA-Z]*$/
    if (regex.test(exp.value)) {
        document.getElementById(spanid).innerText = "";
        return false;
    } else {
        document.getElementById(spanid).innerText = "Only Alphabet Allowed";
        return false;
    }
}

// address 
function adr_length(adrlength, spanid) {
    if (adrlength.value.length <= 20) {
        document.getElementById(spanid).innerText = "Address must be in 20 character"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}
function pin_length(pinlength, spanid) {
    let regex = /^[0-9]*$/;
    if (!regex.test(pinlength.value)) {
        document.getElementById(spanid).innerText = "Enter only number";
        return false
    }
    else if (pinlength.value.length < 6) {
        document.getElementById(spanid).innerText = "minimum 6 digits"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}

function mobile_length(mnolength, spanid) {
    let regex = /^[0-9]*$/;
    if (!regex.test(mnolength.value)) {
        document.getElementById(spanid).innerText = "Enter only number";
        return false
    }
    else if (mnolength.value.length < 10) {
        document.getElementById(spanid).innerText = "Enter 10 digits"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}
// email 
function email_ex(expval, spanid) {
    let emailex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_ex.test(expval.value)) {
        document.getElementById(spanid).innerText = ""
        return false
    } else {
        document.getElementById(spanid).innerText = "Enter Proper Email"
        return false
    }
}
// password
function pass_ex(expval, spanid) {
    let passex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/
    if (passex.test(expval.value)) {
        document.getElementById(spanid).innerText = ""
        return false
    } else {
        document.getElementById(spanid).innerText = "password must be in between 8 to 12 character. 1 uppercase, lowercase, number and special characters allowed"
        return false
    }
}

// comparision
function compare_pass() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
        document.getElementById("msg10").innerText = "password and confirm password does not match";
        return false
    } else {
        document.getElementById("msg10").innerText = "";
        return false
    }
}

//show password
function showpass() {
    let pass = document.getElementById("pass")
    let icon = document.querySelector("#icon1");
    if (pass.type == "password" || icon.classList.contains("fa-eye") == true) {
        pass.type = "text"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    } else {
        pass.type = "password"
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}
function cshowpass() {
    let pass = document.getElementById("cpass")
    let icon = document.querySelector("#icon2");
    if (pass.type == "password" || icon.classList.contains("fa-eye") == true) {
        pass.type = "text"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    } else {
        pass.type = "password"
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}