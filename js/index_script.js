document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.floating-images-container');
    const containerWidth = container.clientWidth;
    const numberOfImages = 18; // Total number of images to create

    for (let i = 1; i <= numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = `images/icon${i}.png`;
        img.className = 'floating-image';
        img.alt = `Floating Image ${i}`;
        img.style.display = 'none'; // Start with images hidden
        const randomWidth = Math.random() * (80 - 50) + 50; // Random width between 50px and 80px
        img.style.width = `${randomWidth}px`; // Set the random width
        img.style.height = 'auto'; // Maintain aspect ratio
        container.appendChild(img);

        img.onload = () => {
            // Ensure image loads and width is set before calculating position
            let randomX;
            let overlap;
            do {
                randomX = Math.floor(Math.random() * (containerWidth - img.offsetWidth));
                overlap = Array.from(container.children).some(otherImg => 
                    otherImg !== img &&
                    randomX < otherImg.offsetLeft + otherImg.offsetWidth &&
                    randomX + img.offsetWidth > otherImg.offsetLeft
                );
            } while (overlap); // Keep trying random positions until no overlap

            img.style.left = `${randomX}px`; // Set the non-overlapping position
            img.style.display = 'block'; // Make the image visible

            const animationDuration = Math.random() * 4 + 3; // Random duration between 3s to 7s
            const animationDelay = Math.random() * 5; // Random delay between 0s to 5s

            img.style.animation = `floatUp ${animationDuration}s linear infinite ${animationDelay}s`;
        };
    }
});











     





