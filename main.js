(function() {
  emailjs.init("dOIkS1uPb2n4auW1v"); // replace with your Email]S public key
   
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
e.preventDefault();
  emailjs.sendForm("services_84owapu", "template_wwte0sd", this).then(function() {
      document.getElementById("status").innerText = "Message sent successfully!";
      
},
function(error) {
      document.getElementById("status").innerText = "Failed to send message. ";
      
      console.error(error);
     
    });
  
  this.reset(); 
});




let ball = document.getElementById("ball");
let x = 0;
let o = 0.5;
let xSpeed = 1;
let oSpeed = 0.01;

setInterval(move, 10);

function move() {
  if (x > 250 || x < 0) { xSpeed = xSpeed * -1; }
  if (o > 1 || o < 0) { oSpeed = oSpeed * -1; }
  x = x + xSpeed;
  o = o + oSpeed;
  ball.style.left = x + "px";
  ball.style.opacity = o;
}