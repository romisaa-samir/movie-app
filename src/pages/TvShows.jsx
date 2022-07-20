import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Poster from "../component/poster-review-movie/Poster";
import Row from "../component/rows/Row";
import {
  getAiringToday,
  getOnAir,
  getPopular,
  getTopRatedTV,
} from "../store/actions/tvAction";
import { apiKey } from "../variables";
import Style from "./tvShows.module.css";

export default function TvShows() {
  let dispatch = useDispatch();
  let onAirTv = useSelector((store) => store.tv.onAir);
  let popularTv = useSelector((store) => store.tv.popular);
  let upComingTv = useSelector((store) => store.tv.airingToday);
  let trendingTv = useSelector((store) => store.tv.topRatedTv);
  console.log(upComingTv);
  useEffect(() => {
    dispatch(getOnAir());
    dispatch(getAiringToday());
    dispatch(getPopular());
    dispatch(getTopRatedTV());
  }, []);
 
  return (
    <>
      <Poster id={"66732"} string={"tv"} />
      <section className={Style["list-of-movies"]}>
        {/* <div className={Style.containerRow}> */}
        {/* <div className={Style.row}> */}
        {/* {list.map((item) => ( */}
        <Row title={" TV On The Air"} data={onAirTv} />
        <Row title={"Popular"} data={popularTv} />
        <Row title={"Airing Today"} data={upComingTv} />
        <Row title={"Top Rated"} data={trendingTv} />

        {/* ))} */}
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
}
