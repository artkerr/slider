let position = 0;
const slidesToShow = 1;
const slidesToScroll  = 1;
const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.slider__list');
const sliderItem = sliderList.querySelectorAll('.slider__item');
const prevButton = slider.querySelector('.slider__prev-btn');
const nextButton = slider.querySelector('.slider__next-btn');
const itemWidth= slider.offsetWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

sliderItem.forEach((item) => item.style.minWidth = `${itemWidth}px`);

const setPrevPhoto = () => {
  position += movePosition;
  setPosition();
  checkButton();
}

const setNextPhoto = () => {
  position -= movePosition;
  setPosition();
  checkButton();
}

prevButton.addEventListener('click', () => {
  setPrevPhoto();
});

nextButton.addEventListener('click', () => {
  setNextPhoto()
});

const setPosition = () => {
  sliderList.style.transform = `translateX(${position}px)`;
};

const checkButton = () => {
  prevButton.disabled = position === 0;
  nextButton.disabled = position <= -(sliderItem.length - slidesToShow) * itemWidth;
};
checkButton()






