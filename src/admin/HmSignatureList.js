import React, { Component } from 'react'

export default class HmSignatureList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
            popup: false,
        };
    }
    popupBoxOpen = () => {
        this.setState({
            popup: true,
        });
    }
    popupClose = () => {
        this.setState({
            popup: false,
        });
    }

    render() {
        return (
            <div className="popup_back_colour">
                <div className="right_side_content_box">
                    <div className="right_side_name_module">
                        <h4>User List</h4>
                    </div>
                    <div className="right_side_button_box d-flex justify-content-lg-end">
                        {/* <button className='recycle_btn'><i className="fas fa-trash" /> Recycle Bin</button>
                    <button className='refresh_btn'><i className="fas fa-sync-alt" /> Refresh</button> */}
                        <button onClick={this.popupBoxOpen} className='Add_new_user'><i className="fas fa-plus-circle" /> Add New User </button>
                    </div>
                </div>
                <div className="right_side_main_content">
                    <table className="table  table-striped table-hover table-bordered table-sm table-responsive-sm">
                        <thead>
                            <tr>
                                <th scope="col">Sl</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Joining Date</th>
                                <th scope="col">Retirement Date</th>
                                <th scope="col">Signature</th>
                                <th colSpan="2" scope="col">Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Pijush Kanti Mandal</td>
                                <td>H.M.</td>
                                <td>01/02/2020</td>
                                <td>01/02/2080</td>
                                <td >

                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>

                            </tr>



                        </tbody>
                    </table>
                </div>
                {
                    this.state.popup ?
                        <div className="pop_up_window_box">
                            <div className="pop_up_window_main_body">
                                <div className="pop_up_window_header">
                                    <div className="pop_up_window_left_side_header">
                                        <h4>New User</h4>
                                    </div>
                                    <div className="pop_up_window_right_side_header">
                                        <i onClick={this.popupClose} className="fas fa-times-circle" />
                                    </div>
                                </div>
                                <div className="pop_up_window_body"></div>
                                <div className="pop_up_window_footer">
                                    <button onClick={this.popupClose} className="">Close</button>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}
