import React, {Component} from 'react';
// import axios from 'axios';
// import {URL} from '../../../config';
import SliderTemplates from './slider_templates';
import {firebaseArticles,firebaseLooper} from '../../../firebase';

// classs based component
class NewsSlider extends Component{

    state = {
        news:[]
    }

    // lifecycle method to be run before render to get data from json-server
    // we use installed axios library in order to get data from json server through HTTP Methods
    componentWillMount() {
        firebaseArticles.limitToFirst(3).once('value')
                .then( (snapshot)=>{
                        const news = firebaseLooper(snapshot)
                        this.setState({
                            news
                        })
                })
        // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        //      .then( response => {
        //         //  pass the data to the news state
        //         this.setState({
        //             news:response.data
        //         })
        //      })
    }

    render(){
        return(
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings} />
        )
    }
}

export default NewsSlider;