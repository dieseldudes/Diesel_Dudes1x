// ===== Typewriter Effect for Hero Headline =====

// Text you want to display
const text = "24/7 MOBILE DIESEL MECHANIC";
let i = 0;
const speed = 80; // typing speed in ms

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Run typewriter when page loads
window.onload = typeWriter;
