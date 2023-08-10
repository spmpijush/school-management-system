import React, { Component } from 'react'
import './Admin.css'

export default class Admin extends Component {
    constructor() {
        super();
        this.state = {
            payBtnForm: true,
            previousStartDate: '05/10/2023',
            previousEndDate: '05/30/2023',
            futureDate: '',
            selectedDate: '',
            previousTotalDays: 0,
            dayLeft: 0,
            totalDays: 0,
            feeParStudent: 0.166667,
            totalPrice: 0.0,
            totalStudent: 500,
            invoiceStatus: false,

        };
        console.log(this.state.payBtnForm, "constracttor");
    }
    payBtnFormSH = () => {
        this.setState({
            payBtnForm: !this.state.payBtnForm,
        });
        const currentDate = new Date();
        const futureDate = new Date(currentDate.setDate(currentDate.getDate() + (this.state.dayLeft)));
        const formattedDate = futureDate.toISOString().split('T')[0];
        this.setState({ futureDate: formattedDate });
        console.log(formattedDate);
    }
    calculateDays = () => {
        const startDate = new Date(this.state.futureDate); // Assuming the start date is in the format MM/DD/YYYY
        const endDate = new Date(this.state.selectedDate); // Assuming the end date is in the format MM/DD/YYYY

        const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
        var totalPrice = Math.round(totalDays * (this.state.feeParStudent) * (this.state.totalStudent))
        this.setState({ totalDays: totalDays, totalPrice: totalPrice })
        console.log('Total days:', totalDays);
    };

    componentDidMount() {
        const startDate = new Date(this.state.previousStartDate); // Assuming the start date is in the format MM/DD/YYYY
        const endDate = new Date(this.state.previousEndDate); // Assuming the end date is in the format MM/DD/YYYY
        const currentDate = new Date();

        const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        const dayLeft = Math.abs(endDate.getTime() - currentDate.getTime());
        const previousTotalDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
        const previousDayLeft = Math.ceil(dayLeft / (1000 * 3600 * 24)); // Convert milliseconds to days
        this.setState({ previousTotalDays: previousTotalDays, dayLeft: previousDayLeft })
        console.log('Total days:', previousTotalDays);

        // const futureDate = new Date(currentDate.setDate(currentDate.getDate() + (this.state.dayLeft)));
        // const formattedDate = futureDate.toISOString().split('T')[0];
        // this.setState({ futureDate: formattedDate });
        // console.log(formattedDate);



    }
    handleChange = (event) => {
        this.setState({ selectedDate: event.target.value });
    };

