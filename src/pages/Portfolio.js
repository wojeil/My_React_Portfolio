import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import cards from "../utils/cards";
import Cards from "../components/Cards";
import "./Portfolio.css";
import "./Portfolio.scss";


class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: cards.properties,
            property: cards.properties[0]
        }
    }

    nextProp = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: cards.properties[newIndex]
        })
    }

    prevProp = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: cards.properties[newIndex]
        })
    }

    render() {
        const {properties, property } = this.state;

        return (
            <>
                <div className="portfolioBack">
                    <Nav />
                </div>
                <div className="container-fluid">
                    {/* <!--Row 1 has 1 col--> */}
        
          
                           
                                <button
                                    onClick={() => this.nextProp()}
                                    disabled={property.index === cards.properties.length - 1}
                                >Next</button>

                                <button
                                    onClick={() => this.prevProp()}
                                    disabled={property.index === 0}
                                >Prev</button>

                                <div className="cardpage">
                                    <section>
                                    <h1 id="portfolio"> Portfolio </h1>
                            <hr />
                                    </section>
                                    <div className="col">
                                    <div className={`cardsSlider active-slide-${property.index}`}>
                                        <div className="cardsSliderWrapper" style={{
                                            "transform": `translateX(-${property.index*(100/properties.length)}%)`
                                        }}>
                                            {
                                                properties.map(property =>  <Cards key={property.id} property={property} />)
                                            }
                                          
                                        </div>
                                    </div>
                                    </div>
                                    
               
                                </div>
                                <Footer />

                           
                        </div>
                 
                   
        

            </>
        )
    }

}




export default Portfolio