import { useState, useEffect } from 'react';
import Image from 'next/image';
import s from './carousel.module.css';

type CarouselProps = {
  images: string[];
};
const Carousel = ({ images }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((activeIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [activeIndex, images]);
  
    return (
      <div className={s.carouselContainer}>
        <div className={s.imageCarousel}>
          <div className={s.imageContainer}>
            <Image
              src={images[activeIndex]}
              alt={`Image ${activeIndex}`}
              width={3047}
              height={4571}
              layout="responsive"
              className={s.image}
            />
          </div>
        </div>
      </div>
    );
  };
export default Carousel;