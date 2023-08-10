import React, { Component } from 'react'
import './Admin.css'
import background_img from "./images/background_img.png"

export default class InsituteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
            popup: false,
            userPermissionBox: false,
        };
    }
    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }
    popupBoxOpen = () => {
        this.setState({
            popup: true,
        });
    }
    popupClose = () => {
        this.setState({
            popup: false,
            userPermissionBox: false,
        });
    }
    userPermissionOpen = () => {
        this.setState({
            userPermissionBox: true,
        });
    }


    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="background_img_box">
                            <img src={background_img} className="background_img_box_style" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

