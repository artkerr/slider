const sliderList = document.querySelector('.slider__list');
const sliderItems = sliderList.querySelectorAll('.slider__item');
const activeSlide = sliderList.querySelector('.slider__item--active');
const dotItems = sliderList.querySelectorAll('.slider__dots-item');
const activeDot = sliderList.querySelector('.slider__dots-item--active');
const prevButton = sliderList.querySelector('.slider__prev-btn');
const nextButton = sliderList.querySelector('.slider__next-btn');
let index = 1;

const setActive = (index, element, className) => {
  element.forEach((item) => {
    item.classList.remove(className);
  })
  element[index].classList.add(className);
};

const setCurrentSlide = (n) => {
  setActive(n, sliderItems, 'slider__item--active')
  setActive(n, dotItems, 'slider__dots-item--active');
};

const setNextSlide = () => {
  if (index === sliderItems.length - 1) {
    index = 0;
    setCurrentSlide(index);
  } else {
    index++;
    setCurrentSlide(index);
  } 
};

const setPrevSlide = () => {
  if (index === 0) {
    index = sliderItems.length - 1;
    setCurrentSlide(index);
  } else {
    index--;
    setCurrentSlide(index);
  } 
};

dotItems.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    setCurrentSlide(i);
  })
})

nextButton.addEventListener('click', setNextSlide);
prevButton.addEventListener('click', setPrevSlide);

const interval = setInterval(setNextSlide, 4000);

sliderList.addEventListener('click', () => {
  clearInterval(interval);
})