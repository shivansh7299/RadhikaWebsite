import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  Jumbotron,
  Col,
  Row
} from 'reactstrap';
import glass from '../../assets/images/glass.jpg'
import food from '../../assets/images/food.jpg'
import snacks from '../../assets/images/snacks.jpg'
import './HomeComponent.css'

export default class HomeComponent extends Component {
    render(){
      return(
        <div>
          <Jumbotron id="home" >
            <Row>
              <Col>
                <img src={food} className="img"></img>
              </Col>
                <Col>
                  <div className="intro">
                    <h1>Best Dishes to find in and best quality of food....Enjoy our food at home with our home delivery service</h1>
                    <h3>Discover Restaurants That deliver near You</h3>
                  </div>
                </Col>
            </Row>
          </Jumbotron>
        </div>
    )
  }
}