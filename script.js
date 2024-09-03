function sendMail() {
  let parms = {
    from_name : document.getElementById("Name").value,
    email_id : document.getElementById("Email").value,
    message : document.getElementById("msg").value,
  }

  emailjs.send("service_ajzbbsd", "template_1fgnbh8", parms)
    .then(() => alert("Email sent!!"));
    
}
