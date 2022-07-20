// import React from "react";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Style from "./singleMovie.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { apiKey, imagePath } from "../variables";
import axios from "axios";
import Trailer from "./Trailer";
export default function Slide({ showId ,isMovie }) {
  const [celebrity, setCelebrity] = useState([]);
  useEffect(() => {
    axios
      .get(
        isMovie ?
        `https://api.themoviedb.org/3/movie/${showId}/credits?${apiKey}`:
        `https://api.themoviedb.org/3/tv/${showId}/credits?${apiKey}`
      )
      .then((res) => {
        return setCelebrity(res.data.cast);
      })
    
  }, []);
  return (
    <>
      {celebrity ?(
        <div className={Style["contianer-celeberty"]}>
          <p>Cast</p>
          <Swiper
            className={Style["swiper"]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              // when window width is >= 992px
              992: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            // Pagination={true}
            effect={"coverflow"}
            grabCursor={true}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            // pagination={{
            //   clickable: true,
            // }}
          >
            <div className="">
              {celebrity.map((celebrity, index) => {
                return (
                  celebrity.profile_path && (
                    <SwiperSlide className={Style["swiper-slide"]} key={index}>
                      <div
                        className={Style.celeberty}
                        style={{
                          backgroundImage: `url(${imagePath}${celebrity.profile_path}) `,
                        }}
                      >
                        <div
                          className={Style.layer}
                          style={{ top: index % 2 == 0 ? "50%" : "42.5%" }}
                        >
                          <p>{celebrity.name}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                  /* <div className={Style["swiper-pagination-bullet"]}></div>
                  <div class={Style["swiper-button-prev"]}>prev</div>
                  <div class={Style["swiper-button-next"]}>Next</div> */
                );
              })}
            </div>
          </Swiper>
        </div>
      ) : null}
    </>
  );
}
