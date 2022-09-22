import '../scss/App.scss';
import rwd from "../rwd.png";
import javascript from "../javascript.png"
import Carousel from 'react-bootstrap/Carousel';


export default function Cred () {
  return (
    <div id="credentials" className="certholder container-fluid">
    <Carousel className="kara h-50" variant='dark'>
      <Carousel.Item>
        <a href="https://www.freecodecamp.org/certification/Plagu3Dr2k/responsive-web-design" target="_blank">
        <img
          className="certs d-block w-100"
          src={rwd}
          alt="First slide"/></a>
      </Carousel.Item>
      <Carousel.Item >
        <a href='https://www.freecodecamp.org/certification/Plagu3Dr2k/javascript-algorithms-and-data-structures' target="_blank"><img
          className="certs d-block w-100"
          src={javascript}
          alt="Second slide"
        /></a>
      </Carousel.Item>
      </Carousel>
      </div>
  );
}


