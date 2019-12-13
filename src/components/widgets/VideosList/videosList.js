import React, {Component} from 'react';
import style from './videosList.css';
// import axios from 'axios';
// import {URL} from '../../../config';
import {firebaseTeams,firebaseVideos,firebaseLooper} from '../../../firebase';
import Button from '../Buttons/buttons';
import VideosListTemplate from './videosListTemplate';

class VideosList extends Component{

    state = {
        teams:[],
        videos:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    // 
    renderTitle = () => {
        return this.props.title ? <h3><strong>NBA </strong> videos</h3> : null
    }

    // 
    componentWillMount(){
        this.request(this.state.start,this.state.end)
    } 

    // 
    request = (start,end)=> {
        //populate the teams
        if(this.state.teams.length < 1){

            // get the teams
            firebaseTeams.once('value')
            .then((snapshot)=>{
                const teams = firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })

            
            // axios.get(`${URL}/teams`)
            //      .then( response => {
            //          this.setState({
            //              teams:response.data
            //          })
            //      })
        }

        //populate the videos
        firebaseVideos.orderByChild('id').startAt(start).endAt(end).once('value')
                        .then( (snapshot)=>{
                            const videos = firebaseLooper(snapshot);
                            this.setState({
                                videos:[...this.state.videos,...videos],
                                start,
                                end
                            })
                        }).catch(e=>{
                            console.log(e)
                        })



        // axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        //      .then ( response =>{
        //          this.setState({
        //             videos:[...this.state.videos,...response.data],
        //             start,
        //             end
        //          })
                 
        //      })

    }

    //
    renderVideos =() => {
        let template = null;

        switch(this.props.type){
            case('card'):
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
                break;
            default:
                template = null

        }

        return template;
    }

    //
    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end + 1,end) // adding one, + 1, is just a quick fick to the firebasedb error of the script we imported

    }

    //
    renderButton = () => {
        return this.props.loadmore ? 
                 <Button type="loadmore" 
                         loadMore={()=>this.loadMore()}
                         cta="Load More Videos" />
                 : 
                 <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    }

    render(){
        return(
            <div className={style.videoList_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }


}

export default VideosList;