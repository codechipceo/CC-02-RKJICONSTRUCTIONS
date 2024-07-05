// src/components/SwiperComponent.js
import "swiper/css/pagination";
import "swiper/css";
import "./CustomSwiperStyling.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

function valueSetter(value, defaultValue) {
  return value ? value : defaultValue;
}
const SwiperComponent = ({ swiperConfig, children }) => {
  const { spaceBetween, slidesPerView, delay, breakpoints } =
    swiperConfig ?? {};

  return (
    <Swiper
      loop
      // spaceBetween={valueSetter(spaceBetween, 0)}
      // slidesPerView={valueSetter(slidesPerView, 1)}
      autoplay={{
        delay: valueSetter(delay, 2500),
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={breakpoints}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
