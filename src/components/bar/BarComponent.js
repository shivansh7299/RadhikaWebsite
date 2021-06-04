import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Jumbotron, CardImgOverlay, CardDeck, Row
} from 'reactstrap';
import mb from '../../assets/images/mb.jpg'
import blenders from '../../assets/images/blenders.jpg'
import glass from '../../assets/images/glass.jpg'

import './BarComponent.css'




export default class BarComponent extends Component {
    render() {
        return (
            <div className="container" id="bar">
                <div id="jam">
                    <h1 id="heading">Whisky</h1>
                </div>
                <Row xs="1" sm="2" md="4">
                    <Col >
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Blender Pride</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                </CardImgOverlay>
                                </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Antiquty Blue</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Master Blend</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">DSP Black</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">DSP WH</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Blender pride ultra</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Doctor Brandy</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Goa Whisky</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Imperials Blue</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Heyward Whisky</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">MCDonalds No1 Reserve</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Oak Smith</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Oak Smith Gold</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">OC(Officer's choice)</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">OC Blue(Officer's choice)</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Old Monk</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">OC Blue(Officer's choice)</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">OC Blue(Officer's choice)</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Jumbotron id="jam">
                    <div>
                        <h1 id="heading">Wine/Rum</h1>
                    </div>
                    <Row xs="1" sm="2" md="3">
                        <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                    <CardBody>
                                    <CardTitle tag="h5">Bacardi  Black</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                    <CardText>
                                        <Button color="primary" className="m-2">90ml
                                        </Button>
                                        <Button color="primary" className="m-2">180ml
                                        </Button>
                                        <Button color="primary" className="m-2">750m
                                        </Button>
                                    </CardText>
                                    </CardBody>
                                    </CardImgOverlay>
                            </div>
                        </Card>
                        </Col>
                        <Col>
                            <Card id="card">
                                <div className="row">
                                    <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                        <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h5">Bacardi White</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                        <CardText>
                                            <Button color="primary" className="m-2">90ml
                                            </Button>
                                            <Button color="primary" className="m-2">180ml
                                            </Button>
                                            <Button color="primary" className="m-2">750m
                                            </Button>
                                        </CardText>
                                        </CardBody>
                                        </CardImgOverlay>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="card">
                                <div className="row">
                                    <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h5">Card title</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </CardImgOverlay>
                                    </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="card">
                                <div className="row">
                                    <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
                                        <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h5">Card title</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Available Stock</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                        </CardImgOverlay>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron id="jam">
                    <div>
                        <h1 id="heading">Beer</h1>
                    </div>
                    <Row xs="1" sm="2" md="3">
                    <Col>
                        <Card id="card">
                            <div className="row">
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
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
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
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
                                <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
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
                                    <CardImg top className=" img-fluid rounded-circle shadow" src={glass} alt="Card image cap" sm={2}/>
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
                </Jumbotron>
                <div id="btn">
                    <Button color="warning" size="lg" block><a id='atag' href="tel:7972751872">Call us for order</a></Button>
                </div>
            </div>
        )
    }
}
