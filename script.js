let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
function sendmail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_h264qoo", "template_xke87w9", params).then(function (res) {
        alert("success!" + res.status);
    })

}