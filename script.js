function openModal()
{
document.getElementById("modal").style.display="flex";
}

function closeModal()
{
document.getElementById("modal").style.display="none";
}


function sendMail(event)
{

event.preventDefault();

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let message=document.getElementById("message").value;


let mailtoLink =
`mailto:lokeshreddygoli2005@gmail.com
?subject=Portfolio Contact from ${name}
&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;


window.location.href=mailtoLink;

}
