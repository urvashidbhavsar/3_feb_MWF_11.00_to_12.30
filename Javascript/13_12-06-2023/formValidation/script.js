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