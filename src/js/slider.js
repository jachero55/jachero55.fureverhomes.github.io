class Slider{
  constructor() {
    console.log("Slider Created")
    this.heroSlider()
  }

  heroSlider =()=> {
    $('.inner-image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      cssEase: 'linear',
      infinite: true,
      autoplaySpeed: 3000,
      prevArrow: `<i class="fa fa-chevron-left left-arrow"></i>`,
      nextArrow: `<i class="fa fa-chevron-right right-arrow"></i>`,
    })
  }
}