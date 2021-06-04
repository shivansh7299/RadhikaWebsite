import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Col,
  Row
} from 'reactstrap';
import IMAGES from '../../assets/images/pic'

const items = [
  {
    src:IMAGES.room1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src:IMAGES.room2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: IMAGES.room3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },{
    src:IMAGES.room5,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src:IMAGES.room6,
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src:IMAGES.room7,
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src:IMAGES.room8,
    altText: 'Slide 7',
    caption: 'Slide 7'
  }
];

const RoomComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="container">
        <Jumbotron id="jam" style={{backgroundColor:"silver"}}>
            {/* <Row>
              <Col> */}
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
              {/* </Col>
            </Row> */}
        </Jumbotron>
        <Jumbotron id="jam2">
            <div>
                <h1>Home</h1>
            </div>
        </Jumbotron>
    </div>
  );
}

export default RoomComponent;
