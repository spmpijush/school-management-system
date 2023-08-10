import React, { Component } from 'react'
import './Fram.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import profile_pic from "./profile_pic.jpeg"
import AdminNavigation from "../admin/AdminNavigation"
import AcademicNavigation from "../academic/AcademicNavigation"
import StudentNavigation from "../student/StudentNavigation"
import FinanceNavigation from "../finance/FinanceNavigation"
import ExaminationNavigation from "../examination/ExaminationNavigation"
import CertificateNavigation from "../certificate/CertificateNavigation"
import CardNavigation from "../card/CardNavigation"
import EmployeeNavigation from "../employee/EmployeeNavigation"
import TransportNavigation from "../transport/TransportNavigation"
import AdminUser from "../admin/AdminUser"
import InsituteInfo from "../admin/InsituteDetails"
import HmSignatureList from "../admin/HmSignatureList"
import Admin from '../admin/Admin';

export default class Fram extends Component {


    render() {
        return (
            <Router>
                <div className="section_1 pop_up_action">
                    <div className="fram_header">
                        <div className="left_header">

                        </div>
                        <div className="right_header">
                            <div className="right_header_school_name">
                                <h3>University of Gour Banga</h3>
                            </div>
                            <div className="right_header_app_info">
                                <div>
                                    <p className='mt-2 mx-3'>Pijush Kanti Mandal <i className="fas fa-power-off" /></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_main_box">
                        <div className="left_side_content">
                            <div className="left_side_profile_picture_box">
                                <img src={profile_pic} alt="profile_pic" className="profile_pic" />
                            </div>

                            <div className="left_side_content_navigation">
                                <div className="left_side_main_navigation">
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/adminnavigation'>
                                                <div className="main_navigation_icon">
                                                    {/* <i className="fas fa-2x fa-home" /> */}
                                                    <i className="fas fa-2x fa-user-cog" />
                                                    {/* <i className="fas fa-user-shield" /> */}
                                                    <small>Admin</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <Link to='/academicnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-university" />
                                                    <small>Academic</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/studentnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-user-graduate" />
                                                    <small>Student</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/financenavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-rupee-sign" />
                                                    <small>Finance</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/examinationnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-book-open" />
                                                    <small>Examination</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/cardnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-address-card" />
                                                    <small>Card</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/certificatenavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-certificate" />
                                                    <small>Certificate</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/studentnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-hotel" />
                                                    <small>Hostel</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/studentnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-chalkboard-teacher" />
                                                    <small>Classwork</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/studentnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-h-square" />
                                                    <small>Homework</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/studentnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-book-reader" />
                                                    <small>Libary</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/transportnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-shuttle-van" />
                                                    <small>Transport</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to='/studentnavigation'>
                                                <div className="main_navigation_icon">
                                                    <i className="fas fa-2x fa-cog" />
                                                    <small>Settings</small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                                <Routes>
                                    {/* <Route path="/studentnavigation" element={<StudentNavigation />} /> */}

                                    <Route path="/adminnavigation/" element={<AdminNavigation />} >
                                        <Route path="adminuser" ></Route>
                                        <Route path="InsituteInfo" ></Route>
                                        <Route path="hmsignaturelist" ></Route>
                                    </Route>
                                    <Route path="/academicnavigation/" element={<AcademicNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                    <Route path="/studentnavigation/" element={<StudentNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                    <Route path="/financenavigation/" element={<FinanceNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                    <Route path="/examinationnavigation/" element={<ExaminationNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                    <Route path="/cardnavigation/" element={<CardNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                    <Route path="/certificatenavigation/" element={<CertificateNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                    <Route path="/employeenavigation/" element={<EmployeeNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                    <Route path="/transportnavigation/" element={<TransportNavigation />} >
                                        <Route path="adminuser" ></Route>
                                    </Route>
                                </Routes>

                            </div>
                        </div>



                        <div className="right_side_content">
                            <Routes>
                                <Route path="/adminnavigation/" element={<Admin />} ></Route>
                                <Route path="/adminnavigation/"  >
                                    <Route path="adminuser" element={<AdminUser />}></Route>
                                    <Route path="InsituteInfo" element={<InsituteInfo />}></Route>
                                    <Route path="hmsignaturelist" element={<HmSignatureList />}></Route>
                                </Route>
                                <Route path="/academicnavigation/"  >
                                    <Route path="adminuser" element={<AdminUser />} ></Route>
                                </Route>
                            </Routes>



                        </div>
                    </div>
                    <div className="fram_footer">
                        <p className="text-center pt-2">University of Gour Banga Copyright By Pijush Kanti Mandal </p>
                    </div>

                </div>
            </Router>


        )
    }
}
