import React from 'react'
import { useNavigate } from 'react-router-dom'
import { imagePath } from '../../variables'
import Style from './celebritiescard.module.css'
export default function CardCelebrity({celebrity}) {
    let history = useNavigate()
    function goInto(id) {
      history("/celeberties/" + id);
    }
  return (
    <>{ celebrity.profile_path &&
        <div className={Style.movieCard}>
            <img src={`${imagePath}${celebrity &&celebrity.profile_path}`} alt={celebrity.title} />
            <p>{celebrity.name}</p>
            <button className={Style.details} onClick={()=>goInto(celebrity.id)}>Show more..</button>
        </div>
}</>
  )

}
