// import React from 'react';
// import Slider from 'react-slick';
// import { Box } from '@mui/material';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Carousel = ({ cards }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     lazyLoad:'progressive',


//     // autoplay: true,
//     // fade : true,
//     responsive: [
//       {
//         breakpoint: 768,

//       }
//     ]
//   };

//   return (
//     <Box sx={{ width: '100%', padding: 2 }}>
//       <Slider adaptiveHeight={true} accessibility={true} {...settings}>
//         {cards.map((CardComponent, index) => (
//           <Box key={index} sx={{ padding: 1 }}>
//             {CardComponent}
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default Carousel;


// ///


// import React, { useState } from 'react';
// import { Box } from '@mui/material';

// const Carousel = ({ cards }) => {
//   const [visibleIndex, setVisibleIndex] = useState(null);

//   const handleVisible = (index) => {
//     setVisibleIndex(index);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         overflowX: 'auto',
//         scrollSnapType: 'x mandatory',
//         gap: 2,
//         padding: 2,
//       }}
//     >
//       {cards.map((CardComponent, index) => (
//         <Box
//           key={index}
//           sx={{
//             scrollSnapAlign: 'center',
//             flexShrink: 0,
//           }}
//         >
//           {/* Si el componente necesita saber cuándo está visible, se le puede pasar el índice y el callback */}
//           {React.cloneElement(CardComponent, {
//             index,
//             onVisible: handleVisible,
//           })}
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Carousel;

// import React, { useState } from 'react';
// import { Box } from '@mui/material';

// const Carousel = ({ cards }) => {
//   const [visibleIndex, setVisibleIndex] = useState(null);

//   const handleVisible = (index) => {
//     setVisibleIndex(index);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         overflowX: 'auto',
//         scrollSnapType: 'x mandatory',
//         gap: 2,
//         padding: 2,
//         justifyContent: 'center',
//         scrollPaddingLeft: '50%',
//         scrollBehavior: 'smooth',
//       }}
//     >
//       {cards.map((CardComponent, index) => (
//         <Box
//           key={index}
//           sx={{
//             scrollSnapAlign: 'center',
//             flexShrink: 0,
//             userSelect: 'none',
//           }}
//         >
//           {React.cloneElement(CardComponent, {
//             index,
//             onVisible: handleVisible,
//           })}
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Carousel;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Autoplay } from 'swiper/modules';

const Carousel = ({ cards }) => {
  return <Swiper
    modules={[FreeMode, Scrollbar, Autoplay]}
    spaceBetween={1}
    slidesPerView="auto"
    freeMode={true}
    centeredSlides={false}
    grabCursor={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: true
      // pauseOnMouseEnter: true,
    }}
    scrollbar={{ draggable: true }}
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
};

export default Carousel;

