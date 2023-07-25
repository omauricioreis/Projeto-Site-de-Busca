class Slider
{
  constructor(slider)
  {
    this.slider = slider;
    this.currentSlide = 0;
    this.sliderCard = Array.from(this.slider.querySelectorAll(".slider__card"));
  }

  init()
  {
    this.addListeners();
  }

  translateSlide(position)
  {
    const sliderCards = this.slider.querySelector(".slider__cards");
    sliderCards.style.transform = `translateX(-${position}px)`;
  }

  getCenterPosition(index)
  {
    const card = this.sliderCard[index];
    const cardWidth = card.clientWidth + 50;
    return (index * cardWidth);
  }

  setVisibleSlide(index)
  {
    const position = this.getCenterPosition(index);
    this.currentSlide = index;
    this.translateSlide(position);
  }

  nextSlide()
  {
    if (this.sliderCard.length > this.currentSlide + 1 && this.sliderCard.length - this.currentSlide > Math.floor(this.slider.clientWidth / (180 + 25)) - 1)
    {
      this.setVisibleSlide(this.currentSlide + 1)
    }
  }

  addListeners()
  {
    const buttons = this.slider.querySelectorAll(".slider__buttons");
    buttons[0].addEventListener("click", () => this.prevSlide());
    buttons[1].addEventListener("click", () => this.nextSlide());
  }

  prevSlide()
  {
    if (this.currentSlide - 1 >= 0)
    {
      this.setVisibleSlide(this.currentSlide - 1)
    }
  }
}

const slider = new Slider(document.getElementById("slider1"));
slider.init();
