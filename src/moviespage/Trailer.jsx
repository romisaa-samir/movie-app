import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
// import YouTube from "react-youtube";
import YouTube from "@u-wave/react-youtube";
import Style from './singleMovie.module.css';
import { apiKey } from "../variables";
export default function Trailer({tvId})  {
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
   
        axios.get(
          `https://api.themoviedb.org/3/tv/${tvId}/videos?${apiKey}`
        )
      
      .then((res) => {
        return setTrailer(res.data.results);
      });

  }, []);

  const [paused, setPaused] = useState(false);

  const handlePlayerPause = useCallback(() => {
    setPaused(true);
  }, []);

  const handlePlayerPlay = useCallback(() => {
    setPaused(true);
  }, []);

  return (
    <div id="trailer" className={Style.trailer} >
      <YouTube
        // video="ld8ugY47cps"
        video={trailer[0]?.key}
        autoplay={false}
        //   video={video.id}
        width={940}
        height={480}
        controls={true}
        onPause={handlePlayerPause}
        onPlaying={handlePlayerPlay}
      />
    </div>
  );
}
