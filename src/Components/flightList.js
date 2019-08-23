import React, { Component } from 'react'
import Flight from './flight'
import 'bootstrap/dist/css/bootstrap.css';

class flightList extends Component {
    render() {
        console.log("GGFGFG", this.props.flightlist.items)
        return (
            (this.props.flightlist.items.length!==0) ?
                <div className="card">
                    <div className="card-header"><h3>{this.props.flightlist.source}>{this.props.flightlist.destination}</h3></div>
                    <div className="card-body">
                    {this.props.flightlist.items.map(x => <Flight data={x} />)}
                    </div>
                </div>
                : <div className="row h-100 d-flex justify-content-center align-items-center"><h1> Not Found!! Retry </h1></div>
        )
    }
}
export default flightList
