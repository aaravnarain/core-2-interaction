document.addEventListener("DOMContentLoaded", function() {
    const movingImages = document.querySelectorAll(".movingImage");

    function moveImage(image) {
        const maxX = window.innerWidth - image.clientWidth;
        const maxY = window.innerHeight - image.clientHeight;

        const randomXStart = Math.floor(Math.random() * maxX);
        const randomYStart = Math.floor(Math.random() * maxY);

        const randomXEnd = Math.floor(Math.random() * maxX);
        const randomYEnd = Math.floor(Math.random() * maxY);

        
        const start = Date.now();
        const duration = 7000; 

        function animate() {
            const elapsed = Date.now() - start;
            const progress = elapsed / duration;

            if (progress < 1) {
                const currentX = easeInOutQuad(progress) * (randomXEnd - randomXStart) + randomXStart;
                const currentY = easeInOutQuad(progress) * (randomYEnd - randomYStart) + randomYStart;

                image.style.left = `${currentX}px`;
                image.style.top = `${currentY}px`;

                requestAnimationFrame(animate);
            } else {
                
                moveImage(image);
            }
        }

       
        image.style.left = `${randomXStart}px`;
        image.style.top = `${randomYStart}px`;

       
        animate();
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

   
    movingImages.forEach(moveImage);
});
