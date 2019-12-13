import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';  
import VideosList from '../widgets/VideosList/videosList'; 

const Home = () =>{

    return (
        <div>
            {/* add slider images */}
            <NewsSlider
                type="featured" 
                start={0}
                amount={5}
                settings={{
                    dots:false
                }}
            />

            {/* add newslist */}
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
                
            />

            {/* add VideoList */}
            <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
                
            />






        </div>
    )
}

export default Home;