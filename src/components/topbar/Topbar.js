import React, { Component } from 'react'
import "./topbar.css"
import imgs from '../../assets/logo.jpg'

class Topbar extends Component {

    cancel() {
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <img src={imgs} alt="img-logo" className="topAvatar" />
                        {/* <span className="logo" style={{ margin: "22px", fontFamily:"Brush Script" }}>VerifyAsset</span> */}
                    </div>
                    
                    <div className="topRight">
   
                    </div>
                </div>

            </div>
        )
    }
}
export default Topbar