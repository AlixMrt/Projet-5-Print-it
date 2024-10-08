document.addEventListener("DOMContentLoaded", () => {
  // Slides Array
  const slides = [
    {
      image: "slide1.webp",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.webp",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.webp",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.webp",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  // Generating Dots Dynamically
  for (let i = 0; i < slides.length; i++) {
    let newElement = document.createElement("div");
    newElement.classList.add("dot");
    document.querySelector(".dots").append(newElement);
  }

  // Declaring Variables
  const prevButton = document.getElementById("arrow_left");
  const nextButton = document.getElementById("arrow_right");
  const dots = document.querySelectorAll(".dot");
  let position = 0;
  const numberOfSlides = slides.length;

  // Set the first slide at the beginning (initial state)
  document.querySelector(
    "#banner-img"
  ).src = `./assets/images/slideshow/${slides[0].image}`;
  document.querySelector("#banner-text").innerHTML = slides[0].tagLine;

  // Adding the selected style to the first dot
  dots[position].classList.add("dot_selected");

  // Functions for navigation
  const moveToPrevSlide = (e) => {
    dots[position].classList.remove("dot_selected");

    if (position === 0) {
      position = numberOfSlides - 1;
    } else {
      position--;
    }
    document.querySelector(
      "#banner-img"
    ).src = `./assets/images/slideshow/${slides[position].image}`;
    document.querySelector("#banner-text").innerHTML = slides[position].tagLine;

    dots[position].classList.add("dot_selected");
  };

  const moveToNextSlide = (e) => {
    dots[position].classList.remove("dot_selected");

    if (position === numberOfSlides - 1) {
      position = 0;
    } else {
      position++;
    }
    document.querySelector(
      "#banner-img"
    ).src = `./assets/images/slideshow/${slides[position].image}`;
    document.querySelector("#banner-text").innerHTML = slides[position].tagLine;

    dots[position].classList.add("dot_selected");
  };

  // Event Listeners for arrow buttons
  prevButton.addEventListener("click", moveToPrevSlide);
  nextButton.addEventListener("click", moveToNextSlide);
});
