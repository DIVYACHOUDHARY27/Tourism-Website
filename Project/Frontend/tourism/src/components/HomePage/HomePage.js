import React, { Component } from "react";
import "./Homepage.css";
import Carousel from "react-bootstrap/Carousel";
import logo from "./logo.png";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import img1 from "./monu1.jpg";
import img2 from "./tajmahal.jpg";
import img3 from "./havelock.jpg";
import img4 from "./ajantacaves.jpg";
import img5 from "./brahmaputrariver.jpg";
import img6 from "./Ranakpur.jpg";
import first from "./12.jpg";
import second from "./second.jpg";
import third from "./third.jpg";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="container-fluid">
        <br></br>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={first} alt="First slide" />
            <Carousel.Caption>
              <div className="firstslide">
                <h1 className="h1">Welcome to !!!</h1>
              <h2 className="h2" >Travel Dream $ Destination</h2>
              
              </div>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={second} alt="Second slide" />

            <Carousel.Caption>
            <div className="firstslide">
                <h1 className="h1">Welcome to !!!</h1>
              <h2 className="h2" >Travel Dream $ Destination</h2>
              
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={third} alt="Third slide" />

            <Carousel.Caption>
            <div className="firstslide">
                <h1 className="h1">Welcome to !!!</h1>
              <h2 className="h2" >Travel Dream $ Destination</h2>
              
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        </div>
        <br></br>
        <br></br>
        <div className="container text-center ">
          <h1>PLACES YOU NEED TO VISIT IN INDIA</h1>
          <br></br>
          <br></br>
          <div className="row">
            <div className="column">
              <img src={img1}></img>
              <div className="description">
                <p>
                  <br></br>
                  <h4>Monuments of New Delhi</h4>
                  First-time travelers to India would likely end up in its
                  capital, New Delhi. The flamboyant lifestyle of this city is
                  likely to derail tourists from sticking to their itinerary.
                </p>
              </div>
            </div>
            <div className="column">
              <img src={img2} style={({ width: 200 }, { height: 200 })}></img>
              <div>
                <p>
                  <br></br>
                  <h4>Taj Mahal</h4>
                  Many of the world’s architectures can be attributed to love
                  and the Taj Mahal is one of them. Mumtaz Mahal’s last request
                  from her husband, Shah Jahan, before she died after the
                  delivery of her 14th child, was to have a mausoleum built in
                  her name.
                </p>
              </div>
            </div>
            <div className="column">
              <img src={img3}></img>
              <div>
                <p>
                  <br></br>
                  <h4>Havelock Island</h4>
                  Havelock Island is the largest of its kind in Ritchie’s
                  Archipelago. It makes the perfect location for eco-tourism.
                  Havelock Island now sees more visitors because of its great
                  beaches, snorkeling, scuba diving opportunities and casual
                  atmosphere.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <img src={img4}></img>
              <div>
                <p>
                  <br></br>
                  <h4>Ajanta Caves</h4>
                  Ajanta Caves dates back to the second century BC. They became
                  isolated around 1819 which has helped to preserve some of
                  their paintings. The preserved murals have everything from
                  sailing ships to the animal-filled forest and city streets.
                </p>
              </div>
            </div>
            <div className="column">
              <img src={img5}></img>
              <div>
                <p>
                  <br></br>
                  <h4>Brahmaputra River</h4>
                  Tourists who are seeking companionship with nature will find
                  Brahmaputra River provides them with a burst of excitement.
                  Brahmaputra is one of the major rivers in northeast India. Its
                  origin can be traced to Tibet.
                </p>
              </div>
            </div>
            <div className="column">
              <img src={img6}></img>
              <div>
                <p>
                  <br></br>
                  <h4>Ranakpur Temple</h4>
                  India is famous for having an array of temples, but Ranakpur
                  Temple really stands out. Its fame stems from its art and
                  architectural creativity. The origin of Ranakpur can be traced
                  back to the 15th century and it took half a century to erect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
