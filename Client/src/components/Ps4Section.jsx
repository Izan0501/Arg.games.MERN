import React from 'react'
import Card from '../subComponents/Card';
import ps4I1 from '../images/ps4-1.jpg'
import ps4I2 from '../images/ps4-2.jpg'
import ps4I3 from '../images/ps4-4.jpg'
import ps4I4 from '../images/ps4-7.png'
import ps4I5 from '../images/ps4-8.jpg'
import ps4I6 from '../images/ps4-10.jpg'
import ps4I7 from '../images/ps4-3.jpg'
import ps4I8 from '../images/ps4-5.jpg'
import ps4I9 from '../images/ps4-6.jpg'
import ps4I10 from '../images/ps4-9.jpg'
import imgHover from '../images/darkS.png'
import imgHover1 from '../images/plnfall.png'
import imgHover2 from '../images/LifeS.png'
import imgHover3 from '../images/spmn.png'

const Ps4Section = () => {
    return (
        <>
            <div className="wrapper">
                <button className="carrusel-arrow carrusel-prev" id="left" data-button="button-prev">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                        className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path fill="currentColor"
                            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                        </path>
                    </svg>
                </button>
                <ul className="carousel">
                    <Card img={ps4I4} imgS={imgHover3} price='U$D 59.99' />

                    <Card img={ps4I1} imgS={imgHover1} price='U$D 49.99' />

                    <Card img={ps4I8} imgS={imgHover2} price='U$D 19.99' />

                    <Card img={ps4I2} imgS={imgHover} price='U$D 39.99' />

                    <Card img={ps4I10} price='U$D 39.99' />

                    <Card img={ps4I6} price='U$D 39.99' />

                    <Card img={ps4I5} price='U$D 39.99' />

                    <Card img={ps4I3} price='U$D 39.99' />

                    <Card img={ps4I7} price='U$D 39.99' />

                    <Card img={ps4I9} price='U$D 39.99' />

                </ul>
                <button className="carrusel-arrow carrusel-next" id="right" data-button="button-next">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path fill="currentColor"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                        </path>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Ps4Section