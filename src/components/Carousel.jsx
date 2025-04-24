
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ slides }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Slider>
      <button
        className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-neutral-800 p-2 rounded-full"
        onClick={goToPrev}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-neutral-800 p-2 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;