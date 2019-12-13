import React from 'react';
import style from '../videosList.css';

import VideoListTemplate from '../videosListTemplate';

const videosRelated = (props) => (
    
    <div className={style.relatedWrapper}>
       
        <VideoListTemplate
            data = {props.data} 
            teams = {props.teams}
         /> 
    </div>

)

export default videosRelated;