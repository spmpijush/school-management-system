import React, { Component } from 'react'
import "./Login.css";

export default class Login extends Component {


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="custome_container_for_login">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputText1" className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputText1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-success">Login </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
