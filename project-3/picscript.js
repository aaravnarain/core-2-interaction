document.addEventListener("DOMContentLoaded", function() {
    const movingImages = document.querySelectorAll(".dragme");
    let drag = false;
    let offsetX = 0;
    let offsetY = 0;
    let activeImage = null;

    function startDrag(e) {
        e.preventDefault();

        const targ = e.target;

        if (!targ.classList.contains('dragme')) {
            return;
        }

        activeImage = targ;
        offsetX = e.clientX - activeImage.getBoundingClientRect().left;
        offsetY = e.clientY - activeImage.getBoundingClientRect().top;

        drag = true;
    }

    function dragDiv(e) {
        if (!drag || !activeImage) {
            return;
        }

        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        activeImage.style.left = newX + 'px';
        activeImage.style.top = newY + 'px';
    }

    function stopDrag() {
        drag = false;
        activeImage = null;
    }

    document.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', dragDiv);
    document.addEventListener('mouseup', stopDrag);

});




