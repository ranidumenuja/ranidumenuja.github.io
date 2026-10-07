/*
========================================
   INITIALIZE LUCIDE ICONS
========================================
*/

lucide.createIcons();


/*
========================================
   LIGHTBOX
========================================
*/

function openLightbox(src) {

    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    if (!lightbox || !img) return;

    img.src = src;

    lightbox.classList.remove("hidden");

    setTimeout(() => {

        lightbox.classList.add("opacity-100");

        img.classList.remove("scale-95");
        img.classList.add("scale-100");

    }, 10);

    document.body.style.overflow = "hidden";
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    if (!lightbox || !img) return;

    lightbox.classList.remove("opacity-100");

    img.classList.remove("scale-100");
    img.classList.add("scale-95");

    setTimeout(() => {

        lightbox.classList.add("hidden");

        img.src = "";

        document.body.style.overflow = "auto";

    }, 500);
}


/*
========================================
   ESC KEY CLOSE
========================================
*/

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const lightbox = document.getElementById("lightbox");

        if (
            lightbox &&
            !lightbox.classList.contains("hidden")
        ) {

            closeLightbox();

        }

    }

});


/*
========================================
   GALLERY
========================================
*/

let currentSlide = 0;
const totalSlides = 1;
let galleryTimer;


function goToSlide(index) {

    currentSlide = index;

    const track = document.getElementById("galleryTrack");

    if (track) {

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;

    }

    document
        .querySelectorAll(".gallery-dot")
        .forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentSlide
            );

        });

    resetGalleryTimer();
}


function changeSlide(direction) {

    currentSlide += direction;

    if (currentSlide >= totalSlides) {

        currentSlide = 0;

    }

    if (currentSlide < 0) {

        currentSlide = totalSlides - 1;

    }

    goToSlide(currentSlide);
}


function resetGalleryTimer() {

    clearInterval(galleryTimer);

    /*
       Only start automatic sliding
       when there is more than one image.
    */

    if (totalSlides > 1) {

        galleryTimer = setInterval(() => {

            changeSlide(1);

        }, 5000);

    }

}


/*
========================================
   START GALLERY
========================================
*/

resetGalleryTimer();
