document.addEventListener("DOMContentLoaded", function() {
    const movingImages = document.querySelectorAll(".dragme");
    let drag = false;
    let offsetX = 0;
    let offsetY = 0;
    let coordX = 0;
    let coordY = 0;
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
        coordX = activeImage.offsetLeft;
        coordY = activeImage.offsetTop;
    }

    function dragDiv(e) {
        if (!drag || !activeImage) {
            return;
        }

        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        activeImage.style.left = newX + 'px';
        activeImage.style.top = newY + 'px';

        
        if (newX > window.innerWidth / 2) {
            const audioSrc = activeImage.getAttribute('data-audio');
            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.play();
            } else {
                console.error('Audio source not specified for the dragged image.');
            }
        }
    }

    function stopDrag() {
        drag = false;
        activeImage = null;
    }

    window.onload = function() {
        document.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', dragDiv);
        document.addEventListener('mouseup', stopDrag);
    }
});

const audio1 = new Audio('bird.mp3');
const audio2 = new Audio('leaves.mp3');
const audio3 = new Audio('water.mp3');
const audio4 = new Audio('jazz.mp3');
audio1.preload = 'auto';
audio2.preload = 'auto';
audio3.preload = 'auto';
audio4.preload = 'auto';

function playDelayedAudio(audio, delay) {
    setTimeout(() => {
        audio.play();
    }, delay);
}


playDelayedAudio(audio1, 0); 
playDelayedAudio(audio2, 100);
playDelayedAudio(audio3, 200);
playDelayedAudio(audio4, 300);



