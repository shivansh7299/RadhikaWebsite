import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Jumbotron, CardImgOverlay, CardDeck, Row
} from 'reactstrap';
import IMAGES from '../../assets/images/pic'
import glass from '../../assets/images/glass.jpg'

import './FoodComponent.css'

export default class FoodComponent extends Component {
    render() {
        return (
            <div className="container">
            <Jumbotron id="jam">
                <div>
                    <h1  id="heading"> Breakfast</h1>
                    <h3 id="subheading"> Maharashtrian</h3>
                </div>
                <Row xs="1" sm="2" md="3">
                    <Col >
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.poha} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Poha</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className="img-fluid rounded shadow" src={IMAGES.dhokla} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Dhokla</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.wadapav} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Wada Pav</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.samosa} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">samosa</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.kachori} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Kachori</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.breadpakoda} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Bread Pakoda</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.onionpakoda} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Onion Pakoda</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.cutlet} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Veg Cutlet</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <h3 id="subheading">South Indian</h3>
                <Row xs="1" sm="2" md="3">
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.idli} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Idli Chutney</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.meduwada} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Medu Wada</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.rawaupama} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Rawa Upama</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.plaindosa} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Plain Dosa</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.masaladosa} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Masala Dosa</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.uttapam} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Uttapam</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron id="jam2">
                <div >
                    <h1 id="heading"> Lunch/Dinner</h1>
                </div>
                <Row xs="1" sm="2" md="3">
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.parothabhaji} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Parotha Bhaji</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.puribhaji} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Puri Bhaji</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.cholebhature} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Chole Bhature</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.mixveg} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Mix Veg</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.rajmarice} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Rajma Rice</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.curdrice} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Curd Rice</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.chapati} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Chapati</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.paratha} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Paratha</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.eggbiryani} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Egg Biryani</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.chickenbiryani} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Chicken Biryani</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.eggcurry} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h3">Egg Curry</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                </Row>
              </Jumbotron>
                <Row xs="1" sm="1" md="2">
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded shadow" src={glass} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h5">Card title</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                </Row>
                <div id="btn">
                    <Button color="warning" size="lg" block><a id='atag' href="tel:7972751872">Call us for order</a></Button>
                </div>
            </div>
        )
    }
}
