import axios from "axios";
import React, { useEffect, useState } from "react";
import Style from "./listOfMovies.module.css";
import Row from "./Row";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAiringToday } from "../../store/actions/tvAction";
import { getNowPlaying, getTopRated, getTrending } from "../../store/actions/moviesAction";
SwiperCore.use({ Pagination, Navigation });
export default function ListOfMovies() {
  let dispatch = useDispatch();
  let onAirTvShows = useSelector((store) => store.tv.airingToday);
  let {trending, nowPlayin, topRated } = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(getTrending());
    dispatch(getAiringToday());
    dispatch(getTopRated())
    dispatch(getNowPlaying())
  },[]);


  return (
    <>
      <section className={Style["list-of-movies"]}>
        {/* <div className={Style.containerRow}> */}
        {/* <div className={Style.row}> */}
        {/* {list.map((item) => ( */}
        <Row title={"Trending"} data={trending}/>
        <Row title={"Tv Shows"} data={onAirTvShows} />
        <Row title={"Now Playing"} data={nowPlayin} />
        <Row title={"Top Rated "} data={topRated} />

        {/* ))} */}
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
}
