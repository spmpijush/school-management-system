import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'



export default class EmployeeNavigation extends Component {


    render() {
        return (
            <div>
                <div className="left_side_sub_navigation">

                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>New Employee</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Employee List</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Employee Reports</small>
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
