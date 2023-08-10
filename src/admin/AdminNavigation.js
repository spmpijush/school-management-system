import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class AdminNavigation extends Component {

    render() {
        return (



            <div>
                <div className="left_side_sub_navigation">

                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>User List</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="hmsignaturelist">
                                <div className="sub_navigation_link">
                                    <small>H.M. Signature List</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="InsituteInfo">
                                <div className="sub_navigation_link">
                                    <small>Institution Details</small>
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
