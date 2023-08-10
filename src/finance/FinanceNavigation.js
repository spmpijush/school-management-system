import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class FinanceNavigation extends Component {


    render() {
        return (
            <div>
                <div className="left_side_sub_navigation">

                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Bank</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Schedule Fee Collection</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Branch</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Fee Setup</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Student Fee Submission</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Receipt Templates</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="adminuser">
                                <div className="sub_navigation_link">
                                    <small>Money Receipt Generate</small>
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
