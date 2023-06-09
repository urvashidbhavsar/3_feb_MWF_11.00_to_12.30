// click event
function form_submit() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    if (fname == "" || fname == null) {
        document.getElementById("msg").innerText = "Enter First name";
        return false
    } else if (lname == "" || lname == null) {
        document.getElementById("msg1").innerText = "Enter Last name";
        return false
    } else if (dob == "" || dob == null) {
        document.getElementById("msg2").innerText = "Select Date";
        return false
    } else {
        document.getElementById("msg").innerText = "";
        document.getElementById("msg1").innerText = "";
        document.getElementById("msg2").innerText = "";
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