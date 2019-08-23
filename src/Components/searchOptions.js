import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class searchOptions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            departure: "",
            destination: "",
            startDate: new Date().toLocaleString()
        }
    }
    onOringinChange = (e) => {
        e.preventDefault();
        this.setState({ departure: e.target.value });
        console.log(e.target)
    }
    onDestinationChange = (e) => {
        e.preventDefault();
        this.setState({ destination: e.target.value });
    }
    onStartDateChange = (e) => {
        e.preventDefault();

        this.setState({ startDate: e.target.value });
    }
    onSubmitHandle = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        console.log("FORM SUBMIT", e.target)
    }
    render() {
        return (
            <div className="card">
                <div className="w-50 card-header">
                    <h3>Oneway</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmitHandle}>
                        <input className="form-control form-control-sm form-group" placeholder="Enter origin city" onChange={this.onOringinChange}></input>
                        <input className="form-control form-control-sm form-group" placeholder="Enter destination city" onChange={this.onDestinationChange}></input>
                        <input className="form-control form-control-sm form-group" type="date" placeholder="Departure date" onChange={this.onStartDateChange}></input>
                        <input className="form-control form-control-sm form-group" type="date" placeholder="Return date"></input>
                        <input className="form-control form-control-sm form-group" placeholder="passengers"></input>
                        <button className="form-control form-control-sm form-group" type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default searchOptions
