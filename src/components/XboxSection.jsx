import React from 'react'
import Card from '../subComponents/Card';
import XbxI1 from '../images/xbox-riders.jpg';
import XbxI2 from '../images/xbox-1.jpg';
import XbxI3 from '../images/xbox-3.jpg';
import XbxI4 from '../images/xbox-7.jpg';
import XbxI5 from '../images/xbox-4.jpg';
import XbxI6 from '../images/xbox-5.jpg';
import XbxI7 from '../images/xbox-2.jpg';
import XbxI8 from '../images/xbox-6.jpg';
import XbxI9 from '../images/xbox-8.jpg';
import XbxI10 from '../images/xbox-9.jpg';
import XbxHov from '../images/RidersX.png';
import XbxHov1 from '../images/Xelden.png';
import XbxHov2 from '../images/Xsoulstice.png';
import XbxHov3 from '../images/Xhalo.png';


export const XboxSection = () => {
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

                    <Card img={XbxI1} imgS={XbxHov} price={'U$D 39.99'} />

                    <Card img={XbxI2} imgS={XbxHov1} price={'U$D 59.99'} />

                    <Card img={XbxI3} imgS={XbxHov3} price={'U$D 69.99'} />

                    <Card img={XbxI4} imgS={XbxHov2} price={'U$D 59.99'} />

                    <Card img={XbxI5} price={'U$D 39.99'} />

                    <Card img={XbxI6} price={'U$D 39.99'} />

                    <Card img={XbxI7} price={'U$D 39.99'} />

                    <Card img={XbxI8} price={'U$D 39.99'} />

                    <Card img={XbxI9} price={'U$D 39.99'} />

                    <Card img={XbxI10} price={'U$D 39.99'} />

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

export default XboxSection