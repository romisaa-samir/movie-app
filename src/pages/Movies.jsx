import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Poster from "../component/poster-review-movie/Poster";
import Row from "../component/rows/Row";
import {
  nowPlaying,
  topRated,
  trending,
  upComing,
  getTopRated,
  getUpComing,
  getTrending,
  getNowPlaying
} from "../store/actions/moviesAction";
import Style from "./tvShows.module.css";

export default function Movies() {
  let dispatch = useDispatch();
  let topRatedMovies = useSelector((store) => store.movies.topRated);
  let trendingMovies = useSelector((store) => store.movies.trending);
  let NowPlayingMovies = useSelector((store) => store.movies.nowPlayin);
  let upComingMovies = useSelector((store) => store.movies.upComing);

  useEffect(() => {
    dispatch(getTopRated())
    dispatch(getUpComing())
    dispatch(getTrending())
    dispatch(getNowPlaying())
  }, []);

  return (
    <>
      <Poster id={"155"} string={"movie"} />
      <section className={Style["list-of-movies"]}>
        {/* <div className={Style.containerRow}> */}
        {/* <div className={Style.row}> */}
        {/* {list.map((item) => ( */}
        <Row title={"Top Rated "} data={topRatedMovies} />
        <Row title={"Trending"} data={trendingMovies} />
        <Row title={"Up Coming"} data={upComingMovies} />
        <Row title={"Now Playing"} data={NowPlayingMovies} />

        {/* ))} */}
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
}
