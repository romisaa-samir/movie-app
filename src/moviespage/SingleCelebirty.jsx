import axios from "axios";
import Style from "./celebrityDetails.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiKey, imagePath } from "../variables";
// import Swiper core and required modules
// Import Swiper styles

import "swiper/css";
import Images from "./Images";
import ActingIn from "./ActingIn";
import CardCelebrity from "../component/rows/CardCelebrity";
export default function SingleCelebirty() {
  const [singleCelebrity, setSingleCelebrity] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${id}?${apiKey}`)

      .then((res) => {
        setSingleCelebrity(res.data);
      })
  }, []);
  return (
    <>
      <div className={Style["container-details"]}>
        <div className={Style.wrapper}>
          {/* <div className={Style.imgWrapper}> */}
          <h2> {singleCelebrity.name} </h2>

          <Images id={id} />
          <div className={Style.pWrapper}>
            <p>Born: {singleCelebrity.birthday}</p>
            <p>Place of birth: {singleCelebrity.place_of_birth}</p>
          </div>
          {/* </div> */}
          <div className={Style["side-details"]}>
            <p>{singleCelebrity.biography}</p>
          </div>
        </div>
      </div>
      <ActingIn/>
    </>
  );
}
