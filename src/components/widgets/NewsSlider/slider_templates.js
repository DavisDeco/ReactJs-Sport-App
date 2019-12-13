 import React from 'react';
import {Link} from 'react-router-dom';

import Slick from 'react-slick';
import style from './slider.css';

const SliderTemplates = (props) => {
    //
    let template = null;
    // set default config for the slider
    const settings={
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidestoscroll:1,
        ...props.settings,  
    }
    // switch to match type of template
    switch(props.type){
        case ('featured'):
            template = props.data.map( (item,i) =>{
                return(
                    <div key={i}>
                        <div className={style.featured_item}>
                            <div className={style.featured_image}
                                 style={{
                                     background:`url(../images/articles/${item.image})`,
                                 }}                            
                            >

                            <Link to={`/articles/${item.id}`}>
                                <div className={style.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>

                            </div>
                        </div>
                    </div>
                )
            })
            break;

        default:
            template = null;
    }

    return(
        // pass settings to this component using ...settings
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates;