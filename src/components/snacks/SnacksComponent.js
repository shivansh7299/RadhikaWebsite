import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col,Button, Jumbotron, CardImgOverlay, Row
} from 'reactstrap';
import IMAGES from '../../assets/images/pic'

export default class SnacksComponent extends Component {
    render() {
        return (
            <div className="container">
                <Jumbotron id="jam">
                    <div>
                        <h1  id="heading">Snacks</h1>
                    </div>
                    <Row xs="1" sm="2" md="3">
                        <Col>
                            <Card id="card">
                                <div className="row">
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.potatofry} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Patato Fry</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.fingerchips} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Finger Chips</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.halffry} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Half Fry</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.doublefry} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Double Fry</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.omlette} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Omlette</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.eggburji} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Egg Burji</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.boiledeggs} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Boiled Eggs</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.boiledeggsfry} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Boiled Eggs Fry</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.chips} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Chips</CardTitle>
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
                                    <CardImg top id="img" className=" img-fluid rounded shadow" src={IMAGES.popcorn} alt="Card image cap" sm={2}/>
                                    <CardImgOverlay>
                                        <CardBody>
                                        <CardTitle tag="h3">Popcorn</CardTitle>
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
                <div id="btn">
                    <Button color="warning" size="lg" block><a id='atag' href="tel:7972751872">Call us for order</a></Button>
                </div>
            </div>
        )
    }
}
