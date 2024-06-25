import React from 'react';
import './Services.css';
import kitchen1 from '../images/services/kitchen-pic1.jpg';
import kitchen2 from '../images/services/kitchen-pic2.jpg';
import Carousel1 from '../images/services/carousel-1.jpg';
import Carousel2 from '../images/services/carousel-2.jpg';
import Carousel3 from '../images/services/carousel-3.jpg';

export default function Services() {
  return (
    <main className="services">
      <div className="row carousel">
        <div className="carousel slide carousel-fade" id="slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#slide"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#slide" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#slide" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={Carousel1} className="carousel-img" alt="slide1" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Carousel2} className="carousel-img " alt="slide2" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Carousel3} className="carousel-img " alt="slide3" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <h1 className="text-center container-heading">Our Services</h1>
        <div className="row kitchen-row">
          <div className="col-12 col-sm-6 col-md-6 kitchen-col-1">
            <div className="card kitchen-col-1-card1">
              <img src={kitchen1} className="img-flid" />
            </div>
            <div className="card kitchen-col-1-card2">
              <img src={kitchen2} className="img-flid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 d-grid gap-3 justify-centent-center align-content-center">
            <div className="heading d-flex gap-5 ">
              <div className="heading-h3">
                <h2 className="text-center">Kitchen</h2>
              </div>
              <div className="line-rectangle d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <div className="rectangle"></div>
              </div>
            </div>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <div className="d-grid justify-content-start align-content-center">
              <button className="btn button">Get In Touch</button>
            </div>
          </div>
        </div>
        <div className="row bedroom-row d-flex  flex-column-reverse flex-sm-row flex-md-row">
          <div className="col-12 col-sm-6 col-md-6 d-grid gap-3 justify-centent-center align-content-center">
            <div className="heading d-flex gap-5 justify-content-end">
              <div className="line-rectangle d-flex justify-content-center align-items-center">
                <div className="rectangle"></div>
                <div className="line"></div>
              </div>
              <div className="heading-h3">
                <h2 className="text-center">Bed Room</h2>
              </div>
            </div>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <div className="d-grid justify-content-start align-content-center">
              <button className="btn button">Get In Touch</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 bedroom-col-1">
            <div className="card bedroom-col-1-card1">
              <img src={kitchen1} className="img-flid" />
            </div>
            <div className="card bedroom-col-1-card2">
              <img src={kitchen2} className="img-flid" />
            </div>
          </div>
        </div>
        <div className="row kitchen-row">
          <div className="col-12 col-sm-6 col-md-6 kitchen-col-1">
            <div className="card kitchen-col-1-card1">
              <img src={kitchen1} className="img-flid" />
            </div>
            <div className="card kitchen-col-1-card2">
              <img src={kitchen2} className="img-flid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 d-grid gap-3 justify-centent-center align-content-center">
            <div className="heading d-flex gap-5 ">
              <div className="heading-h3">
                <h2 className="text-center">Pooja Room</h2>
              </div>
              <div className="line-rectangle d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <div className="rectangle"></div>
              </div>
            </div>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <div className="d-grid justify-content-start align-content-center">
              <button className="btn button">Get In Touch</button>
            </div>
          </div>
        </div>
        <div className="row bedroom-row d-flex  flex-column-reverse flex-sm-row flex-md-row">
          <div className="col-12 col-sm-6 col-md-6 d-grid gap-3 justify-centent-center align-content-center">
            <div className="heading d-flex gap-5 justify-content-end">
              <div className="line-rectangle d-flex justify-content-center align-items-center">
                <div className="rectangle"></div>
                <div className="line"></div>
              </div>
              <div className="heading-h3">
                <h2 className="text-center">Dinning Room</h2>
              </div>
            </div>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <div className="d-grid justify-content-start align-content-center">
              <button className="btn button">Get In Touch</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 bedroom-col-1">
            <div className="card bedroom-col-1-card1">
              <img src={kitchen1} className="img-flid" />
            </div>
            <div className="card bedroom-col-1-card2">
              <img src={kitchen2} className="img-flid" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
