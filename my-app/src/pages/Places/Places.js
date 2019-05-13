import React, { Component } from "react";
import { Col } from "../../components/Grid";

class Places extends Component {
    render () {
        return (
                <Col size="sm-12 md-10 lg-10">
                    <h1>Around Town</h1>
                    <h3>My Favorite Places</h3>
                    <p>There are a number of options for such a small town for food, from Thai to fine dining.</p>
                    <ul>
                        <li>Oak House: Standard American food, all made from scratch. Friendly staff. Has begun to rival the Stone Church as the central hangout spot. This is where you'll find crowds celebrating Boston sports the most often.</li>
                        <li>Stone Church
                            <ul>
                                <li>Near legendary music venue with an eclectic past. Once a church for mill workers, a meeting house, roller-skating rink, and shoe-assembly plant, and, well... a church before it became the locally renowned music venue and restaurant.</li>
                                <li>Past musical guests include, but are not limited to: Phish, Aerosmith, Bonnie Raitt, Joan Osborne, Guster, John Butler Trio, Grace Potter and the Nocturnals, and Bill Morrissey.</li>
                            </ul>
                        </li>
                        <li>The Joinery: Fine dining. They pay attention to their customer's wants! We had insisted they join a number of other restaurants in having Taco Tuesday specials and in the summer of 2018, they introduced $3 tacos on Tuesdays! Sunday brunches and seafood are other areas where The Joinery shines.</li>
                        <li>Horseshoe Cafe: Small breakfast/coffee joint you'll miss if you don't look close enough. Hands down the kindest staff in town (and I'd contend the entire state). Nori, Sarah, and Eric make it a point to remember every customer's name. They have the richest coffee in town with no additives out of concern for patrons' health. They brew their own beans in-house! Breakfast staples you cannot miss are their maple cream toast and breakfast sandwiches.</li>
                        <li>Bloom'n Cow: Locally made ice cream, rotating flavors. Located in the mill building on Main St. Past favorites of mine have been Apple Pie and Coffee Oreo.</li>
                        <li>Kume: Japanese food. If you're a sushi enthusiast, I highly recommend the Pink Lady roll.</li>
                        <li>Crackskull's: Another coffee staple. Locally owned, they offer an expansive variety of flavors, drinks, and brews. The other half of the store sells used books and vinyls. They host the NH Media Makers on the first Sunday of every month. Recently, candidates for the presidential election have stopped in while in town. Otherwise, you'll find writers, students, comedians, and a number of other creative minds putting their ideas to paper throughout the shop. They were the first in town to sell CBD oil and drinks as well. This has since taken off at The Stone Church and the Oak House.</li>
                    </ul>
                </Col>
        );
    }
}

export default Places;