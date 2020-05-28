import React, {Component} from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import cards from "../utils/cards";
import Cards from "../components/Cards";
import "./Portfolio.css";


class Portfolio  extends Component {

    constructor(props) {
        super(props);
        this.state= {
            properties: cards.properties,
            property: cards.properties[0]
        }   
     }

nextProp=() =>{
    const newIndex = this.state.property.index+1;
    this.setState({
        property: cards.properties[newIndex]
    })
}

prevProp=() =>{
    const newIndex = this.state.property.index-1;
    this.setState({
        property: cards.properties[newIndex]
    })
}

render(){
    const{property} = this.state;

    return(
        <>
        <div className="portfolioBack">
        <Nav/>
        </div>
        <div className="container-fluid">
        {/* <!--Row 1 has 1 col--> */}
        <div className="row">
            <div className="col-md-12">
                <h1 id="portfolio"> Portfolio </h1>
                <hr />
            </div>
        </div>
        {/* <!--Row 2 has 2 col--> */}
        <div className="row">
            {/* <!--col 1 contains 1 card--> */}
            <div className="col-md-12">
                <div className="card-columns">
                <button 
                onClick={()=>this.nextProp()}
                disabled={property.index === cards.properties.length-1}
                >Next</button>

                <button 
                onClick={()=>this.prevProp()}
                disabled={property.index ===0}
                >Prev</button>

                <div className="cardpage">
                    <Cards property ={property} />
                </div>
                   

                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
    </>
    )
    }

}




export default Portfolio