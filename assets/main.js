/*
TITLE : CONTACT FORM - HTML CSS
MADE BY : FARAZ KHAN (WEB DESIGNER/DEVELOPER)
INSTAGRAM: @faraz_py
*/

function validateForm() {
    var name = document.getElementById("name").value ;
    var email = document.getElementById("email").value ;
    var subject = document.getElementById("subject").value ;
    var details = document.getElementById("detail").value ;

if(name==""||email==""||subject==""||details=="null") {
    document.getElementById("post_message").innerHTML='<span style="color:brown">Please fill our everything !</span>' ;
    return false;
} else {
    document.getElementById("post_message").innerHTML='<span style="color:green">Your message has been sent!</span>' ;
}
}