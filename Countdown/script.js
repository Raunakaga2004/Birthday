const Birthdate = new Date('February 12, 2025 00:00:00').getTime();

function updateCountdown() {
    const today = new Date().getTime();
    const timeLeft = Birthdate - today;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + " days";
    document.getElementById("hours").innerHTML = hours + " hrs";
    document.getElementById("minutes").innerHTML = minutes + " mins";
    document.getElementById("seconds").innerHTML = seconds + " secs";

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "🎉 It's My Love's BIRTHDAY!!! 🎉";
        document.getElementById("message").innerHTML = "Time to celebrate! 🎂🎈";
        celebrate();
    }
}

function celebrate() {
    const audio = new Audio('path_to_celebration_sound.mp3'); 
    audio.play();
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
