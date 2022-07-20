import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiKey, imagePath } from "../variables";
import Style from "./celebrityDetails.module.css";

export default function ActingIn() {
  let { id } = useParams();
  const [celebrity, setCelebrity] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?${apiKey}`
      )
      .then((res) => {
        setCelebrity(res.data.cast);
      });
  }, []);
  return (
    <div className={Style.actingWrapper}>
      {celebrity.map((celebrity) => {
        return (
          <div className={Style.actingCard}>
            <div>
              <img
                src={`${imagePath}${
                  celebrity.poster_path 
                    ? celebrity.poster_path
                    : celebrity.backdrop_path
                }`}
                alt={celebrity.title}
              />
              <p>{celebrity.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
