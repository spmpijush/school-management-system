import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'



export default class StudentNavigation extends Component {


    render() {
        return (
            <div>
                <div className="left_side_sub_navigation">

                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Add Student Record</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Manage Student</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Student Category</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Promotion Wizard</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Reports</small>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <Outlet />

                </div>
            </div>
        )
    }
}
