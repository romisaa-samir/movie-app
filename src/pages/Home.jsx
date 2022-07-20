import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Poster from '../component/poster-review-movie/Poster'
import ListOfMovies from '../component/rows/ListOfMovies'
import { apiKey } from '../variables';

export default function Home() {
  return (
    <div>
        <Poster id={'902'} string={'movie'}/>
        <ListOfMovies/>
    </div>
  )
}
