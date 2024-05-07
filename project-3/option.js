const images = document.querySelectorAll('.element img');

    
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            
            images.forEach(img => {
                if (img !== image) {
                    img.style.filter = 'blur(5px)';
                    img.style.transition = 'filter 0.3s ease';
                }
            });
        });

        image.addEventListener('mouseleave', () => {
            
            images.forEach(img => {
                img.style.filter = 'none';
                img.style.transition = 'filter 0.3s ease';
            });
        });
    });