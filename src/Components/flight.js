import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function flight(props) {
    console.log("nnnnnn", props.data)
    return (
        <div className="container">
        <div className="row card mb-3">
            <div className="col">
                <div ><strong>{props.data.fare}</strong></div>
                <div>{props.data.flight_id}</div>
                <div >{props.data.source_code} > {props.data.destination_code}</div>
                <div >Depart: {props.data.departs_at}</div>
                <div >Arrive: {props.data.arrives_at}</div>
            </div>
            <div className="col d-flex justify-content-end mb-3">
                <div className="border "></div>
                <button>Book this Flight</button>
            </div>
        </div>
        </div>
    )
}
export default flight
