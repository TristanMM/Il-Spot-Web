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
        statusElement.style.color = "green";
        statusElement.style.fontSize = "22px"; // Cambia el tamaño de la letra
    } else {
        statusElement.textContent = "Cerrado ahora";
        statusElement.style.color = "red";
        statusElement.style.fontSize = "22px"; // Cambia el tamaño de la letra
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






let slideIndex2 = 1;
let slideIndex3 = 1;

// Inicializar la función de cambio automático para las tres clases de imágenes

autoSlides('mySlides2');
autoSlides('mySlides3');


showSlides2(slideIndex2);
showSlides3(slideIndex3);

function plusSlides(n, slide) {
    if (slide === 2) {
        showSlides2(slideIndex2 += n);
    } else if (slide === 3) {
        showSlides3(slideIndex3 += n);
    }
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
}

// Función para manejar el cambio automático de diapositivas
function autoSlides(slideClass) {
    const slides = document.querySelectorAll(`.${slideClass}`);
    let currentIndex = 0;

    // Asegura que solo haya una diapositiva visible
    slides[currentIndex].style.display = 'block'; // Muestra la primera imagen

    setInterval(() => {
        // Oculta la diapositiva actual
        slides[currentIndex].style.display = 'none'; 
        // Calcula el siguiente índice (y vuelve al inicio si es necesario)
        currentIndex = (currentIndex + 1) % slides.length;
        // Muestra la siguiente diapositiva
        slides[currentIndex].style.display = 'block';
    }, 5000); // Cambia cada 5 segundos
}



// Obtener el botón
var mybutton = document.getElementById("scrollToTopBtn");

// Mostrar o esconder la flecha dependiendo del desplazamiento de la página
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block"; // Mostrar el botón cuando el usuario se desplace hacia abajo
    } else {
        mybutton.style.display = "none"; // Ocultar el botón cuando esté en la parte superior
    }
};

// Desplazar al principio de la página al hacer clic
mybutton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efecto suave de desplazamiento
    });
});




const toggleButton = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

toggleButton.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});
