(function() {
  emailjs.init("VOUR PUBLIC KEY"); // replace with your Email]S public key
   
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR _TEMPLATE_ID", this).then(function() {
      document.getElementById("status").innerText = "Message sent successfully!";
      
},
function(error) {
      document.getElementById("status").innerText = "Failed to send message. ";
      
      console.error(error);
     
    });
  
  this.reset(); 
});