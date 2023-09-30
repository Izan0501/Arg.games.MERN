import React from 'react'
import '../css/main.css'
import botsImg from '../images/bximg.png'
import botsImg1 from '../images/bximg1.png'
import botsImg2 from '../images/bximg2.png'


export const BootstrapSlider = () => {
    return (
        <div className="slider2">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                       <img src={botsImg} className="small d-block w-100 " alt="image" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                       <img src={botsImg1} className="small d-block w-100" alt="image" />
                    </div>
                    <div className="carousel-item">
                       <img src={botsImg2} className="small d-block w-100" alt="image" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default BootstrapSlider