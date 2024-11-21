// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade'; // Add this for fade effect
// import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

// interface CarouselProps {
//   slides: { id: number; content: string }[];
// }

// const Carousel: React.FC<CarouselProps> = ({ slides }) => {
//   return (
//     <div className="carousel-container">
//       <Swiper
//         pagination={{ clickable: true }}
//         navigation={true}
//         autoplay={{
//           delay: 3000, // Time delay for autoplay in ms (3 seconds)
//           disableOnInteraction: false, // Allows autoplay to continue after user interaction
//         }}
//         loop={true} // Enable infinite looping
//         effect="fade" // Use a fade transition effect
//         modules={[Pagination, Navigation, Autoplay, EffectFade]} // Include EffectFade for fade transition
//         className="mySwiper"
//         style={{ minHeight: '200px', height: 'auto' }} // Makes it adaptive
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id} className="flex items-center justify-center">
//             <div className="p-8 text-center bg-gray-800 rounded-lg text-white">
//               {slide.content}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;
