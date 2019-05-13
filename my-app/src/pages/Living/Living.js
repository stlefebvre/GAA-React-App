import React, { Component } from 'react';
import { Col } from "../../components/Grid"

class Living extends Component {
    render () {
        return (
            <Col size="sm-12 md-10 lg-10">
                <h1>Apartments</h1>
                <p>I'm certainly no expert on purchasing a home, or the needs of a family, however, I am very in tune with the growing number of young people living in/around the Seacoast.</p>
                <p>Newmarket is home for many people currently attending or recently graduated from nearby UNH. Many other young people find themselves living in Newmarket due to the rising cost of living on the Seacoast (particularly Portsmouth in recent years).</p>
                <ul>
                    <li><strong>The Mills:</strong>&nbsp;Rennovated mill building apartments. High-rise ceilings and typically at least one brick wall. Amenities include wifi, central AC, and coin-op laundry in the building. While these apartments are beautiful, they tend to be pricey and there is no parking at the building for residents, so you'll find yourself fighting for a spot in the municipal lot across the street with patrons of Deciduous Brewery, Panzanella's, Kume, and downtown visitors. This problem is exacerbated during the winter months where the winter parking ban prohibits overnight parking throughout most of the town.</li>
                    <li><strong>Cherry Hill:</strong>&nbsp;Modern apartments off of Rt. 108 on Bennett Drive as you enter town from Newfields. Buildings are either two or four floors. Amenities include a small movie room, fitness center, and pool in the leasing office. Parking is plentiful for residents and guests. Lots of young people here, so there is ample opportunity to meet new people. You're just outside of walking distance of downtown, but the drive to downtown is a mere two minutes. This is also easily bikable if you want to ditch the car.</li>
                    <li><strong>Mead Hill:</strong>&nbsp;2+ bedroom condos at the top of Bennett Drive. Essentially an upgraded version of Cherry Hill. Very pet-friendly.</li>
                    <li>You can find plenty of suitable apartments on Craigslist of the Seacoast Housing group on Facebook. Generally speaking, Newmarket is a young and friendly town. Expect to spend anywhere from $500-800 per person. Price tends to increase the closer to downtown you are.</li>
                </ul>
            </Col>
        );
    }
}

export default Living