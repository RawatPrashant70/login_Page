// const rmCheck = document.getElementById("rememberMe"),
//     emailInput = document.getElementById("email"),
//     emailPass = document.getElementById("pass");

// console.log(emailInput)

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//     rmCheck.setAttribute("checked", "checked");
//     emailInput.value = localStorage.username;
// } else {
//     rmCheck.removeAttribute("checked");
//     emailInput.value = "";
// }

// function lsRememberMe() {
//     if (rmCheck.checked && emailInput.value && emailPass.value !== "") {
//         localStorage.username = emailInput.value;
//         localStorage.checkbox = rmCheck.value;
//     } else {
//         localStorage.username = "";
//         localStorage.checkbox = "";
//     }
// }

$(function () {

    if (localStorage.chkbx && localStorage.chkbx != '') {
        $('#remember_me').attr('checked', 'checked');
        $('#email').val(localStorage.usrname);
        $('#pass').val(localStorage.pass);
    } else {
        $('#remember_me').removeAttr('checked');
        $('#email').val('');
        $('#pass').val('');
    }

    $('#remember_me').click(function () {

        if ($('#remember_me').is(':checked')) {
            // save username and password
            localStorage.usrname = $('#email').val();
            localStorage.pass = $('#pass').val();
            localStorage.chkbx = $('#remember_me').val();
        } else {
            localStorage.usrname = '';
            localStorage.pass = '';
            localStorage.chkbx = '';
        }
    });
});

