
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/scrollbar';
// import { FreeMode, Scrollbar, Autoplay } from 'swiper/modules';

// const Carousel = ({ cards }) => {
//   return <Swiper
//     modules={[FreeMode, Scrollbar, Autoplay]}
//     spaceBetween={1}
//     slidesPerView="auto"
//     freeMode={true}
//     centeredSlides={false}
//     grabCursor={true}
//     autoplay={{
//       delay: 5000,
//       disableOnInteraction: true
//       // pauseOnMouseEnter: true,
//     }}
//     scrollbar={{ draggable: true }}
//     style={{ padding: '1rem' }}
//     lazyPreloadPrevNext={2}

//   >
//     {cards.map((CardComponent, index) => (
//       <SwiperSlide
//         key={index}
//         style={{
//           width: '350px',
//           scrollSnapAlign: 'center',
//           userSelect: 'none',
//         }}
//       >
//         {CardComponent}
//       </SwiperSlide>
//     ))}
//   </Swiper>
// };

// export default Carousel;





import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "../styles/Carousel.css"
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Carousel = ({ cards }) => {
  return (
    <Swiper
      modules={[FreeMode, Pagination, Autoplay]}
      spaceBetween={1}
      slidesPerView="auto"
      freeMode={true}
      centeredSlides={false}
      grabCursor={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true  }}
      style={{ padding: '1rem' }}
      lazyPreloadPrevNext={2}
    >
      {cards.map((CardComponent, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: '350px',
            scrollSnapAlign: 'center',
            userSelect: 'none',
            
          }}
        >
          {CardComponent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
