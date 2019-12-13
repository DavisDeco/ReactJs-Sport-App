import React,{Component} from 'react'
import './layout.css'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

class Layout extends Component {
    state = {
        // determine default state of navbar when app opens
        showNav:false

    }

    // function to change the showNav state
    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }


    render(){
        return(
            <div>
                {/* include an header */}
                <Header
                    // pass some context (state) to header.js as props
                    showNav = {this.state.showNav}
                    //context that shall be changing showNav state
                    onHideNav = { ()=>this.toggleSidenav(false) }
                    onOpenNav = { ()=>this.toggleSidenav(true) }                    
                />

                {/* Render any child that will also be in Layout */}
                {this.props.children}

                {/* include a footer  */}
                <Footer/>
                
            </div>
        )
    }


}// end Layout

export default Layout;