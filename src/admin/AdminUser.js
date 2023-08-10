import React, { Component } from 'react'
import './Admin.css'

export default class AdminUser extends Component {
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
            <div className="popup_back_colour">
                <div className="right_side_content_box">
                    <div className="right_side_name_module">
                        <h4>User List</h4>
                    </div>
                    <div className="right_side_button_box">
                        <button className='recycle_btn'><i className="fas fa-trash" /> Recycle Bin</button>
                        <button className='refresh_btn'><i className="fas fa-sync-alt" /> Refresh</button>
                        <button onClick={this.popupBoxOpen} className='Add_new_user'><i className="fas fa-plus-circle" /> Add New User </button>
                    </div>
                </div>
                <div className="right_side_main_content">
                    <table className="table  table-striped table-hover table-bordered table-sm table-responsive-sm">
                        <thead>
                            <tr>
                                <th scope="col">Sl</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Contact No.</th>
                                <th scope="col">Administrator</th>
                                <th scope="col">Status</th>
                                <th colSpan="2" scope="col">Tools</th>
                                <th scope="col">Access</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Pijush Kanti Mandal</td>
                                <td>pijush.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td onClick={this.userPermissionOpen} className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Archana Mandal</td>
                                <td>archana.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Kaushik Mandal</td>
                                <td>kaushik.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Archana Mandal</td>
                                <td>archana.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Kaushik Mandal</td>
                                <td>kaushik.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Archana Mandal</td>
                                <td>archana.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Kaushik Mandal</td>
                                <td>kaushik.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Archana Mandal</td>
                                <td>archana.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Kaushik Mandal</td>
                                <td>kaushik.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Archana Mandal</td>
                                <td>archana.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Kaushik Mandal</td>
                                <td>kaushik.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Archana Mandal</td>
                                <td>archana.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i className="fas fa-user-cog" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Kaushik Mandal</td>
                                <td>kaushik.gazole369@gmail.com</td>
                                <td>+91 8167874215</td>
                                <td>Yes</td>
                                <td >
                                    <div className="switch">
                                        <div className="switch__1">
                                            <input id="switch-" type="checkbox" defaultChecked={this.state.isChecked} />
                                            <label htmlFor="switch-" />
                                        </div>
                                    </div>
                                </td>
                                <td><i className="fas fa-edit" /></td>
                                <td className="text-danger"><i className="fas fa-trash-alt" /></td>
                                <td className="text-primary"><i onClick={this.userPermissionOpen} className="fas fa-user-cog" /></td>
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
                                <div className="pop_up_window_body ">
                                    <div className="add_user_main_box">
                                        <form>
                                            <div className="new_basic_user_details">
                                                <h6>Basic Information </h6>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Employee Name</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Fathers Name</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Select</option>
                                                                    <option value="1">Male</option>
                                                                    <option value="2">Female</option>
                                                                    <option value="3">Others</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Maritall Status</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Select</option>
                                                                    <option value="1">Married</option>
                                                                    <option value="2">Unmarried</option>
                                                                    <option value="3">Devorce</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Vill / Town</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Post Office</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">city</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Phone No.</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new_job_info mt-2">
                                                <h6>Job Information </h6>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Job Title</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Department</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Working Type</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Select</option>
                                                                    <option value="1">Part Time</option>
                                                                    <option value="2">Full Time</option>
                                                                    <option value="3">Others</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="mb-1">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Start Date</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end p-2">
                                                <button type="button" className="btn btn-success">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="pop_up_window_footer">
                                    <button onClick={this.popupClose} className="">Close</button>
                                </div>
                            </div>
                        </div>
                        : null
                }
                {
                    this.state.userPermissionBox ?

                        <div className="pop_up_window_box">
                            <div className="pop_up_window_main_body">
                                <div className="pop_up_window_header">
                                    <div className="pop_up_window_left_side_header">
                                        <h4>User Permission</h4>
                                    </div>
                                    <div className="pop_up_window_right_side_header">
                                        <i onClick={this.popupClose} className="fas fa-times-circle" />
                                    </div>
                                </div>
                                <div className="pop_up_window_body">
                                    <div className="pop_up_user_permission_content">
                                        <table className="table  table-hover table-bordered table-sm table-responsive-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Module Name</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Admin</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Academic</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Student</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Finance</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Examination</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">ID Card</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Certificate</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Hostel</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Classwork</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Homework</th>
                                                    <td> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="pop_up_window_footer">
                                    <button onClick={this.popupClose} className="">Close</button>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }

            </div>
        )

    }
}

