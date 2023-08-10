import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class AcademicNavigation extends Component {


    render() {
        return (
            <div>
                <div className="left_side_sub_navigation">

                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Session</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Class</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Section</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Group</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Group</small>
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
