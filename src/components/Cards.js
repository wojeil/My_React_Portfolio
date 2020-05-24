import React from "react";


function Cards(props) {

    return (


        <div className="card">
            <a href={props.href} target="_blank" rel="noopener noreferrer"> <img
                src={props.image} className="card-img-top"
                alt={props.name} /> </a>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.ptag}</p>
            </div>
        </div>
    );
}

export default Cards