import React, { Component } from 'react'
import FlightList from './flightList';
import SearchOptions from './searchOptions';
import PriceFilter from './priceFilter';
import FlightData from '../flights.json'
import 'bootstrap/dist/css/bootstrap.css';
class flightHomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            source:"",
            destination:""
        }
    }
    OnSubmitHandle = (childState) => {
        
        const filteredData = [...FlightData]
        this.setState({
            source:childState.departure,
            destination:childState.destination,
            items: filteredData.filter(function (el) {
                return (
                    el.source.toUpperCase() === childState.departure.toUpperCase() &&
                    el.destination.toUpperCase() === childState.destination.toUpperCase()
                )

            })
        })

        console.log("data", this.state.items);


    }
    render() {
        return (
            <div className="card container">
                <h1>Flight Search Engine</h1>
                <div className="card-body  row">
                    <div className="col-md-6 col-xs-12">
                        <div>
                            <SearchOptions {...this.state} onSubmit={this.OnSubmitHandle} />
                        </div>
                        <div>
                            <PriceFilter />
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <FlightList flightlist={this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export default flightHomePage
