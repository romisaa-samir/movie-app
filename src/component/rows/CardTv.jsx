import React from "react";
import Style from "./listOfMovies.module.css";
import "swiper/css";
import "swiper/css/bundle";
import { imagePath } from "../../variables";
import { useNavigate } from "react-router";
export default function CardTv(props) {
  const history = useNavigate();
  function goInto(id) {
    history("/tvShows/" + id);
  }
  return (
    <>
   { (props.movie.backdrop_path || props.movie.profile_path )&&
      <div
        className={Style["cardMovie"]}
        onClick={() => goInto(props.movie.id)}
        style={{
          backgroundImage: `url(${imagePath}${props.movie.backdrop_path  ?props.movie.backdrop_path:props.movie.profile_path})`,
        }}
      />
    } 
    </>
  );
}
