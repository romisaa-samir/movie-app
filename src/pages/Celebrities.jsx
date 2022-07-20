import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCelebrity from "../component/rows/CardCelebrity";
import { apiKey } from "../variables";
import Style from "../pages/celebrities.module.css";
import { getPerson } from "../store/actions/celebritiesAction";
import { useDispatch, useSelector } from "react-redux";

export default function Celeberties() {

   let dispatch = useDispatch();
   let celebritiesData = useSelector((store) => store.celebrities.celebrity);
   console.log(celebritiesData);

   
   useEffect(() => {
     dispatch(getPerson());
   }, []);
  return (
    <div className={Style.container}>
        <div className={Style.containerCard}> 
            {celebritiesData.map((celebrity)=>{
                return   <CardCelebrity celebrity={celebrity} key={celebrity.id} />
            })}
        </div>
    </div>
  )
}