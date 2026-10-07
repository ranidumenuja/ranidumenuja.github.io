javascript
/* =========================================
   PORTFOLIO JAVASCRIPT
   ========================================= */


/* =========================================
   INITIALIZE LUCIDE ICONS
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});


/* =========================================
   OPEN LIGHTBOX
   ========================================= */

function openLightbox(src) {

    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-img");

    if (!lightbox || !image) {
        return;
    }

    image.src = src;

    lightbox.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    /*
     * Small delay allows the browser
     * to apply the transition smoothly.
     */

    setTimeout(function () {

        lightbox.classList.add("opacity-100");

        image.classList.remove("scale-95");
        image.classList.add("scale-100");

    }, 10);

}


/* =========================================
   CLOSE LIGHTBOX
   ========================================= */

function closeLightbox() {

    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-img");

    if (!lightbox || !image) {
        return;
    }

    lightbox.classList.remove("opacity-100");

    image.classList.remove("scale-100");
    image.classList.add("scale-95");

    setTimeout(function () {

        lightbox.classList.add("hidden");

        image.src = "";

        document.body.style.overflow = "";

    }, 500);

}


/* =========================================
   ESC KEY TO CLOSE LIGHTBOX
   ========================================= */

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


/* =========================================
   PREVENT IMAGE CLICK FROM CLOSING LIGHTBOX
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const image = document.getElementById("lightbox-img");

    if (image) {

        image.addEventListener("click", function (event) {

            event.stopPropagation();

        });

    }

});