    render() {
        const progressBar = {
            width: ((this.state.dayLeft) / (this.state.previousTotalDays)) * 100 + '%',
        }
        return (
            <div className="admin_page">
                <div className="box_content_show_grid">
                    <div className="box_content_main">
                        <h2 className="mx-2">500</h2>
                        <p className="mx-2">Total Student's</p>
                        <p className="text-center box_mor_info">More Info <i className="fas fa-arrow-circle-right" /> </p>
                    </div>
                    <div className="box_content_main">
                        <h2 className="mx-2">60</h2>
                        <p className="mx-2">Total Teacher's</p>
                        <p className="text-center box_mor_info">More Info <i className="fas fa-arrow-circle-right" /> </p>
                    </div>
                    <div className="box_content_main">
                        <h2 className="mx-2">20</h2>
                        <p className="mx-2">Total Employee's</p>
                        <p className="text-center box_mor_info">More Info <i className="fas fa-arrow-circle-right" /> </p>
                    </div>
                    <div className="box_content_main">
                        <h2 className="mx-2">8</h2>
                        <p className="mx-2">Total Module's</p>
                        <p className="text-center box_mor_info">More Info <i className="fas fa-arrow-circle-right" /> </p>
                    </div>
                </div>
                <div className="admin_page_down">
                    <div className="admin_page_down_left">
                        <div className="active_pack_status">
                            {
                                this.state.payBtnForm ?

                                    <div>
                                        <h4 className='pb-4'>{this.state.dayLeft} Days Left</h4>
                                        <div className="progress">
                                            <div className="progress-bar  " role="progressbar" style={progressBar}>{this.state.dayLeft} Day</div>
                                        </div>
                                        <div className="d-flex justify-content-between py-2">
                                            <p>Expires on 26/06/2023</p>
                                            <p >{this.state.dayLeft} / {this.state.previousTotalDays}</p>
                                        </div>
                                        <button onClick={this.payBtnFormSH} className="active_pack_status_pay_btn" type="button">BUY NOW</button>
                                    </div>
                                    :
                                    <div>
                                        <div className="mb-2">
                                            <label htmlFor="school_id" className="form-label">School ID</label>
                                            <input type="text" className="form-control" id="school_id" aria-describedby="textHelp" readOnly defaultValue={this.state.futureDate} />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="school_name" className="form-label">School Name</label>
                                            <input type="text" className="form-control" id="school_name" aria-describedby="textHelp" readOnly defaultValue={this.state.futureDate} />
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="mb-2">
                                                <label htmlFor="start_date" className="form-label">Start Date</label>
                                                <input type="date" readOnly defaultValue={this.state.futureDate} className="form-control" id="start_date" aria-describedby="textHelp" />
                                            </div>
                                            <div className="mb-2">
                                                <p className="mt-4 py-3"> -TO-</p>
                                            </div>

                                            <div className="mb-2">
                                                <label htmlFor="exampleInputText1" className="form-label">End Date</label>
                                                <input type="date" className="form-control" id="date" name="date" value={this.state.selectedDate} onChange={this.handleChange} min={this.state.futureDate} />
                                            </div>
                                        </div>
                                        <div className='price_details'>
                                            <p className="text-end">Fee par Student: <span className="mx-2 "><strong>{this.state.feeParStudent}</strong></span></p>
                                            <p className="text-end">Total Student: <span className="mx-2 "><strong>{this.state.totalStudent}</strong></span></p>
                                            <p className="text-end">Total Days: <span className="mx-2 "><strong>{this.state.totalDays}</strong></span></p>
                                        </div>
                                        <div>
                                            <p className="text-end">Total Price: <span className="mx-2 "><strong>{this.state.totalPrice}</strong></span></p>

                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <button onClick={this.payBtnFormSH} className="active_pack_status_pay_btn bg-danger" type="button">Close</button>
                                            <button onClick={this.calculateDays} className="active_pack_status_pay_btn" type="button">Calculate Total Price</button>
                                            <button onClick={this.payBtnFormSH} className="active_pack_status_pay_btn bg-success" type="button">Submit</button>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="admin_page_down_right">
                        <div className="active_pack_status">
                            <table className="table  table-striped table-hover table-bordered table-sm table-responsive-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Fee par Student</th>
                                        <th scope="col">Total Student</th>
                                        <th scope="col">Total Days</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End Date</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Invoice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.166667</td>
                                        <td>500</td>
                                        <td>30</td>
                                        <td>26/05/2023</td>
                                        <td>26/06/2023</td>
                                        <td>2550</td>
                                        <td>Approve</td>
                                        <td><i className="text-danger fas fa-file-pdf" /></td>
                                    </tr>
                                    <tr>
                                        <td>0.166667</td>
                                        <td>500</td>
                                        <td>30</td>
                                        <td>26/05/2023</td>
                                        <td>26/06/2023</td>
                                        <td>2550</td>
                                        <td>Approve</td>
                                        <td><i className="text-danger fas fa-file-pdf" /></td>
                                    </tr>
                                    <tr>
                                        <td>0.166667</td>
                                        <td>500</td>
                                        <td>30</td>
                                        <td>26/05/2023</td>
                                        <td>26/06/2023</td>
                                        <td>2550</td>
                                        <td>Panding</td>
                                        <td>
                                            {this.state.invoiceStatus ?
                                                <i className="text-danger fas fa-file-pdf" />
                                                :
                                                <i className="fas fa-cog fa-spin" />
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}



