import React, { useEffect, useState } from "react";
import { apiKey, imagePath } from "../variables";
import axios from "axios";
import Style from "./episodes.module.css";
import { useParams } from "react-router";
export default function Episodes({ singleTv }) {
  let { id } = useParams();
  const [tvimg, setTvImg] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}/images?${apiKey}`)
      .then((res) => {
        setTvImg(res.data.posters);
      });
  }, []);

  return (

    <>
    
      <section className={Style.sections}>
        <div className={Style.imgContainer}>
         {tvimg[1]?.file_path ? <img src={`${imagePath}${tvimg[1].file_path}`} alt="" /> : null}
        </div>
        <div className={Style.table}>
          <ul className={Style.ul}>
            <li>
              <div>
                <h2>Title : {singleTv.name}</h2>
              </div>
            </li>
            <li>
              <div>
                <p>Relase : {singleTv.last_air_date}</p>
              </div>
            </li>
            <li>
              <div>
                <p>Episodes : {singleTv.number_of_episodes}</p>
              </div>
            </li>
            <li>
              <div>
                <p>Seasons : {singleTv.number_of_seasons}</p>
              </div>
            </li>
            <li>
              <div>
                <p>Country : {singleTv.origin_country}</p>
              </div>
            </li>
            <li>
              <div>
                <p>status : {singleTv.status}</p>
              </div>
            </li>
            <li>
              <div>
                <p>Languages : {singleTv.languages}</p>
              </div>
            </li>
          </ul>
        </div>
        
      </section>
    </>
  );
}
