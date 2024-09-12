document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.getElementById('hero-text');
    const subText = document.getElementById('sub-text');

    const heroContent = "Hi, I'm Hrishi Raj Saxena"; // Text for the main heading

    let heroIndex = 0;
    let subIndex = 0;

    function typeHeroText() {
        if (heroIndex < heroContent.length) {
            heroText.innerHTML = heroContent.substring(0, heroIndex + 1) + '<span class="typing-cursor"></span>';
            heroIndex++;
            setTimeout(typeHeroText, 100); // Speed of typing (in milliseconds)
        } else {
            typeSubText(); // Once hero text is finished, start sub text
        }
    }

    function typeSubText() {
        if (subIndex < subContent.length) {
            subText.innerHTML = subContent.substring(0, subIndex + 1);
            subIndex++;
            setTimeout(typeSubText, 100); // Speed of typing (in milliseconds)
        }
    }

    // Start typing animation
    typeHeroText();
});
