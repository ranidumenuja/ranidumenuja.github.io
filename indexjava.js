<script>

        /*
         * Initialize Lucide Icons
         *
         * This is still required for:
         * home
         * user
         * book-open
         * image
         * mail
         * map-pin
         * phone
         * x
         *
         * YouTube is NOT initialized by Lucide anymore.
         * YouTube now uses Font Awesome.
         */

        lucide.createIcons();


        /*
         * Open Lightbox
         */

        function openLightbox(src) {

            const lightbox = document.getElementById('lightbox');
            const img = document.getElementById('lightbox-img');

            img.src = src;

            lightbox.classList.remove('hidden');

            setTimeout(() => {

                lightbox.classList.add('opacity-100');

                img.classList.remove('scale-95');

                img.classList.add('scale-100');

            }, 10);

            document.body.style.overflow = 'hidden';
        }


        /*
         * Close Lightbox
         */

        function closeLightbox() {

            const lightbox = document.getElementById('lightbox');
            const img = document.getElementById('lightbox-img');

            lightbox.classList.remove('opacity-100');

            img.classList.remove('scale-100');

            img.classList.add('scale-95');

            setTimeout(() => {

                lightbox.classList.add('hidden');

                img.src = '';

                document.body.style.overflow = 'auto';

            }, 500);
        }


        /*
         * Close Lightbox with Escape Key
         */

        document.addEventListener('keydown', function(event) {

            if (event.key === 'Escape') {

                const lightbox = document.getElementById('lightbox');

                if (!lightbox.classList.contains('hidden')) {
                    closeLightbox();
                }

            }

        });

    </script>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<script>
let currentSlide = 0;
const totalSlides = 6;
let galleryTimer;

function goToSlide(index) {
    currentSlide = index;

    const track = document.getElementById("galleryTrack");

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll(".gallery-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
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

    galleryTimer = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

resetGalleryTimer();
</script>
