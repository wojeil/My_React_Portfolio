import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import cards from "../utils/cards.json";
import Cards from "../components/Cards";
import "./Portfolio.css";


function Portfolio (){

return(
    <div className="portfolioBack">
    <Nav/>
    <div className="container">
    {/* <!--Row 1 has 1 col--> */}
    <div className="row">
        <div className="col-md-12">
            <h1 id="portfolio"> Portfolio </h1>
            <h3>Page 1</h3>
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
                        image= {card.image}
                        gitHref= {card.gitHref}
                        ptag= {card.ptag}
                        />
                    );
                })}
            </div>
        </div>
    </div>
    {/* <!--row 3 has 2 col--> */}
 
</div>
<Footer/>
</div>
)
}

export default Portfolio