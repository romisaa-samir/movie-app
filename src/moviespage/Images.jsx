import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiKey, imagePath } from "../variables";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import Style from './singleMovie.module.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Style from "./celebrityDetails.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";

SwiperCore.use({ Pagination, Navigation });
// Import Swiper styles

export default function Images() {
  const [img, setimg] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${id}/images?${apiKey}`)

      .then((res) => {
        setimg(res.data);
      })
  }, []);
  return (
    <div>
      <Swiper
        className={Style.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // className={Style.swiper}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        spaceBetween={5}
      >
        {/* {img.map((image) => {
          return (
            <SwiperSlide>
              <img src={`${imagePath}${image?.file_path}`} />
            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </div>
  );
}
