import axios from "axios";
import Style from "./singleMovie.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiKey, imagePath } from "../variables";
import Slide from "./Slide";
import { NavLink } from "react-router-dom";
import Trailer from "./Trailer";

export default function SingleMovie() {
  const [singleMovie, setSingleMovie] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?${apiKey}`)

      .then((res) => {
        setSingleMovie(res.data);
      })
  }, []);
  return (
    <>
      <div
        className={Style.containerposter}
        style={{
          backgroundImage: `url(${imagePath}${singleMovie.backdrop_path})`,
        }}
      >
        {/* <img
              src={`${imagePath}${singleTv.backdrop_path}`}
              className={Style.poster}
            /> */}
        <div className={Style["section-singleMovie"]}>
          <div className={Style["review-section-single"]}>
            <div className={Style["name-of-singleMovie"]}>
              <p>{singleMovie.original_title}</p>
            </div>
            <div className={Style["story-of-singleMovie"]}>
              <p>
                <p>{singleMovie.overview}</p>
              </p>
            </div>
            <div className={Style.listOfGeners}>
              <div className={Style.geners}>
                {singleMovie?.genres?.slice(0, 3).map((genres, index) => (
                  <div key={index}>{genres.name}</div>
                ))}
              </div>
              <div>
                <i className="fa fa-star"></i> {singleMovie.vote_average}
              </div>
            </div>
            <div className={Style["btns-singleMovie"]}>
              <button className={Style.watchNow}>Watch Now</button>
              <button className={Style.addtoList}>Add to list</button>
            </div>
          </div>
          <div className={Style.episodes}>
            <div>
              <NavLink
                to="/singleMovie"
                className={({ isActive }) =>
                  isActive ? Style.active : Style.inactive
                }
              >
                Overview
              </NavLink>
            </div>
            <div>
              <div
                onClick={() => {
                  let el = document.getElementById("trailer");
                  el.scrollIntoView();
                }}
                className={({ isActive }) =>
                  isActive ? Style.active : Style.inactive
                }
              >
                Trailer
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slide showId={id} isMovie />
    </>
  );
}
