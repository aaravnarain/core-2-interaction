const container2 = document.querySelector(".js-container2");

        setInterval(function() {
            // Generate 5 circles every second
            for (let i = 0; i < 40; i++) {
                const circle = document.createElement("div");
                circle.classList.add("circle");

                // Get a random position relative to the container
                const x = Math.floor(Math.random() * container2.clientWidth);
                const y = Math.floor(Math.random() * container2.clientHeight);

                circle.style.left = `${x}px`;
                circle.style.top = `${y}px`;

                container2.appendChild(circle);
            }
        }, 1000);