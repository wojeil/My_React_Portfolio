import React, {Component} from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import cards from "../utils/cards.json";
import Cards from "../components/Cards";
import "./Portfolio.css";


class Portfolio  extends Component {

    constructor(props) {
        super(props);
        this.state= {
            properties: cards,
            peoperty: cards[0]
        }   
     }


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
                {cards.map(card =>{
                    return(
                        <Cards
                        key={card.id}
                        name= {card.name}
                        href={card.href}
                        image= {card.image}
                        gitHref= {card.gitHref}
                        ptag= {card.ptag}
                        />
                    );
                })}
            </div>
        </div>
    </div>
    <Footer/>
</div>

</>
)
}

export default Portfolio