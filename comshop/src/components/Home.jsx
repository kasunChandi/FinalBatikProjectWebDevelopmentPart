

import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel' 

class Home extends Component {

  render() {

    return (
      <div className="container">
      <Carousel> 
      <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://audrey-laure.com/wp-content/uploads/2018/04/Sri-Lanka-visite-usine-tissu-batik-voyage-6-sur-6.jpg'}  alt="..."/>  
          </Carousel.Item  > 
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://miro.medium.com/max/10944/1*lfqrPSk3i4-BnVhEcBREUg.jpeg'} alt="..."  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'http://d1f7geppf3ca7.cloudfront.net/origin/598462/1549952450930_sri-lankan-batik-6-.jpg'} alt="..." />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'http://salt.lk/wp-content/uploads/2018/09/Batik-has-been-kept-alive-and-is-thriving-thanks-to-the-National-Crafts-Council-1024x504.jpg'} alt="..." />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://images-na.ssl-images-amazon.com/images/I/81GWRRkfXWL._AC_SL1500_.jpg'} alt="..." />  
          </Carousel.Item  >
      </Carousel> 
  </div>
    )};
}
 export default Home;