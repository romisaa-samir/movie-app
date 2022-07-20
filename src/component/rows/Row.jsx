import axios from "axios";
import React, { useEffect, useState } from "react";
import Style from "./listOfMovies.module.css";
import { apiKey } from "../../variables";
import CardMovie from "./CardMovie";
import CardTv from "./CardTv";
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/core";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use({ Pagination, Navigation });
export default function Row({data,title}) {
  // const [movies, setMovie] = useState(null);
  // useEffect(() => {
  //   axios.get(`${props.url}${apiKey}`).then((res) => {
  //     if (res.data.results) {
  //       setMovie(res.data.results);
  //     } else {
  //       setMovie([]);
  //     }
  //   });
  // }, []);
  return (
    <>
      {
        <div className={Style["row-of-movies"]}>
          <p>{title}</p>
          <Swiper
            className={Style.swiper}
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
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            navigation
            effect={"coverflow"}
            grabCursor={true}

            // scrollbar={{ draggable: false }}
          >
            {/* <div> */}
            {data?.map(
              (movie) =>
                movie.backdrop_path && (
                  <SwiperSlide key={movie.id} className={Style["swiper-slide"]}>
                    {window.location.href.indexOf("tvShows") != -1 ? (
                      <CardTv key={movie.id} movie={movie}/>
                    ) : (
                      <CardMovie key={movie.id} movie={movie} />
                    )}
                  </SwiperSlide>
                )
            )}
            {/* </div> */}
          </Swiper>
        </div>
      }
    </>
  );
}
