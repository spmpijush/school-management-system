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
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className=''>
                            <div className='left_side_school_details'>
                                <table className="table table-sm table-responsive-sm">

                                    <tbody>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className=''>
                            <div className='right_side_school_details'>
                                <table className="table ed table-sm table-responsive-sm">


                                    <tbody>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>
                                        <tr>
                                            <td>Village</td>
                                            <td>:</td>
                                            <td>Kailabad</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

