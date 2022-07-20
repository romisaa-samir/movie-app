import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactComponent as N } from "../../assets/N.svg";
import Style from "./poster.module.css";
import Img from "../../img/top10.png";
import Header from "../header/Header";
import { imagePath } from "../../variables";

export default function Poster(props) {
  const [singleMovie, setSingleMovie] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.string}/${props.id}?api_key=def5e1ceb14524a4ee348997a1833042&language=en-US`
      )
      .then((res) => setSingleMovie(res.data));
  }, []);

  return (
    <>
      {singleMovie ? (
        <div>
          <div
            className={Style.containerposter}
          >
            <img
              src={`${imagePath}${singleMovie.backdrop_path}`}
              className={Style.poster}
            />
            <div className={Style.section}>
              <div className={Style["review-section"]}>
                <div className={Style.series}>
                  <N /> <p>series</p>
                </div>
                <div className={Style["name-of-movie"]}>
                  <p>{singleMovie.original_title}</p>
                </div>
                <div className={Style["top-ten"]}>
                  <img src={Img} />
                  <p> #1 in TV Shows Today</p>
                </div>
                <div className={Style["story-of-movie"]}>
                  <p>{singleMovie.overview}</p>
                </div>
                <div className={Style.btns}>
                  <button className={Style.plays}>
                    <i className="fa-solid fa-play"></i> Play
                  </button>
                  <button className={Style.info}>
                    <i className="fa fa-circle-info"></i>
                    More Info
                  </button>
                </div>
              </div>
              <div className={Style.directors}>
                <div>
                  <i className="fa-solid fa-clapperboard"></i>
                  <div>
                    <p>manuel garcia-rulfo </p>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-clapperboard"></i>
                  <div>
                    <p>neve campbell</p>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-clapperboard"></i>
                  <div>
                    <p>becki newton </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>is loading </h3>
      )}
    </>
  );
}
