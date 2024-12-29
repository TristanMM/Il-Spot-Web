document.addEventListener("DOMContentLoaded", function () {
    const schedule = {
        "Domingo": ["11:00", "23:00"],
        "Lunes": ["11:00", "23:00"],
        "Martes": ["11:00", "23:00"],
        "Miércoles": ["11:00", "23:00"],
        "Jueves": ["11:00", "23:00"],
        "Viernes": ["11:00", "23:00"],
        "Sábado": ["11:00", "23:00"]
    };

    const statusElement = document.getElementById("status");
    const now = new Date();
    const day = now.toLocaleDateString("es-ES", { weekday: "long" }).charAt(0).toUpperCase() + 
                now.toLocaleDateString("es-ES", { weekday: "long" }).slice(1);
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    console.log(`Current day: ${day}`);
    console.log(`Current time: ${currentTime}`);

    function isOpen(timeRanges) {
        for (let i = 0; i < timeRanges.length; i += 2) {
            const [start, end] = [timeRanges[i], timeRanges[i + 1]];
            console.log(`Checking range: ${start} - ${end}`);
            if (currentTime >= start && currentTime <= end) {
                return true;
            }
        }
        return false;
    }

    if (schedule[day] && isOpen(schedule[day])) {
        statusElement.textContent = `Abierto ahora`;
    } else {
        statusElement.textContent = "Cerrado ahora";
        statusElement.style.color = "red";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

