document.addEventListener('DOMContentLoaded', function () {
    const wordContainer = document.getElementById('word-container');

    function generateRandomLetters() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        return randomLetter;
    }

    function updateText() {
        const wordLength = 60; 
        const wordCount = 20; 
        let newText = '';
        
        for (let i = 0; i < wordCount; i++) {
            for (let j = 0; j < wordLength; j++) {
                newText += generateRandomLetters();
            }
            newText += ' ';
        }

        wordContainer.innerHTML = newText;
    }

    function animateText() {
        const animationDuration = 70000;

        function updateAndCheckDuration() {
            updateText();
        }

        const animationIntervalId = setInterval(updateAndCheckDuration, 100); // Change the interval (milliseconds) as needed

        setTimeout(() => {
            clearInterval(animationIntervalId);
        }, animationDuration);
    }

    animateText();
});

const cursor = document.getElementById("cursor");

const tip = document.getElementById("tip");

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  
  tip.style.display = "none";
});