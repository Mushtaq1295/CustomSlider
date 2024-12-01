const slides = document.querySelectorAll(".slide");
let counter = 0; // Initialize the counter

// Position slides in a row
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Set the left position for each slide
});

// Function to navigate to the previous slide
const goPrev = () => {
    counter--;
    // Wrap around to the last slide if counter goes below 0
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
};

// Function to navigate to the next slide
const goNext = () => {
    counter++;
    // Wrap around to the first slide if counter exceeds the last index
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImage();
};

// Function to apply the transform for sliding effect
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`; // Move slides
    });
};
